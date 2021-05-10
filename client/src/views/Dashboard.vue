<template>
  <div class="home">
    <navbar />
    <div>
      <sidebar />
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

@Component({
  components: {
    Navbar,
    Sidebar,
  },
})
export default class Dashboard extends Vue {}
</script>
