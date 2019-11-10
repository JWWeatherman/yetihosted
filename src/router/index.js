import Vue from 'vue'
import Router from 'vue-router'
import Step1 from '@/components/step1'
import Step2 from '@/components/step2'
import Step3 from '@/components/step3'
import Step4 from '@/components/step4'
import Step5 from '@/components/step5'
import Step6 from '@/components/step6'
import Options from '@/components/options'
import Overview from '@/components/overview'

import BootstrapVue from 'bootstrap-vue'
import $store from '../store/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/step1',
      name: 'Step1',
      component: Step1
    },
    {
      path: '/step2',
      name: 'Step2',
      component: Step2
    },
    {
      path: '/step3',
      name: 'Step3',
      component: Step3
    },
    {
      path: '/step3',
      name: 'Step3',
      component: Step3
    },
    {
      path: '/step4',
      name: 'Step4',
      component: Step4
    },
    {
      path: '/step5',
      name: 'Step5',
      component: Step5
    },
    {
      path: '/step6',
      name: 'Step6',
      component: Step6
    },
    {
      path: '/options',
      name: 'Options',
      component: Options
    },
    {
      path: '/',
      name: 'Overview',
      component: Overview
    }
  ]
})
