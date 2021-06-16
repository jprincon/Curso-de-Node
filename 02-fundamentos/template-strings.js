const nombre = 'Julián Andrés';
const apellido = 'Rincón Penagos';

const nombreCompleto = nombre + ' ' + apellido;
const template = `${ nombre } ${ apellido }`;

console.log(nombreCompleto);
console.log(template);

console.log(nombreCompleto === template);

const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;

console.log(html);