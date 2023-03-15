<template>
	<PageBanner :pageTitle="pageTitle"></PageBanner>
	<section id="page-content" class="container">
		<div class="row">
			<div class="col-lg-6">
				<div class="text-center" v-if="!cart.total">
					<p class="h2 mb-3">購物車內還沒有商品，請先點餐！</p>
					<RouterLink to="/order" class="btn btn-primary">立即點餐</RouterLink>
				</div>
				<table v-else class="table align-middle">
					<thead>
						<tr>
							<th></th>
							<th>品名</th>
							<th style="width: 150px">數量/單位</th>
							<th>單價</th>
						</tr>
					</thead>
					<tbody>
						<template v-if="cart.carts">
							<tr v-for="item in cart.carts" :key="item.id">
								<td>
									<button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item)"
										:disabled="item.id === loadingItem">
										<!-- <i class="fas fa-spinner fa-pulse"></i> -->
										x
									</button>
								</td>
								<td>
									{{ item.product.title }}
									<!-- <div class="text-success">
											已套用優惠券
										</div> -->
								</td>
								<td>
									<div class="input-group input-group-sm" style="width: 65%;">
										<select name="" id="" class="form-select" v-model="item.qty" @change="updateCartItem(item)"
											:disabled="item.id === loadingItem">
											<option :value="i" v-for="i in 20" :key="'0' + i">
												{{ i }}
											</option>
										</select>
										<!-- <div class="input-group mb-3">
												<input min="1" type="number" class="form-control">
												<span class="input-group-text" id="basic-addon2">{{ }}</span>
											</div> -->
									</div>
								</td>
								<td class="text-end">
									<!-- <small class="text-success">折扣價：</small> -->
									{{ item.total }}
								</td>
							</tr>
						</template>
					</tbody>
					<tfoot>
						<tr class="text-danger">
							<td colspan="3" class="text-end">總計</td>
							<td class="text-end">{{ cart.total }}</td>
						</tr>
						<!-- <tr>
							<td colspan="3" class="text-end text-success">折扣價</td>
							<td class="text-end text-success">{{ cart.final_total }}</td>
						</tr> -->
					</tfoot>
				</table>
			</div>
			<div class="col-lg-6">
				<div id="product-order">
					<v-form ref="form" class="order-form" v-slot="{ errors }" @submit="onSubmit">
						

						<div class="mb-3">
							<label for="name" class="form-label">訂購人姓名</label>
							<v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
								placeholder="請輸入姓名" v-model="data.user.name" rules="required"></v-field>
							<error-message name="姓名" class="invalid-feedback"></error-message>
						</div>

						<div class="mb-3">
							<label for="tel" class="form-label">訂購人電話</label>
							<v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
								placeholder="請輸入電話" v-model="data.user.tel" :rules="phone"></v-field>
							<error-message name="電話" class="invalid-feedback"></error-message>
						</div>

						<div class="mb-3">
								<label for="email" class="form-label">Email</label>
								<v-field id="email" name="email" type="email" class="form-control"
									:class="{ 'is-invalid': errors['email'] }" v-model="data.user.email" placeholder="請輸入 Email"
									rules="required|email"></v-field>
								<error-message name="email" class="invalid-feedback"></error-message>
							</div>

						<div class="mb-3">
							<label for="address" class="form-label">訂購人地址</label>
							<v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
								placeholder="請輸入地址" v-model="data.user.address" rules="required"></v-field>
							<error-message name="地址" class="invalid-feedback"></error-message>
						</div>

						<div class="mb-3">
							<label for="message" class="form-label">留言</label>
							<textarea id="message" class="form-control" v-model="data.message" cols="30" rows="10"></textarea>
						</div>
						<div class="text-end">
							<button type="submit" class="btn btn-primary">送出訂單</button>
						</div>
					</v-form>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
import PageBanner from "../../components/PageBanner.vue";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
	data() {
		return {
			pageTitle: {
				title: "購物車",
			},

			products: [],
			productId: "",
			cart: {},
			loadingItem: "", //存id

			data: {
				user: {
					name: "",
					email: "",
					tel: "",
					address: "",
				},
				message: "",
			},
		};
	},
	components: {
		PageBanner,
	},
	methods: {
		getCarts() {
			this.$http
				.get(`${VITE_URL}api/${VITE_PATH}/cart`)
				.then((res) => {
					this.cart = res.data.data;
				})
				.catch((err) => console.log(err));
		},
		updateCartItem(item) {
			const data = {
				product_id: item.product.id, // 產品的id
				qty: item.qty,
			};
			this.loadingItem = item.id; // 購物車的id
			this.$http
				.put(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`, { data })
				.then((res) => {
					this.$swal({
						title: res.data.message,
						icon: "success",
						showConfirmButton: false,
					});
					this.loadingItem = "";
					this.getCarts();
				})
				.catch((err) => alert(err.response.data.message));
		},
		deleteItem(item) {
			this.loadingItem = item.id;
			this.$http
				.delete(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`)
				.then((res) => {
					this.$swal({
						title: res.data.message,
						icon: "success",
						showConfirmButton: false,
					});
					this.loadingItem = "";
					this.getCarts();
				})
				.catch((err) => console.log(err.response.data.message));
		},
		onSubmit() {
			const data = this.data;
			this.$http
				.post(`${VITE_URL}api/${VITE_PATH}/order`, { data })
				.then((res) => {
					this.$swal({
						title: res.data.message,
						icon: "success",
						showConfirmButton: false,
					});
					this.$refs.data.resetForm();
					this.getCarts();
				})
				.catch((err) => {
					console.log(err);
				});
		},
		phone(value) {
			const phoneNumber = /^(09)[0-9]{8}$/
			return phoneNumber.test(value) ? true : '需要正確的電話號碼'

		}
	},
	mounted() {
		this.getCarts();
	},
};
</script>
