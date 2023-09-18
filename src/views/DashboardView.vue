<template>
  <div class="admin">
    <AdminHeader />
    <RouterView />
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import AdminHeader from "../components/AdminHeader.vue";
const { VITE_URL } = import.meta.env;

export default {
  components: {
    RouterView,
    AdminHeader,
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common.Authorization = token;

      const url = `${VITE_URL}api/user/check`
      this.$http.post(url)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/login')
            this.$swal({
              title: '您沒有權限進入！請重新登入！',
              icon: 'error',
              showConfirmButton: false,
            })
          }
        })
        .catch(err => {
          this.$router.push('/login')
          this.$swal({
            title: err.response.data.message,
            icon: 'error',
            showConfirmButton: false,
          })
        })
    }
  },
  mounted() {
    this.checkLogin()
  },
};
</script>
