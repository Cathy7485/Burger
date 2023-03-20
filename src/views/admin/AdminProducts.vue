<template>
	<div id="main" class="container">
		<table class="table mt-4">
        <thead>
          <tr>
            <th width="120">
              分類
            </th>
            <th>產品名稱</th>
            <th width="120">
              原價
            </th>
            <th width="120">
              售價
            </th>
            <th width="100">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product.id">
          <tr>
            <td><span class="badge bg-secondary">{{ product.category }}</span></td>
            <td>{{ product.title }}</td>
            <td class="text-start">{{ product.origin_price }}</td>
            <td class="text-start">{{ product.price }}</td>
            <td>
							<span class="text-success">{{ product.is_enabled ? '啟用' : '未啟用' }}</span>
            </td>
            <td>
              <div class="btn-group">
                <!-- v:on裡的product是參數，當下要編輯/刪除的項目 -->
                <button type="button" id="editBtn" class="btn btn-outline-primary btn-sm"
                  @click="()=> openModal('edit', product)">
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="()=> openModal('del', product)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
	</div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

let productModal = {};
let delProductModal = {};

export default {
	data(){
		return {
			products: [],
			tempProduct: {
				imagesUrl: [],
			},
			isNew: false, //判斷是編輯還是新增
			page: {}//儲值分頁資料 
		}
	},
	methods: {
		getProducts(page = 1) { //預設頁數是1
			const url = `${VITE_URL}api/${VITE_PATH}/admin/products/?page=${page}`;
			this.$http
				.get(url)
					.then((res) => {
						this.products = res.data.products;
						this.page = res.data.pagination;
					})
					.catch((err) => {
						console.log(err.response.data.message);
					})
		},
		openModal(status, product) {
			if (status === 'add') {
				productModal.show();
				this.isNew = true; //是新增
				//帶入初始化資料
				this.tempProduct = {
					imagesUrl: [],
				};
			} else if (status === 'edit') {
				productModal.show();
				this.isNew = false; //不是新增
				//會帶入當前要編輯的資料
				this.tempProduct = { ...product }; //要展開才不會沒儲存就資料連動
			} else if (status === 'del') {
				delProductModal.show();
				this.tempProduct = { ...product }; // 等等要取id使用
			}
	},
	},
	mounted() {
		this.getProducts();
	}
	
}

</script>