<template>
	<PageBanner :pageTitle="pageTitle"></PageBanner>
	<section id="page-content" class="container vl-parent" ref="formContainer">
		<ul id="product-list" class="row">
			<li 
				class="product-item col-lg-4 col-md-6" 
				v-for="product in products" 
				:key="product.id">
				<div class="img">
					<img 
						:src="product.imageUrl" 
						width="200" 
						:alt="product.title" />
				</div>
				<div class="title">
					<span class="mb-2">{{ product.title }}</span><br />
				</div>
				<div class="">
					<RouterLink :to="`/product/${product.id}`" class="btn">more</RouterLink>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import PageBanner from "@/components/PageBanner.vue";
import productStore from '@/stores/productStore';
// const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
	data() {
		return {
			pageTitle: {
				title: "餐點菜單",
			},
			fullPage: false,
		};
	},
	components: {
		RouterLink,
		PageBanner,
	},
	methods: {
		...mapActions(productStore, ['getProducts']),
	},
	computed: {
		...mapState(productStore, ['products']),
	},
	mounted() {
		this.getProducts();
	},
};
</script>
