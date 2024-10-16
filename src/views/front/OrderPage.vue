<template>
  <PageBanner :page-title="pageTitle" />
  <section
    id="page-content"
    ref="formContainer"
    class="container vl-parent"
  >
    <div
      id="order-list"
      class="row"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="order-item col-xl-3 col-lg-4 col-sm-6 gy-4"
      >
        <div class="img">
          <img
            :src="product.imageUrl"
            width="100"
            :alt="product.title"
          >
        </div>
        <div class="text-center mb-4">
          <div class="title">
            {{ product.title }}
          </div>
          <span class="price">NT {{ product.price }}</span>
        </div>
        <button
          type="button"
          class="order-btn"
          @click="() => addToCart(product.id)"
        >
          加入購物車
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'pinia';
import PageBanner from '@/components/PageBanner.vue';
import cartStore from '@/stores/cartStore';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    PageBanner,
  },
  data() {
    return {
      products: [],
      pageTitle: {
        title: '線上點餐',
      },
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        onCancel: this.onCancel,
      });
      // const { id } = this.$route.params;
      this.$http
        .get(`${VITE_URL}api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
          loader.hide();
        })
        .catch((err) => {
          this.$swal({
            title: err.response.data.message,
            icon: 'error',
            showConfirmButton: false,
          });
        });
    },
    ...mapActions(cartStore, ['addToCart']),
  },
};
</script>
