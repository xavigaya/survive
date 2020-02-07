/* Declaració de variable globals */
var dia = 1, hora = 0, vida = 10, menjar = 3, setmana = 1;
var dormir = 0;
var velocitat = 500;
var tincGana = 8, tincSon = 16;
var bloca = true;

/*===================================*/
/* Funcions */

/* Passa els dies */
function controlaTemps() {
  var temps = setInterval(compta, velocitat);
  function compta() {
    if (hora <= 24) {
      mostraDades();
      tincGana--;
      if ((tincGana == 0) && (bloca == true)) treuMenjar();
      tincSon--;
      if ((tincSon == 0) && (bloca == true)) despertar();
      if (tincSon < 0) treuVida();
      hora++;
      addDia();
    } else {
      treuVida();
    }
  }
}

function mostraDades() {
  document.getElementById('ctlDia').innerHTML = dia;
  document.getElementById('ctlSetmana').innerHTML = setmana;
  document.getElementById('ctlHora').innerHTML = hora;
  document.getElementById('ctlVida').innerHTML = vida;
  document.getElementById('ctlMenjar').innerHTML = menjar;
}

function addDia() {
  if (hora == 24) dia++;
  if (dia == 7) {
    setmana++;
    dia = 0;
  }
}

/* Afegir una vida. Màxim de 10 vides*/
function addVida() {
  if (vida < 10) vida++;
}

/* Resta una vida, i controla si has mort*/
function treuVida() {
  vida--;
  hora = 0;
  document.getElementById('ctlVida').innerHTML = vida;
  despertar();
  tincSon = 16;
  if (vida == 0) {
    dia = 1;
    vida = 10;
    menjar = 3;
    window.alert("You DIE!!!!");
  }
}

/* Afegeix un de menjar, i controla si perds vida*/
function addMenjar() {
  if (menjar < 3) menjar++;
  if (menjar == 3) addVida();
  document.getElementById('esport').innerHTML += "<img "
  bloqueja();
}

/* Resta un de menjar*/
function treuMenjar() {
  if (menjar == 0) treuVida()
  if (menjar > 0) menjar--;
  tincGana = 8;
}

/* Acció quan es clica el botó dormir */
function addDormir() {
  tincSon = 16;
  bloqueja();
}

function bloqueja() {
  document.getElementById('btDormir').setAttribute('disabled', true);
  document.getElementById('btMenjar').setAttribute('disabled', true);
  document.getElementById('btEsport').setAttribute('disabled', true);
  bloca = true;
}

function despertar() {
  document.getElementById('btDormir').removeAttribute('disabled');
  document.getElementById('btMenjar').removeAttribute('disabled');
  document.getElementById('btEsport').removeAttribute('disabled');
  tincSon = 16;
  bloca = false;
}

controlaTemps();
