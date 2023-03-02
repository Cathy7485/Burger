import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [{
	path: '/',
    component: () => import('../views/FrontLayout.vue'),
    //槽狀路由
    children: [ 
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
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
        path: 'cart',
				name: 'Cart',
        component: () => import('../views/front/CartView.vue')
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
    ]
  },
	
	// // 404頁面
  // {
  //   path: '/:pathMath(.*)*',
  //   component: () => import('../views/NotFound.vue'),
  // },
  // // 重新導向
  // {
  //   path: '/newPage/:pathMath(.*)*',
  //   redirect: {
  //     name: 'Home',
  //   }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;