import { defineStore } from 'pinia';
import axios from 'axios';
const { VITE_URL, VITE_PATH } = import.meta.env;

// 目前這個環境不屬於Vue
const cartStore = defineStore('cart',{
  // state 概念同「data」，在此可以使用箭頭函式
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0,
      loadingStatus: {
        loadingItem: '',
      },
    }
  },
  // actions 概念同「methods」
  actions: {
    // 取得購物車列表
    getCart() {
      axios.get(`${VITE_URL}api/${VITE_PATH}/cart`)
      .then(res =>{
        this.carts = res.data.data.carts; //購物車數量
        this.total = res.data.data.total; //總金額
        this.final_total = res.data.data.final_total;  //總金額
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
    },
    addToCart(product_id, qty = 1) {
      this.loadingStatus.loadingItem = product_id;
      const data = {
        product_id,
        qty
      };
      axios.post(`${VITE_URL}api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          alert(res.data.message);
          this.loadingStatus.loadingItem = '';
          this.getCart();
        });
    },

  },
  // getters 概念同「computed」
  getters: {
  
  }
})

export default cartStore 