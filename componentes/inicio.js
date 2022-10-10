Vue.component('inicio', {
    data() {
        return {
            info: ""
        }   
    },
    template: ` <div>
                    <notas @no-data="info = $event"></notas>
                    <p>{{ info }}</p>
                    <btn-crear></btn-crear>
                </div>`,
})