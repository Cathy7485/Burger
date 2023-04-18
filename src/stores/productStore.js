import { defineStore } from "pinia";
import axios from 'axios';
const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('productStore',{
  state: () =>({
    productsData: [],
    pagination: {},
  }),
  actions: {
    getProducts(pages = 1) { 
      const url = `${VITE_URL}api/${VITE_PATH}/admin/products/?page=${pages}`;
      axios.get(url)
        .then((res) => {
          this.productsData = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
  },
  getters: {
    products: ({ productsData })=>{
      return productsData
    },
		pages: ({ pagination })=>{
      return pagination
    },
  }
})