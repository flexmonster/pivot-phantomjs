# Exporting from Flexmonster Pivot Table and Charts component on the server without using a browser
[![Flexmonster Pivot table component](https://s3.amazonaws.com/flexmonster/github/fm-github-cover.png)](http://flexmonster.com)
Website: www.flexmonster.com

This repository holds the sample of how to export from Flexmonster Pivot Table and Charts component on the server without using a browser by means of PhantomJS.

PhantomJS can be downloaded from here: http://phantomjs.org/download.html

The sample includes:
- Script file `pivot.js` for PhantomJS. Usage from the command line: `phantomjs pivot.js`.
- Pivot component itself with necessary API calls for an export generation in the `index.html` file.
- Very simple `save.php` sample for generated files saving.
