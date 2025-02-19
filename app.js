//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {   
    let nome = document.getElementById('amigo').value; 
    let tamanho = nome.length; 

    if (tamanho != 0) {
        amigos.push(nome); 
        //console.log(amigos);  
        listaAmigos(); // Chama a função para atualizar a lista de amigos na página
    } else {
        alert("Digite o nome do amigo");
    }
    document.getElementById('amigo').value = "";         
}

function listaAmigos() {
    let lista = ""; 
    for (let i = 0; i < amigos.length; i++) {
        lista += "<li>" + amigos[i] + "</li>";             
    }
    //console.log(lista);
    document.getElementById("listaAmigos").innerHTML = lista; 
}
    
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }   
    let sorteado = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[sorteado]; 
    //console.log(amigoSorteado); 
    document.getElementById('resultado').innerHTML = amigoSorteado; 
    document.getElementById('listaAmigos').innerHTML = ""; // Limpa a lista de amigos no HTML
    amigos = []; // Limpa o array de amigos
}
