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
                            <nota v-if="nota.destacado" :data="nota" :index="index" @eliminar="traerLocal" :key="index" @editarDestacado="traerLocal"></nota>
                        </li>
                        <li v-for="(nota, index) in local">
                            <nota v-if="!nota.destacado"  :data="nota" :index="index" @eliminar="traerLocal" :key="index" @editarDestacado="traerLocal"></nota>
                        </li>
                    </ul>
                    <p>{{ this.vacio }}</p>
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