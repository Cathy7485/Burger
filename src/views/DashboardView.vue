<template>
  <div class="admin">
    <AdminHeader />
    <RouterView v-if="isAuth" />
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import AdminHeader from "../components/AdminHeader.vue";
const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      isAuth: false,
    }
  },
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
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;
        const url = `${VITE_URL}api/user/check`
        this.$http.post(url)
          .then(() => {
            this.isAuth = true;
          })
          .catch(err => {
            this.$router.push('/login')
            this.$swal({
              title: err.response.data.message,
              icon: 'error',
              showConfirmButton: false,
            })
          })
      } else {
        if (!res.data.success) {
          this.$router.push('/login');
          this.$swal({
            title: '您沒有權限進入！請重新登入！',
            icon: 'error',
            showConfirmButton: false,
          })
        }
      }
    }
  },
  mounted() {
    this.checkLogin()
  },
};
</script>
