<template>
  <div>
    <input type="search" name="city" v-model="cidade"/>
    <button @click="imprime">Enviar</button></br>
    {{this.cidade}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      cidade:"",
    }
  },
  methods: {
    imprime(){
      alert(this.cidade);
    }
  }
}
</script>

<style>
</style>
