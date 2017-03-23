Handlebars.registerHelper('equal', function(v1) {
	var options = arguments[arguments.length - 1];
	for (var i = 1; i < arguments.length - 1; i++) {
		if (v1 === arguments[i]) {
			return options.fn(this);
		}
	}
	return options.inverse(this);
});
Handlebars.registerHelper('gt', function(v1, v2, options) {
	if (v1 > v2) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

Handlebars.registerHelper('sum', function() {
	var sum = arguments[0];
	for (var i=1; i < arguments.length -1; i++) {
		sum += arguments[i];
	}
	return sum;
});

Handlebars.registerHelper('format', function(sum, currency) {
	return accounting.formatMoney(sum, currency);
});

Handlebars.registerHelper('date', function(date, opt_format) {
	return moment(date).format((arguments.length > 2) ? opt_format : 'M/D/YYYY');
});

Handlebars.registerHelper('calendar', function(timestamp) {
	return moment(timestamp).calendar(null, {
		lastDay : '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: '[Next] dddd',
		lastWeek : '[last] dddd',
		nextWeek : 'dddd',
		sameElse : 'L'
	});
});

Handlebars.registerHelper('highlight', function(str, substr) {
	var rx = new RegExp(substr, 'i');
	return new Handlebars.SafeString(str.replace(rx, '<span class="highlight">' + str.match(rx) + '</span>'));
});

Handlebars.registerHelper('markup', function(str) {
	var rx1 = /([\d\.]+)%/g;
	var rx2 = /\$(\d+\.)(\d+)/g;
	if(rx1.test(str)){
		str = str.replace(rx1, '<span class="ebates-notification-cashback">\$1</span><sup>%</sup>');
	} else if(rx2.test(str)){
		str = str.replace(rx2, '<sup>$</sup><span class="ebates-notification-cashback">\$1</span><sup>\$2</sup>');
	}
	return new Handlebars.SafeString(str);
});

Handlebars.registerHelper('dateLessDays', function(date, days, options) {
	if (Math.floor(moment.duration(moment(date) - moment().startOf('day').add(1, 's')).asDays()) < days) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

Handlebars.registerHelper('daysFromNow', function(date) {
	var days = Math.floor(moment.duration(moment(date) - moment().startOf('day').add(1, 's')).asDays());
	switch (days) {
		case 0: return 'Expires Today';
		case 1: return 'Expires Tomorrow';
		default: return days > 0 ? (days + ' days left') : 'Expired';
	}
});

Handlebars.registerHelper('fromNow', function(date) {
	return moment(date).fromNow();
});
