var casas = [9,9,9, 9,9,9, 9,9,9];
var vez = 1;
var contaClick = 0;

var iPontosX = 0;
var iPontosO = 0;
var iPontosV = 0;
var sResposta = "";

function verifica(casa){
    if(casas[casa] == 9){
        casas[casa] = vez;
        if(vez == 1){
            document.getElementById("img"+casa).src = "imagens/batataFrita.png"
        }else{
            document.getElementById("img"+casa).src = "imagens/copo1.png"
        }
        vez *= -1;
        contaClick++;
        confere(); 
    }
}

function confere(){
    var i;
    var lGanhou = false;
    var lAcabou = true;
    for(i=0; i<casas.length; i++){
        if(casas[i] == 9){
            lAcabou = false;
        }
    }
    if(contaClick == 9){
        lAcabou = true;
    }
    //os tres primeiros são referentes a linha, os tres do meio são referentes as colunas e os dois ultimos são referentes a diagonal
    var soma = [casas[0]+casas[1]+casas[2], 
                casas[3]+casas[4]+casas[5],
                casas[6]+casas[7]+casas[8], 
                casas[0]+casas[3]+casas[6], 
                casas[1]+casas[4]+casas[7], 
                casas[2]+casas[5]+casas[8], 
                casas[0]+casas[4]+casas[8], 
                casas[2]+casas[4]+casas[6]];

    for(i=0; i<soma.length; i++){
        if(soma[i] == -3){
            lGanhou = true;
            sResposta = "Sorvete Ganhol!!!";
            iPontosO++;
            document.getElementById("bola").innerHTML = "Pontos Sorvete: " + iPontosO;
            if(iPontosO == 3){
                Swal.fire({
                    title: 'Sorvete🍦 ganhol 3 vezes e é o campião!',
                    imageUrl: 'imagens/campiao.gif',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Campião',
                })
                iPontosX=0;
                iPontosO=0;
                document.getElementById("xis").innerHTML = "Pontos Batata Frita: " + iPontosX;
                document.getElementById("bola").innerHTML = "Pontos Sorvete: " + iPontosO;
            }
            break; 
        }else if(soma[i] == 3){
            lGanhou = true;
            sResposta = "Batata Frita Ganhol!!!";
            iPontosX++;
            document.getElementById("xis").innerHTML = "Pontos Batata Frita: " + iPontosX;
            if(iPontosX == 3){
                Swal.fire({
                    title: 'Batata Frita🍟 ganhol 3 vezes e é o campião!',
                    imageUrl: 'imagens/campiao.gif',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Campião',
                })
                iPontosX=0;
                iPontosO=0;
                document.getElementById("xis").innerHTML = "Pontos Batata Frita: " + iPontosX;
                document.getElementById("bola").innerHTML = "Pontos Sorvete: " + iPontosO;
            }
            break;     
        }
    }
    if(lGanhou == false && lAcabou == true){
        sResposta = "Deu Velha!!!";
        iPontosV++;
        document.getElementById("velha").innerHTML = "Velha: " + iPontosV;
    }

    if(lGanhou || lAcabou){
        for(i=0; i<casas.length;i++){
            document.getElementById("casa"+i).disable = true;
            casas[i]=0;
        }
        document.getElementById("resposta").innerHTML =sResposta;
    }
}

function recomeca(){
    for(i=0; i<casas.length; i++){
        document.getElementById("img"+i).ondragstart = function(){return false;}; //nao permite arrastar a imagem
        document.getElementById("casa"+i).disable= false;
        document.getElementById("img"+i).src= "";

        document.getElementById("resposta").innerHTML = "Resultado:";


        casas[i] = 9;
        lGanhou = false;
        lAcabou = true;
        contaClick = 0;
        vez = 1;
    }
}
