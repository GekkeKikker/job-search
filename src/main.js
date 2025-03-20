// custom styles
import "@/index.css";

// the app
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router";
import App from "@/App.vue";

// FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleUp, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);
library.add(faAngleUp);
library.add(faSearch);

const pinia = createPinia();

createApp(App).use(pinia).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
