<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<script>
import { RouterView } from 'vue-router';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components: {
    RouterView,
    HeaderComponent,
    FooterComponent,
  },
};
</script>
