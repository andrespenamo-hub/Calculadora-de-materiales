document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#calcular');
    
    // Seleccionamos cada etiqueta donde ira un dato individual
    const lblCemento = document.querySelector('#columna-cemento');
    const lblArena = document.querySelector('#columna-arena');
    const lblPiedra = document.querySelector('#columna-piedra');
    const lblHierro10 = document.querySelector('#columna-hierro10');
    const lblHierro4 = document.querySelector('#columna-hierro4');
    
    btn.addEventListener('click', () => {
        const largo = parseFloat(document.querySelector('#numero1').value) || 0;

        const cemento = largo * 7.5;       
        const arena = largo * 0.016;     
        const piedra = largo * 0.016;    
        const hierro10 = largo * 6;            
        const hierro4 = largo * 3;

        lblCemento.textContent = `Cemento: ${cemento.toFixed(2)} kg`;
        lblArena.textContent = `Arena: ${arena.toFixed(3)} m³`;
        lblPiedra.textContent = `Piedra: ${piedra.toFixed(3)} m²`;
        lblHierro10.textContent = `Hierro 10: ${hierro10.toFixed(2)} m`;
        lblHierro4.textContent = `Hierro 4: ${hierro4.toFixed(2)} m`;
    });
});