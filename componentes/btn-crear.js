Vue.component('btn-crear', {
    template: `<a class="btn-nueva" @click="crear()">Nueva</a>`,
    methods: {
        crear() {
            this.$router.push("/crearnota")
        }
    },
})