## Twitter Bootstrap Toggle Buttons

[![LICENSE](https://img.shields.io/badge/release-0.0.0-blue.svg?style=flat)](https://github.com/prokki/twbs-toggle-buttons/releases/tag/0.0.0)
[![Packagist](https://img.shields.io/badge/Packagist-0.0.0-blue.svg?style=flat)](https://packagist.org/packages/prokki/twbs-toggle-buttons)
[![LICENSE](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)
[![https://jquery.com/](https://img.shields.io/badge/jQuery-3.1.1-red.svg?style=flat)](https://jquery.com/)
[![https://v4-alpha.getbootstrap.com/](https://img.shields.io/badge/Bootstrap-4.0.0--alpha6-red.svg?style=flat)](https://v4-alpha.getbootstrap.com/)

This is a small javascript snippet to use [Bootstrap Button Groups](https://v4-alpha.getbootstrap.com/components/button-group/) for toggle buttons.

### Table of Contents

* [Demo](#demo)
* [Integrations](#integrations)
* [The Basics](#the-basics)
* [Options](#options)
  * [twbsBtnSelector](#twbsbtnselector)
  * [classActive](#classactive)
  * [classInctive](#classinactive)
* [Tricks and Tips](#tricks-and-tips)
  * [Checkboxes or Radio Buttons](#checkboxes-or-radio-buttons)
  * [Required Radio Group](#required-radio-group)
  * [Overwrite classActive](#overwrite-classactive)

### Demo

Have a look at [jsfiddle](https://jsfiddle.net/ysq84yj6/).

### Integrations

Download the code from GitHub and copy the dist directory to your project.

Include the following lines of code in the `<head>` section of your HTML.

```html
<script src="path/to/jquery.twbs-toggle-buttons.min.js"></script>
```

### The Basics

```html
<label class="control-label">Is it true?</label>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn active" role="button">
        <input type="radio" name="options" value="1" required="required">yes 1
    </label>
    <label class="btn active" role="button">
        <input type="radio" name="options" value="2">yes 2
    </label>
    <label class="btn" role="button">
        <input type="radio" name="options" value="0">no
    </label>
</div>
<script>
    $(".btn-group-toggle").twbsToggleButtons();
</script>
```

### Options

#### twbsBtnSelector
> default: `'[role="button"]'`

The default selector of all buttons is `[role="button"]`. To avoid this special html attribute you can change the option `twbsBtnSelector`, for instance to a class.

```html
<label class="control-label">Is it true?</label>
<div class="btn-group btn-group-toggle">
    <label class="btn" required="required">yes</label>
    <label class="btn">no</label>
</div>
<script>
    $(".btn-group-toggle").twbsToggleButtons({
        twbsBtnSelector: ".btn"
    });
</script>
```

#### classActive
> default: `'btn-success'`

To detect an optical difference between active and inactive toggle buttons the two options `classActive` and
`classInactive` are set to default bootstrap classes. Change the options and use other classes to make a
difference between both toggle states.

Hint: Use an array of classes to set multiple classes.

```javascript
$(".btn-group-toggle").twbsToggleButtons({
    classActive: "my-active-button",
    classInactive: ["my-inactive-button-1", "my-inactive-button-2"]
});
```

#### classInactive
> default: `'btn-secondary'`

See [classActive](#classActive)


### Tricks and Tips

#### Checkboxes or Radio Buttons

```html
<label class="control-label">Choose your documents!</label>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn active" role="button">
        <input type="checckbox" name="options" value="1">Document 1
    </label>
    <label class="btn active" role="button">
        <input type="checckbox" name="options" value="2">Document 2
    </label>
    <label class="btn" role="button">
        <input type="checckbox" name="options" value="3">Document 3
    </label>
</div>
```

#### Required Radio Group

If radio buttons are used, usually exactly one button must be active.

To allow a button group without any active button, dismiss the attribute `required` in the input fields.

#### Overwrite classActive

Sometimes it is useful to change the active class of single toggle button. To do so, add the tml data attribute `data-twbs-toggle-buttons-class-active`
with a corresponding class.

```html
<label class="control-label">Is it true?</label>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn active" role="button">
        <input type="radio" name="options" value="1" required="required">yes
    </label>
    <label class="btn active" role="button">
        <input type="radio" name="options" value="0" data-twbs-toggle-buttons-class-active="btn-danger">no
    </label>
</div>
```