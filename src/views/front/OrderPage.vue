<template>
  <PageBanner :pageTitle="pageTitle"></PageBanner>
  <section id="page-content" class="container">
    <table class="table">
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td><img :src="product.imageUrl" width="100" alt="" /></td>
          <td>{{ product.title }} <br> NT {{ product.price  }}</td>
          <td>
            <button
              type="button"
              class="btn"
              @click="addToCart(product.id)"
            >
              加入購物車
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
import PageBanner from "../../components/PageBanner.vue";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      pageTitle: {
        title: "線上點餐",
      },
    };
  },
  components: {
    RouterLink,
    PageBanner,
  },
  methods: {
    getProducts() {
      this.$http.get(`${VITE_URL}api/${VITE_PATH}/products/all`).then((res) => {
        this.products = res.data.products;
      });
    },
    addToCart(id) {
      const data = {
        product_id: id,
        qty: 1,
      };
      this.$http
        .post(`${VITE_URL}api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          this.$swal({
            title: res.data.message,
            icon: "success",
            showConfirmButton: false,
          });
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
