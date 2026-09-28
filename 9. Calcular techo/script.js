document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#calcular');
    
    // Seleccionamos cada etiqueta donde ira un dato individual
    const lblSuperficie = document.querySelector('#techo-superficie');
    const lblCemento = document.querySelector('#techo-cemento');
    const lblArena = document.querySelector('#techo-arena');
    const lblPiedra = document.querySelector('#techo-piedra');
    const lblHierro8 = document.querySelector('#techo-hierro8');
    const lblHierro6 = document.querySelector('#techo-hierro6');
    
    btn.addEventListener('click', () => {
        const espesor = parseFloat(document.querySelector('#numero1').value) || 0;
        const ancho = parseFloat(document.querySelector('#numero2').value) || 0;
        const largo = parseFloat(document.querySelector('#numero3').value) || 0;

        const superficie = ancho * largo;
        const cemento = superficie * 33;       
        const arena = superficie * 0.072;     
        const piedra = superficie * 0.072;
        const hierro8 = superficie * 7;
        const hierro6 = superficie * 4;

        lblSuperficie.textContent = `Superficie: ${superficie.toFixed(3)} m²`;
        lblCemento.textContent = `Cemento: ${cemento.toFixed(2)} kg`;
        lblArena.textContent = `Arena: ${arena.toFixed(3)} m³`;
        lblPiedra.textContent = `Piedra: ${piedra.toFixed(3)} m³`;
        lblHierro8.textContent = `Hierro 8: ${hierro8.toFixed(2)} m`;
        lblHierro6.textContent = `Hierro 6: ${hierro6.toFixed(2)} m`;
    });
});