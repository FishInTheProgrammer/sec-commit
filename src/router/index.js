import Vue from 'vue'
import Router from 'vue-router'
import Personal from './personal'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['~/views/layout/App.vue'], resolve),
      meta: {
        title: '首页',
        keepAlive: false,
      },
      children: [
        {
          path: '/',
          name: 'dashboard',
          meta: {
            title: '首页',
            keepAlive: false
          },
          component: resolve => require(['~/views/home/Index.vue'], resolve),
        },
        {
          path: '/index',
          name: 'Index',
          meta: {
            title: '商品库',
            keepAlive: false
          },
          component: resolve => require(['~/views/product/Index.vue'], resolve),
        },
        {
          path: '/quotation',
          name: 'Quotation',
          meta: {
              title: '报价单',
              keepAlive: false
          },
          component: resolve => require(['~/views/product/Quotation.vue'], resolve),
        },
        {
          path: '/order_list',
          name: 'order_list',
          meta: {
            title: '订单列表',
            keepAlive: false
          },
          component: resolve => require(['~/views/purchase/OrderList.vue'], resolve),
        },
        {
          path: '/task',
          name: 'task',
          meta: {
            title: '采购任务',
            keepAlive: true
          },
          component: resolve => require(['~/views/purchase/Task.vue'], resolve),
        },
        {
          path: '/bills',
          name: 'bills',
          meta: {
            title: '采购单据',
            keepAlive: true
          },
          component: resolve => require(['~/views/purchase/Bills.vue'], resolve),
        },
        {
          path: '/sorting',
          name: 'sorting',
          meta: {
            title: '分拣',
            keepAlive: true
          },
          component: resolve => require(['~/views/other/Sorting.vue'], resolve),
        },
        {
          path: '/delivery',
          name: 'delivery',
          meta: {
            title: '配送',
            keepAlive: true
          },
          component: resolve => require(['~/views/other/Delivery.vue'], resolve),
        },
        {
          path: '/inventory',
          name: 'inventory',
          meta: {
            title: '入库',
            keepAlive: true
          },
          component: resolve => require(['~/views/EnterSellsSaves/Inventory.vue'], resolve),
        },
        {
          path: '/out_bound',
          name: 'out_bound',
          meta: {
            title: '出库',
            keepAlive: true
          },
          component: resolve => require(['~/views/EnterSellsSaves/OutBound.vue'], resolve),
        },
        {
          path: '/storage',
          name: 'storage',
          meta: {
            title: '盘点',
            keepAlive: true
          },
          component: resolve => require(['~/views/EnterSellsSaves/Storage.vue'], resolve),
        },
        {
          path: '/report',
          name: 'report',
          meta: {
            title: '每日报表',
            keepAlive: true
          },
          component: resolve => require(['~/views/dataCenter/Report.vue'], resolve),
        },
        {
          path: '/profit',
          name: 'profit',
          meta: {
            title: '利润报表',
            keepAlive: true
          },
          component: resolve => require(['~/views/dataCenter/Profit.vue'], resolve),
        },
          //个人中心，可能有修改密码，头像修改等路由
        Personal.index,

      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '后台登录',
        keepAlive: false
      },
      components: {
        blank: resolve => require(['~/views/login/Login.vue'], resolve),
      }
    },

  ]
})


