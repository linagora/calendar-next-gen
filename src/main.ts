import { createApp } from 'vue';
import Stream from 'stream';

import App from './App.vue';

(window as any).Stream = Stream;

const app = createApp(App)
  .mount('#app');

export default app;
