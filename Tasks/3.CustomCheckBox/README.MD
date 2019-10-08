# Create Custom CheckBox Component

Create a sample Custom CheckBox component

The checkbox can be checked and unchecked
User may active the component via space 
User may focus the item via tab component
Try to add role attribute

Basic html structure

```html
<html>

<head>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js"></script>
    <script src="main.js" defer></script>
</head>

<body>
    <custom-checkbox id="join-checkbox" role="checkbox" tabindex="0" aria-labelledby="howto-label-generated-0"></custom-checkbox>
</body>

</html>
```

ToDo item css

```css
:host {
    display: inline-block;
    background: url('../images/unchecked-checkbox.svg') no-repeat;
    background-size: contain;
    width: 24px;
    height: 24px;
}
:host([hidden]) {
    display: none;
}
:host([checked]) {
    background: url('../images/checked-checkbox.svg') no-repeat;
    background-size: contain;
}
:host([disabled]) {
    background:
    url('../images/unchecked-checkbox-disabled.svg') no-repeat;
    background-size: contain;
}
:host([checked][disabled]) {
    background:
    url('../images/checked-checkbox-disabled.svg') no-repeat;
    background-size: contain;
}
```