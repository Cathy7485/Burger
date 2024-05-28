<template>
	<PageBanner :pageTitle="pageTitle"></PageBanner>
	<section id="page-content" class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="text-center" v-if="total == 0">
					<p class="h2 mb-3">購物車內還沒有商品，請先點餐！</p>
					<RouterLink to="/order" class="btn btn-primary">立即點餐</RouterLink>
				</div>
				<div v-else>
					<ul class="cartStep">
						<li class="stepItem active">
							<p>Step <span class="numText">1</span></p>
							<p>確認訂單</p>
						</li>
						<li class="stepItem">
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
					<table class="table align-middle box-outline">
						<thead>
							<tr>
								<th></th>
								<th>品名</th>
								<th style="width: 150px">數量/單位</th>
								<th>單價</th>
							</tr>
						</thead>
						<tbody>
							<template v-if="carts">
								<tr v-for="item in carts" :key="item.id">
									<td>
										<button type="button" class="btn btn-outline-danger btn-sm" @click="() => deleteItem(item)">
											<!-- <i class="fas fa-spinner fa-pulse"></i> -->
											x
										</button>
									</td>
									<td>
										{{ item.product.title }}
									</td>
									<td>
										<div class="input-group input-group-sm" style="width: 65%">
											<select name="" id="" class="form-select" v-model="item.qty" @change="() => updateCartItem(item)">
												<option :value="i" v-for="i in 20" :key="'0' + i">
													{{ i }}
												</option>
											</select>
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
								<td colspan="3" class="text-end">總計</td>
								<td class="text-end">{{ total.toLocaleString("zh-TW") }}</td>
							</tr>
						</tfoot>
					</table>
					<div class="text-end mt-4">
						<RouterLink to="/cartInfo" class="btn btn-primary">前往訂購</RouterLink>
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

export default {
	data() {
		return {
			pageTitle: {
				title: "購物車內容",
			},
		};
	},
	components: {
		PageBanner,
	},
	computed: {
		...mapState(cartStore, [
			"carts",
			"total",
			"final_total",
			"data"
		]),
	},
	methods: {
		...mapActions(cartStore, [
			"getCart",
			"updateCartItem",
			"addToCart",
			"deleteItem",
		]),
	},
	mounted() {
		this.getCart();
	},
};
</script>
