<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name"
      :error-messages="errors"
      label="Name"
      required
    />
    <v-text-field
      v-model="lastName"
      :error-messages="errors"
      label="Last Name"
      required
    />
    <v-text-field
      v-model="name"
      type="email"
      :error-messages="errors"
      label="Email"
      required
    />
    <v-text-field
      :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show4 ? 'text' : 'password'"
      name="input-10-2"
      label="Password"
      hint="At least 8 characters"
      value="Pa"
    />
    <v-text-field
      :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show4 ? 'text' : 'password'"
      name="input-10-2"
      label="Password"
      hint="At least 8 characters"
      value="Pa"
    />
  </form>
</template>

<script>
import Component from "vue-class-component";
import Vue from "vue";
@Component
export default class RegisterForm extends Vue {
  name = null;
  lastName = null;
  email = null;
  password = null;

  register() {
    this.$services("user").create({
      ...this.data,
    });
  }
}
</script>
