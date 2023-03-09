<template>
	<PageBanner :pageTitle="pageTitle"></PageBanner>
	<section id="page-content" class="container">
		<table class="table align-middle">
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
							<button
								type="button"
								class="btn btn-outline-danger btn-sm"
								@click="deleteItem(item)"
								:disabled="item.id === loadingItem"
							>
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
							<div class="input-group input-group-sm">
								<select
									name=""
									id=""
									class="form-select"
									v-model="item.qty"
									@change="updateCartItem(item)"
									:disabled="item.id === loadingItem"
								>
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
				<tr>
					<td colspan="3" class="text-end">總計</td>
					<td class="text-end">{{ cart.total }}</td>
				</tr>
				<tr>
					<td colspan="3" class="text-end text-success">折扣價</td>
					<td class="text-end text-success">{{ cart.final_total }}</td>
				</tr>
			</tfoot>
		</table>
	</section>
</template>

<script>
import PageBanner from '../../components/PageBanner.vue'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data(){
    return{
			pageTitle: {
				title: '購物車'
			},

      products: [],
      productId: '',
      cart: {},
      loadingItem: '', //存id

      form: {
				user: {
					name: '',
					email: '',
					tel: '',
					address: '',
				},
				message: '',
			},
    }
  },
	components:{
		PageBanner,
	},
  methods:{
    getCarts() {
      this.$http.get(`${VITE_URL}api/${VITE_PATH}/cart`)
        .then(res => {
					console.log(`${VITE_URL}api/${VITE_PATH}/cart`)
          this.cart = res.data.data;
        })
        .catch(err => alert(err.res.data.message))
    },
    updateCartItem(item){ 
      const data = {
        product_id: item.product.id, // 產品的id
        qty: item.qty,
      };
      this.loadingItem = item.id; // 購物車的id
      this.$http.put(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`, {data})
        .then(res => {
          alert(res.data.message);
          this.loadingItem = '';
          this.getCarts();
        })
        .catch(err => alert(err.res.data.message))
    },
    deleteItem(item) { 
      this.loadingItem = item.id;
      this.$http.delete(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`)
        .then(res => {
          alert(res.data.message);
          this.loadingItem = '';
          this.getCarts();
        })
        .catch(err => alert(err.res.data.message))
    },
    onSubmit(){
      const order = this.form;
      this.$http.post(`${VITE_URL}api/${VITE_PATH}/order`, { order })
        .then(res => {
          this.getCarts();
          alert(res.data.message);
          this.$refs.form.resetForm();
        })
        .catch(err => console.log(err))
    }  
  },
  mounted(){
    this.getCarts();
  }
}

</script>