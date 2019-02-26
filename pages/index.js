var IndexComponent = Vue.component('index', {
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
    },
    components: {
        'test-component': TestComponent
    },
    template: '<test-component ref="testComponent"><a>:P</a><button v-on:click="onButtonClicked">Button</button></test-component>'
});
