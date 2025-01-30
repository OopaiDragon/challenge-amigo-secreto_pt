//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listamigos;
let nome;
function sortearAmigo() {
    let amigoEscolhido = document.getElementById('resultado');
    amigoEscolhido.innerHTML = "";
    if(amigos.length <= 1){
        alert("Poer favor, adicione os nome de seus amigos antes de inciar!!!");
    }else {
        let numeroEscolhido = Math.floor(Math.random() * amigos.length);
        amigoEscolhido.innerHTML = 'Amigo secreto sorteado é: ' + amigos[numeroEscolhido];
        amigos = [];
        limpaCampo(1);
        limpaCampo(2);
    }
}

function adicionarAmigo(){
    listamigos = document.getElementById('listaAmigos');
    nome = document.querySelector('input');
    if(amigos.includes(nome.value)){
        alert("Esse nome já foi adicionado!");
        return;
    }else{
        if(nome.value.length == 0){
            alert('Por favor, insira um nome.');
            limpaCampo(1);
        }else{
            amigos.push(nome.value);
            atualizarLista();
            limpaCampo(1);
        }
    }
}

function atualizarLista() {
    listamigos = document.getElementById('listaAmigos');
    listamigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listamigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function limpaCampo(indice){
    if(indice == 1){
    nome = document.querySelector('input');
    nome.value = "";
    }else{
        if(indice == 2){
           listamigos.innerHTML = "";
        }
    }
}













