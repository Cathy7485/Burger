<template>
	<PageBanner :pageTitle="pageTitle"></PageBanner>
	<section id="page-content" class="container vl-parent" ref="formContainer">
		<div id="order-list" class="row">
			<div class="order-item col-xl-3 col-lg-4 col-sm-6 gy-4" v-for="product in products" :key="product.id">
				<div class="img">
					<img :src="product.imageUrl" width="100" :alt="product.title" />
				</div>
				<div class="text-center mb-4">
					<div class="title">{{ product.title }}</div>
					<span class="price">NT {{ product.price }}</span>
				</div>
				<button type="button" class="order-btn" @click="() => addToCart(product.id)">
					加入購物車
				</button>
			</div>
		</div>
	</section>
</template>

<script>
import { mapActions } from "pinia";
import { RouterLink } from "vue-router";
import PageBanner from "@/components/PageBanner.vue";
import cartStore from "@/stores/cartStore";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
	data() {
		return {
			products: [],
			pageTitle: {
				title: "線上點餐",
			},
		};
	},
	components: {
		RouterLink,
		PageBanner,
	},
	methods: {
		getProducts() {
			const loader = this.$loading.show({
				container: this.fullPage ? null : this.$refs.formContainer, //不要滿版，需要設定一個vi-parent，只loading該區塊
				canCancel: false,
				onCancel: this.onCancel,
			});
			const { id } = this.$route.params;
			this.$http
				.get(`${VITE_URL}api/${VITE_PATH}/products/all`)
				.then((res) => {
					this.products = res.data.products;
					this.isLoading = false;
					loader.hide();
				})
				.catch((err) => {
					this.$swal({
						title: err.response.data.message,
						icon: "error",
						showConfirmButton: false,
					});
				});
		},
		...mapActions(cartStore, ["addToCart"]),
	},
	mounted() {
		this.getProducts();
	},
};
</script>
