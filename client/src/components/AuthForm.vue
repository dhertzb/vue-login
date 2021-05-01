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
      type="password"
      name="input-10-2"
      label="Password"
      hint="At least 8 characters"
      value=""
    ></v-text-field>
    <v-btn class="login-btn u-width-100">Log In</v-btn>
  </form>
</template>

<script></script>
<style>
.login-btn {
  margin: 15px 0;
}
</style>
