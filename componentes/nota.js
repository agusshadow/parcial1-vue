Vue.component('nota', {
    props: ["data", "index"],
    data() {
        return {
            
        }   
    },
    template: ` <div class="mb-3 border">
                    <div class="p-4 nota">
                        <h3 class="h2">{{ data.titulo }}</h3>
                        <h4 class="fs-6 mb-4">Categoria : {{ data.categoria }}</h4>
                        <p class="">{{ data.contenido }}</p>
                    </div>
                    <div class="d-flex text-center">
                        <div class="w-50 bg-warning text-white py-2">
                            <a href="#" class="text-decoration-none text-white" @click="cambiarEstado()">{{ data.estado }}</a>
                        </div>
                        <div class="w-50 bg-danger text-white py-2">
                            <a href="#" class="text-decoration-none text-white" @click="eliminar()">Eliminar</a>
                        </div>
                    </div>
                </div>`,
    methods: {
        cambiarEstado() {
            if (this.data.estado = "Pendiente") {
                let local = JSON.parse(localStorage.getItem("notas"))
                this.data.estado = "Terminada"
                localStorage.notas = JSON.stringify(local)
            } else {
                let local = JSON.parse(localStorage.getItem("notas"))
                this.data.estado = "Pendiente"
                localStorage.notas = JSON.stringify(local)
            }
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
})