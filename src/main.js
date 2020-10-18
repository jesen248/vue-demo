// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueResources from 'vue-resource'
Vue.use(VueResources)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


import HelloWord from './components/pages/HelloWorld'
import Page from './components/pages/page'

const router =  new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      component: Page
    },
    {
      path: '/hello',
      component: HelloWord
    }
  ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
