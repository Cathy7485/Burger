import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import axios from 'axios';
const { VITE_URL, VITE_PATH } = import.meta.env;

const cartStore = defineStore('cart',{
  state: () => {
    return {
      carts: {},
      total: 0,
      final_total: 0,

      products: [],
      productId: "",

      data: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    }
  },
  actions: {
    getCart() {
      axios.get(`${VITE_URL}api/${VITE_PATH}/cart`)
      .then(res =>{
        this.carts = res.data.data.carts; 
        this.total = res.data.data.total; 
        this.final_total = res.data.data.final_total;  
      })
      .catch((err) => {
        swal.fire({
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
        })
      });
    },
    addToCart (product_id, qty = 1) {
      const data = {
        product_id,
        qty
      };
      axios.post(`${VITE_URL}api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          swal.fire({
            icon: 'success',
            title: `${res.data.message}`,
            showConfirmButton: false,
          })
          this.getCart();
        })
        .catch(err => {
          swal.fire({
            icon: 'error',
            title: `${err.response.data.message}`,
            showConfirmButton: false,
          })
        })
    },
    deleteItem(item) {
      axios.delete(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`)
        .then((res) => {
          this.getCart();
          swal.fire({
            title: `${res.data.message}`,
            icon: "success",
            showConfirmButton: false,
          });
        })
        .catch((err) =>
          swal.fire({
            icon: 'error',
            title: `${err.response.data.message}`,
            showConfirmButton: false,
          })
        );
    },

    updateCartItem(item) {
      const data = {
        product_id: item.product.id, // 產品的id
        qty: item.qty,
      };
      axios
        .put(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          swal.fire({
            title: `${res.data.message}`,
            icon: "success",
            showConfirmButton: false,
          });
          this.getCart();
        })
        .catch((err) => 
          swal.fire({
            icon: 'error',
            title: `${err.response.data.message}`,
            showConfirmButton: false,
          })
        );
    },
  },
})

export default cartStore
