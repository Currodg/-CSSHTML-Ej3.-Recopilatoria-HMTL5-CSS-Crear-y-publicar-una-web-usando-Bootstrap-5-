const link1 = document.createElement('link');
link1.rel = 'icon';
link1.href = './favicon.ico';
link1.type = 'image/x-icon';

// Crear el segundo enlace para compatibilidad (shortcut icon)
const link2 = document.createElement('link');
link2.rel = 'shortcut icon';
link2.href = './favicon.ico';
link2.type = 'image/x-icon';

// Añadirlos al <head> del documento
document.querySelector("head").appendChild(link1);
document.querySelector("head").appendChild(link2);

console.log("Favicon añadido mediante JS");
