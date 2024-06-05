<template>
	<PageBanner :pageTitle="pageTitle"></PageBanner>
	<section id="page-content" class="container vl-parent" ref="formContainer">
		<div class="row">
			<div class="col-lg-6 col-md-6">
				<div class="product-info-img">
					<div class="circle-outer">
						<img :src="product.imageUrl" :alt="product.title" />
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-md-6">
				<div class="product-info-detail">
					<span class="badge text-bg-success">{{ product.category }}</span>
					<div class="title">{{ product.title }}</div>
					<div class="price">NT {{ product.price }}</div>
					<hr />
					<div class="description">
						<div class="d-flex flex-row">
							<div class="d-block me-2" style="min-width: 90px; white-space: nowrap">
								產品描述：
							</div>
							<div class="d-block">{{ product.description }}</div>
						</div>
					</div>
					<div class="content">
						<div class="d-flex flex-row">
							<div class="d-block me-2" style="min-width: 90px; white-space: nowrap">
								產品成分：
							</div>
							<div class="d-block">{{ product.content }}</div>
						</div>
					</div>
					<div class="buttons">
						<button class="btn btn-primary me-3" type="button" @click="() => addToCart(product.id)">
							加入購物車
						</button>
						<RouterLink to="/products" class="btn btn-outline-secondary">回菜單列表</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapActions } from "pinia";
import PageBanner from "@/components/PageBanner.vue";
import cartStore from "@/stores/cartStore";
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
	data() {
		return {
			product: {},
			pageTitle: {
				title: "產品內容",
			},
		};
	},
	components: {
		PageBanner,
	},
	methods: {
		getProduct() {
			const loader = this.$loading.show({
				container: this.fullPage ? null : this.$refs.formContainer,
				canCancel: false,
				onCancel: this.onCancel,
			});
			const { id } = this.$route.params;
			this.$http
				.get(`${VITE_URL}api/${VITE_PATH}/product/${id}`)
				.then((res) => {
					this.product = res.data.product;
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
		this.getProduct();
	},
};
</script>
