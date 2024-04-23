<template>
  <div style="width: 100%" v-if="props.latitude">
    <iframe
      width="100%"
      height="400"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      :src="`https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${props.latitude},${props.longitude}+(${props.name})&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`"
      ><a href="https://www.gps.ie/">gps tracker sport</a></iframe
    >
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  name?: string;
  longitude?: string | number;
  latitude?: string | number;
}>();
</script>
