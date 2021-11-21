<template>
  <div class="container">
    <div class="inputfields">
      <div class="inputwrapper">
        <label for="bgColor">Background color:</label>
        <input type="color" name="background color" id="bgColor" />
      </div>
      <div class="inputwrapper">
        <label for="fontSize">Font-size (in px):</label>
        <input type="text" name="font size" id="fontSize" />
      </div>
      <div class="inputwrapper">
        <label for="fontColor">Font color:</label>
        <input type="color" name="font color" id="fontColor" />
      </div>
      <div class="inputwrapper">
        <label for="passengerName">Passenger name:</label>
        <input type="text" name="passenger name" id="passengerName" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiUpdater',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.container {
  flex-basis: 50%;
}
.inputfields {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0 5rem;
}

.inputwrapper label {
    padding: 0 1rem;
}
</style>
