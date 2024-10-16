<template>
  <PageBanner :page-title="pageTitle" />
  <section
    id="page-content"
    class="container"
  >
    <div class="row">
      <div class="col-lg-12">
        <div>
          <ul class="cartStep">
            <li class="stepItem">
              <p>Step <span class="numText">1</span></p>
              <p>確認訂單</p>
            </li>
            <li class="stepItem">
              <p>Step <span class="numText">2</span></p>
              <p>填寫資料</p>
            </li>
            <li class="stepItem">
              <p>Step <span class="numText">3</span></p>
              <p>訂單結帳</p>
            </li>
            <li class="stepItem active">
              <p>Step <span class="numText">4</span></p>
              <p>完成訂購</p>
            </li>
          </ul>
          <div class="completed-text">
            <div class="title">
              訂單已完成！感謝您的訂購！
            </div>
            <div class="text">
              我們將盡快準備您的餐點，請留意您的手機號碼！
            </div>
            <div>訂單資訊可由您的Email確認細節。</div>
          </div>
          <div class="text-center mt-4">
            <RouterLink
              to="/"
              class="btn btn-primary"
            >
              回首頁
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';

export default {
  components: {
    PageBanner,
  },
  data() {
    return {
      pageTitle: {
        title: '完成訂單',
      },
    };
  },
};
</script>
