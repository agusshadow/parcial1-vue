const home = {
  template: `<div>estas en la home</div>`,
  name: "home"
}

const ingresar = {
  template: `<div>ingresar</div>`,
  name: "ingresar"
}

const rutas = [
  {path: "/", component: home},
  {path: "/ingresar", component: ingresar},
  {path: "*", redirect: "/"}
]

const router = new VueRouter({rutas})

const app = new Vue({
  el: "#app",
  router
})