<template>
	<header>
		<div class="header-container">
			<router-link to="/">
				<div class="logo"><img src="../assets/logo.svg" alt="吃堡LOGO"></div>
			</router-link>
			<nav>
				<router-link to="/about">品牌故事</router-link>
				<router-link to="/news">最新公告</router-link>
				<router-link to="/products">餐點菜單</router-link>
				<!-- <router-link to="/admin/products">後台產品列表</router-link> -->
				<router-link to="/orderList">查詢訂單</router-link>
				<router-link to="/order">線上點餐</router-link>
			</nav>
			<router-link to="/cart">
				<div class="cart-btn">
					<span class="material-symbols-outlined">shopping_cart</span>
				</div>
			</router-link>
		</div>
	</header>
	<section id="banner">
		<img src="../assets/banner.jpg" alt="banner">
	</section>
	<section id="content">
		<RouterView></RouterView>
	</section>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-6">
					<ul class="p-5">
						<li>電話：06-555-8888</li>
						<li>地址：臺南市永康區漢堡區漢堡路77號</li>
					</ul>
				</div>
				<div class="col-6 text-end">
					<img src="../assets/logo.svg" alt="footer-LOGO">
				</div>
				<div class="col-12 text-center">
					Copyright © 2023  吃堡 - 手工漢堡專賣店 版權所有
				</div>
			</div>
		</div>
	</footer>
</template>
<script>
import { RouterView } from 'vue-router';
export default {
  components: {
    RouterView,
  }
}

</script>