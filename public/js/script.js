//sequencia usada: nome, index, selecaoPersonagem, gartic
const personagens = [["Rosa","rosa2.png", "rosa.png", "rosa11.png"],
                    ["Jogador de beisebol", "baseball3.png", "baseball1.png", "baseball2.png"],
                    ["Construtora", "construtor2.png", "construtor1.png", "construtor3.png"],
                    ["Cachorro-quente", "cachorroQuente.png", "cachorroQuente3.png", "cachorroQuente4.png"],
                    ["Dinossauro", "dinossauro1.png", "dinossauro.png", "dinossauro2.png"],
                    ["Pinguim", "pinguim1.png", "pinguim2.png", "pinguim3.png"],
                    ["Galinha", "galinha2.png", "galinha3.png", "galinha1.png"],
                    ["Pato","pato1.png", "pato2.png", "pato5.png"],
                    ["Flor","flor2.png", "flor1.png", "flor1.png"],
                    ["Pirata", "pirata2.png", "pirata1.png", "pirata1.png"],
                    ["Hambúrguer","hamburgue1.png", "hamburgue2.png", "hamburgue1.png"],
                    ["Sonic","sonic2.png","sonic1.png", "sonic1.png"],
                    ["Cacto", "cacto2.png", "cacto1.png", "cacto2.png"],
                    ["Pintor","pintor.png","pintor2.png","pintor3.png"],
                    ["Pombo", "pombo3.png", "pombo1.png", "pombo2.png"]]
function acessar(){
    event.preventDefault;
    
    var nome = document.getElementById('nome').value
    var sala = document.getElementById('temaSala').value
    if(nome != ""){
        window.localStorage.setItem('username', nome)
        if(sala == "nenhum"){
            Swal.fire("Ops, escolha uma sala para acessar!");
        }else{
            if(sala == "programacao"){
                window.location.href = '../gartic.html';
            }else{
                Swal.fire('sala não encontrada');
            }
        }
    }else{
        Swal.fire("Preencha seu nome de usuário para acessar")
    }
}

function personagemEscolhido(n){
    var foto =`<img src="../imagens/FallGuys/${personagens[n][3]}">`
    return foto
}


function recarregarHeader(escolhido, palavra){
    document.getElementById('boxDraw').innerHTML = "";
    if(escolhido){
        document.getElementById('headerPalavra').value = "Desenhe: "+palavra;
        document.getElementById("EscolhidoFerramentas").style= "visibility: visible;";
    }
    if(!escolhido){
        document.getElementById('headerPalavra').value = "";
        document.getElementById("EscolhidoFerramentas").style = "visibility: hidden;";
    }
}

function borracha(){
    document.getElementById("inputColor").value = "#ffffff"
}

function apagarMensagens(){
    document.getElementById('mensagens').innerHTML="";
}


/* INDEX */
var audioIndex = new Audio('../audios/The_Number_One_Catch_Instr_mp3/The Number One Catch Instr.mp3');
function tocarMusica(){
    audioIndex.play();
    audioIndex.loop = true;
    document.getElementById("areaMusica").innerHTML = '<img src="../imagens/pauseAmarelo.png" alt="Pause Musica" id="pauseMusic" onclick="pausarMusica()">';
}
function pausarMusica(){
    audioIndex.pause();
    document.getElementById("areaMusica").innerHTML = '<img src="../imagens/playAmarelo.png" alt="Play Musica" id="playMusic" onclick="tocarMusica()">';
}

function carregaCardsJogos(){
    fetch("../jogos.json")
    .then(res => res.json())
    .then(aquivos => {
        var blanck = "";
        for(var x=0; x<aquivos.jogos.length; x++){
            if(aquivos.jogos[x].nome == "Forca" || aquivos.jogos[x].nome == "Troca de palavras" || aquivos.jogos[x].nome == "Jogo da velha"){
                blanck='target="_blank"';
            }else{
                blanck="";
            }
            document.getElementById("boxGames").innerHTML += `<a class="aCardIndex" ${blanck} href="${aquivos.jogos[x].link}">
                                                                <div class="cardImgIndex">
                                                                    <img src="../imagens/jogos/${aquivos.jogos[x].imagem}">
                                                                </div>
                                                                <h3>${aquivos.jogos[x].nome}</h3>
                                                                <p>${aquivos.jogos[x].descricao}</p>
                                                            </a>`;
        }
    })
}

function carregaPersonagem(){
    //var nomesFotosPersonagens = ['rosa2.png', 'baseball1.png', 'construtor2.png', 'dinossauro.png', 'cachorroQuente.png', 'galinha1.png', 'pombo3.png'];
    var personagemEscolhido = localStorage.getItem('personagemEscolhido');
    if(personagemEscolhido == "" || personagemEscolhido == undefined || personagemEscolhido == null){
        personagemEscolhido = 0;
    }

    var foto =`<img src="../imagens/FallGuys/${personagens[personagemEscolhido][1]}">`

    document.getElementById("boxPersonagem").innerHTML = `<div>${foto}</div>`;
}


function carregaCardsSelectPersonagem(){
    
    for(var i=0; i<personagens.length;i++){

        document.getElementById("cardsPersonagens").innerHTML += `<div class="cardPersonagem" onclick="selecionarPersonagem(${i})">
                                                                    <img src="../imagens/FallGuys/${personagens[i][2]}">
                                                                    <p>${personagens[i][0]}</p>
                                                                </div>`
    }
}

function selecionarPersonagem(nPersonagem){
    localStorage.setItem('personagemEscolhido', nPersonagem);
    Swal.fire("Personagem selecionado com sucesso");
}

function musicaPlay(){
    document.getElementById('player').play()
    document.getElementById('boxPlayMusic').innerHTML = `<img src="imagens/pauseAmarelo.png" onclick="musicaPause()">
    <figcaption>Faixa: "Higher Clarity",waveZzz<br>
    Música pela https://slip.stream<br>
    Download gratuito<br>
    Stream: https://get.slip.stream/ANbfxx<br>
    Ouça no Spotify: https://go-stream.link/tk-t-pain
</figcaption>`
}
function musicaPause(){
    document.getElementById('player').pause()
    document.getElementById('boxPlayMusic').innerHTML = `<img src="imagens/playAmarelo.png" onclick="musicaPlay()">
    <figcaption>Faixa: "Higher Clarity",waveZzz<br>
    Música pela https://slip.stream<br>
    Download gratuito<br>
    Stream: https://get.slip.stream/ANbfxx<br>
    Ouça no Spotify: https://go-stream.link/tk-t-pain
</figcaption>`
}