<template>
	<div class="container">
		這是產品列表頁面
		<table class="table">
			<tbody>
				<tr v-for="product in products" :key="product.id">
					<td>{{ product.title }}</td>
					<td><img :src="product.imageUrl" width="200" alt=""></td>
					<td>
						<RouterLink :to="`/product/${product.id}`"
						class="btn btn-outline-secondary">產品細節</RouterLink>
						<button type="button" class="btn btn-outline-primary" 
						@click="addToCart(product.id)">加入購物車</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_PATH }  = import.meta.env

export default{
  data () {
    return {
      products: [] 
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_URL}api/${ VITE_PATH }/products/all`)
      .then((res) =>{
        this.products = res.data.products 
      })
    },
    addToCart(id){
      const data = {
        product_id: id,
        qty: 1
      }

      this.$http.post(`${VITE_URL}api/${ VITE_PATH }/cart`,{ data })
        .then((res)=> {
          this.$swal({
            title: res.data.message,
            icon : 'success',
            showConfirmButton: false,
          })
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>