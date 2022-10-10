Vue.component('nota', {
    props: ["data", "index"],
    data() {
        return {
        
        }   
    },
    template: ` <div class="mb-3 border">
                    <div class="p-4 position-relative">
                        <h3 class="h2">{{ data.titulo }}</h3>
                        <h4 class="fs-6 mb-4">{{ data.categoria }}</h4>
                        <p class="text-secondary">{{ data.contenido }}</p>
                        <input class="destacado" type="checkbox" @change="destacar" :checked="estaDestacado" />
                        <div class="" v-if="data.estado == 'finalizada'">
                            <p class="fs-6 text-secondary m-0 d-inline-block">Nota finalizada, deseas eliminarla?</p>
                            <a class="text-decoration-none text-danger d-inline-block" href="#" @click="eliminar">Eliminar.</a>
                        </div>
                    </div>
                    <div class="d-flex text-center">
                        <div class="w-50 text-white py-2" :style="estaPendiente == 'finalizada' ? 'background: green;' : 'background: rgb(245, 182, 66);'">
                            <a href="#" class="text-decoration-none text-white" @click="cambiarEstado">{{ data.estado }}</a>
                        </div>
                        <div class="w-50 bg-danger text-white py-2">
                            <a href="#" class="text-decoration-none text-white" @click="eliminar">Eliminar</a>
                        </div>
                    </div>
                </div>`,
    methods: {
        destacar(e) {
            let local = JSON.parse(localStorage.getItem("notas"))
            let estado = e.target.checked
            if (estado) {
                local[this.index].destacado = true;
            } else {
                local[this.index].destacado = false;
            }
            localStorage.notas = JSON.stringify(local)
            this.$emit("editarDestacado")
        },
        cambiarEstado() {
            let local = JSON.parse(localStorage.getItem("notas"))
            if (local[this.index].estado === "pendiente") {
                local[this.index].estado = "finalizada";
            } else {
                local[this.index].estado = "pendiente"
            }
            localStorage.notas = JSON.stringify(local)
            this.$emit("editarEstado")
        },
        eliminar() {
            let local = JSON.parse(localStorage.getItem("notas"))
            local.splice(1, this.index)
            if (this.index == 0) {
                local.splice(0, 1)
            }
            localStorage.notas = JSON.stringify(local)
            this.$emit("eliminar")
        },
    },
    computed: {
        estaDestacado() {
            return this.data.destacado
        },
        estaPendiente() {
            return this.data.estado
        }
    }
})