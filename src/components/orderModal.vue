<template>
  <div class="modal-dialog">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5
          id="delProductModalLabel"
          class="modal-title"
        >
          <span>訂單內容</span>
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <div class="mb-2 p-1">
          訂單編號：{{ tempProduct.id }}
        </div>
        <div class="mb-2 p-1">
          訂單日期：{{ tempProduct.create_at }}
        </div>
        <div class="mb-2 p-1">
          總金額：{{ tempProduct.total }}
        </div>
        <div class="mb-2 p-1">
          訂單狀態：{{ tempProduct.is_paid ? '已付款' : '未付款' }}
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-secondary"
          data-bs-dismiss="modal"
        >
          關閉
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tempProduct'],
};
</script>
