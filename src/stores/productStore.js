import { defineStore } from "pinia";
import axios from 'axios';
const { VITE_URL, VITE_PATH } = import.meta.env;

// 目前這個環境不屬於Vue
export default defineStore('productStore',{
  state: () =>({
    productsData: [],
    page: {},
  }),
  actions: {
    getProducts(pages = 1) { //預設頁數是1
      const url = `${VITE_URL}api/${VITE_PATH}/admin/products/?page=${pages}`;
      axios.get(url)
        .then((res) => {
          this.productsData = res.data.products;
          // this.page = res.data.pagination;
        })
        .catch((err) => {
          console.log(err.response.data.message);
          this.$router.push('/login')
        })
    },
  },
  getters: {
    products: ({ productsData })=>{
      return productsData
    }
  }
})