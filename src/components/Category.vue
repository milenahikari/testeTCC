<template>
  <div>
    <div class="category">
      <i v-bind:class="`fas fa-${icon}`"></i>
      <span class="text-category">{{this.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['name', 'icon'], 
}
</script>

<style>
.category{
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #F9F9F9;
  border-radius: 10px;
}
.category i{
  font-size: 55px;
  color: #199854;
}
.text-category{
  font-size: 16px;
  font-weight: bold;
}
</style>