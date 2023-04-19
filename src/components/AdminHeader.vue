<template>
	<nav id="header">
			<routerLink  to="/">
				<div class="logo">
					<img src="../assets/logo-xs.jpg" class="d-inline-block" alt="logo-xs">
				</div>
			</routerLink >
			<routerLink  to="/admin/products" :class="{ active: isActive }" @click="()=>isActive = !isActive">餐點菜單管理</routerLink > 
			<routerLink  to="/admin/orders">訂單管理</routerLink > 
			<routerLink  to="/admin/news">最新公告管理</routerLink >
			<routerLink  to="/admin/about">品牌故事管理</routerLink >
			<a href="#!" @click.prevent="logout">登出</a>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
		}
	},
	methods:{
		logout () {
      // 清除cookie
      document.cookie = `hexToken=; expires=${new Date()};`
      this.$router.push('/login');
      this.$swal({
        title: '已登出！',
        icon : 'success',
        showConfirmButton: false,
      })
    },
	}
}
</script>