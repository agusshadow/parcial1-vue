Vue.component('form-nota', {
    data() {
        return {
            data: {
                titulo: "",
                categoria: "",
                contenido: "",
                destacado: false,
                estado: "pendiente"
            }
        }
    },
    template: ` <div>
                    <form @submit.prevent class="mb-5">
                        <div class="mb-3">
                            <label for="titulo" class="form-label">Titulo</label>
                            <input type="text" class="form-control" id="titulo" v-model="data.titulo">
                        </div>
                        <div class="mb-3">
                            <label for="categoria" class="form-label">Categoria</label>
                            <select class="form-select" id="categoria" v-model="data.categoria">
                                <option selected>Open this select menu</option>
                                <option value="Hogar">Hogar</option>
                                <option value="Actividades">Actividades</option>
                                <option value="Escuela">Escuela</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" v-model="data.contenido"></textarea>
                        </div>
                        <div class="mb-3">
                            <input type="submit" value="Guardar" class="btn btn-primary" @click="guardar"></input>
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
            if (!localStorage.notas) {
                localStorage.notas = JSON.stringify([this.data])   
            } else {
                let dataLocal = JSON.parse(localStorage.getItem("notas"))
                dataLocal.push(this.data)
                localStorage.notas = JSON.stringify(dataLocal)
            }
            this.$router.push("/")
        },
    },
})