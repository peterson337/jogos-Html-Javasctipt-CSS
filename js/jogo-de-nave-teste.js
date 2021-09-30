var dirlyJ,dirlxJ,jog,velJ,pjx,pjy;
var tamTelaW,tamTelaH;
var jogo;
var frames;

function teclaDw() {
    var tecla=event.keyCode;
    if(tecla==38){//Cima
       dirlyJ=-1; 
    }else if(tecla==40){//Baixo
        dirlyJ=1;
    }
    if(tecla==37){//Esquerda
      dirlxJ=-1;  
    }else if(tecla==39){//Direirta
        dirlxJ=1;
    }
    if(tecla==32){//Espaço/tiro

    }
}

function teclaUp(){
     tecla=event.keyCode;
    if((tecla==38)||(tecla==40)){
      dirlyJ=0;  
    }

    if((tecla==37)||(tecla==39)){//Esquerda
        dirlxJ=0;
    }
}

function controlaJogador(){
   pjy+=dirlyJ*velJ;
    pjx+=dirlxJ*velJ;
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px"; 
}
function gameloop(){
    if(jogo){
   //Funções de contole
 controlaJogador();
}
frames=requestAnimationFrame(gameloop);
}

function inicia(){
  jogo=true;
  
  //Ini tela
  tamTelaH=window.innerHeight;
  tamTelaW=window.innerWidth;

  //Ini jogador
  dirlxJ=dirlyJ=0;
  pjx=tamTelaW/2;
  pjy=tamTelaH/2;
  velJ=5;
  jog=document.getElementById("naveJog");
  jog.style.top=pjy+"px";
  jog.style.left=pjx+"px"; 
  gameloop();
}

window.addEventListener("load",inicia);
window.addEventListener("keydown",teclaDw);
window.addEventListener("keyup",teclaUp);