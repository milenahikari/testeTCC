<template>
  <section>
    <router-link to="/login">
      <i class="fas fa-chevron-left"></i>
    </router-link>

    <div class="description">
      <span>Dados do perfil</span>
    </div>

    <form>
      <div class="label-wrapper">
        <label for="name">Nome:</label>
      </div>
      <input type="text" name="name"/>

      <div class="label-wrapper">
        <label for="last-name">Sobrenome:</label>
      </div>
      <input type="text" name="last-name"/>

      <div class="label-wrapper">
        <label for="city">Cidade:</label>
      </div>
      <input type="text" name="city"/>

      <div class="label-wrapper">
        <label for="course">Curso:</label>
      </div>
      <input type="text" name="course"/>

      <div class='label-wrapper'>
        <input type="checkbox" name="check">
        <span class="checkbox">Desejo contribuir ensinando outros alunos</span>
      </div>

    <button class="btn-primary">Avançar</button>
    </form>
  </section>
</template>

<script>
export default{

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
span{
  font-size: 16px;
  font-weight: bold;
}
.description{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
.checkbox{
  font-size: 14px;
}
</style>