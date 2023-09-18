<template>
	<PageBanner :pageTitle="pageTitle"></PageBanner>
	<section id="page-content" class="container">
		<div class="text-center" v-if="total == 0">
			<p class="h2 mb-3">購物車內還沒有商品，請先點餐！</p>
			<RouterLink to="/order" class="btn btn-primary mt-5">立即點餐</RouterLink>
		</div>
		<div v-else>
			<ul class="cartStep">
				<li class="stepItem">
					<p>Step <span class="numText">1</span></p>
					<p>確認訂單</p>
				</li>
				<li class="stepItem active">
					<p>Step <span class="numText">2</span></p>
					<p>填寫資料</p>
				</li>
				<li class="stepItem">
					<p>Step <span class="numText">3</span></p>
					<p>訂單結帳</p>
				</li>
				<li class="stepItem">
					<p>Step <span class="numText">4</span></p>
					<p>完成訂購</p>
				</li>
			</ul>
			<div id="product-pay">
				<div class="row">
					<div class="col-lg-5 order-detail">
						<div class="p-2">
							<div class="block-title">
								購物車明細
							</div>
							<table class="table align-middle">
								<thead>
									<tr>
										<th>品名</th>
										<th style="width: 150px">數量/單位</th>
										<th>單價</th>
									</tr>
								</thead>
								<tbody>
									<template v-if="carts">
										<tr v-for="item in carts" :key="item.id">
											<td>
												{{ item.product.title }}
												<!-- <div class="text-success">
														已套用優惠券
													</div> -->
											</td>
											<td>
												<div>
													{{ item.qty }}
												</div>
											</td>
											<td class="text-end">
												<!-- <small class="text-success">折扣價：</small> -->
												{{ item.total.toLocaleString("zh-TW") }}
											</td>
										</tr>
									</template>
								</tbody>
								<tfoot>
									<tr class="text-danger">
										<td colspan="2" class="text-end">總計</td>
										<td class="text-end">{{ total.toLocaleString("zh-TW") }}</td>
									</tr>
									<!-- <tr>
										<td colspan="3" class="text-end text-success">折扣價</td>
										<td class="text-end text-success">{{ carts.final_total }}</td>
									</tr> -->
								</tfoot>
							</table>
						</div>
					</div>
					<div class="col-lg-7">
						<div class="p-2">
							<div class="block-title">訂購人資訊</div>
							<VForm ref="form" class="order-form" v-slot="{ errors }" @submit="onSubmit">
								<div class="mb-3">
									<label for="name" class="form-label"><span class="text-danger me-1">*</span>訂購人姓名</label>
									<VField id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
										placeholder="請輸入姓名" v-model="data.user.name" rules="required"></VField>
									<ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
								</div>

								<div class="mb-3">
									<label for="tel" class="form-label"><span class="text-danger me-1">*</span>訂購人手機</label>
									<VField id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
										placeholder="請輸入手機號碼" v-model="data.user.tel" :rules="phone"></VField>
									<ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
								</div>

								<div class="mb-3">
									<label for="email" class="form-label"><span class="text-danger me-1">*</span>Email</label>
									<VField id="email" name="email" type="email" class="form-control"
										:class="{ 'is-invalid': errors['email'] }" v-model="data.user.email" placeholder="請輸入 Email"
										rules="required|email"></VField>
									<ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
								</div>

								<div class="mb-3">
									<label for="address" class="form-label"><span class="text-danger me-1">*</span>訂購人地址</label>
									<VField id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
										placeholder="請輸入地址" v-model="data.user.address" rules="required"></VField>
									<ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
								</div>

								<div class="mb-3">
									<label for="message" class="form-label">留言</label>
									<textarea id="message" class="form-control" v-model="data.message" cols="30" rows="10"></textarea>
								</div>
								<div class="text-end">
									<button type="submit" class="btn btn-primary">送出訂單</button>
								</div>
							</VForm>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import cartStore from "@/stores/cartStore";
import PageBanner from "@/components/PageBanner.vue";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
	data() {
		return {
			pageTitle: {
				title: "購物車結帳",
			},
		};
	},
	components: {
		PageBanner,
	},
	computed: {
		...mapState(cartStore, ["carts", "total", "final_total", "data"]),
	},
	methods: {
		...mapActions(cartStore, ["getCart"]),
		onSubmit() {
			const data = this.data;
			this.$refs.form.resetForm();
			this.$http
				.post(`${VITE_URL}api/${VITE_PATH}/order`, { data })
				.then((res) => {
					const orderId = res.data.orderId;
					this.$router.push(`/pay/${orderId}`);
					this.$swal({
						title: `建立訂單成功`,
						icon: "success",
						showConfirmButton: false,
					});
					this.$refs.form.resetForm();
					this.getCart();
				})
				.catch((err) => {
					this.$swal({
						title: `建立訂單錯誤`,
						icon: "error",
						showConfirmButton: false,
					});
				});

		},
		phone(value) {
			const phoneNumber = /^(09)[0-9]{8}$/;
			return phoneNumber.test(value) ? true : "需要正確的電話號碼";
		},
	},
	mounted() {
		this.getCart();
	},
};
</script>
