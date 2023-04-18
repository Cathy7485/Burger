<template>
  <routerView/>
</template>
<style lang="scss">
// 推薦使用 CDN，因為 svg 不一定可以從 node_modules 導出
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css");
</style>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init();
  },
};
</script>

