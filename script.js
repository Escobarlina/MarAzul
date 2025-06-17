// script.js

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  console.log('El DOM está listo.');

  // Ejemplo: manejar clic en un botón con id="miBoton"
  const boton = document.getElementById('miBoton');
  const resultado = document.getElementById('resultado');

  if (boton && resultado) {
    boton.addEventListener('click', () => {
      resultado.textContent = '¡Has hecho clic en el botón!';
    });
  }
});
