export default class Router {
  routes = {}
  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    // essa função serve para não recarregar ou redirecionar a pagina quando clicar nos links
  
    window.history.pushState({}, '', event.target.href)
  
    this.handle()
  }

  handle(){

    const pathname = window.location.pathname
    //const {pathname} = window.location desistruturar, as chaves na constante serve para ele perquisar na location sem precisar fazer toda a estrutura, {pathname, href, port...}
  
    const route = this.routes[pathname]
    fetch(route).then(data => data.text()).then(html => {
      document.querySelector("#app").innerHTML = html
    } )
  }
}
