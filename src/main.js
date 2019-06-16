import Vue from './init'
import store from './store'
import App from './App'
import TopHeader from './components/TopHeader.vue'

Vue.use(store)

Vue.component('top-header', TopHeader)

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
  ...App
})
app.$mount()
