<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name"
      type="email"
      :error-messages="errors"
      label="Email"
      required
    ></v-text-field>
    <v-text-field
      :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show4 ? 'text' : 'password'"
      name="input-10-2"
      label="Password"
      hint="At least 8 characters"
      value="Pa"
    ></v-text-field>
    <v-btn class="login-btn">Log In</v-btn>
  </form>
</template>

<script></script>
<style>
.login-btn {
  width: 100%;
  margin: 15px 0;
}
</style>
