# sourceview
Source View JQuery Plugin

The "Source View" JQuery Plugin will show a button "view source code" next to any element tagged with a class name that is 
referenced in the plugin init. 

Clicking on this button will show and hide the source code of the tagged elements HTML.

Classes for button css:
```
.btn
.showing
```
Class for source view container:
```
.sourceviewer
```
Example:
```javascript
<div class="viewsource">
  ...
</div>

$('.viewsource').SourceCodeView();
```
