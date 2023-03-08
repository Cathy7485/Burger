<template>
	<div class="container">
		<h2>{{ product.title }}</h2>
		<img :src="product.imageUrl" class="w-50" alt="">
	</div>
</template>

<script>
const { VITE_URL, VITE_PATH }  = import.meta.env
export default{
  data () {
    return {
      product:{}
    }
  },
  methods:{
    getProduct () {
      const { id } = this.$route.params;
      this.$http.get(`${VITE_URL}api/${VITE_PATH}/product/${id}`)
      .then(res=> {
        this.product = res.data.product
      })
      .catch((err)=>{
        console.log(err.response.data.message)
      })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>