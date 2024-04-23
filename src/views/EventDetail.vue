<template>
  <div class="detail">
    <h1>{{ detail?.title }}</h1>
    <p class="location">{{ detail?.location_name }}</p>
    <img :src="detail?.banner_url" alt="banner" class="banner" />
    <div class="content">
      <div>socmed</div>
      <div>
        <p class="date">
          {{ detail?.start_date.split(" ")[0] }} s/d
          {{ detail?.end_date.split(" ")[0] }}
        </p>
        <div v-html="detail?.content"></div>
        <GeoLocation
          :name="detail?.location_name"
          :latitude="detail?.location_latitude"
          :longitude="detail?.location_longitude"
        />
      </div>
    </div>
    <h2>Find other posts you might enjoy</h2>
    <div v-if="recommendation?.data" class="card-container">
      <EventCard
        v-for="event in recommendation?.data.slice(0, 3)"
        :key="event.id"
        :event="event"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import {
  handleGetDetail,
  handleDetailRecommendation,
} from "../services/detail";
import { Event } from "@/interface/detailEvent";
import { Events } from "@/interface/event";
import EventCard from "@/components/EventCard.vue";
import GeoLocation from "@/components/GeoLocation.vue";

const route = useRoute();
const detail = ref<Event | undefined>(undefined);
const recommendation = ref<Events | undefined>(undefined);

const getDetails = async (slug: string | string[]) => {
  detail.value = await handleGetDetail(`${slug}`);
};

const getRecommendations = async (id: string) => {
  recommendation.value = await handleDetailRecommendation(id);
};

watch(detail, () => {
  if (detail.value?.id) {
    getRecommendations(detail.value.id);
  }
});

watch(
  () => route.params.slug,
  async (newSlug, oldSlug) => {
    if (newSlug !== oldSlug) {
      await getDetails(newSlug);
    }
  }
);

getDetails(route.params.slug);
</script>
