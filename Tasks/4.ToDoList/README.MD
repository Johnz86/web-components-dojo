# Create a sample ToDo List

Create a sample ToDo List Component

> ToDo Item consists of remove button and text
> List existing ToDo Items 
> Add ToDo Item with user input
> Delete ToDo Item when clicked on remove button next to ToDo Text

Basic html structure

```html
<!DOCTYPE html>
<html>

<head>
  <title>Native Web Component Todo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
  <style>
    html,
    body {
      margin: 0;
      padding: 0;
    }

    #back {
      margin: 50px 0;
      display: block;
    }

    body {
      font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.4em;
      background: #f5f5f5;
      color: #4d4d4d;
      min-width: 230px;
      max-width: 550px;
      margin: 0 auto;
      font-weight: 300;
    }
  </style>
</head>

<body>
  <my-todo></my-todo>
  <script src="./src/main.js"></script>
</body>

</html>
```

ToDo item css

```css
:host {
    display: block;
}

li.item {
    font-size: 24px;
    display: block;
    position: relative;
    border-bottom: 1px solid #ededed;
}

li.item input {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 9px;
    bottom: 0;
    margin: auto 0;
    border: none;
    /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
}

li.item input:after {
    content: url('data:image/svg+xml;utf8,<svg%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20width%3D"40"%20height%3D"40"%20viewBox%3D"-10%20-18%20100%20135"><circle%20cx%3D"50"%20cy%3D"50"%20r%3D"50"%20fill%3D"none"%20stroke%3D"%23ededed"%20stroke-width%3D"3"/></svg>');
}

li.item input:checked:after {
    content: url('data:image/svg+xml;utf8,<svg%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20width%3D"40"%20height%3D"40"%20viewBox%3D"-10%20-18%20100%20135"><circle%20cx%3D"50"%20cy%3D"50"%20r%3D"50"%20fill%3D"none"%20stroke%3D"%23bddad5"%20stroke-width%3D"3"/><path%20fill%3D"%235dc2af"%20d%3D"M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z"/></svg>');
}

 li.item label {
    white-space: pre;
    word-break: break-word;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}

li.item.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
}

li.item button,
li.item input[type="checkbox"] {
    outline: none;
}

li.item button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
}

li.item .destroy {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
}

li.item .destroy:hover {
    color: #af5b5e;
}
```

ToDo item html

```html
<li class="item">
    <input type="checkbox">
    <label></label>
    <button class="destroy">x</button>
</li>
```

ToDo container css

```css
h1 {
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
}

section {
    background: #fff;
    margin: 30px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

#list-container {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid #e6e6e6;
}
```

ToDo container html

```html
<h1>Todos WC</h1>
<section>
    <todo-input></todo-input>
    <ul id="list-container"></ul>
</section>
```

ToDo Input html

```css
#new-todo-form {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
}

#new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    padding: 6px;
    border: 1px solid #CCC;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
}
```

ToDo input html

```html
<form id="new-todo-form">
    <input id="new-todo" type="text" placeholder="What needs to be done?" />
</form>
```
