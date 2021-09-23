//Elemetos
var vbtIniciar;
var vbola;
var vcpu;
var vjogador;
var vPaineltxtPontos;

//Controle de animação.
var game,frames;

//Posição
var posBolaX,posBolaY;
var posJogadorX,posJogadorY;
var posCpuX,posCpuY;

//Direção de acordo com a tecla.
var dirJy;

//Posições iniciais.
var posJogIniY=180,posCpuIniY=180,posBolaIniX=475,posBolaIniY=240;

//Tamanhos
var camposX=0,camposY=0,campoW=960,campoH=500;
var barraW=20,barraH=140,bolaW=20,bolaH=20;

//Direção
var bolaX,bolaY;
var cpuY=0;

//Velocidade
var velBola,velCpu,velJogador;

//Controle
var pontos=0;
var tecla;
jogo=false;

function controlajog(){
    if(jogo){
        posJogadorY+=velJogador*dirJy; 
                posJogadorY+=velJogador*dirJy;
                if(((posJogadorY+barraH)>= campoH)||((posJogadorY)<= 0)){
                    posJogadorY+=(velJogador*dirJy)*(-1);
                }
                vjogador.style.top=posJogadorY+"Px";
            } 
        }
    


function teclaDw(){
    tecla=event.keyCode;
    if(tecla==38){//Cima
        dirJy=-1;
    }else if(tecla==40){//Baixo
        dirJy=+1;
    }

}

function teclaup(){
    tecla=event.keyCode;
    if(tecla==38){//Cima
        dirJy=0;
    }else if(tecla==40){//Baixo
        dirJy=0;
    }
}

function game(){
    if(jogo){
        controlajog();
    }
    frames=requestAnimationFrame(game);
}

function iniciaJogo(){
    if(!jogo){
    cancelAnimationFrame(frames);
    jogo=true;
    dirJy=0
    posBolaX=posBolaIniX;
    posBolaY=posBolaIniY;
    posJogadorY=posJogIniY;
    posCpuY=posCpuIniY;
    game();
  }
}

function inicializar(){
    velBola=velCpu=velJogador=8;
    vbtIniciar=document.getElementById("btIniciar");
    vbtIniciar.addEventListener("click",iniciaJogo);
    vjogador=document.getElementById("dvJogador");
    vcpu=document.getElementById("dvCpu");
    vbola=document.getElementById("dvBola");
    vPaineltxtPontos=document.getElementById("txtPontos");
    document.addEventListener("keydown",teclaDw);
    document.addEventListener("keyup",teclaup);
}

window.addEventListener("load",inicializar);