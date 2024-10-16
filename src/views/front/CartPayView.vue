<template>
  <PageBanner :page-title="pageTitle" />
  <section
    id="page-content"
    class="container"
  >
    <div class="row">
      <div class="col-lg-12">
        <div>
          <ul class="cartStep">
            <li class="stepItem">
              <p>Step <span class="numText">1</span></p>
              <p>確認訂單</p>
            </li>
            <li class="stepItem">
              <p>Step <span class="numText">2</span></p>
              <p>填寫資料</p>
            </li>
            <li class="stepItem active">
              <p>Step <span class="numText">3</span></p>
              <p>訂單結帳</p>
            </li>
            <li class="stepItem">
              <p>Step <span class="numText">4</span></p>
              <p>完成訂購</p>
            </li>
          </ul>
          <div class="row">
            <div class="col-md-6">
              <div class="orderDetail">
                <p class="title">
                  訂單細節資訊
                </p>
                <p>
                  <!-- 訂購時間：{{ order.create_at }} -->
                </p>
                <p>
                  訂單編號：{{ orderId }}
                </p>
                <ul
                  v-for="orderItem in order.products"
                  :key="orderItem.product.id"
                >
                  <li>
                    <div class="d-flex justify-content-between align-items-center mb-1">
                      <div class="title">
                        {{ orderItem.product.title }}
                      </div>
                      <div>{{ orderItem.product.price.toLocaleString("zh-TW") }} 元</div>
                    </div>
                    <div class="ps-1">
                      X {{ orderItem.qty }}
                    </div>
                  </li>
                </ul>
                <div class="d-flex justify-content-between align-items-center p-1">
                  <div>總計：</div>
                  <div>{{ total.toLocaleString("zh-TW") }} 元</div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="orderInfo">
                <ul>
                  <li class="title">
                    訂購人資訊
                  </li>
                  <li>姓名：{{ user.name }}</li>
                  <li>電話：{{ user.tel }}</li>
                  <li>信箱：{{ user.email }}</li>
                  <li>地址：{{ user.address }}</li>
                  <li>留言：{{ user.message }}</li>
                  <li>
                    訂單狀態：
                    <span class="text-danger fw-bold">
                      {{ is_paid ? "已付款" : "未付款" }}
                    </span>
                  </li>
                  <li>
                    <div class="d-inline-block me-4">
                      請選擇付款方式：
                    </div>
                    <select
                      id="payment"
                      name="payment"
                      class="form-select d-inline-block w-50"
                    >
                      <option
                        selected
                        disabled
                      >
                        請選擇
                      </option>
                      <option value="現金">
                        現金
                      </option>
                      <option value="信用卡">
                        信用卡
                      </option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <button
              type="button"
              class="btn btn-primary"
              @click="() => payOrder()"
            >
              確認付款
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
import PageBanner from '@/components/PageBanner.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    PageBanner,
  },
  data() {
    return {
      pageTitle: {
        title: '訂單結帳',
      },
      order: {},
      orderId: '',
      user: {},
      is_paid: '',
      total: '',
    };
  },
  computed: {
    ...mapState(cartStore, ['carts']),
  },
  mounted() {
    this.getOrder();
    // eslint-disable-next-line no-undef
    this.collapse = new Collapse(this.$refs.collapse, { toggle: false });
  },
  methods: {
    getOrder() {
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_URL}api/${VITE_PATH}/order/${id}`)
        .then((res) => {
          this.order = res.data.order;
          this.orderId = res.data.order.id;
          this.user = res.data.order.user;
          this.is_paid = res.data.order.is_paid;
          this.total = res.data.order.total;
        })
        .catch(() => {
          this.$swal({
            title: '資料錯誤',
            icon: 'error',
            showConfirmButton: false,
          });
        });
    },
    payOrder() {
      // const data = this.order;
      this.$http
        .post(`${VITE_URL}api/${VITE_PATH}/pay/${this.orderId}`)
        .then(() => {
          this.$router.push('/completed');
          this.getCart();
        })
        .catch(() => {
          this.$swal({
            title: '付款失敗',
            icon: 'error',
            showConfirmButton: false,
          });
        });
    },
    ...mapActions(cartStore, ['getCart']),
  },
};
</script>
