import { defineStore } from "pinia";
import axios from 'axios';
const { VITE_URL, VITE_PATH } = import.meta.env;

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
          alert(err.response.data.message);
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