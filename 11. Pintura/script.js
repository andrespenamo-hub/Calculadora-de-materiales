document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#calcular');
    
    // Seleccionamos cada etiqueta donde ira un dato individual
    const lblPintura = document.querySelector('#pintura-pintura');
    
    btn.addEventListener('click', () => {
        const superficie = parseFloat(document.querySelector('#numero1').value) || 0;

        const pintura = superficie / 6;

        lblPintura.textContent = `Pintura necesaria: ${pintura.toFixed(1)} L`;
    });
});