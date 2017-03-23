var EBATES = EBATES || {};
var Scraper = function (document, domain) {
	var asin;
	var bkPageVersion;
	var itemData = null;
	var pageArgs;
	var maxRequestLength = 4096;

	function getVisibleText(node) {
		if (node.nodeType === 3) {
			return node.textContent;
		} else {
			if (node && node.offsetHeight && node.offsetWidth) {
				var text = '';
				for (var i = 0; i < node.childNodes.length; i++)
					text += getVisibleText(node.childNodes[i]);
				return trimText(text);
			} else {
				return '';
			}
		}
	}

	var trimText = function (text) {
		if (text) {
			return text.replace(/\s\s+|[\r\n]+/g, ' ').trim();	
		}
	};

	var PageScraper = function () {
		var pageScraper = this;
		
		this.itemData = {imageArray:[]};
		this.parseVendorData(this.itemData);
		this.parseSchemaData(this.itemData);
		this.parseOpenGraphData(this.itemData);
		this.parseGoogleCheckoutVendorData(this.itemData);
		this.parseOpenCartData(this.itemData);
		this.itemData = this.getGenericItemData(this.itemData);

	};

	PageScraper.prototype.extract = function () {
		var itemData = this.itemData;
		var resultItem = {
			url: "",
			asin: "",
			title: "",
			price: "",
			originalPrice: "",
			currency: "",
			version: "",
			bannerImage: "",
			quantity: 1,
			description: "",
			brand: "",
			breadcrumb: "",
			imageURLs: []
		};
		if (!itemData) {
			throw new Error("Scrape result is undefined!");
		}
		if (itemData.url) {
			resultItem.url = itemData.url.indexOf('/') === 0 ? (location.origin + itemData.url) : itemData.url;
		} 
		if (itemData.title) {
			resultItem.title = itemData.title;
		}
		if (itemData.sku) {
			resultItem.sku = itemData.sku;
		}
		if (itemData.currency) {
			resultItem.currency = itemData.currency.replace('USD', '$');
		}
		if (itemData.price) {
			resultItem.price = itemData.price.toString().replace('\.00', '').replace('$', '');
		} else {
			resultItem.price = resultItem.currency;
		}
		if (itemData.version) {
			resultItem.version = itemData.version;
		}
		if (itemData.bannerImage) {
			resultItem.bannerImage = itemData.bannerImage;
		}
		if (itemData.description) {
			resultItem.description = itemData.description.slice(0, 100);
		}
		if (itemData.brand) {
			resultItem.brand = itemData.brand;
		}
		if (itemData.imageArray && Array.isArray(itemData.imageArray) && itemData.imageArray.length > 0) {
			var length = itemData.imageArray.length;
			for (var index = 0; index < length; index++) {
				var image = {
					src: null,
					height: null,
					width: null,
					id: null
				};
				if (itemData.imageArray[index].width < 100) {
					continue;
				}
				if (itemData.imageArray[index].src) {
					image.src = itemData.imageArray[index].src;
				}
				if (itemData.imageArray[index].height) {
					image.height = itemData.imageArray[index].height;
				}
				if (itemData.imageArray[index].width) {
					image.width = itemData.imageArray[index].width;
				}
				if (itemData.imageArray[index].id) {
					image.id = itemData.imageArray[index].id;
				}
				resultItem.imageURLs.push(image);
			}
		}
		if (itemData.breadcrumb) {
			resultItem.breadcrumb = itemData.breadcrumb;
		}

		return resultItem;
	};

	PageScraper.prototype.getGenericItemData = function (itemData) {
		if (!itemData.title) {
			itemData.title = this.getTitle();
		}

		if (!itemData.price) {
			itemData.price = this.getPrice();
		}

		if (!itemData.currency) {
			itemData.currency = '$';
		}

		if (!itemData.description) {
			itemData.description = this.getDescription();
		}

		if (!itemData.sku) {
			itemData.sku = this.getProductID();
		}

		if (!itemData.brand) {
			itemData.brand = this.getBrand();
		}

		if (!itemData.breadcrumb) {
			itemData.breadcrumb = this.getBreadcrumb();
		}

		if (!itemData.url) {
			var canonical = document.querySelector('[rel="canonical"]');
			if (canonical) {
				itemData.url = canonical.getAttribute('href');
			} else {
				itemData.url = location.href;
			}
		}

		if (itemData.imageArray.length < 2) {
			itemData.imageArray = this.getGenericImageData(itemData);
		}
		return itemData;
	};

	PageScraper.prototype.getDescription = function () {
		var descriptionNode = document.querySelector('[itemprop=description]');
		if (descriptionNode) {
			return trimText(descriptionNode.textContent);
		}
		
		descriptionNode = document.querySelector('.product-info');
		if (descriptionNode) {
			return trimText(descriptionNode.textContent);
		}
	};

	PageScraper.prototype.getBrand = function () {
		var brandNode = document.querySelector('[itemprop="brand"]');
		if (brandNode) {
			return trimText(brandNode.textContent);
		}
	};

	PageScraper.prototype.getProductID = function () {
		var node = document.querySelector('[itemprop=productID]');
		if (node) {
			return trimText(node.getAttribute('content'));
		}
		node = document.querySelector('#sku-value');
		if (node) {
			return trimText(node.getAttribute('content'));
		}
	};

	PageScraper.prototype.getBreadcrumb = function () {
		var node = document.querySelector('[itemprop=breadcrumb]');
		if (node) {
			return trimText(node.getAttribute('content'));
		}
	};

	PageScraper.prototype.getPrice = function () {
		var startTime = new Date().getTime();
		var nodes = [];
		var nonZeroRe = /[1-9]/;
		var priceFormatRe = /((?:R?\$|USD|\&pound\;|\&\#163\;|\&\#xa3\;|\u00A3|\&yen\;|\uFFE5|\&\#165\;|\&\#xa5\;|\u00A5|eur|\&\#8364\;|\&\#x20ac\;)\s*\d[0-9\,\.]*)/gi;
		var textNodeRe = /textnode/i;
		var emRe = /em/;
		var priceRangeRe = /^(\s|to|\d|\.|\$|\-|,)+$/;
		var priceBonusRe = /club|total|price|sale|now|brightred/i;
		var outOfStockRe = /soldout|currentlyunavailable|outofstock/i;
		var tagRe = /^(h1|h2|h3|b|strong|sale)$/i;
		var anchorTagRe = /^a$/i;
		var penRe = /original|header|items|under|cart|more|nav|upsell/i;
		var last = "";
		var lastNode;
		var outOfStockIndex = -1;
		var foundPositivePriceBeforeOOSMsg = 0;
		var performOutOfStockCheck = function (domainStr) {
			var blacklist = new Array("toysrus.com", "babiesrus.com", "walmart.com");
			for (var i = 0; i < blacklist.length; i++) {
				var regex = new RegExp("^(?:www\.)?" + blacklist[i], "i");
				if (regex.test(domainStr)) {
					return false;
				}
			}
			return true;
		};
		var getParents = function (node) {
			var parents = [];
			var traverse = node;
			while (traverse.parentNode) {
				parents.push(traverse.parentNode);
				traverse = traverse.parentNode;
			}
			return parents;
		};
		var findMutualParent = function (first, second) {
			var firstParents = getParents(first);
			var secondParents = getParents(second);
			for (var i = 0; i < firstParents.length; i++) {
				for (var j = 0; j < secondParents.length; j++) {
					if (firstParents[i] === secondParents[j]) {
						return firstParents[i];
					}
				}
			}
			return undefined;
		};
		var getStyleFunc = function (node) {
			if (document.defaultView && document.defaultView.getComputedStyle) {
				var computedStyle = document.defaultView.getComputedStyle(node, null);
				return function (propertyName) {
					return computedStyle.getPropertyValue(propertyName);
				};
			} else {
				return function (propertyName) {
					var mapper = {
						"font-size": "fontSize",
						"font-weight": "fontWeight",
						"text-decoration": "textDecoration"
					};
					if (node.currentStyle) {
						return node.currentStyle[mapper[propertyName] ? mapper[propertyName] : propertyName];
					}
				};
			}
		};
		var getWalker = function () {
			if (document.createTreeWalker) {
				var filter = {
					acceptNode: function (node) {
						return NodeFilter.FILTER_ACCEPT;
					},
					FILTER_ACCEPT: 1,
					FILTER_REJECT: 2,
					FILTER_SKIP: 3,
					SHOW_ELEMENT: 1,
					SHOW_ATTRIBUTE: 2,
					SHOW_TEXT: 4,
					SHOW_CDATA_SECTION: 8,
					SHOW_ENTITY_REFERENCE: 16,
					SHOW_ENTITY: 32,
					SHOW_PROCESSING_INSTRUCTION: 64,
					SHOW_COMMENT: 128,
					SHOW_DOCUMENT: 256,
					SHOW_DOCUMENT_TYPE: 512,
					SHOW_DOCUMENT_FRAGMENT: 1024,
					SHOW_NOTATION: 2048,
					SHOW_ALL: 4294967295
				};
				return document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, filter, false);
			} else {
				return {
					q: [],
					intialized: 0,
					currentNode: undefined,
					nextNode: function () {
						if (!this.initialized) {
							this.q.push(document.body);
							this.initialized = true;
						}
						while (this.q.length) {
							var working = this.q.pop();
							if (working.nodeType == 3) {
								this.currentNode = working;
								return true;
							} else if (working.childNodes) {
								if (working.style && (working.style.visibility == "hidden" || working.style.display == "none")) {
									continue;
								}
								var children = new Array(working.childNodes.length);
								for (var i = 0; i < working.childNodes.length; i++) {
									children[i] = working.childNodes[i];
								}
								children.reverse();
								this.q = this.q.concat(children);
							}
						}
						return false;
					}
				};
			}
		};
		var getFontSizePx = function (styleFunc) {
			var fontSize = styleFunc("font-size") || "";
			var sizeFactor = emRe.test(fontSize) ? 16 : 1;
			fontSize = fontSize.replace(/px|em|pt/, "");
			fontSize -= 0;
			if (!isNaN(fontSize)) {
				return fontSize * sizeFactor;
			} else {
				return 0;
			}
		};
		var getOffset = function (node) {
			var offset = node.offsetTop;
			while (node.offsetParent) {
				node = node.offsetParent;
				offset += node.offsetTop;
			}
			return offset;
		};
		var getScore = function (node, index) {
			var domNode = node.node;
			var styledNode = domNode.nodeType == 3 ? domNode.parentNode : domNode;
			var price = node.price;
			var content = "";
			if (domNode.nodeType == 3) {
				content = domNode.data;
			} else {
				content = domNode.innerText || domNode.textContent;
			}
			var score = 0;
			var getStyle = getStyleFunc(styledNode);
			var fontWeight = getStyle("font-weight");
			if (getStyle("font-weight") == "bold") {
				score += 1;
			}
			if (!styledNode.offsetWidth && !styledNode.offsetHeight || getStyle("visibility") == "hidden" || getStyle("display") == "none") {
				score -= 100;
			}
			var parentsChildrenContent = (domNode.parentNode.innerText || domNode.parentNode.textContent).replace(/\s/g, "");
			var strippedContent = content.replace(/\s+/g, "");
			if (!nonZeroRe.test(price)) {
				score -= 100;
			}
			var strippedContentNoPrice = strippedContent.replace(/price|our/ig, "");
			if (strippedContentNoPrice.length < price.length * 2 + 4) {
				score += 10;
			}
			if (priceRangeRe.test(strippedContent)) {
				score += 2;
			}
			if (price.indexOf(".") != -1) {
				score += 2;
			}
			score -= Math.abs(getOffset(styledNode) / 500);
			score += getFontSizePx(getStyle);
			if (penRe.test(content)) {
				score -= 4;
			}
			if (priceBonusRe.test(content)) {
				score++;
			}
			domNode = styledNode;
			var parentsWalked = 0;
			while (domNode !== null && domNode != document.body && parentsWalked++ < 4) {
				if (parentsWalked !== 0) {
					getStyle = getStyleFunc(domNode);
				}
				if (getStyle("text-decoration") == "line-through") {
					score -= 100;
				}
				for (var i = 0; i < domNode.childNodes.length; i++) {
					if (domNode.childNodes[i].nodeType == 3) {
						var tnode = domNode.childNodes[i];
						if (tnode.data) {
							if (priceBonusRe.test(tnode.data)) {
								score += 1;
							}
							if (penRe.test(tnode.data)) {
								score -= 1;
							}
						}
					}
				}
				if (anchorTagRe.test(domNode.tagName)) {
					score -= 5;
				}
				if (priceBonusRe.test(domNode.getAttribute('class') || domNode.getAttribute('className'))) {
					score += 1;
				}
				if (priceBonusRe.test(domNode.id)) {
					score += 1;
				}
				if (tagRe.test(domNode.tagName)) {
					score += 1;
				}
				if (penRe.test(domNode.tagName)) {
					score -= 1;
				}
				if (penRe.test(domNode.id)) {
					score -= 2;
				}
				if (penRe.test(domNode.getAttribute('class') || domNode.getAttribute('className'))) {
					score -= 2;
				}
				domNode = domNode.parentNode;
			}
			score -= content.length / 100;
			score -= index / 5;
			return score;
		};
		var walker = getWalker();
		while (walker.nextNode() && nodes.length < 100) {
			if (nodes.length % 100 === 0) {
				if (new Date().getTime() - startTime > 1500) {
					return;
				}
			}
			var node = walker.currentNode;
			var text = node.data.replace(/\s/g, "");
			priceFormatRe.lastIndex = 0;
			var priceMatch = text.match(priceFormatRe);
			if ((outOfStockIndex < 0) && outOfStockRe.test(text) && performOutOfStockCheck(domain)) {
				outOfStockIndex = nodes.length;
			}
			if (priceMatch) {
				if (priceMatch[0].match(/\.$/g) && walker.nextNode()) {
					var nextNode = walker.currentNode;
					if (nextNode && nextNode.data) {
						var nextPrice = nextNode.data.replace(/\s/g, "");
						if (nextPrice && isNaN(nextPrice)) {
							nextPrice = "00";
						}
						priceMatch[0] += nextPrice;
					}
				} else if (priceMatch[0].match(/\,$/g)) {
					priceMatch[0] = priceMatch[0].substring(0, priceMatch[0].length - 1);
				}
				nodes.push({
					"node": node,
					"price": priceMatch[0]
				});
				text = "";
			} else if (last !== "" && text !== "") {
				priceMatch = (last + text).match(priceFormatRe);
				if (priceMatch) {
					var mutual = findMutualParent(lastNode, node);
					nodes.push({ "node": mutual, "price": priceMatch[0] });
				}
			}
			lastNode = node;
			last = text;
		}
		var max;
		var maxNode;
		for (var i = 0; i < nodes.length; i++) {
			var score = getScore(nodes[i], i);
			if ((i < outOfStockIndex) && (score > 0)) {
				foundPositivePriceBeforeOOSMsg = 1;
			}
			if (max === undefined || score > max) {
				max = score;
				maxNode = nodes[i];
			}
		}
		if (maxNode && ((outOfStockIndex < 0) || foundPositivePriceBeforeOOSMsg)) {
			return maxNode.price;
		}
	};

	if (RegExp("^https?://www.google.com/shopping/").test(document.URL)) {
		var demoteSrc = new RegExp("maps.googleapis.com|googleapis\.com/.*=api\|smartmaps");
		var promoteId = new RegExp("^pp-altimg-init-main$");
		PageScraper.prototype.sortImage = function (a, b) {
			return (Number(promoteId.test(b.id)) - Number(promoteId.test(a.id))) || (Number(demoteSrc.test(a.src)) - Number(demoteSrc.test(b.src))) || Number(b.height * b.width) - Number(a.height * a.width);
		};
	} else {
		PageScraper.prototype.sortImage = function (a, b) {
			return (b.height * b.width) - (a.height * a.width);
		};
	}

	PageScraper.prototype.getGenericImageData = function (itemData) {
		var imgs = document.getElementsByTagName('img');
		var imageArray = itemData.imageArray;
		var srcs = {};
		for (var i = 0; i < imgs.length; i++) {
			var img = imgs[i];
			if (img.src.length > maxRequestLength) {
				continue;
			}
			if (img.src.length < 7 || typeof img.naturalWidth != 'undefined' && img.naturalWidth === 0 || !img.complete) {
				continue;
			}
			if (srcs[img.src]) {
				continue;
			}
			var pixelCount = img.height * img.width;
			var squareness = 1;
			if (img.id && img.id == '__uwl_img_copy__') {
				continue;
			}
			if (img.id && img.id == 'uwl_logo') {
				continue;
			}
			if (img.height > img.width && img.height > 0) {
				squareness = img.width / img.height;
			} else if (img.width > img.height && img.width > 0) {
				squareness = img.height / img.width;
			}
			if (pixelCount > 1000 && squareness > 0.5) {
				var imageIndex = imageArray.length;
				imageArray[imageIndex] = {};
				imageArray[imageIndex].generic = true;
				imageArray[imageIndex].src = img.src;
				imageArray[imageIndex].height = img.height;
				imageArray[imageIndex].width = img.width;
				imageArray[imageIndex].id = img.id;
				srcs[img.src] = 1;
			}
		}
		var sortFunc = function (a, b) {
			if (!a.generic && b.generic) {
				return -1;
			}
			if (a.generic && !b.generic) {
				return 1;
			}
			return PageScraper.prototype.sortImage(a, b);
		};
		imageArray.sort(sortFunc);
		return imageArray.length ? imageArray : null;
	};

	PageScraper.prototype.getElementsByClassName = function (className, elem) {
		elem = elem || document;
		var i, elems, node, matches = [];
		if (document.getElementsByClassName) {
			try {
				elems = elem.getElementsByClassName(className);
				for (i = 0; i < elems.length; i++) {
					matches.push(elems[i]);
				}
			}
			catch (err) {
				matches = this.getElementsByClassNameFallback(className, elem);
			}
			return matches;
		} else if (document.evaluate) {
			elems = document.evaluate(".//*[contains(concat(' ', @class, ' '),' " + className + " ')]", elem, null, 0, null);
			while (!!(node = elems.iterateNext())) {
				matches.push(node);
			}
			return matches;
		} else {
			matches = this.getElementsByClassNameFallback(className, elem);
			return matches;
		}
	};

	PageScraper.prototype.getElementsByClassNameFallback = function (className, elem) {
		var matches = [], elems = elem.getElementsByTagName("*"), regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
		for (var i = 0; i < elems.length; i++) {
			if (regex.test(elems[i].className)) {
				matches.push(elems[i]);
			}
		}
		return matches;
	};

	PageScraper.prototype.extractValue = function (elem) {
		if (elem.nodeName == "IMG" || elem.nodeName == "IFRAME") {
			return trimText(elem.src);
		} else if (elem.nodeName == "INPUT") {
			return trimText(elem.value);
		} else if (elem.nodeName == "META") {
			return trimText(elem.getAttribute('content'))
		} else if (elem.hasAttribute('itemprop') && elem.hasAttribute('content')) {
			return trimText(elem.getAttribute('content'));
		}
		return getVisibleText(elem);
	};

	PageScraper.prototype.parseVendorData = function (itemData) {
		if (domain.match(/^(?:www\.)?amazon.(com|es|fr|co.uk|cn|co.jp|ca|it|de|in)/)) {
			this.parseAmazonVendorData(itemData);
		} else if (domain.indexOf('newegg.com') >=0 ) {
			if (!itemData.description) {
				var descElem = document.querySelector(".grpArticle .grpBullet");
				if (descElem) {
					itemData.description = this.extractValue(descElem).replace(/\s\s+|[\r\n]+/g, ' ').trim();
				}
			}
		}
	};

	PageScraper.prototype.parseAmazonVendorData = function (itemData) {
		var i, j;
		try {
			itemData.title = document.title;
			if (typeof itemData.title != "string") {
				itemData.title = "";
			}
			try {
				var brandBlock = document.getElementById('brand');
				if (brandBlock) {
					itemData.brand = trimText(brandBlock.text);
				}
			} catch (e) {
			}
			try {
				var titleBlock = document.getElementById('productTitle');
				if (titleBlock) {
					itemData.title = titleBlock.innerText || titleBlock.textContent;
					if (itemData.title) {
						itemData.title = trimText(itemData.title);
					}
				}
			} catch (e) {
			}
			try {
				itemData.sku = document.handleBuy.ASIN.value;
			} catch (e) {
				try {
					var asinFieldNames = { ASIN: 1, asin: 1, o_asin: 1 };
					asinFieldNames['ASIN.0'] = 1;
					for (var asinField in asinFieldNames) {
						var asins = document.getElementsByName(asinField);
						if (asins.length) {
							itemData.asin = asins[0].value;
							break;
						}
					}
				} catch (e) {
				}
			}
			var checkTags = new Array("b", "span");
			if (document.evaluate) {
				for (i = 0; i < checkTags.length; i++) {
					var elts = document.evaluate("//div[@id='priceBlock']//table[@class='product']//td//" + checkTags[i] + "[contains(@class,'priceLarge') or contains(@class,'price') or contains(@class,'pa_price')]", document, null, 5, null);
					var elt = null;
					while (!!(elt = elts.iterateNext())) {
						if (elt.textContent) {
							itemData.price = elt.textContent;
							break;
						}
					}
					if (itemData.price)
						break;
				}
			} else {
				var priceBlock = document.getElementById('priceBlock');
				if (priceBlock) {
					var tables = priceBlock.getElementsByTagName('table');
					for (i = 0; i < tables.length; i++) {
						var tableClass = tables[i].getAttribute('class') || tables[i].getAttribute('className');
						if (tableClass == 'product') {
							for (j = 0; i < checkTags.length; j++) {
								var elements = tables[i].getElementsByTagName(checkTags[j]);
								for (i = 0; i < elements.length; i++) {
									var elementClass = elements[i].getAttribute('class') || elements[i].getAttribute('className');
									if (elementClass.indexOf('price') > -1 || elementClass.indexOf('priceLarge') > -1 || elementClass.indexOf('pa_price') > -1) {
										itemData.price = elements[i].innerHTML;
										break;
									}
								}
								if (itemData.price)
									break;
							}
						}
					}
				}
			}
			if (itemData && itemData.price) {
				var priceParts = itemData.price.split("-");
				if (priceParts[0]) {
					itemData.price = priceParts[0];
				}
			}
			if (itemData && !itemData.price) {
				itemData.price = this.getPrice();
			}
			if (!itemData.breadcrumb) {
				var childNodes = document.getElementById('nav-subnav').childNodes;
				var breadcrumb = [];
				for (i=0; i<childNodes.length; i++) if (childNodes[i].text) {
					breadcrumb.push(childNodes[i].text);
				}
				if (breadcrumb) {
					itemData.breadcrumb = JSON.stringify(breadcrumb).replace(/\[|\]|\"/gi,'').replace(/\,/gi,' - ');
				}
				
			}
			var imageCellNames = { prodImageCell: 1, fiona_intro_noflash: 1, productheader: 1, 'kib-ma-container-1': 1, 'center-12_feature_div': 1, holderMainImage: 1, 'main-image-outer-wrapper': 1, 'main-image-container': 1 };
			var selectedImage;
			for (var imageCell in imageCellNames) {
				var prodImageCell = document.getElementById(imageCell);
				if (prodImageCell) {
					var prodImages = prodImageCell.getElementsByTagName('img');
					if (prodImages.length) {
						var prodImageArray = new Array(prodImages.length);
						for (i = 0; i < prodImages.length; i++) {
							prodImageArray.push(prodImages[i]);
						}
						prodImageArray.sort(this.sortImage);
						selectedImage = prodImageArray[0];
						break;
					}
				}
			}
			if (selectedImage && selectedImage.src) {
				itemData.imageArray = [{
					"src": selectedImage.src,
					"height": selectedImage.height,
					"width": selectedImage.width
				}];
			} else {
				if (itemData && !itemData.asin) {
					this.getGenericImageData(itemData);
				}
			}
		} catch (e) {
		}
		if (!itemData.imageArray) {
			itemData.imageArray = [];
		}
		return itemData;
	};

	PageScraper.prototype.parseGoogleCheckoutVendorData = function (itemData) {
		var elems = this.getElementsByClassName("product");
		if (elems && elems[0]) {
			var prod = elems[0];
			var scrapedImage;
			if (!itemData.title) {
				var titleElem = this.getElementsByClassName("product-title", prod);
				if (titleElem && titleElem[0]) {
					itemData.title = this.extractValue(titleElem[0]);
				}
			}

			if (!itemData.description) {
				var descElem = this.getElementsByClassName("product-info", prod);
				if (descElem && descElem[0]) {
					itemData.description = this.extractValue(descElem[0]);
				}
			}

			if (!itemData.price) {
				var priceElem = this.getElementsByClassName("product-price", prod);
				if (priceElem && priceElem[0]) {
					itemData.price = this.extractValue(priceElem[0]);
				}
			}

			if (!itemData.brand) {
				var brandElem = this.getElementsByClassName("product-brand", prod);
				if (brandElem && brandElem[0]) {
					itemData.brand = this.extractValue(brandElem[0]);
				}
			}

			if (!itemData.url) {
				var urlElem = this.getElementsByClassName("product-url", prod);
				if (urlElem && urlElem[0]) {
					itemData.url = this.extractValue(urlElem[0]);
				}
			}

			var imgElems = this.getElementsByClassName("product-image", prod);
			for (var i = 0; i < imgElems.length; i++) {
				var imgSrc = this.extractValue(imgElems[0]);
				if (imgSrc) {
					itemData.imageArray.push({
						src: imgSrc
					});			
				}
			}
		}
		return itemData;
	};

	PageScraper.prototype.parseOpenCartData = function (itemData) {
		var elems = this.getElementsByClassName("product-page");
		if (elems && elems[0]) {
			var elem, prod = elems[0];
		
			if (!itemData.description) {
				elem = this.getElementsByClassName("product-short-description module", prod);
				if (elem && elem[0]) {
					itemData.description = this.extractValue(elem[0]);
				}
			}
			if (!itemData.description) {
				elem = this.getElementsByClassName("product-description", prod);
				if (elem && elem[0]) {
					itemData.description = this.extractValue(elem[0]);
				}
			}
		}
		return itemData;
	};

	PageScraper.prototype.parseSchemaData = function (itemData) {
		var prod = document.querySelector('[itemscope][itemtype="http://schema.org/Product"]');
		var crumbs = document.querySelector('[itemscope][itemtype="http://schema.org/BreadcrumbList"]');
		function findChildAll(selector, parent, strict) {
			var res = [], nodes = parent.querySelectorAll(selector);
			for (var i = 0; i < nodes.length; i++) {
				if ($(nodes[i]).closest('[itemtype]').get(0) === parent) {
					res.push(nodes[i]);
				} 
			} 
			if (res.length) {
				return res;
			} else if(!strict) {
				return nodes;
			}
		}
		function findChild(selector, parent, strict) {
			var nodes = parent.querySelectorAll(selector);
			for (var i = 0; i < nodes.length; i++) {
				if ($(nodes[i]).closest('[itemtype]').get(0) === parent) {
					return nodes[i];
				}
			}
			if (nodes.length && !strict) {
				return nodes[0];
			}
		}

		if (prod) {
			var itemscopes = prod.querySelectorAll('[itemscope]');
			var scrapedImage;
			var elem;
			if (!itemData.title) {
				var titleElem = findChild('[itemprop="name"]', prod);
				if (titleElem && titleElem) {
					itemData.title = this.extractValue(titleElem);
				}
			}
			if (!itemData.description) {
				elem = findChild('[itemprop="description"]', prod);
				if (elem) {
					itemData.description = this.extractValue(elem);
				}
			}
			if (!itemData.description) {
				elem = findChild('.itemDesc', prod);
				if (elem) {
					itemData.description = this.extractValue(elem);
				}
			}
			if (!itemData.sku) {
				elem = findChild('[itemprop="productID"],[itemprop="sku"]', prod);
				if (elem) {
					itemData.sku = this.extractValue(elem);
				}
			}
			if (!itemData.price) {
				elem = findChild('[itemprop="price"]', prod);
				if (elem) {
					itemData.price = this.extractValue(elem);
				}
			}
			if (!itemData.currency) {
				elem = findChild('[itemprop="priceCurrency"]', prod);
				if (elem) {
					itemData.currency = this.extractValue(elem);
				}
			}
			if (!itemData.url) {
				elem = findChild('[itemprop="url"]', prod, true);
				if (elem) {
					itemData.url = this.extractValue(elem);
				}
			}
			if (!itemData.brand) {
				elem = findChild('[itemprop="brand"]', prod);
				if (elem) {
					itemData.brand = this.extractValue(elem);
				}
			}
			if (!itemData.breadcrumb) {
				elem = findChild('[itemprop="breadcrumb"]', prod);
				if (elem) {
					itemData.breadcrumb = this.extractValue(elem);
				}
			}

			var imgElems = findChildAll('[itemprop="image"]', prod);
			for (var i = 0; i < imgElems.length; i++) {
				var imgSrc = this.extractValue(imgElems[0]);
				if (imgSrc) {
					itemData.imageArray.push({
						src: imgSrc
					});
				}
			}
		}
		if (crumbs) {
			var itemscopes = crumbs.querySelectorAll('[itemscope]');
			if (!itemData.breadcrumb) {
				var breadcrumblist = findChildAll('[itemprop="itemListElement"]', crumbs);
				var arrayofcrumbs = [];
				for (var i = 0; i < breadcrumblist.length; i++) {
					elem = findChild('[itemprop="name"]', breadcrumblist[i]);
					if (elem) {
						arrayofcrumbs.push(this.extractValue(elem));
					}
				}
				if (arrayofcrumbs) {
					itemData.breadcrumb = JSON.stringify(arrayofcrumbs).replace(/\[|\]|\"/gi,'').replace(/\,/gi,' - ');
				}
			}
		}
		return itemData;
	};

	PageScraper.prototype.parseOpenGraphData = function (itemData) {
		var prod = document.querySelector('meta[property="og:type"][content="Product"], meta[property="og:type"][content="product"]');
		if (prod) {
			var scrapedImage, elem;
			if (!itemData.title) {
				elem = document.querySelector('meta[property="og:title"]');
				if (elem) {
					itemData.title = this.extractValue(elem);
				}
			}

			if (!itemData.description) {
				elem = document.querySelector('meta[property="og:description"]');
				if (elem) {
					itemData.description = this.extractValue(elem);
				}
			}

			if (!itemData.price) {
				elem = document.querySelector('meta[property="og:typeof"]');
				if (elem) {
					itemData.price = this.extractValue(elem);
				}
			}

			if (!itemData.currency) {
				elem = document.querySelector('meta[property="product:price:currency"]');
				if (elem) {
					itemData.currency = this.extractValue(elem);
				}
			}

			if (!itemData.brand) {
				elem = document.querySelector('meta[property="product:brand:name"], meta[property="og:brand"]');
				if (elem) {
					itemData.brand = this.extractValue(elem);
				}
			}

			if (!itemData.url) {
				elem = document.querySelector('meta[property="og:url"]');
				if (elem) {
					var url = this.extractValue(elem);
					if (url && /^(http|\/)/.test(url)) {
						itemData.url = url;
					}
				}
			}

			var imgElem = document.querySelector('meta[property="og:image"]');
			if (imgElem) {
				var imgSrc = this.extractValue(imgElem);
				if (imgSrc.match(/\.(jpe?g|png)/))
				itemData.imageArray.push({
					src: imgSrc
				});
			}
		}
		return itemData;
	};

	PageScraper.prototype.getTitle = function () {
		var title = document.title;
		if (typeof title != "string") {
			return "";
		}
		return trimText(title);
	};
	return new PageScraper();
};