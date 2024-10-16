<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: pages.current_page === 1 }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click="() => $emit('change-page', pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pages.total_pages"
        :key="page + 'page'"
        class="page-item"
        :class="{ active: page === pages.current_page, disabled: page === pages.current_page }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="() => $emit('change-page', page)"
        >{{ page }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: pages.current_page === pages.total_page }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click="() => $emit('change-page', pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
};
</script>
