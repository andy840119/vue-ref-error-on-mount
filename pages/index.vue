<template>
    <test-component ref="testComponent">
        <a>:P</a>
        <button v-on:click="onButtonClicked">Button</button>
    </test-component>
</template>

<script>

//component
Vue.component('test-component', httpVueLoader('components/test_component.vue'));

module.exports = {
    mounted: function() {

        console.log(this.$refs);
        console.log(this.$refs.testComponent);
    },
    methods: {
        onButtonClicked(){

            //it only works on button click event
            console.log(this.$refs);
            console.log(this.$refs.testComponent);
        }
    }
}
</script>
