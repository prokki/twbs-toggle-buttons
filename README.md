## Twitter Bootstrap Toggle Buttons

[![LICENSE](https://img.shields.io/badge/release-0.0.3-blue.svg?style=flat)](https://github.com/prokki/twbs-toggle-buttons/releases/tag/0.0.3)
[![Packagist](https://img.shields.io/badge/Packagist-0.0.3-blue.svg?style=flat)](https://packagist.org/packages/prokki/twbs-toggle-buttons)
[![LICENSE](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)
[![https://jquery.com/](https://img.shields.io/badge/jQuery-3.1.1-red.svg?style=flat)](https://jquery.com/)
[![https://getbootstrap.com/docs/4.3/](https://img.shields.io/badge/Bootstrap-4.3-red.svg?style=flat)](https://getbootstrap.com/docs/4.3/)

This is a small javascript snippet extending the [Bootstrap Button Groups](https://getbootstrap.com/docs/4.3/components/button-group/) to use the toggle buttons as radio buttons or checkboxes.

Have a look at [jsfiddle](https://jsfiddle.net/prokki/tccew78a/).

### Table of Contents

* [Integrations](#integrations)
* [The Basics](#the-basics)
* [Options](#options)
  * [twbsBtnSelector](#twbsbtnselector)
  * [classActive](#classactive)
  * [classInctive](#classinactive)
* [Events](#events)  
  * [Click Event](#click-event)
  * [twbsToggleButtons:activate Event](#twbstogglebuttonsactivate-event)  
* [Tricks and Tips](#tricks-and-tips)
  * [Checkboxes or Radio Buttons](#checkboxes-or-radio-buttons)
  * [Required Radio Group](#required-radio-group)
  * [Overwrite classActive](#overwrite-classactive)

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
    <div class="btn active" role="button">
        <input type="radio" name="options" value="1" required="required">yes 1
    </div>
    <div class="btn active" role="button">
        <input type="radio" name="options" value="2">yes 2
    </div>
    <div class="btn" role="button">
        <input type="radio" name="options" value="0">no
    </div>
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
    <div class="btn" required="required">yes</div>
    <div class="btn">no</div>
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

### Events

To avoid problems with the order of executing click events on the twbs-toggle-buttons you can use
two event types to handle events.

#### Click Event

The `click` event is fired on the button.

**:exclamation: Be careful to get the right state of the button!** To get the state after button toggling use event
[twbsToggleButtons:activate Event](#twbstogglebuttonsactivate-event).

```javascript
$(".btn-group-toggle").find("[role='button']").on("click", function (e)
{
    console.log(e);
});
```

#### twbsToggleButtons:activate Event

This event is fired after the state of the button getting activated was changed.

```javascript
$(".btn-group-toggle").find("[role='button']").on("twbsToggleButtons:activate", function (e)
{
    console.log(e);
});
```

### Tricks and Tips

#### Checkboxes or Radio Buttons

```html
<label class="control-label">Choose your documents!</label>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
    <div class="btn active" role="button">
        <input type="checkbox" name="options[]" value="1">Document 1
    </div>
    <div class="btn active" role="button">
        <input type="checkbox" name="options[]" value="2">Document 2
    </div>
    <div class="btn" role="button">
        <input type="checkbox" name="options[]" value="3">Document 3
    </div>
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
    <div class="btn active" role="button">
        <input type="radio" name="options" value="1" required="required">yes
    </label>
    <div class="btn active" role="button">
        <input type="radio" name="options" value="0" data-twbs-toggle-buttons-class-active="btn-danger">no
    </label>
</div>
```
