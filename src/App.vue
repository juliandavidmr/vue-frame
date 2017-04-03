<script type="text/babel">
import Vue from 'vue';
export default Vue.component('vue-frame', {
  props: {
    url: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    frame: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'a'
    }
  },
  data: function () {
    return {}
  },
  mounted: function () {},
  methods: {
    loadIframe: function () {
      //console.log("Iframe.......", this.url, this.frame, this.type);
      var iframe = document.getElementById(this.frame);
      iframe.src = this.url;
      iframe.onload = function () {
        // console.log("iframe cargado...")
      }
    }
  },
  render: function (createElement) {
    return createElement(
      this.type, // tag name
      {
        // DOM properties
        domProps: {
          innerHTML: this.text
        },
        on: {
          click: this.loadIframe
        }
      })
  },
})

// create a root instance
new Vue({
  name: 'vue-frame',
  el: '#app'
})
</script>