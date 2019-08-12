# Contributing to Twitter Bootstrap Toggle Buttons

## Table of Contents

* [Create a Release](#create-a-release)
  * [Generate Dist Files](#generate-dist-files)
    * [Compile Assets With Google Closure Compiler](#compile-assets-with-google-closure-compiler)


## Create a Release

Before you publish a new release/tag, be sure to update the dist files according to the
following description.
 
### Generating Dist Files

The dist files are a collection of all **packed** and **minified** assets (javascript an d css files).

You can build these files on many different ways, i.e. using [gruntjs](https://gruntjs.com/),
[webpack](https://webpack.js.org/), etc.
But As long as there are only two depended javascript files, it is totally sufficient
to create the dist files with the help of the [Google Closure Compiler](https://developers.google.com/closure/compiler/).

#### Compile Assets With Google Closure Compiler

The [Google Closure Compiler](https://developers.google.com/closure/compiler/) requires the
[Java Runtime Edition](https://www.java.com/en/) to run locally on your system.

Install Java and download the closure compiler into the [PROJECT_DIR/bin](bin) directory.

:Attention: All files within the [PROJECT_DIR/bin](bin) directory will be ignored by the [PROJECT_DIR/.gitignore](.gitignore)
file and thus not be added to the repository.

Run the closure compiler and add both javascript files.

```bash
java -jar bin/closure-compiler-v20190709.jar \
  --js src/js/TwbsToggleButtons.js \
  --js src/js/jquery.twbs-toggle-buttons.js \
  --js_output_file dist/jquery.twbs-toggle-buttons.min.js
```