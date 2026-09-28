document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#calcular');
    
    // Seleccionamos cada etiqueta donde ira un dato individual
    const lblCemento = document.querySelector('#viga-cemento');
    const lblArena = document.querySelector('#viga-arena');
    const lblPiedra = document.querySelector('#viga-piedra');
    const lblHierro8 = document.querySelector('#viga-hierro8');
    const lblHierro4 = document.querySelector('#viga-hierro4');
    
    btn.addEventListener('click', () => {
        const largo = parseFloat(document.querySelector('#numero1').value) || 0;

        const cemento = largo * 9;       
        const arena = largo * 0.02;     
        const piedra = largo * 0.02;    
        const hierro8 = largo * 4;            
        const hierro4 = largo * 3;

        lblCemento.textContent = `Cemento: ${cemento.toFixed(2)} kg`;
        lblArena.textContent = `Arena: ${arena.toFixed(3)} m³`;
        lblPiedra.textContent = `Piedra: ${piedra.toFixed(3)} m²`;
        lblHierro8.textContent = `Hierro 8: ${hierro8.toFixed(2)} m`;
        lblHierro4.textContent = `Hierro 4: ${hierro4.toFixed(2)} m`;
    });
});