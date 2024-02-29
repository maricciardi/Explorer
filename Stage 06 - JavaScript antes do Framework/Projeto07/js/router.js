export class Router {
    routes = {} //para saber que se trata de um objeto

    add(routeName, page) { //trouxe aqui a const routes do index.js de forma inteligente, a ideia dessa função é adicionar o nome e o valor da propriedade desse objeto
        this.routes[routeName] = page //o this aqui referencia a const route da função handle
    }

    //function route(event) copiada do index.js
    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href) 

        this.handle() //sempre que quiser usar uma função ou uma propriedade dentro de uma classe é preciso usar o this, pq vai ser a referencia a alguma coisa dentro doas chaves{}
    }

    //function handle() copiada do index.js
    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404] //os dois this aqui são pra referenciar o this.routes da função add
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }

}

//criação de uma classe, toda função dentro de uma classe é chamada de método, toda veriável dentro de uma classe é chamada de atributo
