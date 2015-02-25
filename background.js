// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
    var url = tab.url;
    
    var replaced_url = url.replace(".com", ".ezproxy.library.ubc.ca");
    if (replaced_url == url)
      replaced_url = replaced_url.replace(".org", ".ezproxy.library.ubc.ca");
    if (replaced_url == url)
      replaced_url = replaced_url.replace(".ca", ".ezproxy.library.ubc.ca");

    console.log("Output: ", replaced_url);
    chrome.tabs.update(null, {url:replaced_url});
    console.assert(typeof url == 'string', 'tab.url should be a string');

    //callback(url); //Don't need to do this I think?
});