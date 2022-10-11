Vue.component('form-nota', {
    data() {
        return {
            data: {
                titulo: "",
                categoria: "",
                contenido: "",
                destacado: false,
                estado: "pendiente"
            },
            errores: {
                titulo: "",
                categoria: "",
                contenido: "",
            },
            mostrarErrores: false,
        }
    },
    template: ` <div>
                    <form @submit.prevent class="mb-5 form-nota">
                        <div class="mb-3">
                            <label for="titulo" class="form-label">Titulo</label>
                            <input type="text" class="form-control" id="titulo" v-model="data.titulo">
                            <p class="text-danger mt-1 pt-1 fs-6" v-if="this.mostrarErrores">{{ this.errores.titulo }}</p>
                        </div>
                        <div class="mb-3">
                            <label for="categoria" class="form-label">Categoria</label>
                            <select class="form-select" id="categoria" v-model="data.categoria">
                                <option selected disabled>Selecciona una categoria</option>
                                <option value="Hogar">Hogar</option>
                                <option value="Actividades">Actividades</option>
                                <option value="Escuela">Escuela</option>
                            </select>
                            <p class="text-danger mt-1 pt-1 fs-6" v-if="this.mostrarErrores">{{ this.errores.categoria }}</p>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" v-model="data.contenido"></textarea>
                            <p class="text-danger mt-1 pt-1 fs-6" v-if="this.mostrarErrores">{{ this.errores.contenido }}</p>
                        </div>
                        <div class="mb-3">
                            <input type="submit" value="Guardar" class="btn fondo-primario text-white" @click="guardar"></input>
                        </div>
                    </form>
                    <div v-if="data.titulo.length || data.categoria.length || data.contenido.length">
                        <h2 class="titulo mb-3 fs-5">Previsualizacion</h2>
                        <div class="mb-3 border">
                            <div class="p-4">
                                <h3 class="h2">{{ data.titulo }}</h3>
                                <h4 class="fs-6 mb-4">{{ data.categoria }}</h4>
                                <p>{{ data.contenido }}</p>
                            </div>
                        </div>
                    </div>
                </div>`,
    methods: {
        guardar() {

            if(!this.data.titulo) {
                this.errores.titulo = "El titulo es obligatorio."
            } else {
                this.errores.titulo = ""
            }

            if (!this.data.categoria) {
                this.errores.categoria = "Debes seleccionar una categoria."
            } else {
                this.errores.categoria = ""
            }

            if (!this.data.contenido) {
                this.errores.contenido = "Este campo no puede quedar vacio."
            } else {
                this.errores.contenido = ""
            }


            if (!this.data.titulo.length || !this.data.categoria.length || !this.data.contenido.length) {
                this.mostrarErrores = true
            } else {
                
                if (!localStorage.notas) {
                    localStorage.notas = JSON.stringify([this.data])   
                } else {
                    let dataLocal = JSON.parse(localStorage.getItem("notas"))
                    dataLocal.push(this.data)
                    localStorage.notas = JSON.stringify(dataLocal)
                }
                this.$router.push("/")

            }

        },
    },
})