<template>
    <button v-on:click="onClick()" :style="{ background: color}" 
    type="button" class="btn btn-primary">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String,
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        },
    },
}
</script>
