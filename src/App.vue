<template>
  <div class="app-container">
    <img
      class="app-container__logo"
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <cal-notification user-id="5fbb828496e95069fd4d5112" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalNotification from './modules/notification/presentation/components/CalNotification/CalNotification.vue';

export default defineComponent({
  name: 'App',
  components: {
    CalNotification,
  },
});
</script>

<style lang="scss">
@import './modules/core/presentation/styles/typography';

#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
    border-radius: 0;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    -webkit-box-shadow: none;
    background-color: #c4c4c4;
  }
}

button {
  font-family: Roboto;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .app-container__logo {
    margin: 24px;
  }
}
</style>
