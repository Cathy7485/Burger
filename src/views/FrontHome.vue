<template>
	<HeaderComponent />
	<HomepageBanner />
	<section id="content">
		<RouterView />
	</section>
	<FooterComponent />
</template>

<script>
import { RouterView } from "vue-router";
import HeaderComponent from "../components/HeaderComponent.vue";
import HomepageBanner from "../components/HomepageBanner.vue";
import PageBanner from "../components/PageBanner.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
	components: {
		RouterView,
		HeaderComponent,
		HomepageBanner,
		PageBanner,
		FooterComponent,
	},
};
</script>
