## Changes in Twitter Bootstrap Toggle Buttons

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

### [0.0.3] - 2019-07-29

### Fixed

* Workaround for checkbox buttons when using latest bootstrap (not alpha): Remove attribute `"aria-pressed"` and class `active` manually to deactivate a checkbox button.
* Workaround for radio and checkbox buttons when using latest bootstrap (not alpha): Add attribute `"aria-pressed"` and class `active` manually to activate a radio and checkbox button.

### [0.0.2] - 2017-05-11

#### Added

* Added new Event `twbsToggleButtons:activate` to get new activated button **after** the toggle/cklick.

#### Fixed

* Fixed avoid "aria-pressed" set to false on multiple clicks on an radio button (e.stopPropagation).

### [0.0.1] - 2017-05-10

#### Fixed

* Allow bubbling through the DOM on click event by returning `true` instead of `false`.
* Workaround for radio buttons: Remove attribute `"aria-pressed"` and class `active` manually to deactivate a radio button.

### [0.0.0] - 2017-05-08

#### Added
* First version