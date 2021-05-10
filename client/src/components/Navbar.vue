<template>
  <v-app-bar dense flat>
    <v-app-bar-nav-icon @click="toggleSidebar" />
  </v-app-bar>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { mapGetters } from "vuex";

@Component({
  computed: mapGetters(["isSidebarOpen"]),
})
export default class Navbar extends Vue {
  toggleSidebar() {
    this.$store.commit("TOGGLE_SIDEBAR", !this.isSidebarOpen);
  }
}
</script>
