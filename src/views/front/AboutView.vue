<template>
  <PageBanner :pageTitle="pageTitle"></PageBanner>
  <section id="page-content" class="container">
    尚未建置</section>
</template>

<script>
import PageBanner from "../../components/PageBanner.vue"
export default {
  data() {
    return {
      pageTitle: {
        title: "品牌故事",
      },
      fullPage: false, // loading不要滿版
    };
  },
  components: {
    PageBanner,
  },
  
};
</script>
