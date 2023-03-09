<template>
	<header>
    <div class="header-container">
      <router-link class="logoBox" to="/">
        <div class="logo">
					<img src="../assets/logo.svg" class="d-none d-lg-block d-xl-block" alt="logo" />
					<img src="../assets/logo-xs.jpg" class="d-block d-lg-none" alt="logo-xs">
				</div>
      </router-link>
      <nav class="navbar navbar-expand-lg container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
              <router-link to="/orderList">訂單查詢</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/order">線上點餐</router-link>
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
</template>
<script>
export default {
	
}
</script>