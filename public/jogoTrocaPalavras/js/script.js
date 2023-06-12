var vetorFilmes = ["<b>Victoria</b> e Misterio", "O menino <b>maluquinho</b>", "O menino que descobrio o <b>vento</b>", "O projeto <b>Adam</b>", "Como cuidar de um <b>bebê</b> elefante"]
var listarFilmes = document.getElementById("filmes");

function listar(){
    limpar()
    for(a=0; a<vetorFilmes.length; a++){
        var filmes = "<p>"+vetorFilmes[a]+"</p>";
        mostrar.innerHTML += filmes;
    }
}

listar()

function jogar(){
    var palavra = document.getElementById("palavra").value;
    var mostrar = document.getElementById("mostrar")
    if(palavra != ""){
        var vetorFilmesComPalavra = [palavra+" e Misterio", "O menino "+palavra, "O menino que descobrio o "+palavra, "O projeto "+ palavra, "Como cuidar de um "+palavra+" elefante"]
        limpar()
        for(i=0; i<vetorFilmes.length; i++){
            var filmes = "<p>"+vetorFilmesComPalavra[i]+"</p>";
            mostrar.innerHTML += filmes;
        }
    }else{
        limpar()
        var ops = "<p> Ops, digite uma palavra ;-)</p>"
        mostrar.innerHTML = ops;
    }
}

function limpar(){
    mostrar.innerHTML = "";
}