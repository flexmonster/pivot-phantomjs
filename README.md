# Use Flexmonster Pivot Table & Charts with PhantomJS
[![Flexmonster Pivot Table & Charts](https://cdn.flexmonster.com/landing.png)](https://flexmonster.com)
Website: www.flexmonster.com

### :warning: Note: since PhantomJS development [is suspended](https://github.com/ariya/phantomjs/issues/15344), we recommend using Puppeteer for exporting from Flexmonster without a browser. See the sample project: [Use Flexmonster with Puppeteer](https://github.com/flexmonster/pivot-puppeteer/).

This repository contains a sample project demonstrating how to export from Flexmonster Pivot Table & Charts to a server without a browser using [PhantomJS](http://phantomjs.org/).

The sample project includes:
- `pivot.js` — a script file  for PhantomJS. Usage from the command line: `phantomjs pivot.js`.
- `index.html` — the pivot table component itself with API calls necessary for export.
- `save.php` — a very simple server to save the generated files.
