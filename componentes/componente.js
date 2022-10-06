Vue.component('componente', {
    data() {
        return {
            info: "componente ejemplo"
        }   
    },
    template: `<div>{{ this.info }}</div>`
})