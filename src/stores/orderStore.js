import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('orderStore', {
  state: () => ({
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
          this.$swal.fire({
            icon: 'error',
            title: `${err.response.data.message}`,
            showConfirmButton: false,
          });
        });
    },
    createDate(ms) {
      const timer = new Date(ms * 1000);
      const y = timer.getFullYear();
      const m = timer.getMonth() + 1 >= 10
        ? timer.getMonth() + 1
        : `0${timer.getMonth() + 1}`;
      const d = timer.getDate() >= 10 ? timer.getDate() : `0${timer.getDate()}`;
      return `${y}/${m}/${d}`;
    },
  },
  getters: {
    orders: ({ ordersData }) => ordersData,
    pages: ({ pagination }) => pagination,
  },
});
