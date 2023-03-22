<template>
  <PageBanner :pageTitle="pageTitle"></PageBanner>
  <section id="page-content" class="container">
    <div id="checkOrder" class="row">
      <div class="col-lg-8 m-auto">
        <div class="form">
          <label for="idNum" class="form-label">訂單編號：</label>
          <input type="text" id="idNum" class="form-control" placeholder="請輸入訂單編號" v-model="orderNum">
          <button type="button" class="btn btn-primary" @click="searchOrder">送出</button>
        </div>
				<div class="query" >
					<div class="title">查詢結果</div>
					<div class="result" v-if="orderNum">
						<div class="d-inline-block w-50">
							訂單日期：{{ orderResult.date }}
						</div>
						<div class="d-inline-block w-50">
							訂單編號：{{ orderResult.id }}
						</div>
						<div class="d-inline-block w-50">
							訂單狀態：<span>{{ orderResult.state ? '已付款' : '未付款' }}</span>
						</div>
						<!-- <div>
							訂單內容：
							<div>
								<div>品名：{{ orderResult.products }}</div>  
								<div>價錢：{{ orderResult.products.orderNum.price }}</div> 
							</div>
						</div> -->
						<div>數量：{{ orderResult.num }}</div>
						<div>
							總金額：{{ orderResult.total }}
						</div>
						<div>
							<!-- 訂購人：{{ orderResult.user }} -->
						</div>
					</div>
					<div class="text-center" v-else>請輸入訂單編號查詢訂單。</div>
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
        title: "訂單查詢",
      },
			orders:[],
			orderNum: '',
			orderResult: {},
    };
  },
  components: {
    PageBanner,
  },
	methods:{
		getOrders(){
      this.$http
        .get(`${VITE_URL}api/${VITE_PATH}/orders`)
					.then((res) => {
						console.log(res.data.orders)
						this.orders = res.data.orders;
					})
					.catch((err) => {
						console.log(err.response.data.message);
					});
		},
		searchOrder() {
			let result = '';
			result = this.orders.filter( i=>{
				if(this.orderNum === i.id){
					return i
				}
			})
			let newYear = new Date(result[0].create_at * 1000).getFullYear();
			let newMonth = new Date(result[0].create_at * 1000).getMonth();
			let newDay = new Date(result[0].create_at * 1000).getDate();
			let newHour = new Date(result[0].create_at * 1000).getMinutes();
			let newMinute =  new Date(result[0].create_at * 1000).getMinutes();

			this.orderResult.date = `${newYear}-${newMonth}-${newDay},${newHour}:${newMinute}`
			this.orderResult.id = result[0].id;
			this.orderResult.state = result[0].is_paid;
			this.orderResult.products = result[0].products;
			this.orderResult.num = result[0].num;
			this.orderResult.total = result[0].total;
			this.orderResult.user = result[0].user;
		}
	},
	mounted (){
		this.getOrders();
	}
};
</script>
