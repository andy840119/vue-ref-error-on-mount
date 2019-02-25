<template>
    <test-component ref="testComponent">
        <a>:P</a>
    </test-component>
</template>

<script>

//component
Vue.component('test-component', httpVueLoader('components/test_component.vue'));

module.exports = {
    mounted: function() {

        console.log(this.$refs);
        console.log(this.$refs.testComponent);
    }
}
</script>
