<template>
  <PersonWorkInfo />
</template>

<script>
import PersonWorkInfo from "@/components/PersonWorkInfo.vue";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";

export default {
  name: "App",
  components: {
    PersonWorkInfo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
