client = new Dropbox.Client({key:"53zuip3cnv6k1c7"});

// Try to finish OAuth authorization. client.authenticate({interactive: false},function (error) {
  if (error) {
    alert('Authentication error: ' + error);
  }
});

if (client.isAuthenticated()) {
  // Client is authenticated. Display UI.
}
