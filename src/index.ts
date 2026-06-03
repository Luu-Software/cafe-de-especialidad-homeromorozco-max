import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let totalPorPersona: number = 0; 
if (esEstudiante === 'si')(
totalPorPersona = ((Number(totalTexto)/10)*9)/Number(personasTexto)
)
else 
totalPorPersona = (Number(totalTexto))/Number(personasTexto)


console.log(`Total por persona: $${totalPorPersona}`);
