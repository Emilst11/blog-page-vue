<template>
  <div class="pagination">
    <div class="page">
      <p>
        Page <span>{{ currentPage }}</span> of <span>{{ totalPages }}</span>
      </p>
    </div>
    <div class="divider"></div>
    <div class="pagination-bar">
      <button
        class="prev-btn"
        @click="prevPage"
        :class="{ disable: currentPage == 1 }"
      >
        <img src="../assets/arrow-left.svg" />
      </button>
      <button
        v-for="(item, index) in visiblePages"
        :key="index"
        :class="{ active: currentPage == item, ellipsis: item === '...' }"
        @click="handlePageClick(item)"
      >
        {{ item }}
      </button>
      <button
        class="next-btn"
        :class="{ disable: currentPage == lastPage }"
        @click="nextPage"
      >
        <img src="../assets/arrow-right.svg" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from "vue";

const currentPage = ref<number>(1);
const totalPages = ref<number>(0);
const pageSize = 5;

const emit = defineEmits(["prevPage", "nextPage", "pageClicked"]);

const props = defineProps<{
  currentPage?: number;
  lastPage?: number;
  limit: number;
  total: number;
}>();

const pages = computed(() => {
  return Math.ceil(props.total / props.limit);
});

watch(pages, () => {
  totalPages.value = pages.value;
});

const visiblePages = computed(() => {
  const currentPageValue = currentPage.value;
  const totalPagesValue = totalPages.value;
  const startPage = Math.max(1, currentPageValue - Math.floor(pageSize / 2));
  const endPage = Math.min(totalPagesValue, startPage + pageSize - 1);

  let pagesArray: (number | string)[] = [];
  if (startPage > 1) {
    pagesArray.push(1);
    if (startPage > 2) {
      pagesArray.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pagesArray.push(i);
  }

  if (endPage < totalPagesValue) {
    if (endPage < totalPagesValue - 1) {
      pagesArray.push("...");
    }
    pagesArray.push(totalPagesValue);
  }

  return pagesArray;
});

function setCurrentPage(page: number) {
  currentPage.value = page;
}

function prevPage() {
  // if (currentPage.value > 1) {
  //   currentPage.value -= 1;
  // }
  emit("prevPage");
}

function nextPage() {
  // if (currentPage.value < totalPages.value) {
  //   currentPage.value += 1;
  // }
  emit("nextPage");
}

function handlePageClick(item: number | string) {
  if (typeof item === "number") {
    console.log(item);
    emit("pageClicked", item);
    setCurrentPage(item);
  }
}
</script>
