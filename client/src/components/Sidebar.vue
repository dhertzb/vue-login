<template>
  <v-navigation-drawer v-model="isSidebarOpen" absolute>
    <v-list nav dense>
      <v-list-item-group>
        <v-app-bar-nav-icon @click="toggleSidebar" />
      </v-list-item-group>

      <v-list-item-group v-model="group">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title @click="logout">Logout</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapGetters } from "vuex";

@Component({
  computed: mapGetters(["isSidebarOpen"]),
})
export default class Sidebar extends Vue {
  toggleSidebar() {
    this.$store.commit("TOGGLE_SIDEBAR", !this.isSidebarOpen);
  }
  logout() {
    this.$store.dispatch("logout").then(() => {
      this.$router.push("/login");
    });
  }
}
</script>
<style>
.v-navigation-drawer__content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
