document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#calcular');
    
    // Seleccionamos cada etiqueta donde ira un dato individual
    const lblSuperficie = document.querySelector('#res-superficie');
    const lblCemento = document.querySelector('#res-cemento');
    const lblArena = document.querySelector('#res-arena');
    const lblLadrillos = document.querySelector('#res-ladrillos');
    
    btn.addEventListener('click', () => {
        // Obtenemos los valores de los inputs (usando parseFloat para decimales)
        const largo = parseFloat(document.querySelector('#numero1').value) || 0;
        const alto = parseFloat(document.querySelector('#numero2').value) || 0;

        // 1. Cálculo de la superficie (Área)
        const superficie = largo * alto;

        // 2. Estimación de materiales por metro cuadrado (ejemplo orientativo de construcción)
        // Puedes cambiar estos factores según el tipo de ladrillo y mezcla que usen los FET-OS:
        const cemento = superficie * 10.9;   // kg aprox por m²
        const arena = superficie * 0.09;    // m³ aprox por m²
        const ladrillos = superficie * 90;  // piezas aprox por m²

        // 3. Mostramos los resultados formateados con sus respectivas unidades
        lblSuperficie.textContent = `Superficie: ${superficie.toFixed(2)} m²`;
        lblCemento.textContent = `Cemento: ${cemento.toFixed(1)} kg`;
        lblArena.textContent = `Arena: ${arena.toFixed(2)} m³`;
        lblLadrillos.textContent = `Ladrillos: ${Math.round(ladrillos)}`;
    });
});