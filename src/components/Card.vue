<template>
  <div class="card">
    <div class="img-card"></div>
    <div class="text-card">
      <h3>{{this.title}}</h3>
      <p>{{this.parteI}}</p>
      <p>{{this.parteII}}</p>
      <p>{{this.parteIII}}</p>
    </div>

  </div>
</template>

<script>
export default {
  props:['img', 'title', 'parteI', 'parteII', 'parteIII']
}
</script>

<style>
.card{
  width:328px;
  height: 466px;
  background: #BD5CAA;
  border-radius: 10px;
  margin-top: 20px;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.card p{
  margin-top: 37px;
}
.img-card{
  width: 100%;
  height: 130px;
  background-image: url("../assets/img/grupoestudo.png");
  background-size: 100%;
  border-radius: 10px 10px 0 0;
}
.text-card{
  margin: 0 auto;
  width: 82%;
  padding: 10px;
}
</style>