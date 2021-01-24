chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "https://sci-hub.se/" + tab.url });
});
