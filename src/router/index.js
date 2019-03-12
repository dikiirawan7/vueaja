import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld'
import CobaVuex from '@/components/CobaVuex'

Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
    mode: 'history',
  base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'HelloWorld',
            component:HelloWorld
            
        },
        {
            path:'/cobavuex',
            name:'Cobavuex',
            component:CobaVuex
        }
    ]

})

