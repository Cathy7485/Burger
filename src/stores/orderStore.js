import { defineStore } from "pinia";
import axios from 'axios';
const { VITE_URL, VITE_PATH } = import.meta.env;

// 目前這個環境不屬於Vue
export default defineStore('orderStore',{
	state: () =>({
    ordersData: [],
    pagination: {},
  }),
	actions: {
		getOrders(pages = 1) { 
      const url = `${VITE_URL}api/${VITE_PATH}/admin/orders/?page=${pages}`;
      axios.get(url)
        .then((res) => {
          this.ordersData = res.data.orders;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        })
    },
	},
	getters: {
		orders: ({ ordersData })=>{
      return ordersData
    },
		pages: ({ pagination })=>{
      return pagination
    },
	}
})