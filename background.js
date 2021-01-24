// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    // No tabs or host permissions needed!
    const newURL = "https://sci-hub.se/";
    const currUrl = tab.url;
    chrome.tabs.create({ url: newURL + currUrl });
});
