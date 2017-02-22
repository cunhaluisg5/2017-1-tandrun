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
var fps = 5

function atualizar() {
  var divTartaruga = document.getElementById("tartaruga");
  var divLebre = document.getElementById("lebre");
  divTartaruga.style.left = tartaruga.left+"px";
  divTartaruga.style.bottom = tartaruga.bottom+"px";
  divLebre.style.left = lebre.left+"px";
  divLebre.style.bottom = lebre.bottom+"px";

  if(tartaruga.bottom>=390 || lebre.bottom >=390){
    clearInterval(relogio);
  }
 }

function mover(){
  var passo;
  if(Math.random()*100<=tartaruga.escorregar){
    passo = -2*tartaruga.passo/fps;
  }else {
    passo = +2*tartaruga.passo/fps;
  }
  tartaruga.left += passo;
  tartaruga.bottom += passo;

if(Math.random()*100<=lebre.escorregar){
  passo = -2*lebre.passo/fps;
  }else {
  passo = +2*lebre.passo/fps;
  }
  lebre.left += passo;
  lebre.bottom += passo;
}

function passoDeAnimacao() {
    mover();
    atualizar();
}

relogio = setInterval(passoDeAnimacao, 1000/fps);




/**/