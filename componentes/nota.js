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
                    </div>
                    <div class="d-flex text-center">
                        <div class="w-50 bg-warning text-white py-2">
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
                local[this.index].estado = "terminado";
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
        }
    }
})