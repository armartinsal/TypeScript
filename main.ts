import { Direccion } from './direccion';
import { Mail } from './mail';
import { Persona } from './persona';
import { Telefono } from './telefono';
const lista: Persona[] = [];
lista.push(
	new Persona(
		'paco',
		'portugal',
		33,
		'11111111A',
		new Date('1/08/1988'),
		'azul',
		'H',
		new Direccion('falsa', 23, 4, 'g', 98765, 'madrid', 'madrid'),
		new Mail('correo', 'a@gmail.com'),
		new Telefono('movil', 934787878),
		'me debe dinero'
	)
);
lista.push(
	new Persona(
		'Francisco',
		'Soares',
		34,
		'22222222B',
		new Date('1/01/1988'),
		'negro',
		'H',
		new Direccion('carrer pelota', 2, 3, 'H', 55565, 'Barcelona', 'Barcelona'),
		new Mail('correo', 'b@gmail.com'),
		new Telefono('movil', 645787878),
		'compañero'
	)
);

lista.push(
	new Persona(
		'vanesa',
		'toledo',
		35,
		'33333333C',
		new Date('1/04/1987'),
		'blanco',
		'M',
		new Direccion('calle guagua', 55, 4, 'm', 33765, 'madrid', 'madrid'),
		new Mail('correo', 'c@gmail.com'),
		new Telefono('movil', 828787878),
		'jefa de departamento'
	)
);

console.log(lista[0].informacionPersona());
console.log(lista[1].informacionPersona());
console.log(lista[2].informacionPersona());

function cambiarPorDNI(
	DNI: String,
	direccion: Direccion,
	mail: Mail,
	telefono: Telefono
) {
	const buscar = lista.find((persona) => persona.getDNI() == DNI);
	buscar.setDirecciones(direccion);
	buscar.setMails(mail);
	buscar.setTelefonos(telefono);
}

cambiarPorDNI(
	'11111111A',
	new Direccion('verdadera', 1, 1, 'a', 10000, 'Sevilla', 'Sevilla'),
	new Mail('nuevo correo', 'd@gmail.com'),
	new Telefono('casa', 832787878)
);
cambiarPorDNI(
	'22222222B',
	new Direccion(
		'nueva pelota',
		1,
		1,
		'a',
		10000,
		'las Palmas de GC',
		'Las Palmas'
	),
	new Mail('nuevo correo', 'e@gmail.com'),
	new Telefono('casa', 828787878)
);
cambiarPorDNI(
	'33333333C',
	new Direccion('nueva guagua', 1, 1, 'a', 10000, 'madrid', 'madrid'),
	new Mail('nuevo correo', 'f@gmail.com'),
	new Telefono('casa', 911787878)
);

console.log('============================');
console.log('información cambiada');
console.log('============================');
console.log(lista[0].informacionPersona());
console.log(lista[1].informacionPersona());
console.log(lista[2].informacionPersona());

