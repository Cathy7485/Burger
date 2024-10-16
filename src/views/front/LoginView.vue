<template>
  <PageBanner :page-title="pageTitle" />
  <section
    id="page-content"
    class="container"
  >
    <div class="row">
      <div class="page-title">
        管理登入
      </div>
      <VForm
        v-slot="{ errors }"
        class="form-signin col-8 m-auto"
        @submit="login"
      >
        <div class="form-floating mb-3">
          <VField
            id="email"
            v-model="user.username"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="name@example.com"
            rules="email|required"
          />
          <ErrorMessage
            name="email"
            class="invalid-feedback"
          />
          <label for="email">Email address</label>
        </div>
        <div class="form-floating">
          <VField
            id="password"
            v-model="user.password"
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors['password'] }"
            placeholder="Password"
            rules="required"
          />
          <ErrorMessage
            name="password"
            class="invalid-feedback"
          />
          <label for="password">Password</label>
        </div>
        <button
          class="btn btn-lg btn-primary w-100 mt-5"
          type="submit"
          :disabled="isProcessing"
        >
          登入
        </button>
      </VForm>
    </div>
  </section>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';

const { VITE_URL } = import.meta.env;

export default {
  components: {
    PageBanner,
  },
  data() {
    return {
      pageTitle: {
        title: '後台管理',
      },

      user: {
        username: '',
        password: '',
      },
      isProcessing: false,
    };
  },
  methods: {
    login() {
      this.isProcessing = true;
      const url = `${VITE_URL}admin/signin`;
      this.$http
        .post(url, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(
              expired,
            )};`;
            this.$router.push('/admin/products');
            this.$swal({
              title: res.data.message,
              icon: 'success',
              showConfirmButton: false,
            });
          }
        })
        .catch((err) => {
          this.$swal({
            title: err.response.data.message,
            icon: 'error',
            showConfirmButton: false,
          });
          this.isProcessing = false;
        });
    },
  },
};
</script>
