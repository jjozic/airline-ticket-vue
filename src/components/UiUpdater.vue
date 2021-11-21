<template>
  <div class="inputfields">
    <div class="inputwrapper">
      <label for="bgColor">Background color:</label>
      <input v-model="bgColor" type="color" name="background color" id="bgColor" />
    </div>
    <div class="inputwrapper">
      <label for="fontSize">Font-size (in px):</label>
      <input v-model="fontSize" type="number" name="font size" id="fontSize" />
    </div>
    <div class="inputwrapper">
      <label for="fontColor">Font color:</label>
      <input v-model="fontColor" type="color" name="font color" id="fontColor" />
    </div>
    <div class="inputwrapper">
      <label for="passengerName">Passenger name:</label>
      <input v-model="passengerName" type="text" name="passenger name" id="passengerName"/>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'UiUpdater',
  props: {
    msg: String,
  },
  computed: {
    ...mapFields([
      'bgColor',
      'fontSize',
      'fontColor',
      'passengerName',
    ]),
  },
};
</script>

<style scoped>
.inputfields {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 3rem;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
}

.inputwrapper label {
    padding: 0 1rem;
}
</style>
