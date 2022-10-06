Vue.component('home', {
    data() {
        return {
            info: "componente ejemplo"
        }   
    },
    template: `<h1>Estas en la home</h1>`,
    mounted() {
        console.log("se ha montado la home")
    },
    destroyed() {
        console.log("se ha destruido la home")
    },
})