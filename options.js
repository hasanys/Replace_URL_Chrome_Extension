// Saves options to chrome.storage.sync.
function save_options() {
  var text = document.getElementById('replace').value;
  var com_checked = document.getElementById('com').checked;
  var ca_checked = document.getElementById('ca').checked;
  var org_checked = document.getElementById('org').checked;
  var replace_checked = document.getElementById('full').checked;

  chrome.storage.sync.set({
    replaceText: text,
    comChecked: com_checked,
    caChecked: ca_checked,
    orgChecked: org_checked,
    replaceChecked: replaceChecked
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function loadOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    replaceText: "text",
    comChecked: true,
    caChecked: true,
    orgChecked: true,
    replaceChecked: true
  }, function(items) {
    document.getElementById('replace').value = items.replaceText;
    document.getElementById('com').checked = items.comChecked;
    document.getElementById('ca').checked = items.caChecked;
    document.getElementById('org').checked = items.orgChecked;
    document.getElementById('full').checked = items.replaceChecked;

  });
}
//document.addEventListener('DOMContentLoaded', restore_options);
//document.getElementById('save').addEventListener('click', save_options);