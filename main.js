"use strict";
exports.__esModule = true;
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var persona_1 = require("./persona");
var telefono_1 = require("./telefono");
var lista = [];
lista.push(new persona_1.Persona('paco', 'portugal', 33, '11111111A', new Date('1/08/1988'), 'azul', 'H', new direccion_1.Direccion('falsa', 23, 4, 'g', 98765, 'madrid', 'madrid'), new mail_1.Mail('correo', 'a@gmail.com'), new telefono_1.Telefono('movil', 934787878), 'me debe dinero'));
lista.push(new persona_1.Persona('Francisco', 'Soares', 34, '22222222B', new Date('1/01/1988'), 'negro', 'H', new direccion_1.Direccion('carrer pelota', 2, 3, 'H', 55565, 'Barcelona', 'Barcelona'), new mail_1.Mail('correo', 'b@gmail.com'), new telefono_1.Telefono('movil', 645787878), 'compañero'));
lista.push(new persona_1.Persona('vanesa', 'toledo', 35, '33333333C', new Date('1/04/1987'), 'blanco', 'M', new direccion_1.Direccion('calle guagua', 55, 4, 'm', 33765, 'madrid', 'madrid'), new mail_1.Mail('correo', 'c@gmail.com'), new telefono_1.Telefono('movil', 828787878), 'jefa de departamento'));
console.log(lista[0].informacionPersona());
console.log(lista[1].informacionPersona());
console.log(lista[2].informacionPersona());
function cambiarPorDNI(DNI, direccion, mail, telefono) {
    var buscar = lista.find(function (persona) { return persona.getDNI() == DNI; });
    buscar.setDirecciones(direccion);
    buscar.setMails(mail);
    buscar.setTelefonos(telefono);
}
cambiarPorDNI('11111111A', new direccion_1.Direccion('verdadera', 1, 1, 'a', 10000, 'Sevilla', 'Sevilla'), new mail_1.Mail('nuevo correo', 'd@gmail.com'), new telefono_1.Telefono('casa', 832787878));
cambiarPorDNI('22222222B', new direccion_1.Direccion('nueva pelota', 1, 1, 'a', 10000, 'las Palmas de GC', 'Las Palmas'), new mail_1.Mail('nuevo correo', 'e@gmail.com'), new telefono_1.Telefono('casa', 828787878));
cambiarPorDNI('33333333C', new direccion_1.Direccion('nueva guagua', 1, 1, 'a', 10000, 'madrid', 'madrid'), new mail_1.Mail('nuevo correo', 'f@gmail.com'), new telefono_1.Telefono('casa', 911787878));
console.log('============================');
console.log('información cambiada');
console.log('============================');
console.log(lista[0].informacionPersona());
console.log(lista[1].informacionPersona());
console.log(lista[2].informacionPersona());
