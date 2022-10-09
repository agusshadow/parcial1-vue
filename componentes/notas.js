Vue.component('notas', {
    data() {
        return {
            local: [],
            vacio: ""
        }   
    },
    template: ` <div>
                    <ul class="p-0">
                        <li v-for="(nota, index) in local">
                            <nota :data="nota" :index="index" @eliminar="traerLocal()"></nota>
                            <p>{{ this.vacio }}</p>
                        </li>
                    </ul>
                </div>`,
    mounted() {
        this.traerLocal()
    },
    updated() {
        if (!this.local.length) {
            this.$emit("no-data", "No hay notas que mostrar")
        }
    },
    methods: {
        traerLocal() {
            this.local = JSON.parse(localStorage.getItem("notas"))
        }
    },
})