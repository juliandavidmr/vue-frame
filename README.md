# Vue-frame

> A simple component Vue 2.0 for prototyping interfaces with iframes.

### Usage

This is a project for [vue](https://github.com/vuejs).

```html
<div id="vue-frame">
   <vue-frame text="VueJS" url="https://vuejs.org" frame="myframe" type="button" class="form-control"></vue-frame>
   <vue-frame text="Api Vue" url="https://vuejs.org/v2/api" frame="myframe" type="a"></vue-frame>
   <br />

   <iframe id="myframe" width="800"></iframe>
</div>

<script src="/dist/vue-frame.js"></script>
```

The rendered elements look like this:

<img src="https://raw.githubusercontent.com/juliandavidmr/vue-frame/master/docs/gif.gif"/>

### PropTypes

| Prop  | Desc          | Type  | Default | Is Required |
| ----- | ------------- | ----- | ------- | ------ |
| `class` | Custom class to add to the **component** | `string` |  |  |
| `url` | Custom url that the component will load | `string` |  | ✅ |
| `text` | Custom text | `string` |  | ✅ |
| `frame` | Iframe element ID | `string` | | ✅ |
| `type` | Name of the HTML tag to render | `string` | `a` | |

#### Example
```html
<vue-frame text="VueJS" url="https://juliandavidmr.github.io" frame="idframe" type="div" class="form-control"></vue-frame>
```

#### Use CDN
```html
<script src="https://unpkg.com/vue-frame@1.0.3/dist/vue-frame.js"></script>
```

### Development

|Command|Description|
|---|---|
|npm run build|Build|
|npm run dev|Open browser dev|

[**Contributing**](./CONTRIBUTING.md)

### License

MIT [@juliandavidmr](https://github.com/juliandavidmr)