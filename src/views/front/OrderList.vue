<template>
  <PageBanner :pageTitle="pageTitle"></PageBanner>
  <section id="page-content" class="container">
    <div id="checkOrder" class="row">
      <div class="col-lg-8 m-auto">
        <div class="form">
          <label for="idNum" class="form-label">訂單編號：</label>
          <input type="text" id="idNum" class="form-control" placeholder="請輸入訂單編號">
          <button type="button" class="btn btn-primary">送出</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageBanner from "../../components/PageBanner.vue";

export default {
  data() {
    return {
      pageTitle: {
        title: "訂單查詢",
      },
    };
  },
  components: {
    PageBanner,
  },
};
</script>
