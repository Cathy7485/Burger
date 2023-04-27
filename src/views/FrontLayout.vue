<template>
  <HeaderComponent />
    <RouterView />
  <FooterComponent />
</template>

<script>
import { RouterView } from "vue-router"
import HeaderComponent from "../components/HeaderComponent.vue"
import PageBanner from "../components/PageBanner.vue"
import FooterComponent from "../components/FooterComponent.vue"

export default {
  components: {
    RouterView,
		HeaderComponent,
		PageBanner,
		FooterComponent,
  },
};
</script>
