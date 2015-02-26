// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
    var url = tab.url;
    var replaced_url = "";

	chrome.storage.sync.get({replaceText: ".ezproxy.library.ubc.ca", comChecked: true, caChecked: true, orgChecked: true, replaceChecked: true}, function(items) {
    var replacing_text =  items.replaceText;
    if (items.comChecked) {
    	if (items.replaceChecked)
    		replaced_url = url.replace(".com", ".com" + replacing_text);
    	else
    		replaced_url = url.replace(".com", replacing_text);
    }
    if (replaced_url == url && items.caChecked) {
    	if (items.replaceChecked)
    		replaced_url = url.replace(".ca", ".ca" + replacing_text);
    	else
    		replaced_url = url.replace(".ca", replacing_text);
    }
    if (replaced_url == url && items.orgChecked) {
    	if (items.replaceChecked)
    		replaced_url = url.replace(".org", ".org" + replacing_text);
    	else
    		replaced_url = url.replace(".org", replacing_text);
    } 

    console.log("Output:", replaced_url);
    chrome.tabs.update(null, {url:replaced_url});
  });

    
    console.assert(typeof url == 'string', 'tab.url should be a string');

    //callback(url); //Don't need to do this I think?
});

function replace_text()
{

}
