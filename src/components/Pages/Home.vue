<template>
  <section>
    <Header/>
      <Card 
        img      = "../assets/img/grupoestudo.png"
        title    = "APRENDA" 
        parteI   = "Encontre a ajuda perfeita para entender a matéria"
        parteII  = "Tire suas dúvidas com um amigo"
        parteIII = "Combine o melhor momento para estudar"/>
      <Card 
        img      = "../assets/img/grupoestudo.png"
        title    = "ENSINE" 
        parteI   = "Compartilhe seu conhecimento"
        parteII  = "Faça novas amizades"
        parteIII = "Divirta-se ensinando e aprendendo."/>
      <Card 
        img      = "../assets/img/grupoestudo.png"
        title    = "CONQUISTE" 
        parteI   = "Colabore ensinando e ganhe estrelas"
        parteII  = "Cumpra metas e colecione pedras preciosas"
        parteIII = "Seja um membro. É grátis :)"/>
  </section>
</template>

<script>
import Header from '../Header.vue'
import Card from '../Card.vue' 

export default {
  components: {
    Header,
    Card
  }
}
</script>