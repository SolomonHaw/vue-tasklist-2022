import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

    appKey: "AIzaSyAxJLhfjUZDz9aDO0h_-B4nuVVARNVzrYs",
    authDomain: "actnow-task-tracker.firebaseapp.com",
    projectId: "actnow-task-tracker",
    storageBucket: "actnow-task-tracker.appspot.com",
    messagingSenderId: "513034517054",
    appId: "1:513034517054:web:0eacbb870370e6f925af6f",
    measurementId: "G-HSNJKJBE3G"
  };
  
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
const analytics = getAnalytics(app);