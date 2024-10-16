<template>
  <div class="header">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <img
          src="../assets/images/logo-xs.jpg"
          class="d-inline-block"
          alt="logo-xs"
        >
      </div>
      <nav>
        <routerLink
          class="me-4"
          to="/admin/products"
          :class="{ active: isActive }"
          @click="() => isActive = !isActive"
        >
          餐點菜單管理
        </routerLink>
        <routerLink
          class="me-4"
          to="/admin/orders"
        >
          訂單管理
        </routerLink>
        <a
          href="#!"
          @click.prevent="logout"
        >
          登出
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    logout() {
      // 清除cookie
      document.cookie = `hexToken=; expires=${new Date()};`;
      this.$router.push('/login');
      this.$swal({
        title: '已登出！',
        icon: 'success',
        showConfirmButton: false,
      });
    },
  },
};
</script>
