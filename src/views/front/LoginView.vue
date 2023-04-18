<template>
  <PageBanner :pageTitle="pageTitle"></PageBanner>
  <section id="page-content" class="container">
    <div class="row">
      <div class="page-title">管理登入</div>
      <form class="form-signin col-8 m-auto">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            v-model="user.username"
            id="floatingInput"
            placeholder="name@example.com"
            required
            autofocus
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            v-model="user.password"
            id="floatingPassword"
            placeholder="Password"
            required
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button
          class="btn btn-lg btn-primary w-100 mt-5"
          type="button"
          @click="login"
        >
          登入
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import PageBanner from "@/components/PageBanner.vue";
const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      pageTitle: {
        title: "後台管理",
      },

      user: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    PageBanner,
  },
  methods: {
    login() {
      const url = `${VITE_URL}admin/signin`;
      this.$http
        .post(url, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          this.$router.push("/admin/products");
          this.$swal({
            title: res.data.message,
            icon: "success",
            showConfirmButton: false,
          });
        })
        .catch((err) => {
          this.$swal({
            title: err.response.data.message,
            icon: "error",
            showConfirmButton: false,
          });
        });
    },
  },
};
</script>
