# Use Flexmonster Pivot Table & Charts with PhantomJS
[![Flexmonster Pivot Table & Charts](https://cdn.flexmonster.com/landing.png)](https://flexmonster.com)
Website: www.flexmonster.com

### :warning: Note: since PhantomJS development [is suspended](https://github.com/ariya/phantomjs/issues/15344), we recommend using Puppeteer for exporting from Flexmonster without a browser. See the sample project: [Use Flexmonster with Puppeteer](https://github.com/flexmonster/pivot-puppeteer/).

This repository holds the sample of how to export from Flexmonster Pivot Table & Charts on the server without using a browser by means of [PhantomJS](http://phantomjs.org/).

PhantomJS can be downloaded from here: http://phantomjs.org/download.html

The sample includes:
- Script file `pivot.js` for PhantomJS. Usage from the command line: `phantomjs pivot.js`.
- The pivot table component itself with necessary API calls for an export generation in the `index.html` file.
- Very simple `save.php` sample for generated files saving.
