// register
Vue.component('vue-frame', {
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    text: {
      type: String,
      required: true
    },
    frame: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {}
  },
  mounted: function () {},
  methods: {
    cargariframe: function () {
      //console.log("Iframe.......", this.url, this.frame);
      var iframe = document.getElementById(this.frame);
      iframe.src = this.url;
      iframe.onload = function () {
        console.log("iframe cargado...")
      }
    }
  },
  template: `<a v-on:click="cargariframe()">{{text}}</a>`
})

// create a root instance
new Vue({
  name: 'vue-frame',
  el: '#vue-frame'
})