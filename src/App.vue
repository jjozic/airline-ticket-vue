<template>
  <div id="app">
    <h1>Airline Ticket Updater</h1>
    <div class="wrapper">
      <UiUpdater />
      <AirlineTicket />
    </div>
  </div>
</template>

<script>
import AirlineTicket from './components/AirlineTicket.vue';
import UiUpdater from './components/UiUpdater.vue';

export default {
  name: 'App',
  components: {
    AirlineTicket, UiUpdater,
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

.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
