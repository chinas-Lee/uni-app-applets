import Vue from './init'
import store from './store'
import App from './App'

Vue.use(store)

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
  ...App
})
app.$mount()
