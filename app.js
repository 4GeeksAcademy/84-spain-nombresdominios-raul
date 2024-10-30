let articulos = ['mi', 'tu', 'el'];
let adjetivos = ['gran', 'pequeño', 'genial'];
let sustantivos = ['proyecto', 'idea', 'desarrollo'];
let extensiones = ['.com', '.net', '.io', '.es', '.org'];

for (let i = 0; i < articulos.length; i++) {
  for (let j = 0; j < adjetivos.length; j++) {
    for (let k = 0; k < sustantivos.length; k++) {
      for (let l = 0; l < extensiones.length; l++) {
        console.log(articulos[i] + adjetivos[j] + sustantivos[k] + extensiones[l]);
      }
    }
  }
}
