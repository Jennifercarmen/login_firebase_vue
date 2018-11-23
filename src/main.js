// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from './firebase'
Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyB39BOMstePSW9uWytxt3OrV-vVA_Mwej4',
  authDomain: 'cogent-spirit-190618.firebaseapp.com',
  databaseURL: 'https://cogent-spirit-190618.firebaseio.com',
  projectId: 'cogent-spirit-190618',
  storageBucket: 'cogent-spirit-190618.appspot.com',
  messagingSenderId: '392293886622'
}

firebase.initializeApp(config)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
