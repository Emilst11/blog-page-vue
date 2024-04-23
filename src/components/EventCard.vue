<template>
  <RouterLink
    class="card-event"
    :to="{ name: 'event', params: { slug: event.slug } }"
  >
    <img :src="event.banner_url" alt="Evemt banner" />
    <div>
      <div class="info">
        <h2>{{ event.title }}</h2>
        <p>{{ event.location_name }}</p>
        <p>
          <span>{{ event.start_date.split(" ")[0] }}</span>
          <span>{{ event.end_date.split(" ")[0] }}</span>
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Daum } from "../interface/event";

@Options({
  props: {
    event: Object,
  },
})
export default class EventCard extends Vue {
  event!: Daum;
}
</script>
