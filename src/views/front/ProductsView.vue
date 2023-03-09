<template>
  <PageBanner :pageTitle="pageTitle"></PageBanner>
  <section id="page-content" class="container">
    <ul id="product-list" class="row">
      <li
        class="product-item col-lg-4 col-md-6"
        v-for="product in products"
        :key="product.id"
      >
        <div class="img">
          <img :src="product.imageUrl" width="200" alt="" />
        </div>
        <div class="title">{{ product.title }}</div>
        <div class="btn">
          <RouterLink
            :to="`/product/${product.id}`"
            class="btn btn-outline-secondary me-2"
            >產品細節</RouterLink
          >
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import PageBanner from "../../components/PageBanner.vue";
import { RouterLink } from "vue-router";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      pageTitle: {
        title: "餐點菜單",
      },
    };
  },
  components: {
    RouterLink,
    PageBanner,
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${VITE_URL}api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err.res.data.message);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
