var burguer = window.document.getElementById("burguer")
var menu = window.document.getElementById("menu")

function clicouMenu(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block'
    }
}

function tamanhoTela(){
    if(window.innerWidth >= 768){
        menu.style.display = 'block'
    } else{
        menu.style.display = 'none'
    }
}


window.addEventListener('resize', tamanhoTela)
burguer.addEventListener('click', clicouMenu)