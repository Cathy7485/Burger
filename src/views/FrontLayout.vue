<template>
  <header>
    <div class="header-container">
      <router-link to="/">
        <div class="logo">
					<img src="../assets/logo.svg" class="d-none d-md-block d-lg-block d-xl-block" alt="logo" />
					<img src="../assets/logo-xs.jpg" class="d-block d-md-none" alt="logo-xs">
				</div>
      </router-link>
      <nav class="navbar navbar-expand-lg navbar-light container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/about">品牌故事</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/news">最新公告</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products">餐點菜單</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/orderList">查詢訂單</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart">線上點餐</router-link>
            </li>
          </ul>
        </div>
				<router-link to="/cart">
					<div class="cart-btn">
						<span class="material-symbols-outlined">shopping_cart</span>
					</div>
				</router-link>
      </nav>
    </div>
  </header>
  <section id="banner">
    <img src="../assets/banner.jpg" alt="banner" />
		<div class="banner-title"></div>
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
            <!-- <router-link to="/admin/products">後台產品列表</router-link> -->
          </ul>
        </div>
        <div class="col-6 text-end">
          <img src="../assets/logo.svg" class="footer-logo" alt="footer-logo" />
        </div>
      </div>
    </div>
    <div class="copyright">
      Copyright © 2023 吃堡 - 手工漢堡專賣店 All Rights Reserved.
    </div>
  </footer>
</template>
<script>
import baseComponent from 'bootstrap/js/dist/base-component.js'
import { RouterView } from "vue-router";
export default {
  components: {
    baseComponent,
    RouterView,
  },
};
</script>
