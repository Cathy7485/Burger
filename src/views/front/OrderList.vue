<template>
	<PageBanner :pageTitle="pageTitle"></PageBanner>
	<section id="page-content" class="container">
		<div id="checkOrder" class="row">
			<div class="col-lg-8 m-auto">
				<div class="form">
					<label for="idNum" class="form-label">訂單編號：</label>
					<input type="text" id="idNum" class="form-control" placeholder="請輸入訂單編號" v-model.lazy="orderNum">
					<button type="button" class="btn btn-primary" @click.prevent="searchOrder">送出</button>
				</div>
				<div class="query">
					<div class="title">查詢結果</div>
					<div class="text-center" v-if="orderNum === ''">請輸入訂單編號查詢訂單。</div>
					<div class="result" v-else>
						<div class="row">
							<div class="col-lg-6">
								<div class="mb-2">
									<span class="fw-bold">訂單日期：</span>
									{{ orderResult.date }}
								</div>
								<div class="mb-2">
									<span class="fw-bold">訂單編號：</span>
									{{ orderResult.id }}
								</div>
								<div class="mb-2">
									<span class="fw-bold">訂單狀態：</span>
									<span>{{ orderResult.state ? '已付款' : '未付款' }}</span>
								</div>
								<div class="mb-2">
									<span class="fw-bold mb-2">訂單內容：</span>
									<div class="px-3 py-2 bg-light border-bottom" v-for="item in orderResult.products" :key="item.id">
										<div>品名：{{ item.product.title }}</div>
										<div>數量：{{ item.qty }}</div>
										<div>價錢：{{ item.final_total }}</div>
									</div>
								</div>
								<div class="h4">
									總金額：{{ orderResult.total }} 元
								</div>
							</div>
							<div class="col-lg-6">
								<div class="fw-bold mb-2">訂購人：</div>
								<ul class="border">
									<li class="p-2 me-3 border-bottom">姓名：{{ orderUser.name }}</li>
									<li class="p-2 me-3 border-bottom">電話：{{ orderUser.tel }}</li>
									<li class="p-2 me-3 border-bottom">信箱：{{ orderUser.email }}</li>
									<li class="p-2 me-3 border-bottom">地址：{{ orderUser.address }}</li>
								</ul>
								<router-link to="/" class="mt-3 btn btn-outline-secondary">回首頁</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import PageBanner from "@/components/PageBanner.vue";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
	data() {
		return {
			pageTitle: {
				title: "訂單查詢",
			},
			orders: [],
			orderNum: '',
			orderResult: {},
			orderUser: {},
		};
	},
	components: {
		PageBanner,
	},
	methods: {
		getOrders() {
			this.$http
				.get(`${VITE_URL}api/${VITE_PATH}/orders`)
				.then((res) => {
					this.orders = res.data.orders;
				})
				.catch((err) => {
					this.$swal({
						title: err.response.data.message,
						icon: 'error',
						showConfirmButton: false,
					})
				});
		},
		searchOrder() {
			let result = '';
			result = this.orders.filter(i => {
				if (this.orderNum === i.id) {
					return i
				}
			})
			const nowTime = new Date(result[0].create_at * 1000);
			let newYear = nowTime.getFullYear();
			let newMonth = nowTime.getMonth() + 1;
			let newDay = nowTime.getDate();
			let newHour = nowTime.getHours();
			let newMinute = nowTime.getMinutes();

			this.orderResult.date = `${newYear}/${newMonth}/${newDay} 時間：${newHour}:${newMinute}`
			this.orderResult.id = result[0].id;
			this.orderResult.state = result[0].is_paid;
			this.orderResult.products = result[0].products;
			this.orderResult.num = result[0].num;
			this.orderResult.total = result[0].total;
			this.orderUser = result[0].user;
		}
	},
	mounted() {
		this.getOrders();
	}
};
</script>
