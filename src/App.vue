<template>
  <div class="app-container">
    <img
      class="app-container__logo"
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <cal-notification :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import CalNotification from './modules/notification/presentation/components/CalNotification/CalNotification.vue';
import type User from './modules/user/domain/entity/User';

export default defineComponent({
  name: 'App',
  components: {
    CalNotification,
  },
  setup() {
    const user = reactive<User>({
      id: '5f72b8cb94ccc660c4615261',
      preferredEmail: 'admin@open-paas.org',
    });

    return {
      user,
    };
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
