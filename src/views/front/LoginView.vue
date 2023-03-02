<template>這是登入畫面

  <form class="form-signin">
    <div class="form-floating mb-3">
      <input type="email" class="form-control" v-model="user.username" id="floatingInput"
        placeholder="name@example.com" required autofocus>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" v-model="user.password" id="floatingPassword"
        placeholder="Password" required>
      <label for="floatingPassword">Password</label>
    </div>
    <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" @click="login">
      登入
    </button>
  </form>
</template>

<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      const url = `${ VITE_APP_URL }admin/signin`
      this.$http
        .post(url, this.user)
        .then((res) => {
          const { token, expired } = res.data
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin/products')
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.response.data.message)
        });
    },
  },
}

</script>