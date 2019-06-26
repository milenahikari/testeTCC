<template>
  <section class="filter-search">
    <div class="filter-subjects">
      <input type="search" name="subjects" placeholder="O que você quer aprender?"/>
      <a><i class="fas fa-search"></i></a>
    </div>
    <input type="search" name="city" placeholder="Selecione uma cidade"/>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.filter-search{
  margin-top: 20px;
  margin-bottom: 20px;
}
.filter-subjects{
  display: flex;
}
.fa-search{
  color: #9A1982;
  font-size: 32px;
  margin-left: 4px;
  margin-top: 8px;
}
</style>
