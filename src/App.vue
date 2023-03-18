<template>
  <Suspense>
    <AppShell msg="Welcome to Your Vue.js + TypeScript App" />
  </Suspense>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppShell from "./components/AppShell.vue";

@Options({
  components: {
    AppShell,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
