import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [{
    path: '/',
    component: () => import('../views/FrontHome.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('../views/front/HomeView.vue')
    }],
  },
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    //槽狀路由
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../views/front/NewsView.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'order',
        name: 'OrderPage',
        component: () => import('../views/front/OrderPage.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/CartView.vue')
      },
			{
        path: 'cartInfo',
        name: 'CartInfo',
        component: () => import('../views/front/CartInfoView.vue')
      },
			{
        path: 'pay/:id',
        name: 'Pay',
        component: () => import('../views/front/CartPayView.vue')
      },
			{
        path: 'completed',
        name: 'Completed',
        component: () => import('../views/front/CartCompleted.vue')
      },
      {
        path: 'orderList',
        name: 'OrderList',
        component: () => import('../views/front/OrderList.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/front/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
			{
        path: 'news',
        component: () => import('../views/admin/AdminNews.vue')
      },
			{
        path: 'about',
        component: () => import('../views/admin/AdminAbout.vue')
			},
    ]
  },
  // 404頁面
  {
    path: '/:pathMath(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  // 重新導向
  {
    path: '/newPage/:pathMath(.*)*',
    redirect: {
      name: 'Home',
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;