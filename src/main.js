import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import "D:/Vue-project/Weather APP/weather-vue/src/assets/tailwind.css";
import "./assets/tailwind.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
