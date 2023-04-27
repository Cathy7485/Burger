<template>
  <PageBanner :pageTitle="pageTitle"></PageBanner>
  <section id="page-content" class="container vl-parent" ref="formContainer">
    <ul id="product-list" class="row">
      <li
        class="product-item col-lg-4 col-md-6"
        v-for="product in products"
        :key="product.id"
      >
        <div class="img">
          <img :src="product.imageUrl" width="200" :alt="product.title" />
        </div>
        <div class="title">
          <span class="mb-2">{{ product.title }}</span
          ><br />
          <!-- <span class="price">NT {{ product.price }}</span> -->
        </div>
        <div class="">
          <RouterLink :to="`/product/${product.id}`" class="btn"
            >more</RouterLink
          >
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import PageBanner from "@/components/PageBanner.vue";
import { RouterLink } from "vue-router";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      pageTitle: {
        title: "餐點菜單",
      },
      fullPage: false,
    };
  },
  components: {
    RouterLink,
    PageBanner,
  },
  methods: {
    getProducts() {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer, //不要滿版，需要設定一個vi-parent，只loading該區塊
        canCancel: false,
        onCancel: this.onCancel,
      });
      this.$http
        .get(`${VITE_URL}api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
          loader.hide();
        })
        .catch((err) => {
					this.$swal({
						title: err.response.data.message,
						icon: 'error',
						showConfirmButton: false,
					})
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
