<template>
<div>
  <h1>Event Notifications FICK (Vue)</h1>
  <h2>{{ eventNotifications.length }}</h2>
  <h3>{{ changeThisText }}</h3>

  <div v-if="!isLoading">
    <ol v-if="eventNotifications.length">
      <li v-for="eventNotification in eventNotifications" :key="eventNotification.uid">{{ eventNotification.title }}</li>
    </ol>
    <p v-else>There's no event notifications.</p>
  </div>
  <p v-else>Fetching event notifications...</p>
</div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref, onMounted, onUnmounted } from 'vue';
import useEventNotifications from '../../application/useEventNotifications';

export default defineComponent({
  name: 'CalNotification',
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const changeThisText = ref('UNCHANGED');
    const { isLoading, eventNotifications } = useEventNotifications(props.userId);

    onMounted(() => {
      console.log('FUCKING MOUNTED');
    });

    onUnmounted(() => {
      console.log('FUCKING UNMOUNTED');
    });

    setTimeout(() => {
      changeThisText.value = 'CHANGED';

      console.log('IT WAS CHANGED!'); 
    }, 3000);

    watchEffect(() => {
      console.log('FUCKING GOD', eventNotifications.value);
    });

    return {
      eventNotifications,
      isLoading,
      changeThisText
    };
  }
});
</script>

<style scoped>
  h1 {
    margin-top: 48px;
    text-align: center;
  }

  li {
    margin: 0 auto;
    width: fit-content;
  }

  p {
    text-align: center;
  }
</style>
