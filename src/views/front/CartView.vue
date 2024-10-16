<template>
  <PageBanner :page-title="pageTitle" />
  <section
    id="page-content"
    class="container"
  >
    <div class="row">
      <div class="col-lg-12">
        <div
          v-if="total == 0"
          class="text-center"
        >
          <p class="h2 mb-3">
            購物車內還沒有商品，請先點餐！
          </p>
          <RouterLink
            to="/order"
            class="btn btn-primary"
          >
            立即點餐
          </RouterLink>
        </div>
        <div v-else>
          <ul class="cartStep">
            <li class="stepItem active">
              <p>Step <span class="numText">1</span></p>
              <p>確認訂單</p>
            </li>
            <li class="stepItem">
              <p>Step <span class="numText">2</span></p>
              <p>填寫資料</p>
            </li>
            <li class="stepItem">
              <p>Step <span class="numText">3</span></p>
              <p>訂單結帳</p>
            </li>
            <li class="stepItem">
              <p>Step <span class="numText">4</span></p>
              <p>完成訂購</p>
            </li>
          </ul>
          <table class="table align-middle box-outline cart-table">
            <thead>
              <tr class="title-bg">
                <th />
                <th>品名</th>
                <th style="width: 150px">
                  數量/單位
                </th>
                <th class="text-end">
                  單價
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-if="carts">
                <tr
                  v-for="item in carts"
                  :key="item.id"
                >
                  <td>
                    <button
                      type="button"
                      class="delete-button"
                      @click="() => deleteItem(item)"
                    >
                      x
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                  </td>
                  <td>
                    <div
                      class="input-group input-group-sm"
                      style="width: 65%"
                    >
                      <select
                        id=""
                        v-model="item.qty"
                        name=""
                        class="form-select"
                        @change="() => updateCartItem(item)"
                      >
                        <option
                          v-for="i in 20"
                          :key="'0' + i"
                          :value="i"
                        >
                          {{ i }}
                        </option>
                      </select>
                    </div>
                  </td>
                  <td class="text-end">
                    <!-- <small class="text-success">折扣價：</small> -->
                    {{ item.total.toLocaleString("zh-TW") }} 元
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr class="text-danger">
                <td
                  colspan="3"
                  class="text-end"
                >
                  總計
                </td>
                <td class="text-end">
                  {{ total.toLocaleString("zh-TW") }} 元
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="text-end mt-4">
            <RouterLink
              to="/cartInfo"
              class="btn btn-primary"
            >
              前往訂購
            </RouterLink>
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

export default {
  components: {
    PageBanner,
  },
  data() {
    return {
      pageTitle: {
        title: '購物車內容',
      },
    };
  },
  computed: {
    ...mapState(cartStore, [
      'carts',
      'total',
      'final_total',
      'data',
    ]),
  },
  mounted() {
    this.getCart();
  },
  methods: {
    ...mapActions(cartStore, [
      'getCart',
      'updateCartItem',
      'addToCart',
      'deleteItem',
    ]),
  },
};
</script>
