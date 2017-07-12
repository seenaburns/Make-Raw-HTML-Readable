// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: '\
      document.body.style.margin="0 auto";\
      document.body.style.maxWidth="800px";\
      document.body.style.padding="50px 0px";\
    '
  });
});
