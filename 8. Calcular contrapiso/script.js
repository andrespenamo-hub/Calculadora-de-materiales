document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#calcular');
    
    // Seleccionamos cada etiqueta donde ira un dato individual
    const lblVolumen = document.querySelector('#contrapiso-volumen');
    const lblCemento = document.querySelector('#contrapiso-cemento');
    const lblArena = document.querySelector('#contrapiso-arena');
    const lblPiedra = document.querySelector('#contrapiso-piedra');
    
    btn.addEventListener('click', () => {
        const espesor = parseFloat(document.querySelector('#numero1').value) || 0;
        const ancho = parseFloat(document.querySelector('#numero2').value) || 0;
        const largo = parseFloat(document.querySelector('#numero3').value) || 0;

        const volumen = espesor * ancho * largo;
        const cemento = volumen * 105;       
        const arena = volumen * 0.45;     
        const piedra = volumen * 0.9;

        lblVolumen.textContent = `Volumen: ${volumen.toFixed(3)} m³`;
        lblCemento.textContent = `Cemento: ${cemento.toFixed(2)} kg`;
        lblArena.textContent = `Arena: ${arena.toFixed(3)} m³`;
        lblPiedra.textContent = `Piedra: ${piedra.toFixed(3)} m³`;
    });
});