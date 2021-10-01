var dirlyJ,dirlxJ,jog,velJ,pjx,pjy;
var tamTelaW,tamTelaH;
var tam;
var pt
var jogo;
var frames;
var t;
var att1;
var att2;
var tiros;
var velT;
var x,y
var bomba;
var contBombas,painelContBombas,velB,tmpCriaBomba;
var bombasTotal;
var pi
var vidaPlaneta;


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
      atira(pjx+17,pjy);
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

function criaBomba(){
  if(jogo){
     y=0;
     x=Math.random()*tamTelaW;
     bomba=document.createElement("div");
     att1=document.createAttribute("class");
     att2=document.createAttribute("style");
     att1.value="bomba";
     att2.value="top:"+y+"px;left:"+x+"px;";
     bomba.setAttributeNode(att1);
     bomba.setAttributeNode(att2); 
     document.body.appendChild(bomba);
     contBombas--;
  }
}

function controlaBomba(){
  bombasTotal=document.getElementsByClassName("bomba");
  tam=bombasTotal.length;
  for(var i=0;i<tam;i++){
    if(bombasTotal[i]){
      pi=bombasTotal[i].offsetTop;
      pi+=velB;
      bombasTotal[i].style.top=pi+"px";
      if(pi>tamTelaH){
        vidaPlaneta=-10;
        bombasTotal[i].remove();
      }
    }
  }
}

function atira(x,y){
  t=document.createElement("div");
  att1=document.createAttribute("class");
  att2=document.createAttribute("style");
  att1.value="tiroJog";
  att2.value="top:"+y+"px;left:"+x+"px";
  t.setAttributeNode(att1);
  t.setAttributeNode(att2);
  document.body.appendChild(t);
}

function controlaTiros(){
   tiros=document.getElementsByClassName("tiroJog");
   tam=tiros.length;
   for(var i=0;i<tam;i++){
     if (tiros[i]){
       pt=tiros[i].offsetTop;
       pt-=velT;
       tiros[i].style.top=pt+"px";
       if(pt<0){
         //Outor jeito de remover tiros.
         //document.body.removeChild(tiros[i]);
         tiros[i].remove();
       }
     }
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
 controlaTiros();
  controlaBomba();
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
  velJ=velT=5;
  jog=document.getElementById("naveJog");
  jog.style.top=pjy+"px";
  jog.style.left=pjx+"px"; 

// Controles das bombas
 clearInterval(tmpCriaBomba);
 contBombas=150;
 velB=3;
 tmpCriaBomba=setInterval(criaBomba,1700);

 //Controle de vida do planeta
vidaPlaneta=300;

  gameloop();
}

window.addEventListener("load",inicia);
window.addEventListener("keydown",teclaDw);
window.addEventListener("keyup",teclaUp);