import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/contact", "/pages/contact.html")
router.add("/about", "/pages/about.html")
router.add(404, "pages/404.html")

        /*coloquei essa const como função add(routeName, page) no arquivo router.js:
        const routes = { 
            "/": "/pages/home.html",
            "/contact": "/pages/contact.html",
            "/about": "/pages/about.html",
            404: "pages/404.html"
        } //mapeamento das rotas
        */


        /*coloquei as funções route e handle no arquivo router.js:
        function route(event) {
            event = event || window.event//verifica se eu passei um evento, se não passei pega o evento que está na janela
            event.preventDefault()//aqui eu desabilitei a mudança automática da página

            window.history.pushState({}, "", event.target.href) //coloca o estado(pushstate) no histórico, primeiro parâmetro é o tipo de dado(não tenho nenhum dado para colocar, ficou objeto vazio), segundo parâmetro é a string(também ficou vazio), terceiro parâmetro é a URl pra colocar no histórico, quero pegar o href e colocar no histórico 
            //event.target > quem disparou o evento? quem é o target? nesse caso é o <a>, que tem o onclick, nesse caso eu quero pegar a propriedade href do <a>
            //aqui eu estou apenas colocando o estado no histórico, avisando para onde ir, mas não estou realmente mudando de página

            handle()
        }

        function handle() {
            const pathname = window.location.pathname
            //const {pathname} = window.location > outra forma de acessar uma propriedade do objeto, aqui estou desestruturando o location para pegar apenas o pathname

            const route = routes[pathname] || routes[404] //se tiver a rota (na lista do const routes) eu quero que ele mostre no console, OU se não tiver mapeado pode mostrar a rota 404
            //aqui vai criar uma rota

            //console.log(pathname)
            //console.log(route)

            //--------

            //fetch(route).then((data) => {
            //    console.log(data)
            //})
            //o fetch sempre retorna uma promessa, por isso o route fica assíncrono, vai rodar em segundo plano, depois vai rodar a função callback (then) para mostrar os dados
            fetch(route)
            .then(data => data.text())
            //o .text() transforma o resultado para texto
            //pra onde o data.text() está retornando? continua no segundo then, se quiser colocar os dados no console.log posso chamar meu parametro de html e usar a função .then(html => console.log(html)), aqui eu chamo de html só pra colocar no console.log 
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })
        }
        */

/*handle()

window.onpopstate = () => handle() //com onpopstate ao utilizar o botao voltar do navegador vai carregar a página tbm
window.route = () => route() //em vez de colocar window. em todos onclick do nav do arquivo index.html (ex: onclick="window.route()"), coloquei aqui, pra não deixar de executar essa função*/ //vou reescrever abaixo:

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()