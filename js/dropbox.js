
var client = new Dropbox.Client({ key: '53zuip3cnv6k1c7' });
client.authenticate(function () {
    client.writeFile('data.txt', 'Hello, World!', function () {
        alert('File written!');
    });
});
