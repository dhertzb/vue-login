<template>
  <div class="login">
    <v-card class="form-wrapper">
      <div>
        <v-tabs grow v-model="form">
          <v-tab>Log In </v-tab>
          <v-tab>Register </v-tab>
        </v-tabs>
      </div>
      <div class="forms">
        <auth-form v-if="form === 0" />
        <register-form @register="goToLogin()" v-else />
      </div>
    </v-card>
  </div>
</template>
<script>
import Component from "vue-class-component";
import Vue from "vue";
import AuthForm from "../components/AuthForm";
import RegisterForm from "../components/RegisterForm";

@Component({
  components: {
    AuthForm,
    RegisterForm,
  },
})
export default class Login extends Vue {
  form = 0;

  goToLogin() {
    this.form = 0;
  }
}
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.form-wrapper {
  width: 40%;
  padding: 40px 20px;
}
.forms {
  padding: 20px 0;
}
@media screen and (min-width: 768px) {
}
</style>
