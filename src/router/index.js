import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/index',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "Layout" */ '../views/layout/Layout.vue'),
    children: [
      {
        path: 'express',
        name: 'express',
        component: () => import(/* webpackChunkName: "express" */ '../views/express/Express.vue'), 
      },
      {
        path: 'expressGoodsInfo',
        name: 'ExpressGoodsInfo',
        component: () => import(/* webpackChunkName: "ExpressGoodsInfo" */ '../views/expressGoodsInfo/ExpressGoodsInfo.vue'), 
      },
      {
        path: 'dataCollect',
        name: 'DataCollect',
        component: () => import(/* webpackChunkName: "DataCollect" */ '../views/dataCollect/DataCollect.vue'), 
      },
      {
        path: 'salesman',
        name: 'Salesman',
        component: () => import(/* webpackChunkName: "salesman" */ '../views/salesman/Salesman.vue'), 
      },
      {
        path: 'driverManage',
        name: 'DriverManage',
        component: () => import(/* webpackChunkName: "driverManage" */ '../views/driverManage/DriverManage.vue'), 
      },
      {
        path: 'sorterGroupManage',
        name: 'SorterGroupManage',
        component: () => import(/* webpackChunkName: "driverManage" */ '../views/sorterGroupManage/SorterGroupManage.vue'), 
      },
      {
        path: 'sorterManage',
        name: 'StorerManage',
        component: () => import(/* webpackChunkName: "sorterManage" */ '../views/sorterManage/StorerManage.vue'), 
      },
      {
        path: 'storeManage',
        name: 'StoreManage',
        component: () => import(/* webpackChunkName: "StoreManage" */ '../views/storeManage/StoreManage.vue'), 
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
