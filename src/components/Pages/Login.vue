<template>
  <section>
    <router-link to="/">
      <i class="fas fa-chevron-left"></i>
    </router-link>

    <div class="logo"></div>

    <form>
      <div class="label-wrapper">
        <label for="email">E-mail:</label>
      </div>
      <input type="email" name="email"/>

      <div class="label-wrapper" style="margin-top: 25px;">
        <label for="password">Senha:</label>
      </div>
      <input type="password" name="password"/>
    
    <button class="btn-primary">Login</button>
    <button v-on:click="registerUser" class="btn-secondary">Cadastre-se</button>
    </form>
  </section>
</template>

<script>
export default {
  methods: {
    registerUser() {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
.logo{
  height: 69px;
  width: 209px;
  background-image: url("../../assets/img/logo.png");
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 53px auto;
}
input{
  padding: 0px;
  padding-left: 8px;
}
label{
  font-weight: bold;
}
.label-wrapper{
  width: 90%;
}
.btn-primary{
  margin-top: 70px;
}
</style>