// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import VueRouter from 'vue-router'
import Home from './components/Home'
import AppOverview from './components/AppOverview'
import Hello from './components/Hello'


import 'bulma/css/bulma.css'
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    { path: '/', component: Home},
    { path: '/home', component: Home},
    { path: '/overview', component: AppOverview},
    { path: '/docs', component: AppOverview},
    { path: '/item', component: Hello}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
