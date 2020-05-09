function soma(n1, n2){
    return n1+n2;
}

console.log(soma(5,10));

function botao(){
    alert("você clicou");
    document.getElementById("h3Clique").innerHTML = "<i>você cliclou<\i>";
}

function redirecionar(){
    //window.open("https://github.com/ebilieri"); // abrir em nova janela
    window.location.href = "https://github.com/ebilieri"; // abrir na mesma pagina
}

function trocar(elemento){
    elemento.innerHTML = "Você passou o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse";
}

function load(){
    alert("página carregada");
}