<template>
  <PageBanner :pageTitle="pageTitle"></PageBanner>
  <section id="page-content" class="container vl-parent" ref="formContainer">
    <table class="table">
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td><img :src="product.imageUrl" width="100" alt="" /></td>
          <td>{{ product.title }} <br> NT {{ product.price  }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="()=>addToCart(product.id)"
            >
            <i class="fas fa-spinner fa-pulse" v-if="product.id === loadingStatus.loadingItem"></i>
              加入購物車
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapActions,mapState } from "pinia";
import { RouterLink } from "vue-router";
import PageBanner from "../../components/PageBanner.vue";
import cartStore from "../../stores/cart";
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
			const loader = this.$loading.show({
				container: this.fullPage ? null : this.$refs.formContainer, //不要滿版，需要設定一個vi-parent，只loading該區塊
				canCancel: false,
				onCancel: this.onCancel,
			});
			const { id } = this.$route.params;
      this.$http
				.get(`${VITE_URL}api/${VITE_PATH}/products/all`)
				.then((res) => {
					this.products = res.data.products;
					this.isLoading = false;
					loader.hide();
				})
				.catch((err) => {
					console.log(err.response.data.message);
				});
    },
    // addToCart(id) {
    //   const data = {
    //     product_id: id,
    //     qty: 1,
    //   };
    //   this.$http
    //     .post(`${VITE_URL}api/${VITE_PATH}/cart`, { data })
    //     .then((res) => {
    //       this.$swal({
    //         title: res.data.message,
    //         icon: "success",
    //         showConfirmButton: false,
    //       });
    //     });
    // },
    ...mapActions(cartStore, ["addToCart"]),
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    ...mapState(cartStore, ['loadingStatus'])
  }
};
</script>
