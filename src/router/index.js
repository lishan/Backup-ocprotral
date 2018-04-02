import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LogSearch from '@/components/LogSearch'
import OCSP from '@/components/OCSP'
import Empty from '@/components/Empty'
import OCSPproduct from '@/components/OCSPproduct'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ocsp',
      name: 'OCSP',
      component: OCSP
    },
    {
      path: '/logSearch',
      name: 'LogSearch',
      component: LogSearch
    },
    {
      path: '/ocspproduct',
      name: 'OCSPproduct',
      component: OCSPproduct
    }
  ]
})
