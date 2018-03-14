<template>
<div>
  <app-menu></app-menu>
  <router-view></router-view>


</div>

</template>

<script>

import AppMenu from "./components/AppMenu";
import AppOverview from "./components/AppOverview";
import Home from "./components/Home";
import Hello from "./components/Hello";
export default {
  components: {
    Hello,
    AppMenu,
    Home,
    AppOverview
  },
  methods: {
    confirmsubmit() {
      window.alert(this.name + " You ok submit");
    }
  }
};
</script>
<style scoped>

</style>


