/*
let url_atual = window.location.pathname

if(url_atual =='/'){
    document.querySelector("#menuHome").className='nav-link text-white active'
}else if(url_atual =='/noticias'){
    document.querySelector("#menuNoticias").className='nav-link text-white active'
}else if(url_atual =='/admin'){
    document.querySelector("#menuAdmin").className='nav-link text-white active'
}
*/
let url_atual = window.location.pathname
   window.onload = () => {
       if (url_atual == '/') {
           console.log("Home")
           document.querySelector("#menuHome").classList.add("active")
       } else if (url_atual == '/noticias') {
           console.log("Noticia")
           document.querySelector("#menuNoticias").classList.add("active")
       } else if (url_atual == '/admin') {
           console.log("Admin")
           document.querySelector("#menuAdmin").classList.add("active")
       }
   }
