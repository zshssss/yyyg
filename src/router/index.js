import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 首页
import Index from '@/components/index'
// 揭晓
import Announce from '@/components/announce'
// shop
import Shop from '@/components/shop'

import Found from '@/components/found'
// 分类
import Classify from '@/components/classify'
// 产品列表
import Prolist from '@/components/product/prolist'
// 产品详情
import Prodetail from '@/components/product/prodetail'
// 支付中心
import Paycenter from '@/components/pay/paycenter'
// 充值
import Recharge from '@/components/pay/recharge/recharge'
// 佣金转余额||提现
import Reflect from '@/components/pay/reflect/reflect'

import Order from '@/components/order'
// 个人中心
import Person from '@/components/person'
//地址列表
import Addrlist from '@/components/person/addrlist'
// 用户信息
import UserInfo from '@/components/person/userInfo'
// 修改昵称
import Nikename from '@/components/person/nikename'
// 修改手机号
import Telchange from '@/components/person/telchange'
// 修改登录密码
import Passchange from '@/components/person/passchange'

// 余额
import Balance from '@/components/person/balance/balance'
// 参与记录
import Partrecord from '@/components/person/partrecord/partrecord'
// 推广
import Extension from '@/components/person/extension/extension'
// 我的推广人
import MyExtension from '@/components/person/extension/myextension/myextension'
// 推广明细
import ExtensionDetail from '@/components/person/extension/extensiondetail/extensiondetail'
// 客服中心
import CustomerService from '@/components/person/customerservice/customerservice'
// 我的晒单
// import Exportorder from '@/components/person/exportorder/exportorder'
// 我的晒单
import Myexportorder from '@/components/person/exportorder/myexportorder/myexportorder'
// 晒单
import Exporseaction from '@/components/person/exportorder/exporseaction/exporseaction'
// 晒单记录
import Exportrecord from '@/components/person/exportorder/exportrecord/exportrecord'
// 登录
import Login from '@/components/login/login'
//忘记密码
import PassForgot from '@/components/login/forgot'
//用户注册
import Rigiter from '@/components/login/rigister'
// 用户协议
import Agreement from '@/components/login/agreement'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //HelloWorld
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },

    // 首页
    {
      path: '/',
      name: 'index',
      component: Index
    },
    // 揭晓
    {
      path: '/announce',
      name: 'announce',
      component: Announce
    },
    // 
    {
      path: '/found',
      name: 'found',
      component: Found
    },
    // 分类
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    // 购物车
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },

    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    //忘记密码
    {
      path: '/login/forgot',
      name: 'forgot',
      component: PassForgot
    },

    //注册用户
    {
      path: '/login/rigister',
      name: 'rigister',
      component: Rigiter
    },

    // 个人中心
    {
      path: '/person',
      name: 'person',
      component: Person
    },

    // 余额
    {
      path: '/person/balance',
      name: 'balance',
      component: Balance
    },
    // 充值
    {
      path: '/person/recharge',
      name: 'recharge',
      component: Recharge
    },
    // 佣金转余额||提现
    {
      path: '/person/reflect',
      name: 'reflect',
      component: Reflect
    },
    // 参与记录
    {
      path: '/person/partrecord',
      name: 'partrecord',
      component: Partrecord
    },
    // 推广
    {
      path: '/person/extension',
      name: 'extension',
      component: Extension
    },
    // 我的推广人
    {
      path: '/person/extension/myextension',
      name: 'myextension',
      component: MyExtension
    },
    // 推广明细
    {
      path: '/person/extension/extensiondetail',
      name: 'extensiondetail',
      component: ExtensionDetail
    },
    // 客服中心
    {
      path: '/person/customerservice',
      name: 'customerservice',
      component: CustomerService
    },
    // 我的晒单
    {
      path: '/person/myexportorder',
      name: 'myexportorder',
      component: Myexportorder
    },
    // 晒单
    {
      path: '/person/exportorder/exporseaction',
      name: 'exporseaction',
      component: Exporseaction
    },
    {
      path: '/person/exportorder/exportrecord',
      name: 'exportrecord',
      component: Exportrecord
    },


    // 用户信息
    {
      path: '/person/userInfo',
      name: 'userInfo',
      component: UserInfo
    },
    // 修改昵称
    {
      path: '/person/nikename',
      name: 'nikename',
      component: Nikename
    },
    // 修改s手机号
    {
      path: '/person/telchange',
      name: 'telchange',
      component: Telchange
    },
    // 修改密码
    {
      path: '/person/passchange',
      name: 'passchange',
      component: Passchange
    },

    // 地址列表
    {
      path: '/addrlist',
      name: 'addrlist',
      component: Addrlist
    },
    // 商品列表
    {
      path: '/prolist',
      name: 'prolist',
      component: Prolist
    },
    // 商品详情
    {
      path: '/prolist/prodetail',
      name: 'prodetail',
      component: Prodetail
    },
    // 支付中心
    {
      path: '/pay',
      name: 'paycenter',
      component: Paycenter
    },
     //用户协议
     {
      path: '/login/agreement',
      name: 'agreement',
      component: Agreement
    },
<<<<<<< HEAD
    //搜索页
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '*',
      redirect: { name: 'index' }
    },
=======
>>>>>>> 4dc5f5b01f3abdb26977dfb385c0bab8b3e787ed
  ]
})
