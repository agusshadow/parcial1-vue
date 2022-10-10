Vue.component('nota', {
    props: ["data", "index"],
    data() {
        return {
        
        }   
    },
    template: ` <div class="mb-3 border">
                    <div class="p-4 pb-1 position-relative">
                        <h3 class="h2">{{ data.titulo | capitalize}}</h3>
                        <h4 class="fs-6 mb-4">{{ data.categoria | capitalize}}</h4>
                        <p class="text-secondary">{{ data.contenido | capitalize}}</p>
                        <p class="titulo text-end p-0" :style="estaPendiente == 'finalizada' ? 'color: green;' : 'color: rgb(245, 182, 66);'">{{ data.estado | capitalize}}</p>
                        <input class="destacado" type="checkbox" @change="destacar" :checked="estaDestacado" />
                    </div>
                    <div class="d-flex text-center">
                        <div class="fondo-primario w-50 text-white py-2">
                            <a href="#" class="text-decoration-none text-white" @click="cambiarEstado" >Cambiar estado</a>
                        </div>
                        <div class="bg-danger w-50 fondo-primario text-white py-2">
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