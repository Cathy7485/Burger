<template>
  <div class="admin">
    <AdminHeader />
    <RouterView v-if="isAuth" />
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
import AdminHeader from '../components/AdminHeader.vue';

const { VITE_URL } = import.meta.env;

export default {
  components: {
    RouterView,
    AdminHeader,
  },
  data() {
    return {
      isAuth: false,
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );

      // 每次發送api時，都會自動夾帶token到header裡
      this.$http.defaults.headers.common.Authorization = token;

      const url = `${VITE_URL}api/user/check`;
      this.$http
        .post(url)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/login');
          }
          this.isAuth = true;
        })
        .catch((err) => {
          this.$router.push('/login');
          this.$swal({
            title: err.response.data.message,
            icon: 'error',
            showConfirmButton: false,
          });
          this.isAuth = false;
        });
    },
  },
};
</script>
