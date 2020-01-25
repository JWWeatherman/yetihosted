import Vue from 'vue'
import Router from 'vue-router'
import YetiColdStartup1 from '@/components/YetiColdStartup1'
import YetiColdStartup2 from '@/components/YetiColdStartup2'
import YetiColdStartup3 from '@/components/YetiColdStartup3'
import YetiColdStartup4 from '@/components/YetiColdStartup4'
import YetiColdStartup5 from '@/components/YetiColdStartup5'
import YetiColdStartup6 from '@/components/YetiColdStartup6'
import YetiColdRecoveryStartup6 from '@/components/YetiColdRecoveryStartup6'
import YetiColdStartup7 from '@/components/YetiColdStartup7'
import YetiWarmStartup1 from '@/components/YetiWarmStartup1'
import YetiWarmStartup2 from '@/components/YetiWarmStartup2'
import YetiWarmStartup3 from '@/components/YetiWarmStartup3'
import YetiWarmStartup4 from '@/components/YetiWarmStartup4'
import YetiWarmStartup5 from '@/components/YetiWarmStartup5'
import YetiHotStartup1 from '@/components/YetiHotStartup1'
import YetiHotStartup2 from '@/components/YetiHotStartup2'
import YetiHotStartup3 from '@/components/YetiHotStartup3'
import YetiHotStartup4 from '@/components/YetiHotStartup4'
import YetiHotStartup5 from '@/components/YetiHotStartup5'
import BitcoinCoreOfflineStartup1 from '@/components/BitcoinCoreOfflineStartup1'
import BitcoinCoreOfflineStartup2 from '@/components/BitcoinCoreOfflineStartup2'
import BitcoinCoreOfflineStartup3 from '@/components/BitcoinCoreOfflineStartup3'
import BitcoinCoreOfflineStartup4 from '@/components/BitcoinCoreOfflineStartup4'
import BitcoinCoreOfflineStartup5 from '@/components/BitcoinCoreOfflineStartup5'
import BitcoinCoreOfflineStartup6 from '@/components/BitcoinCoreOfflineStartup6'
import Overview from '@/components/Overview'
import UtilsOverview from '@/components/UtilsOverview'


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
      path: '/Utils',
      name: 'UtilsOverview',
      component: UtilsOverview
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
      path: '/Cold/step6',
      name: 'YetiColdStartup6',
      component: YetiColdStartup6
    },
    {
      path: '/Cold/Recovery/step6',
      name: 'YetiColdRecoveryStartup6',
      component: YetiColdRecoveryStartup6
    },
    {
      path: '/Warm/step1',
      name: 'YetiWarmStartup1',
      component: YetiWarmStartup1
    },
    {
      path: '/Warm/step2',
      name: 'YetiWarmStartup2',
      component: YetiWarmStartup2
    },
    {
      path: '/Warm/step3',
      name: 'YetiWarmStartup3',
      component: YetiWarmStartup3
    },
    {
      path: '/Warm/step4',
      name: 'YetiWarmStartup4',
      component: YetiWarmStartup4
    },
    {
      path: '/Warm/step5',
      name: 'YetiWarmStartup5',
      component: YetiWarmStartup5
    },
     {
      path: '/Hot/step1',
      name: 'YetiHotStartup1',
      component: YetiHotStartup1
    },
    {
      path: '/Hot/step2',
      name: 'YetiHotStartup2',
      component: YetiHotStartup2
    },
    {
      path: '/Hot/step3',
      name: 'YetiHotStartup3',
      component: YetiHotStartup3
    },
    {
      path: '/Hot/step4',
      name: 'YetiHotStartup4',
      component: YetiHotStartup4
    },
    {
      path: '/Hot/step5',
      name: 'YetiHotStartup5',
      component: YetiHotStartup5
    },
     {
      path: '/BCO/step1',
      name: 'BitcoinCoreOfflineStartup1',
      component: BitcoinCoreOfflineStartup1
    },
    {
      path: '/BCO/step2',
      name: 'BitcoinCoreOfflineStartup2',
      component: BitcoinCoreOfflineStartup2
    },
    {
      path: '/BCO/step3',
      name: 'BitcoinCoreOfflineStartup3',
      component: BitcoinCoreOfflineStartup3
    },
    {
      path: '/BCO/step4',
      name: 'BitcoinCoreOfflineStartup4',
      component: BitcoinCoreOfflineStartup4
    },
    {
      path: '/BCO/step5',
      name: 'BitcoinCoreOfflineStartup5',
      component: BitcoinCoreOfflineStartup5
    },
    {
      path: '/BCO/step6',
      name: 'BitcoinCoreOfflineStartup6',
      component: BitcoinCoreOfflineStartup6
    }
  ]
})










