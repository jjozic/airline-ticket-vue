<template>
  <div id="app">
    <AirlineTicket
      bgColor="lightblue"
      fontSize=12
      fontColor="gold"
      passengerName="Max Mustermann"
    />
  </div>
</template>

<script>
import AirlineTicket from './components/AirlineTicket.vue';

export default {
  name: 'App',
  components: {
    AirlineTicket,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
