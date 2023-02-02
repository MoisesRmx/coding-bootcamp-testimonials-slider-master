const sliders = [...document.querySelectorAll('.slider-card')];
const botonAnterior = [...document.querySelectorAll('.controlador-boton-1')];
const botonSiguiente = [...document.querySelectorAll('.controlador-boton-2')];
let value;

botonAnterior.map(btnAnt => btnAnt.addEventListener('click', () => cambiarPosicion(-1)))
botonSiguiente.map(btnSgn => btnSgn.addEventListener('click', () => cambiarPosicion(1)))

function cambiarPosicion(cambiar) {
  const elementoActual = Number(document.querySelector('.slider_card--mostrar').
  dataset.id);

  value = elementoActual
  value+= cambiar;
  if(value === 0 || value == sliders.length+1){
    value = value === 0 ? sliders.length : 1;
  }
  sliders[elementoActual-1].classList.toggle('slider_card--mostrar')
  sliders[value-1].classList.toggle('slider_card--mostrar')
}
