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

function atualizar() {
  var divTartaruga = document.getElementById("tartaruga");
  var divLebre = document.getElementById("lebre");
  console.log(divTartaruga, divLebre);
  divTartaruga.style.left = tartaruga.left+"px";
  divTartaruga.style.bottom = tartaruga.bottom+"px";
  divLebre.style.left = lebre.left+"px";
  divLebre.style.bottom = lebre.bottom+"px";

 }

function mover(){
  tartaruga.left += tartaruga.passo;
  tartaruga.bottom += tartaruga.passo;

  lebre.left += lebre.passo;
  lebre.bottom += lebre.passo;

}







/**/
