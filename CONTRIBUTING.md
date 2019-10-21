# Contributing to Twitter Bootstrap Toggle Buttons

Before you publish a new release/tag, be sure to update the dist files according to the
following description.

## Table of Contents

1. [Prepare All Files](#prepare-all-files)
   1. [TwbsToggleButtons.js](#twbstogglebuttonsjs)
   2. [CHANGELOG.md](#changelogmd)
2. [Generate Dist Files](#generate-dist-files)
   1. [Compile Assets With Google Closure Compiler](#compile-assets-with-google-closure-compiler)

## Prepare All Files

:warning: The changes in the following tow files are obligatory!

### TwbsToggleButtons.js

Change the release version to the next tag in the header comment of file [PROJECT_DIR/src/js/TwbsToggleButtons.js](src/js/TwbsToggleButtons.js).

This line is necessary to display the release tag in the compiled dist files. 

Example: Change
```js
/** @preserve Twitter Bootstrap Toogle Buttons 0.0.3
```
to
```js
/** @preserve Twitter Bootstrap Toogle Buttons 0.0.4
```

### CHANGELOG.md

Change `[Unreleased]` to the next release tag and add all changes in file [PROJECT_DIR/CHANGELOG.md](CHANGELOG.md).

The format is based on [Keep a Changelog](http://keepachangelog.com/). 

```markdown
## [0.0.2] - 2017-05-11

### Added

* Added new Event `twbsToggleButtons:activate` to get new activated button **after** the toggle/cklick.
```

Add a new `[Unreleased]` section in the top.


## Generate Dist Files

The dist files are a collection of all **packed** and **minified** assets (javascript an d css files).

You can build these files on many different ways, i.e. using [gruntjs](https://gruntjs.com/),
[webpack](https://webpack.js.org/), etc.
But As long as there are only two depended javascript files, it is totally sufficient
to create the dist files with the help of the [Google Closure Compiler](https://developers.google.com/closure/compiler/).

### Compile Assets With Google Closure Compiler

The [Google Closure Compiler](https://developers.google.com/closure/compiler/) requires the
[Java Runtime Edition](https://www.java.com/en/) to run locally on your system.

Install Java and download the closure compiler into the [PROJECT_DIR/bin](bin) directory.

:warning: All files within the [PROJECT_DIR/bin](bin) directory will be ignored by the [PROJECT_DIR/.gitignore](.gitignore)
file and thus not be added to the repository.

Run the closure compiler and add both javascript files.

```bash
java -jar bin/closure-compiler-v20190709.jar \
  --js src/js/TwbsToggleButtons.js \
  --js src/js/jquery.twbs-toggle-buttons.js \
  --js_output_file dist/jquery.twbs-toggle-buttons.min.js
```