## Twitter Bootstrap Toggle Buttons

[![LICENSE](https://img.shields.io/badge/release-0.0.1-blue.svg?style=flat)](https://github.com/Fincallorca/twbs-alert-overlay/tree/0.0.1)
[![LICENSE](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)
[![https://jquery.com/](https://img.shields.io/badge/jQuery-3.1.1-red.svg?style=flat)](https://jquery.com/)
[![https://v4-alpha.getbootstrap.com/](https://img.shields.io/badge/Bootstrap-4.0.0--alpha6-red.svg?style=flat)](https://v4-alpha.getbootstrap.com/)

This is a small javascript snippet to use [Bootstrap Button Groups](https://v4-alpha.getbootstrap.com/components/button-group/) for toggle buttons.
 
### Integrations

Download the code from GitHub and copy the dist directory to your project.

Include the following lines of code in the `<head>` section of your HTML.

```html
<script src="path/to/jquery.twbs-toggle-buttons.min.js"></script>
```

### The basics

```html
<div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn active" id="amount-passengers-auto" role="button">ja</label>
    <label class="btn" data-twbs-toggle-buttons-class-active="btn-danger" role="button">nein</label>
</div>
<script>
    $(".btn-group-toggle").twbsToggleButtons();
</script>
```

### Options

TODO

allowNone

https://jsfiddle.net/ysq84yj6/


#### btnSelector

The default selector of all buttons is `[role="button"]`.
