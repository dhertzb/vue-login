<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="user.email"
      type="email"
      :rules="rules.email"
      label="Email"
      required
    ></v-text-field>
    <v-text-field
      type="password"
      label="Password"
      :rules="rules.password"
      hint="At least 8 characters"
      v-model="user.password"
    ></v-text-field>
    <v-btn class="login-btn u-width-100" @click="login()">Log In</v-btn>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class AuthForm extends Vue {
  user = {
    email: "",
    password: "",
  };
  rules = {
    email: [(v: string): string | boolean => !!v || "Email is required"],
    password: [
      (v: string): string | boolean => !!v || "Password is required",
      (v: string): string | boolean =>
        (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
  };

  login(): void {
    this.$services("auth")
      .login(this.user)
      .then((res) => {
        const token = res.data.token;
        this.$store.dispatch("login", token).then(() => {
          this.$router.push({ name: "Dashboard" });
        });
      });
  }
}
</script>
<style>
.login-btn {
  margin: 15px 0;
}
</style>
