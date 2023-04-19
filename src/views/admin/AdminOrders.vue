<template>
  <div id="main" class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">訂單日期</th>
          <th>訂單編號</th>
          <th width="120">訂購人</th>
          <th width="120"></th>
          <th width="100">狀態</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody v-for="order in orders" :key="order.id">
        <tr>
          <td>
            <span class="">{{ switchDate(order.create_at) }}</span>
          </td>
          <td>{{ order.id }}</td>
          <td>{{ order.user.name }}</td>
          <td>{{ order.user.cartTotal }}</td>
          <td>
            <span class="text-success">{{
              order.is_paid ? "已付款" : "未付款"
            }}</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                id="viewBtn"
                class="btn btn-outline-secondary btn-sm"
                @click="() => openModal('check', order)"
              >
                檢視
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="() => openModal('del', order)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <productPagination
      :pages="pages"
      :get-data="getOrders"
      @change-page="getOrders"
    ></productPagination>
  </div>
  <!-- Modal -->
  <div
    id="orderModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <order-modal
      :temp-product="tempProduct"
      :update-product="updateProduct"
    ></order-modal>
  </div>
  <div
    id="deleteModal"
    ref="deleteModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <delete-modal
      :temp-product="tempProduct"
      :delete-product="deleteProduct"
    ></delete-modal>
  </div>
  <!-- Modal -->
</template>

<script>
import { Modal } from "bootstrap";
import { mapActions, mapState } from "pinia";
import orderStore from "@/stores/orderStore";
import orderModal from "@/components/orderModal.vue";
import deleteModal from "@/components/deleteModal.vue";
import productPagination from "@/components/productPagination.vue";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      tempProduct: {
        imagesUrl: [],
      },
      page: {}, 
    };
  },
  components: {
    orderStore,
    orderModal,
    deleteModal,
    productPagination,
  },
  computed: {
    ...mapState(orderStore, ["orders", "pages"]),
  },
  methods: {
    ...mapActions(orderStore, ["getOrders"]),
    deleteProduct() {
      const url = `${VITE_URL}api/${VITE_PATH}/admin/order/${this.tempProduct.id}`;
      this.$http
        .delete(url)
        .then(() => {
          this.getOrders(); //重新取得訂單資料
          this.deleteModal.hide();
          alert("刪除成功！");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    openModal(status, order) {
      if (status === "check") {
        this.orderModal.show();
        this.tempProduct = { ...order };
      } else if (status === "del") {
        this.deleteModal.show();
        this.tempOrder = { ...order }; // 取id使用
      }
    },
    switchDate(timestamp) {
      let date = new Date(timestamp * 1000);
      let formatted_date = date.toISOString().slice(0, 10);
      return formatted_date;
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = token;
    this.getOrders();
    this.orderModal = new Modal("#orderModal");
    this.deleteModal = new Modal("#deleteModal");
  },
};
</script>
