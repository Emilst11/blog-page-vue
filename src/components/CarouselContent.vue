<template>
  <div class="carousels" v-if="items">
    <img :src="items?.[index].banner_url" :alt="items?.[index].title" />
    <div class="carousels-bar">
      <button
        v-for="(bar, id) in items"
        :key="bar.id"
        :class="{ active: index == id }"
        @click="handleClick(id)"
      ></button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Daum } from "@/interface/event";
import { ref, watch } from "vue";
const props = defineProps<{
  items?: Daum[];
}>();
const index = ref(0);

const handleTimeOut = () => {
  setInterval(() => {
    if (props.items && index.value < props.items.length - 1) {
      index.value += 1;
    } else {
      index.value = 0;
    }
  }, 3000);
};

const handleClick = (number: number) => {
  index.value = number;
};

watch(index, () => {
  if (props.items && index.value > props.items.length - 1) {
    index.value = 0; // Reset index if exceeding length
  }
});

handleTimeOut();
</script>
