<template>
  <router-link to="/login" class="login"> 
    <i class="fas fa-user-circle"></i>
    <span>Login</span>
  </router-link>    
</template>

<script>
export default {
  
}
</script>

<style>
.login{
  width: 20%;
  display: flex;
  justify-content: space-around;
  color: #707070;
}
.fa-user-circle {
  font-size: 18px;
  padding: 1px;
}
</style>