<template>
  <div id="app">
    <div class="container">
      <Navbar />
      <TaskHeader @toggle-add-task="toggleAddTask" title="Task Tracker" 
      :showAddTask="showAddTask" />
      <router-view :showAddTask="showAddTask"></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import TaskHeader from './components/TaskHeader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    TaskHeader,
    Navbar,
    Footer
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  background-color: #d6c3bf;
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.97);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
