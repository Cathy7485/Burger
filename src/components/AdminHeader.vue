<template>
	<nav id="header">
			<router-link to="/">
				<div class="logo">
					<img src="../assets/logo-xs.jpg" class="d-inline-block" alt="logo-xs">
				</div>
			</router-link>
			<router-link to="/admin/products">餐點菜單管理</router-link> 
			<router-link to="/admin/orders">訂單管理</router-link> 
			<router-link to="/admin/orders">最新公告管理</router-link>
			<router-link to="/admin/orders">品牌故事管理</router-link>
			<a href="#!" @click.prevent="logout">登出</a>
	</nav>
</template>
<script>
export default {
}
</script>