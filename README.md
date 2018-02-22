# Vue-frame

[![Build Status](https://travis-ci.org/juliandavidmr/vue-frame.svg?branch=master)](https://travis-ci.org/juliandavidmr/vue-frame)
[![npm version](https://img.shields.io/npm/v/vue-frame.svg)](https://www.npmjs.com/package/vue-frame)
[![npm](https://img.shields.io/npm/dt/vue-frame.svg)](https://www.npmjs.com/package/vue-frame)
[![GitHub stars](https://img.shields.io/github/stars/juliandavidmr/vue-frame.svg?style=social&label=Star)](https://www.npmjs.com/package/vue-frame)

> A simple component Vue 2.x for prototyping interfaces with iframes.

## Install

Using **npm:**

```bash
npm install --save vue-frame
```

Using **yarn:**

```bash
yarn add vue-frame
```

Import

```js
import VueFrame from 'vue-frame'
export default {
  components: { VueFrame },
  data () {
    return { /*...*/ }
  },
  methods: { /*...*/ }
}
```

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

[![CURRENTLY RECORDING](https://raw.githubusercontent.com/juliandavidmr/vue-frame/master/docs/gif.gif)](https://github.com/juliandavidmr/vue-frame)

### PropTypes

| Prop  | Desc          | Type  | Default | Is Required |
| ----- | ------------- | ----- | ------- | ------ |
| `class` | Custom class to add to the **component** | `string` |  |  |
| `url` | Custom url that the component will load | `string` |  | ✅ |
| `text` | Custom text | `string` |  | ✅ |
| `frame` | Iframe element ID | `string` | | ✅ |
| `type` | Name of the HTML tag to render | `string` | `a` | |
| `default` | load site instantly mount the element | `boolean` | `false` | |

#### Example

```html
<vue-frame text="VueJS" url="https://juliandavidmr.github.io" frame="idframe" type="div" class="form-control"></vue-frame>
```

#### Use CDN

```html
<script src="https://unpkg.com/vue-frame@1.0.6/dist/vue-frame.js"></script>
```

See example with _cdn_ [index.html](./index_cdn.html)

### Development

|Command|Description|
|---|---|
|npm run build|Build|
|npm run dev|Open browser dev|

[**Contributing**](./CONTRIBUTING.md)

### License

MIT [@juliandavidmr](https://github.com/juliandavidmr)