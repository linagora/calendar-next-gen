<template>
  <div class="app-container">
    <img
      class="app-container__logo"
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <c-popover>
      <template #content>
        <cal-notification-popover
          user-id="5fbb828496e95069fd4d5112"
          @change-participation="handleChangeParticipation"
        />
      </template>
      <cal-notification-bell should-display-badge />
    </c-popover>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CPopover from './modules/core/presentation/components/CPopover.vue';
import CalNotificationBell from './modules/notification/presentation/components/CalNotification/CalNotificationBell.vue';
import CalNotificationPopover from './modules/notification/presentation/components/CalNotification/CalNotificationPopover.vue';

export default defineComponent({
  name: 'App',
  components: {
    CalNotificationPopover,
    CalNotificationBell,
    CPopover,
  },
  setup() {
    const handleChangeParticipation = ({ eventId, participationStatus }: { eventId: string, participationStatus: 'yes' | 'maybe' | 'no' }) => {
      console.log(eventId, participationStatus);
    };

    return {
      handleChangeParticipation,
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
