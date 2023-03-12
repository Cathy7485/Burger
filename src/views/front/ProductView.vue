<template>
  <PageBanner :pageTitle="pageTitle"></PageBanner>
  <section id="page-content" class="container">
    
    <h2>{{ product.title }}</h2>
    <img :src="product.imageUrl" class="w-50" alt="" />
  </section>
</template>

<script>
import PageBanner from "../../components/PageBanner.vue";
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      product: {},
      pageTitle: {
        title: "產品內容",
      },
    };
  },
  components: {
    PageBanner,
  },
  methods: {
    getProduct() {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer, //不要滿版，需要設定一個vi-parent，只loading該區塊
        canCancel: false,
        onCancel: this.onCancel
      })
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_URL}api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.isLoading = false;
          loader.hide()
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
