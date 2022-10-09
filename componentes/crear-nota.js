Vue.component('crear-nota', {
    data() {
        return {
            info: "componente ejemplo"
        }
    },
    template: ` <div>
                    <h2 class="titulo my-4">Crear nueva nota</h2>
                    <form-nota></form-nota>
                </div>`
})