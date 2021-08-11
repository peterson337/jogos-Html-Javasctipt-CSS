var jogo = [];
var tabuleiro = [];
var quemJoga=0; // 0-jogador 1cpu
var verifica;
var jogando = true;
var nivel=1;
var jogadaCpu=1;
var quemComeca=1;

function jogar(p){
    if((jogando)&&(quemJoga==0)){
        switch(p){
            case 1:
                if(jogo[0][0]==""){
                    jogo[0][0]="x";
                    quemJoga=1;
                }
                break;

                case 2:
                    if(jogo[0][1]==""){
                        jogo[0][1]="x";
                        quemJoga=1;
                    }
                    break;

                    case 3:
                        if(jogo[0][2]==""){
                            jogo[0][2]="x";
                            quemJoga=1;
                        }
                        break;

                        case 4:
                            if(jogo[1][0]==""){
                                jogo[1][0]="x";
                                quemJoga=1;
                            }
                            break;

                            case 5:
                                if(jogo[1][1]==""){
                                    jogo[1][1]="x";
                                    quemJoga=1;
                                }
                                break;

                                case 6:
                                    if(jogo[1][2]==""){
                                        jogo[1][2]="x";
                                        quemJoga=1;
                                    }
                                    break;

                                    case 7:
                                        if(jogo[2][0]==""){
                                            jogo[2][0]="x";
                                            quemJoga=1;
                                        }
                                        break;

                                        case 8:
                                            if(jogo[2][1]==""){
                                                jogo[2][1]="x";
                                                quemJoga=1;
                                            }
                                            break;

                                  /*Default */          case 9:
                                                if(jogo[2][2]==""){
                                                    jogo[2][2]="x";
                                                    quemJoga=1;
                                                }
                                                break;
        }
    }
}



function inicia(){
    jogando=true;
    jogadaCpu=1;
    jogo=[
        ["","",""],
        ["","",""],
        ["","",""]
    ];
}

window.addEventListener("load",inicia);