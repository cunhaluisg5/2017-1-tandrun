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
  tartaruga.left += tartaruga.passo/fps;
  tartaruga.bottom += tartaruga.passo/fps;

  lebre.left += lebre.passo/fps;
  lebre.bottom += lebre.passo/fps;

}

function passoDeAnimacao() {
    mover();
    atualizar();
}

relogio = setInterval(passoDeAnimacao, 1000/fps);




/**/
