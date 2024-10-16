<template>
  <button
    ref="PopoverRef"
    type="button"
    class="btn btn-lg btn-danger"
    data-bs-toggle="popover"
    title="Popover title"
  >
    Click to toggle popover
  </button>
</template>
<script>
import { onMounted, ref } from 'vue';
import { Popover } from 'bootstrap';

export default {
  setup() {
    const PopoverRef = ref(null);
    onMounted(() => {
      // eslint-disable-next-line no-new
      new Popover(PopoverRef.value);
    });
    return { PopoverRef };
  },
};
</script>
