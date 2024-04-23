<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <div class="app">
    <BaseLayout>
      <RouterView></RouterView>
    </BaseLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseLayout from "@/components/BaseLayout.vue";

export default defineComponent({
  name: "App",
  components: {
    BaseLayout,
  },
});
</script>
