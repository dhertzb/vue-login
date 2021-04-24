<template>
  <div class="login">
    <v-card dark class="form-wrapper">
      <div>
        <v-tabs grow v-model="form" dark>
          <v-tab> Log In </v-tab>
          <v-tab> Register </v-tab>
        </v-tabs>
      </div>
      <div class="forms">
        <auth-form v-if="form === 0" />
        <register-form v-else />
      </div>
    </v-card>
  </div>
</template>
<script>
import AuthForm from "../components/AuthForm";
import RegisterForm from "../components/RegisterForm";
export default {
  components: {
    AuthForm,
    RegisterForm,
  },
  data() {
    return {
      form: 0,
    };
  },
};
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
.forms {
  margin-top: 50px;
}
.form-wrapper {
  width: 40%;
  padding: 40px 20px;
}
</style>
