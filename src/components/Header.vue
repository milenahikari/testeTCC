<template>
  <section>
    <div class="header-top">
      <div class="logo"></div>
      <IconLogin/>
    </div>
    <h1 class="title">Busque pelas matérias que possui dificuldade e colabore compartilhando conhecimentos</h1>
    <Search/>
    <h3>Categorias</h3>
    <section class="categories">
      <Category name="Artes" icon="palette"/>
      <Category name="Biologia" icon="microscope"/>
      <Category name="Filosofia" icon="puzzle-piece"/>
    </section>
    
  </section>
</template>

<script>
import Search from './Search.vue'
import Category from './Category.vue'
import IconLogin from './IconLogin.vue'

export default {
  name: 'app',
  components: {
    Search,
    Category,
    IconLogin
  }
}
</script>

<style scoped>
.header-top{
  display: flex;
  justify-content: space-between;
}
.logo{
  height: 38px;
  width: 117px;
  background-image: url("../assets/img/logo.png");
  background-size: 100%;
}
.title{
  font-size: 22px;
  font-weight: bold;
  margin-top:34px;
}
h3{
  font-size: 16px;
  font-weight: bold;
}
.categories{
  display: flex;
  justify-content: space-between;
}
a {
  text-decoration: none;
}
</style>