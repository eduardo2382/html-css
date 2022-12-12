var burguer = window.document.getElementById("burguer")
var menu = window.document.getElementById("menu")

function col(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block'
    }
}

burguer.addEventListener('click', col)