Vue.component('inicio', {
    data() {
        return {
            info: ""
        }   
    },
    template: ` <div>
                    <h2 class="titulo my-4">Todas las notas</h2>
                    <notas @no-data="info = $event"></notas>
                    <p>{{ info }}</p>
                    <btn-crear></btn-crear>
                </div>`,
})