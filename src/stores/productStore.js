import { defineStore } from 'pinia';
import axios from 'axios';
import swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('productStore', {
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts() {
      const url = `${VITE_URL}api/${VITE_PATH}/products/all`;
      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          swal.fire({
            icon: 'error',
            title: `${err.response.data.message}`,
            showConfirmButton: false,
          });
        });
    },
  },
});
