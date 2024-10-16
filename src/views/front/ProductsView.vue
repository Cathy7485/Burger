<template>
  <PageBanner :page-title="pageTitle" />
  <section
    id="page-content"
    ref="formContainer"
    class="container vl-parent"
  >
    <ul class="products-list row">
      <li
        v-for="product in products"
        :key="product.id"
        class="col-lg-4 col-md-6"
      >
        <div class="product-page-item">
          <div class="img">
            <img
              :src="product.imageUrl"
              width="200"
              :alt="product.title"
            >
          </div>
          <div class="title">
            <span class="mb-2">{{ product.title }}</span><br>
          </div>
          <RouterLink
            :to="`/product/${product.id}`"
            class="more-btn"
          >
            more
          </RouterLink>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import PageBanner from '@/components/PageBanner.vue';
import productStore from '@/stores/productStore';

export default {
  components: {
    RouterLink,
    PageBanner,
  },
  data() {
    return {
      pageTitle: {
        title: '餐點菜單',
      },
      fullPage: false,
    };
  },
  computed: {
    ...mapState(productStore, ['products']),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions(productStore, ['getProducts']),
  },
};
</script>
