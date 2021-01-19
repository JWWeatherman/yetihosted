import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import YCSetup1 from '@/components/YCSetup1'
import YCSetup2 from '@/components/YCSetup2'
import YCSetup3 from '@/components/YCSetup3'
import YCSetup4 from '@/components/YCSetup4'
import YCSetup6 from '@/components/YCSetup6'
import YCSetup6R from '@/components/YCSetup6R'
import YCTest1 from '@/components/YCTest1'
import YCTest2 from '@/components/YCTest2'
import YCTest3 from '@/components/YCTest3'
import YCRecover1 from '@/components/YCRecover1'
import YCRecover2 from '@/components/YCRecover2'
import YWSetup1 from '@/components/YWSetup1'
import YWSetup2 from '@/components/YWSetup2'
import YWSetup3 from '@/components/YWSetup3'
import YWSetup4 from '@/components/YWSetup4'
import YWTest1 from '@/components/YWTest1'
import YWTest2 from '@/components/YWTest2'
import YWTest3 from '@/components/YWTest3'
import YWRecover1 from '@/components/YWRecover1'
import YWRecover2 from '@/components/YWRecover2'
import YHSetup1 from '@/components/YHSetup1'
import YHSetup2 from '@/components/YHSetup2'
import YHSetup3 from '@/components/YHSetup3'
import YHSetup4 from '@/components/YHSetup4'
import YHTest1 from '@/components/YHTest1'
import YHTest2 from '@/components/YHTest2'
import YHTest3 from '@/components/YHTest3'
import YHRecover1 from '@/components/YHRecover1'
import YHRecover2 from '@/components/YHRecover2'



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
      name: 'YCSetup1',
      component: YCSetup1
    },
    {
      path: '/Cold/step2',
      name: 'YCSetup2',
      component: YCSetup2
    },
    {
      path: '/Cold/step3',
      name: 'YCSetup3',
      component: YCSetup3
    },
    {
      path: '/Cold/step4',
      name: 'YCSetup4',
      component: YCSetup4
    },
    {
      path: '/Cold/step6',
      name: 'YCSetup6',
      component: YCSetup6
    },
    {
      path: '/Cold/step6R',
      name: 'YCSetup6R',
      component: YCSetup6R
    },
    {
      path: '/Cold/Guide/Step1R',
      name: 'YCRecover1',
      component:  YCRecover1
    },
    {
      path: '/Cold/Guide/Step2R',
      name: 'YCRecover2',
      component:  YCRecover2
    },
    {
      path: '/Cold/Guide/step1',
      name: 'YCTest1',
      component:  YCTest1
    },
    {
      path: '/Cold/Guide/step2',
      name: 'YCTest2',
      component:  YCTest2
    },
    {
      path: '/Cold/Guide/step3',
      name: 'YCTest3',
      component:  YCTest3
    },
    {
      path: '/Warm/step1',
      name: 'YWSetup1',
      component: YWSetup1
    },
    {
      path: '/Warm/step2',
      name: 'YWSetup2',
      component: YWSetup2
    },
    {
      path: '/Warm/step3',
      name: 'YWSetup3',
      component: YWSetup3
    },
    {
      path: '/Warm/step4',
      name: 'YWSetup4',
      component: YWSetup4
    },
    {
      path: '/Warm/Guide/step1',
      name: 'YWTest1',
      component:  YWTest1
    },
    {
      path: '/Warm/Guide/step2',
      name: 'YWTest2',
      component:  YWTest2
    },
    {
      path: '/Warm/Guide/step3',
      name: 'YWTest3',
      component:  YWTest3
    },
    {
      path: '/Warm/Guide/Step1R',
      name: 'YWRecover1',
      component:  YWRecover1
    },
    {
      path: '/Warm/Guide/Step2R',
      name: 'YWRecover2',
      component:  YWRecover2
    },
    {
      path: '/Hot/step1',
      name: 'YHSetup1',
      component: YHSetup1
    },
    {
      path: '/Hot/step2',
      name: 'YHSetup2',
      component: YHSetup2
    },
    {
      path: '/Hot/step3',
      name: 'YHSetup3',
      component: YHSetup3
    },
    {
      path: '/Hot/step4',
      name: 'YHSetup4',
      component: YHSetup4
    },
    {
      path: '/Hot/Guide/step1',
      name: 'YHTest1',
      component:  YHTest1
    },
    {
      path: '/Hot/Guide/step2',
      name: 'YHTest2',
      component:  YHTest2
    },
    {
      path: '/Hot/Guide/step3',
      name: 'YHTest3',
      component:  YHTest3
    },
    {
      path: '/Hot/Guide/Step1R',
      name: 'YHRecover1',
      component:  YHRecover1
    },
    {
      path: '/Hot/Guide/Step2R',
      name: 'YHRecover2',
      component:  YHRecover2
    }
  ]
})










