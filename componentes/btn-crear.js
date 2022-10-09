Vue.component('btn-crear', {
    data() {
        return {
            info: "componente ejemplo"
        }
    },
    template: `<a class="btn-nueva" @click="crear()">Nueva</a>`,
    methods: {
        crear() {
            this.$router.push("/crearnota")
        }
    },
})