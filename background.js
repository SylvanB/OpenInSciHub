// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    // No tabs or host permissions needed!
    let newURL = "https://sci-hub.se/";
    let currUrl = tab.url;
    chrome.tabs.create({ url: newURL + currUrl });
});
