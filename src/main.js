import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../bootstrap-5.1.3-dist/css/bootstrap.min.css'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Vue from 'vue'


// import { library } from '@fortawesome/fontawesome-svg-core'

// import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faHatWizard)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(VueAxios, axios)

createApp(App).use(store).use(router).mount('#app')
