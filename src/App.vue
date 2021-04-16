<template>
  <div>
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <CalNotification user-id="5f60334e78d1b021351f9f6e" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalNotification from './modules/notification/presentation/components/CalNotification.vue'

console.log('CalNotification', CalNotification)

export default defineComponent({
  name: 'App',
  components: {
    CalNotification,
  },
})
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
