<template>
  <div>
    <p>clicked: {{count}} times, count is {{oddOrEven}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementByOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {

    computed: mapGetters(['count','oddOrEven'])
      ,
    methods:mapActions(['increment','decrement','incrementByOdd','incrementAsync'])

  }
</script>
<style></style>
