<template>
	<div id="main" class="container">
		<div class="text-end mt-4">
			<button type="button" class="btn btn-primary" @click="() => openModal('add')">
				建立新的產品
			</button>
		</div>
		<table class="table mt-4">
			<thead>
				<tr>
					<th width="120">分類</th>
					<th>產品名稱</th>
					<th width="120">原價</th>
					<th width="120">售價</th>
					<th width="100">是否啟用</th>
					<th width="120">編輯</th>
				</tr>
			</thead>
			<tbody v-for="product in products" :key="product.id">
				<tr>
					<td>
						<span class="badge bg-secondary">{{ product.category }}</span>
					</td>
					<td>{{ product.title }}</td>
					<td class="text-start">{{ product.origin_price }}</td>
					<td class="text-start">{{ product.price }}</td>
					<td>
						<span class="text-success">{{
							product.is_enabled ? "啟用" : "未啟用"
						}}</span>
					</td>
					<td>
						<div class="btn-group">
							<button type="button" id="editBtn" class="btn btn-outline-primary btn-sm"
								@click="() => openModal('edit', product)">
								編輯
							</button>
							<button type="button" class="btn btn-outline-danger btn-sm" @click="() => openModal('del', product)">
								刪除
							</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<productPagination :pages="pages" :get-data="getProducts" @change-page="getProducts"></productPagination>
	</div>
	<!-- Modal -->
	<div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
		aria-hidden="true">
		<product-modal :temp-product="tempProduct" :is-new="isNew" :update-product="updateProduct"></product-modal>
	</div>
	<div id="deleteModal" ref="deleteModal" class="modal fade" tabindex="-1" aria-labelledby="deleteModalLabel"
		aria-hidden="true">
		<delete-modal :temp-product="tempProduct" :delete-product="deleteProduct"></delete-modal>
	</div>
	<!-- Modal -->
</template>

<script>
import { Modal } from "bootstrap";
import { mapActions, mapState } from "pinia";
import productModal from "@/components/productModal.vue";
import deleteModal from "@/components/deleteModal.vue";
import productStore from "@/stores/productStore";
import productPagination from "@/components/productPagination.vue";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
	data() {
		return {
			tempProduct: {
				imagesUrl: [],
			},
			isNew: false,
			page: {},
			deleteModal: "",
			productModal: "",
		};
	},
	components: {
		productStore,
		productModal,
		deleteModal,
		productPagination,
	},
	computed: {
		...mapState(productStore, ["products", "pages"]),
	},
	methods: {
		...mapActions(productStore, ["getProducts"]),
		updateProduct() {
			let url = `${VITE_URL}api/${VITE_PATH}/admin/product`;
			//用this.isNew 判斷API要怎麼運行
			let method = "post";
			if (!this.isNew) {
				url = `${VITE_URL}api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;
				method = "put";
			}
			this.$http[method](url, { data: this.tempProduct })
				.then(() => {
					this.getProducts();
					this.productModal.hide();
				})
				.catch((err) => {
					this.$swal({
						title: err.response.data.message,
						icon: 'error',
						showConfirmButton: false,
					})
				});
		},
		deleteProduct() {
			const url = `${VITE_URL}api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;
			this.$http
				.delete(url)
				.then(() => {
					this.getProducts();
					this.deleteModal.hide();
					this.$swal({
						title: '刪除成功！',
						icon: 'success',
						showConfirmButton: false,
					});
				})
				.catch((err) => {
					this.$swal({
						title: err.response.data.message,
						icon: 'error',
						showConfirmButton: false,
					})
				});
		},
		openModal(status, product) {
			if (status === "add") {
				this.productModal.show();
				this.isNew = true;
				this.tempProduct = {
					imagesUrl: [],
				};
			} else if (status === "edit") {
				this.productModal.show();
				this.isNew = false;
				this.tempProduct = { ...product };
			} else if (status === "del") {
				this.deleteModal.show();
				this.tempProduct = { ...product };
			}
		},
	},
	mounted() {
		this.getProducts();
		this.productModal = new Modal("#productModal");
		this.deleteModal = new Modal("#deleteModal");
	},
};
</script>
