<template>
	<header>
		<div class="header-container">
			<routerLink class="logoBox" to="/">
				<div class="logo">
					<img src="../assets/logo.svg" class="d-none d-lg-block d-xl-block" alt="logo" />
					<img src="../assets/images/logo-xs.jpg" class="d-block d-lg-none" alt="logo-xs">
				</div>
			</routerLink>
			<nav class="navbar navbar-expand-lg">
				<button class="navbar-toggler" 
					type="button" @click="navToggleCollapse">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapse">
					<ul class="navbar-nav">
						<li class="nav-item">
							<routerLink to="/about">品牌故事</routerLink>
						</li>
						<li class="nav-item">
							<routerLink to="/news">最新公告</routerLink>
						</li>
						<li class="nav-item">
							<routerLink to="/products">餐點菜單</routerLink>
						</li>
						<li class="nav-item">
							<routerLink to="/order">線上點餐</routerLink>
						</li>
						<li class="nav-item">
							<routerLink to="/orderList">訂單查詢</routerLink>
						</li>
					</ul>
				</div>
				<routerLink to="/cart" class="cart-icon">
					<div class="cart-btn">
						<span class="material-symbols-outlined">shopping_cart</span>
						<div class="cart-count">{{ carts.length }}</div>
					</div>
				</routerLink>
			</nav>
		</div>
	</header>
</template>

<script>
import { mapActions, mapState } from "pinia";
import cartStore from "../stores/cartStore";
import Collapse from "bootstrap/js/dist/collapse";

export default {
	data() {
		return {
			menuCollapse: '',
		}
	},
	watch: {
		$route() {
			this.closeCollapse();
		}
	},
	computed: {
		...mapState(cartStore, ['carts'])
	},
	methods: {
		...mapActions(cartStore, ['getCart']),
		navToggleCollapse(){
			this.collapse.toggle();
		},
		closeCollapse() {
			this.collapse.hide();
		},
	},
	mounted() {
		this.getCart();
		this.collapse = new Collapse(this.$refs.collapse, {
			toggle: false,
		});
	}
}
</script>