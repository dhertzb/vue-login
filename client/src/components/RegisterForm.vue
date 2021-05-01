<template>
  <v-form
    ref="form"
    v-model="isFormValid"
    lazy-validation
    @submit.prevent="submit"
  >
    <v-text-field
      v-model="user.firstName"
      label="Name"
      required
      :rules="rules.firstName"
    />
    <v-text-field
      v-model="user.lastName"
      label="Lastname"
      :rules="rules.lastName"
      required
    />
    <v-text-field
      v-model="user.email"
      type="email"
      label="Email"
      :rules="rules.email"
      required
    />
    <v-text-field
      type="password"
      label="Password"
      :rules="rules.password"
      v-model="user.password"
    />
    <v-text-field
      type="password"
      label="Confirm password"
      :rules="rules.confirmPassword"
      v-model="user.confirmPassword"
    />
    <v-btn @click="register()" class="u-width-100 mt-5">Register</v-btn>
  </v-form>
</template>

<script>
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class RegisterForm extends Vue {
  isFormValid = false;
  user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  rules = {
    firstName: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 3) || "Name must be more than 3 characters",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    lastName: [
      (v) => !!v || "Lastname is required",
      (v) => (v && v.length >= 3) || "Name must be more than 3 characters",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: [
      (v) => !!v || "Email is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    password: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    confirmPassword: [
      (v) => !!v || "You need to confirm your password",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
  };

  register() {
    // if (this.$refs.form.validate()) {
    this.$services("user")
      .create({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
      })
      .then(() => {
        this.$emit("register");
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  }
}
</script>
