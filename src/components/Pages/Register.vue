<template>
  <section>
    <router-link to="/login">
      <i class="fas fa-chevron-left"></i>
    </router-link>

    <div class="profile">
      <div class="profile-image"></div>
      <span>Cadastre-se</span>
    </div>

    <form>
      <div class="label-wrapper">
        <label for="email">E-mail:</label>
      </div>
      <input type="email" name="email"/>

      <div class="label-wrapper" style="margin-top: 10px;">
        <label for="password">Senha:</label>
      </div>
      <input type="password" name="password"/>

      <div class="label-wrapper" style="margin-top: 10px;">
        <label for="confirm-password">Confirmar senha:</label>
      </div>
      <input type="password" name="confirm-password"/>
    
    <button v-on:click="registerProfile" class="btn-primary">Avançar</button>
    </form>
  </section>
</template>

<script>
export default{
  methods: {
    registerProfile(){
      this.$router.push("/register-profile");
    }
  },
}
</script>

<style scoped>
label{
  font-weight: bold;
}
input{
  padding: 0px;
  padding-left: 8px;
}
.label-wrapper{
  width: 90%;
}
.btn-primary{
  margin-top: 40px;
}
.profile{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
.profile span{
  font-size: 16px;
  font-weight: bold;
  margin-top: 3px;
  margin-bottom: 15px;
}
</style>