<template>
  <PageBanner :pageTitle="pageTitle"></PageBanner>
  <section id="page-content" class="container">
    <div id="product-page" class="row">
      <div class="col-lg-6">
        <div class="img">
          <img :src="product.imageUrl" :alt="product.title" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="info">
          <span class="badge text-bg-success">{{ product.category }}</span>
          <div class="title">{{ product.title }}</div>
          <div class="price">NT {{ product.price }}</div>
          <hr>
          <div class="description">
            <div class="d-flex flex-row">
              <div class="d-block me-2" style="min-width: 90px;white-space: nowrap;">產品描述：</div>
              <div class="d-block">{{ product.description }}</div>
            </div>
          </div>
          <div class="content">
            <div class="d-flex flex-row">
              <div class="d-block me-2" style="min-width: 90px;white-space: nowrap;">產品成分：</div>
              <div class="d-block">{{ product.content }}</div>
            </div>
          </div>
          <button
            class="btn btn-primary"
            type="button"
            @click="() => addToCart(product.id)"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "pinia";
import PageBanner from "../../components/PageBanner.vue";
import cartStore from "../../stores/cart";
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
        onCancel: this.onCancel,
      });
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_URL}api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.isLoading = false;
          loader.hide();
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    ...mapActions(cartStore, ["addToCart"]),
  },
  mounted() {
    this.getProduct();
  },
};
</script>
