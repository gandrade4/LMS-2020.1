var token = "";

//aparecer botão de comprar com o clique
function configurarEventos(){
    var form = document.getElementById("form-login");
    var sair = document.getElementById("botao-sair");
    var product = document.getElementsByClassName("product");
        for(var i=0; i<product.length; i++){
            product[i].addEventListener("click", handleClickCard);
            
        }
        sair.addEventListener("click", logout);
        form.addEventListener("submit", function(event){
            event.preventDefault();
            login(this);
           
        });
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

//ocultar botão log out e sigh in
function hide(){
    var entrar = document.getElementById("botao-entrar");
    var sair = document.getElementById("botao-sair");
    if(token == ""){
        console.log(token);
        entrar.style.display = "block";
        sair.style.display = "none";
    }else{
        entrar.style.display = "none";
        sair.style.display = "block";
    }   
}
function logout(){
    token = "";
    hide();
    alert("Você saiu com sucesso!");
}


//login

function requisicaoAPI(url, metodo, funcao, dados, status){
    if(status == undefined){
        status = 200;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == status){
          funcao(this);
        }
    };
    xhttp.open(metodo, url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    if(dados == undefined){
        xhttp.send();
    }else{
        xhttp.send(JSON.stringify(dados));
    } 
}

function login(form){
    if(verificarLogin(form)){
        var dados = {
            email: form["email"].value,
            password: form["password"].value
        };
        form.reset();
        requisicaoAPI("https://reqres.in/api/login", "POST", responseLogin, dados);
    }
}

function verificarLogin(form){
    var email = form["email"].value;
    var password = form["password"].value;
  
    if(email.length == 0){
        alert("E-mail incorreto. Tente novamente!");
        return false;
    }
    if(password.length == 0){
        alert("Senha incorreta. Tente novamente!");
        return false;
    }
    return true;
  }

  function responseLogin(xhttp){
    var response = JSON.parse(xhttp.responseText);
    if(response.token == ""){
        alert(response.error);
    }else{
        token = response.token;
        console.log(token);
        alert("Você entrou com sucesso!");
    }
    hide();
}
