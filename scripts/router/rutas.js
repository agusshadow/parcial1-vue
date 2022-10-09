const home = {
  template: `<inicio></inicio>`,
  name: "home"
}

const crear = {
  template: `<crear-nota></crear-nota>`,
  name: "crear"
}

const routes = [
  {path: "/", component: home},
  {path: "/crearnota", component: crear},
  {path: "*", redirect: "/"}
]

const router = new VueRouter({routes})

const app = new Vue({
  el: "#app",
  router
})
