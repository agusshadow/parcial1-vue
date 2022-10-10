Vue.component('notas', {
    data() {
        return {
            local: [],
            vacio: ""
        }   
    },
    template: ` <div>
                    <h2 class="titulo my-4">Todas las notas</h2>
                    <ul class="p-0 mb-5">
                        <li v-for="(nota, index) in local" v-if="nota.destacado">
                            <nota :data="nota" :index="index" @eliminar="traerLocal" :key="index" @editarDestacado="traerLocal" @editarEstado="traerLocal"></nota>
                        </li>
                        <li v-for="(nota, index) in local" v-if="!nota.destacado" >
                            <nota :data="nota" :index="index" @eliminar="traerLocal" :key="index" @editarDestacado="traerLocal" @editarEstado="traerLocal"></nota>
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