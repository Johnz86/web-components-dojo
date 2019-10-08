# Custom Paragraph Component

Create a custom component Header which will look like App-Bar

Default html structure is:

```html
<html>

    <head>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@atlaskit/css-reset@1.0.5/dist/bundle.css" />
        <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js"></script>
    </head>
    <body>

    </body>

</html>
```

Html component should contain

```html
<article contenteditable="">
    <h2>Sample Word count contenteditable article</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar sed justo sed viverra. Aliquam ac
        scelerisque tellus. Vivamus porttitor nunc vel nibh rutrum hendrerit. Donec viverra vestibulum pretium.
        Mauris at eros vitae ante pellentesque bibendum. Etiam et blandit purus, nec aliquam libero. Etiam leo
        felis, pulvinar et diam id, sagittis pulvinar diam. Nunc pellentesque rutrum sapien, sed faucibus urna
        sodales in. Sed tortor nisl, egestas nec egestas luctus, faucibus vitae purus. Ut elit nunc, pretium eget
        fermentum id, accumsan et velit. Sed mattis velit diam, a elementum nunc facilisis sit amet.</p>

    <p>Pellentesque ornare tellus sit amet massa tincidunt congue. Morbi cursus, tellus vitae pulvinar dictum, dui
        turpis faucibus ipsum, nec hendrerit augue nisi et enim. Curabitur felis metus, euismod et augue et, luctus
        dignissim metus. Mauris placerat tellus id efficitur ornare. Cras enim urna, vestibulum vel molestie vitae,
        mollis vitae eros. Sed lacinia scelerisque diam, a varius urna iaculis ut. Nam lacinia, velit consequat
        venenatis pellentesque, leo tortor porttitor est, sit amet accumsan ex lectus eget ipsum. Quisque luctus, ex
        ac fringilla tincidunt, risus mauris sagittis mauris, at iaculis mauris purus eget neque. Donec viverra in
        ex sed ullamcorper. In ac nisi vel enim accumsan feugiat et sed augue. Donec nisl metus, sollicitudin eu
        tempus a, scelerisque sed diam.</p>
</article>
```

> Create Custom html paragraph element that will be child of article
> Custom html paragraph will count the number of words in article
> Text will be for example ```Words: 215```
> Each time the list of words is changed recount the number of words

Tips
```js
function countWords(node) {
    const text = node.innerText || node.textContent;
    return text.split(/\s+/g).length;
}
```