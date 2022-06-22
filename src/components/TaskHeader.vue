<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show="homePage" class="btn btn-primary btn-lg" 
        @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? '#d2260a' : '#7223a9'" />
    </header>
</template>

<script>
import  Button from './Button' 

export default {
    name: 'Header',
    props: {
        title: String,
        showAddTask: Boolean,
    },
    components: {
        Button
    },
    computed: {
        homePage(){
            if(this.$route.path === '/home') {
                 return true 
                } else {
                 return false   
                }
                
            }
        }
    }
</script>

<style scoped>
    header {
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 10px;
    }
</style>