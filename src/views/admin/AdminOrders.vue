<template>
  <div class="main container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            訂單日期
          </th>
          <th>訂單編號</th>
          <th width="120">
            訂購人
          </th>
          <th width="120" />
          <th width="100">
            狀態
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody
        v-for="order in orders"
        :key="order.id"
      >
        <tr>
          <td>
            <span>{{ switchDate(order.create_at) }}</span>
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
                id="viewBtn"
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="openModal('check', order)"
              >
                檢視
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('del', order)"
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
    />
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
    <order-modal :temp-product="tempProduct" />
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
    />
  </div>
  <!-- Modal -->
</template>

<script>
import { Modal } from 'bootstrap';
import { mapActions, mapState } from 'pinia';
import orderStore from '@/stores/orderStore';
import orderModal from '@/components/orderModal.vue';
import deleteModal from '@/components/deleteModal.vue';
import productPagination from '@/components/productPagination.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    // orderStore,
    orderModal,
    deleteModal,
    productPagination,
  },
  emits: ['switchDate'],
  data() {
    return {
      tempProduct: {
        imagesUrl: [],
      },
      page: {},
    };
  },
  computed: {
    ...mapState(orderStore, ['orders', 'pages']),
  },
  mounted() {
    this.getOrders();
    this.orderModal = new Modal('#orderModal');
    this.deleteModal = new Modal('#deleteModal');
  },
  methods: {
    ...mapActions(orderStore, ['getOrders']),
    deleteProduct() {
      const url = `${VITE_URL}api/${VITE_PATH}/admin/order/${this.tempProduct.id}`;
      this.$http
        .delete(url)
        .then(() => {
          this.getOrders();
          this.deleteModal.hide();
          this.$swal({
            title: '刪除成功！',
            icon: 'success',
            showConfirmButton: false,
          });
        })
        .catch((err) => {
          this.$swal({
            title: err.response.data.message,
            icon: 'error',
            showConfirmButton: false,
          });
        });
    },
    openModal(status, order) {
      if (status === 'check') {
        this.orderModal.show();
        this.tempProduct = { ...order };
      } else if (status === 'del') {
        this.deleteModal.show();
        this.tempOrder = { ...order }; // 取id使用
      }
    },
    switchDate(timestamp) {
      const date = new Date(timestamp * 1000);
      // eslint-disable-next-line camelcase
      const formatted_date = date.toISOString().slice(0, 10);
      // eslint-disable-next-line camelcase
      return formatted_date;
    },
  },
};
</script>
