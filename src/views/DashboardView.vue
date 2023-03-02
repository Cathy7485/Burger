<template>
  這是後台頁面
  <router-link to="/admin/products">後台產品列表</router-link> |
  <router-link to="/admin/orders">後台訂單列表</router-link> |
  <router-link to="/">回前台首頁</router-link> |
  <a href="#" @click.prevent="logout">登出</a>
  <hr />
  <RouterView></RouterView>
</template>
<script>
import { RouterView } from "vue-router"
const { VITE_APP_URL } = import.meta.env

export default {
  components: {
    RouterView,
  },
  methods: {
    logout () {
      // 清除cookie
      document.cookie = `hexToken=; expires=${new Date()};`
      this.$router.push('/login')
      alert('已登出！')
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1")
      this.$http.defaults.headers.common.Authorization = token

      const url = `${ VITE_APP_URL }api/user/check`
      this.$http.post(url)
        .then((res) => {
          if(!res.data.success){
            this.$router.push('/login')
            alert('您沒有權限進入！請重新登入！')
          }
        })
        .catch(err=>{
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.checkLogin()
  },
};
</script>
