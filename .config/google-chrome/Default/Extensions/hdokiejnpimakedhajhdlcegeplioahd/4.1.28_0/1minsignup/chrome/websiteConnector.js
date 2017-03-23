chrome.runtime.onMessage.addListener(function (request) {
    request.fromExtension = true;
    window.postMessage(request, 'https://1min-ui-prod.service.lastpass.com');
});
window.addEventListener('message', function (message) {
    if (!message.data.fromExtension) {
        chrome.runtime.sendMessage(message.data, function (response) {

        });
    }
});