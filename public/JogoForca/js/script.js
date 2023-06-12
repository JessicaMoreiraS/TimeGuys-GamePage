var sPerguntas = [['CARAMBOLA',     'FRUTA'],        ['JABOTICABA',     'FRUTA'], 
                ['JAMBO',           'FRUTA'],        ['CUPUAÇU',        'FRUTA'],
                ['PITOMBA',         'FRUTA'],        ['FORTALEZA',      'CIDADE'],
                ['HOLAMBRA',        'CIDADE'],       ['TERESOPOLIS',    'CIDADE'],
                ['HORTOLANDIA',     'CIDADE'],       ['CARAPICUIBA',    'CIDADE'],
                ['ALICATE',         'FERRAMENTA'],   ['MARTELO',        'FERRAMENTA'],
                ['SERRA TICO-TICO', 'FERRAMENTA'],   ['FORMAO',         'FERRAMENTA'],
                ['CHAVE DE FENDA',  'FERRAMENTA'],   ['ALMOFADA',       'OBJETO'], 
                ['JORNAL',          'OBJETO'],       ['BOLSA',          'OBJETO'], 
                ['PALITO DE DENTE', 'OBJETO'],       ['CHURRASQUEIRA',  'OBJETO'],
                ['STROGONOFF',      'COMIDA'],       ['LASANHA',        'COMIDA'],
                ['MACARRONADA',     'COMIDA'],       ['FRANGO XADREZ',  'COMIDA'],
                ['CANELONE',        'COMIDA'],       ['AEROWILLYS',     'CARRO'],
                ['SANTANA',         'CARRO'],        ['VARIANT',        'CARRO'],
                ['RENEGATE',        'CARRO'],        ['VIRTUS',         'CARRO'],
                ['ROSA',            'FLOR'],         ['GERBERA',        'FLOR'],
                ['CALANCHUE',       'FLOR'],         ['ORQUIDEA',       'FLOR'], 
                ['LIRIO',           'FLOR'],         ['VIOLAO',    'INSTRUMENTO MUSICAL'],
                ['SAXOFONE', 'INSTRUMENTO MUSICAL'], ['UKULELE',   'INSTRUMENTO MUSICAL'],
                ['ESCALETA', 'INSTRUMENTO MUSICAL'], ['TROMBONE',  'INSTRUMENTO MUSICAL'],
                ['ADAM SANDLER',    'ATOR'],         ['WILL SMITH', ,   'ATOR'],
                ['JOHNNY DEPP',     'ATOR'],         ['BRAD PITT',      'ATOR'],
                ['DWAYNE JOHNSON',  'ATOR'],         ['JULIA ROBERTS',  'ATRIZ'],
                ['MERYL STREEP',    'ATRIZ'],        ['BRIE LARSON',    'ATRIZ'],
                ['SCARLETT JOHANSSON', 'ATRIZ'],     ['ZOE SALDANA',    'ATRIZ'],
                ['PATO DONALD',     'PERSONAGEM'],   ['HOMEM DE FERRO', 'PERSONAGEM'],
                ['CAPITAO AMERICA', 'PERSONAGEM'],   ['CORINGA',        'PERSONAGEM'],
                ['AQUAMAN',         'PERSONAGEM'],   ['SPACE INVADERS', 'JOGOS'],
                ['PAC-MAN',         'JOGOS'],        ['SUPER MARIO',    'JOGOS'],
                ['DONKEY KONG',     'JOGOS'],        ['MINECRAFT',      'JOGOS']];

var iSorteados = [];
var iJogada = 0;
var sPalavraSorteada;
var iAcertos=0; //letras certas
var iErros=0; //letras erradas
var cLetraClicada = '';
var iCertas=0,iErradas=0 //Palavras

var sLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];

var cLetras1 = ['Q','W','E','R','T','Y','U','I','O','P'];
var cLetras2 = ['A','S','D','F','G','H','J','K','L'];
var cLetras3 = ['Z','X','C','V','B','N','M','-'];
cria(cLetras1,"tecl1");
cria(cLetras2,"tecl2");
cria(cLetras3,"tecl3");

function cria(letra, tecla){
    var linha = document.getElementById(tecla);
    for(var i=0; i<letra.length; i++){
        var btnLetra = document.createElement("button");
        btnLetra.innerHTML = letra[i];
        btnLetra.setAttribute("type", "button");
        btnLetra.setAttribute("id", letra[i]);
        btnLetra.setAttribute("value", letra[i]);
        btnLetra.style.marginRight = "5px";
        //console.log(cLetra)
        linha.appendChild(btnLetra);
        
        //var cLetra = letra[i];
        let btn = document.getElementById(letra[i]);
        //console.log("Letra: "+ cLetra);
        btn.addEventListener("mousedown", function(){confere(this.id);});
        btn.addEventListener("mouseup", function(){acabou();});
    }
}

function criaLetras (sPalavra){
    var formula = document.getElementById('tenta');
    var j=0;
    console.log("Palavra: "+ sPalavra)

    for(var i=0; i<sPalavra.length; i++){
        if(sPalavra[i].charCodeAt(0)!=32){
            var letra = document.createElement("input");
            letra.setAttribute("type","text");
            letra.setAttribute("name", "tenta"+j);
            letra.setAttribute("id", "tenta"+j);
            letra.setAttribute("maxlength", 1);
            letra.setAttribute("size", 1);
            letra.setAttribute("disabled", true);
            letra.classList.add("inputLetra");
            formula.appendChild(letra);
            j++;
        }else{
            //document.getElementById("tenta"+(j-1)).style.margin="0px 20px 0px 1px";
        }
    }

    sPalavraSorteada = limpa(sPalavra);
    document.getElementById("tema").innerHTML = sPerguntas[iSorteados[iJogada]][1]+" - "+sPalavraSorteada.length+" letras"
}

function sorteia(){
    for(var m=0; m<sPerguntas.length; m++){
        iSorteados.push(m);
    }
    iSorteados = shuffleArray(iSorteados);
    criaLetras(sPerguntas[iSorteados[iJogada]][0]);
}

function confere(cLetra){
    console.log(cLetra)
    cLetraClicada = cLetra;
    var lAchou = false;
    for(var i=0; i<sPalavraSorteada.length; i++){
        if(cLetra == sPalavraSorteada.charAt(i)){
            document.getElementById("tenta"+i).value = cLetra;
            iAcertos++;
            document.getElementById("acerto").innerHTML = "Acertos: "+ iAcertos;
            lAchou = true;
        }
    }
    if(lAchou == false){
        iErros++;
        document.getElementById("imagem").src = "imagens/forca"+(iErros+1)+".png";
    }
}

function acabou(){
    var lAcabou = false;
    if(iAcertos == sPalavraSorteada.length){
        lAcabou = true;
        iCertas++;
        Swal.fire({
            title: 'Parabéns, você conseguiu!!!!!',
            //text: 'Que pena, tente outra vez!',
            imageUrl: '../../imagens/comemora.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Triste',
          })
        //Swal.fire('Parabéns, você conseguiu!!!!!');
    }else if(iErros == 6){
        lAcabou = true;
        Swal.fire({
            title: 'Enforcado!!!!!',
            //text: 'Que pena, tente outra vez!',
            imageUrl: '../../imagens/triste2.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Comemora',
          })
        //Swal.fire("Enforcado!!!!!");
        iErradas++;
    }
    document.getElementById(cLetraClicada).disabled = true;
    document.getElementById(cLetraClicada).style = 'background-color: aliceblue; color: #F6921E; margin:2px 3.5px';

    if(lAcabou){
        for(var i=0; i<sPalavraSorteada.length; i++){
            document.getElementById("tenta"+i).remove();
        }
        iJogada++;
        document.getElementById("palCerta").innerHTML = "Palavras certas: "+iCertas+"<br>Palavras erradas: "+iErradas;
        
        criaLetras(sPerguntas[iSorteados[iJogada]][0]);
        
        iAcertos=0;
        iErros=0;
        document.getElementById("acerto").innerHTML = "Acertos: "+iAcertos;
        document.getElementById("imagem").src = "imagens/forca"+(iErros+1)+".png";
        
        for(var i=0; i<sLetras.length; i++){
            document.getElementById(sLetras[i]).disabled = false;
            document.getElementById(sLetras[i]).style = 'background-color: #F6921E; color: #fff; margin:2px';

        }
    }
}


function shuffleArray(d){
    for(var c= d.length - 1; c>0; c--){
        var b = Math.floor(Math.random()*(c+1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }
    return d;
}

function limpa(sItem){
    var sResultado = sItem;
    sResultado = replaceAll(sResultado, " ", "");
    sResultado = sResultado.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return sResultado
}

function replaceAll(str, de, para){
    var pos = str.indexOf(de);
    while(pos>-1){
        str =str.replace(de, para);
        pos = str.indexOf(de);
    }
    return (str);
}

function shake(e, oncomplete, distance, time){
    var time = 500;
    var distance = 5;

    var start = (new Date()).getTime();
    var elapsed = now - start;
    var fraction = elapsed / time;

    if(fraction < 1){
        var x= distance * Math.sin(fraction * 4 * Math.PI);
        e.style.left = x + "px";
        setTimeout(animate, Math.min(25, time - elapsed));
    }else{
        if(oncomplete) oncomplete(e);
    }
}


function shakeme(eventl){
    shake(eventl.target);
}
