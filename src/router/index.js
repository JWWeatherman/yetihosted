import Vue from 'vue'
import Router from 'vue-router'
import YetiColdStartup1 from '@/components/YetiColdStartup1'
import YetiColdStartup2 from '@/components/YetiColdStartup2'
import YetiColdStartup3 from '@/components/YetiColdStartup3'
import YetiColdStartup4 from '@/components/YetiColdStartup4'
import YetiColdStartup5 from '@/components/YetiColdStartup5'
import YetiColdRegStartup6 from '@/components/YetiColdRegStartup6'
import YetiColdRecoveryStartup6 from '@/components/YetiColdRecoveryStartup6'
import Overview from '@/components/overview'

import BootstrapVue from 'bootstrap-vue'
import $store from '../store/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/Cold/step1',
      name: 'YetiColdStartup1',
      component: YetiColdStartup1
    },
    {
      path: '/Cold/step2',
      name: 'YetiColdStartup2',
      component: YetiColdStartup2
    },
    {
      path: '/Cold/step3',
      name: 'YetiColdStartup3',
      component: YetiColdStartup3
    },
    {
      path: '/Cold/step4',
      name: 'YetiColdStartup4',
      component: YetiColdStartup4
    },
    {
      path: '/Cold/step5',
      name: 'YetiColdStartup5',
      component: YetiColdStartup5
    },
    {
      path: '/Cold/Recovery/step6',
      name: 'YetiColdRecoveryStartup6',
      component: YetiColdRecoveryStartup6
    },
    {
      path: '/Cold/step6',
      name: 'YetiColdRegStartup6',
      component: YetiColdRegStartup6
    }
  ]
})










