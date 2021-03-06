import Vue from 'vue'
import App from './App.vue'
import VueQuill from 'vue-quill'

Vue.config.productionTip = false

Vue.use(VueQuill)

new Vue({
  render: h => h(App),
}).$mount('#app')
