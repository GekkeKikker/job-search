// custom styles
import "@/index.css";

// the app
import { createApp } from "vue";
import App from "@/App.vue";

// FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
