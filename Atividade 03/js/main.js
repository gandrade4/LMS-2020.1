//aparecer botão de comprar com o clique
function configurarEventos(){
    var product = document.getElementsByClassName("product");
        for(var i=0; i<product.length; i++){
            product[i].addEventListener("click", handleClickCard);

        }
}

function handleClickCard(){
    var comprar = this.getElementsByClassName("botao-comprar");
    var aside = comprar[0].style.display;
    if(aside == "none"){
        comprar[0].style.display = "flex";
    }else{
        comprar[0].style.display = "none";
    }
}

function hideCard(){    
    document.getElementsByClassName("product").style.visibility = "hidden";
}


function request(metodo, url, cFunction, status, dados){
    if(status == undefined){
        status = 200;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == status){
            cFunction(this);
        }
    };
    xhttp.open(metodo, url, true);
    if(dados == undefined){
        xhttp.send();
    }else{
        xhttp.send(JSON.stringify(dados));
    }
    
}

function getloginInfo(){
    var url = "https://reqres.in/api/users";
    request("GET", url, loginInfo);
}

function loginInfo(xhttp){
    var response = JSON.parse(xhttp.responseText);

    document.getElementById("qtd-usuarios").innerHTML = response.total;

    document.getElementById("qtd-paginas").innerHTML = response.total_pages;

}

function carregarTabela(elemento){
    var pagina = elemento.getAttribute("data-pagina");

    var url = "https://reqres.in/api/users?page=" + pagina;
    request("GET", url, responseCarregarTabela);
}

function criarElementoTexto(tag, texto){
    var elemento = document.createElement(tag);
    var noTexto = document.createTextNode(texto);
    elemento.appendChild(noTexto);

    return elemento;
}
