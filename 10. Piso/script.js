document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#calcular');
    
    // Seleccionamos cada etiqueta donde ira un dato individual
    const lblSuperficie = document.querySelector('#pisos-superficie');
    const lblExtra = document.querySelector('#pisos-extra');
    
    btn.addEventListener('click', () => {
        // Obtenemos los valores de los inputs (usando parseFloat para decimales)
        const ancho = parseFloat(document.querySelector('#numero1').value) || 0;
        const largo = parseFloat(document.querySelector('#numero2').value) || 0;

        const superficie = ancho * largo;
        const extra = superficie * 1.10;

        // 3. Mostramos los resultados formateados con sus respectivas unidades
        lblSuperficie.textContent = `Superficie: ${superficie.toFixed(2)} m²`;
        lblExtra.textContent = `Con 10% extra: ${extra.toFixed(2)} m²`;
    });
});