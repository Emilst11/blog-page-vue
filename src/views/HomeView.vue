<template>
  <div class="home container">
    <div class="banner">
      <div>
        <h1>Discover Your Destination in Jakarta</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing <span>elit</span>.
          Nesciunt placeat ipsam iure eius necessitatibus enim minus molestiae
          corrupti <span>facilis</span>
          maiores.
        </p>
      </div>
      <div class="socmed">test</div>
    </div>
    <div class="filters">
      <form action="">
        <input type="text" placeholder="Search Event Here" />
      </form>
      <div class="category">
        <button
          :class="{ active: category == undefined }"
          @click="handleSelectCategory()"
        >
          All
        </button>
        <button
          v-for="item in categories"
          :key="item.id"
          @click="handleSelectCategory(item.id)"
          :class="{ active: category == item.id }"
        >
          {{ item.category_name }}
        </button>
      </div>
    </div>
    <div class="highlights">
      <h2>Hightlights Articles</h2>
      <CarouselContent
        :items="item?.data?.slice(item?.data.length - 3, item?.data.length)"
      />
    </div>
    <div v-if="item?.data" class="card-container">
      <EventCard v-for="event in item?.data" :key="event.id" :event="event" />
    </div>
    <PaginationCard
      :currentPage="page"
      :lastPage="lastPage"
      :limit="item?.meta?.per_page || 10"
      :total="item?.meta?.total || 0"
      @prevPage="prevPage"
      @nextPage="nextPage"
      @pageClicked="gotoPage"
    />
  </div>
</template>

<script lang="ts" setup>
import { Events } from "../interface/event";
import EventCard from "@/components/EventCard.vue";
import CarouselContent from "@/components/CarouselContent.vue";
import PaginationCard from "@/components/PaginationCard.vue";
import { handleGetCategoryEvents, handleGetEvents } from "@/services/detail";
import { ref, onMounted, watch } from "vue";
import { CategoryData } from "@/interface/category";

const item = ref<Events | undefined>(undefined);
const page = ref<number>(1);
const lastPage = ref<number>(1);
const categories = ref<CategoryData[] | undefined>(undefined);
const category = ref<string | undefined>(undefined);

const handleData = async () => {
  const response = await handleGetEvents({
    page: page.value,
    category: category.value,
  });
  categories.value = await handleGetCategoryEvents();
  item.value = response;
  page.value = response?.meta.current_page || 1;
  lastPage.value = response?.meta.last_page || 0;
};

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
    handleData();
  }
};

const nextPage = () => {
  if (page.value < lastPage.value) {
    page.value++;
    handleData();
  }
};

const gotoPage = (pageNumber: number) => {
  if (pageNumber >= 1 && pageNumber <= lastPage.value) {
    page.value = pageNumber;
    handleData();
  }
};

const handleSelectCategory = (name?: string) => {
  category.value = name;
};

watch(category, () => {
  handleData();
});

onMounted(handleData);
</script>
