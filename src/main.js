import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './locomotive.css'
import router from "./Router/index"

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);



// import LocomotiveScroll from 'locomotive-scroll';
// const scroll = new LocomotiveScroll(
//     {
//         el: document.querySelector('[data-scroll-container]'),
//         smooth:true
//     }
// );

createApp(App).use(router).mount('#app')
