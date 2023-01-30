# React library adding Three.js support


Main element - `<Canvas></Canvas>`. Everything related to Three.js should be inside of this element.
Only casual `ReactElement` is supported as a child of Canvas.
`null` or `undefined` can be used to conditionally render some element:
```js
<Canvas>
    {isVisible ? <mesh></mesh> : null}
</Canvas>
```