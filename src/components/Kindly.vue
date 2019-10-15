<template>
    <div class="wrapper">
        <h2>{{ msg }}</h2>
        <h4>Enter text in the field below. We will review and suggest potential changes to help you communicate with your intended recipient.</h4>
        <quill v-model="content" :config="config"></quill>

    </div>
</template>

<script>
    export default {
        name: 'Kindly',
        props: {
            msg: String
        },
        data () {
            return {
                content: {
                    ops: [],
                },
                config: {
                    readOnly: false,
                    placeholder: 'Enter your message here',
                },
            }
        },
        methods: {

        },
        computed: {

        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h4 {
        margin: 2rem auto;
        width: 70vw;
        text-align: center;
    }
</style>
