Vue.component('inicio', {
    data() {
        return {
            info: ""
        }   
    },
    template: ` <div>
                    <notas @no-data="info = $event"></notas>
                    <div class="text-center pt-5" v-show="info.ver">
                        <p class="text-secondary fs-5">{{ info.texto }}</p>
                        <img src="imagenes/anota.png" alt="persona anotando" class="img-fluid px-5">
                    </div>
                    <btn-crear></btn-crear>
                </div>`,
})