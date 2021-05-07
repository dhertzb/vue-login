<template>
  <div>
    <v-form
      v-if="!isRegisterSuccefully"
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
    <div v-else class="register-succefully">
      <span class="emoji"> 📨 </span>
      <h3 class="text-center">Verify your email</h3>
      <span class="text-center">
        Hi, {{ user.firstName }}! To start using the app, you need to confirm
        your email ID {{ user.email }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { form } from "../types/form";
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
  isRegisterSuccefully = false;

  rules = {
    firstName: [
      (v: string): string | boolean => !!v || "Name is required",
      (v: string): string | boolean =>
        (v && v.length >= 3) || "Name must be more than 3 characters",
      (v: string): string | boolean =>
        (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    lastName: [
      (v: string): string | boolean => !!v || "Lastname is required",
      (v: string): string | boolean =>
        (v && v.length >= 3) || "Name must be more than 3 characters",
      (v: string): string | boolean =>
        (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: [(v: string): string | boolean => !!v || "Email is required"],
    password: [
      (v: string): string | boolean => !!v || "Password is required",
      (v: string): string | boolean =>
        (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    confirmPassword: [
      (v: string): string | boolean =>
        !!v || "You need to confirm your password",
      (v: string): string | boolean =>
        (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
  };

  get form(): form {
    return this.$refs.form as form;
  }

  register(): void {
    if (this.form.validate()) {
      this.$services("user")
        .create({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: this.user.password,
        })
        .then(() => {
          this.isRegisterSuccefully = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>
<style scoped lang="scss">
.register-succefully {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .emoji {
    font-size: 60px;
  }
}
</style>
