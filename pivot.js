var page = require('webpage').create();
var system = require('system');

page.viewportSize = { width: 800, height: 600 };
page.open('index.html', function(status) {
    if (status === "success") {
        console.log("Page loaded");
        setTimeout(function() {
            phantom.exit();
        }, 10000)
    } else {
        console.log("Error:", status);
        phantom.exit();
    }
});
