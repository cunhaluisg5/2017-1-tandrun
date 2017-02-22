var tartaruga = {
  left: 40,
  bottom: 0,
  passo: 10,
  escorregar: 20
};
var lebre = {
  left: 0,
  bottom: 0,
  passo: 30,
  escorregar: 40
};
var relogio;
var fps = 5;

function atualizar() {
  var divTartaruga = document.getElementById("tartaruga");
  var divLebre = document.getElementById("lebre");
  divTartaruga.style.left = tartaruga.left+"px";
  divTartaruga.style.bottom = tartaruga.bottom+"px";
  divLebre.style.left = lebre.left+"px";
  divLebre.style.bottom = lebre.bottom+"px";

  var resultado = "&nbsp;"
  if(tartaruga.bottom>=380){
    resultado += "A tartaruga cruzou a linha de chegada!"
    clearInterval(relogio);
  }
  if(lebre.bottom>=380){
    resultado += "A lebre cruzou a linha de chegada!"
    clearInterval(relogio);
  }
  document.getElementById("resultado").innerHTML = resultado;
 }


function mover(){
  var passo;
  if(Math.random()*100<=tartaruga.escorregar){
    passo = -2*tartaruga.passo/fps;
  }else {
    passo = +2*tartaruga.passo/fps;
  }
  tartaruga.left += (tartaruga.left+passo<0)?0:passo;
  tartaruga.bottom += (tartaruga.bottom+passo<0)?0:passo;;

if(Math.random()*100<=lebre.escorregar){
  passo = -2*lebre.passo/fps;
  }else {
  passo = +2*lebre.passo/fps;
  }
  lebre.left += (lebre.left+passo<0)?0:passo;;
  lebre.bottom += (lebre.bottom+passo<0)?0:passo;;
}

function passoDeAnimacao() {
    mover();
    atualizar();
}

relogio = setInterval(passoDeAnimacao, 1000/fps);