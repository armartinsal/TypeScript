"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, DNI, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.DNI = DNI;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getDNI = function () {
        return this.DNI;
    };
    Persona.prototype.setDNI = function (DNI) {
        this.DNI = DNI;
    };
    Persona.prototype.getCumpleaños = function () {
        return this.cumpleanos;
    };
    Persona.prototype.setCumpleaños = function (cumpleanos) {
        this.cumpleanos = cumpleanos;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.setColorFavorito = function (colorFavorito) {
        this.colorFavorito = colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.setDirecciones = function (direcciones) {
        this.direcciones = direcciones;
    };
    Persona.prototype.getMail = function () {
        return this.mails;
    };
    Persona.prototype.setMails = function (mails) {
        this.mails = mails;
    };
    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.setTelefonos = function (telefonos) {
        this.telefonos = telefonos;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNotas = function (notas) {
        this.notas = notas;
    };
    Persona.prototype.informacionPersona = function () {
        var info = "Nombre: ".concat(this.nombre, "\nApellidos: ").concat(this.apellidos, "\nEdad: ").concat(this.edad, "\nDNI: ").concat(this.DNI, "\nFecha de Cumplea\u00F1os: ").concat(this.cumpleanos.toDateString(), "\nColor Favorito: ").concat(this.colorFavorito, "\nG\u00E9nero: ").concat(this.sexo, "\nDirecci\u00F3n: ").concat(this.direcciones.informacionDireccion(), "\nEmail: ").concat(this.mails.informacionMail(), "\nTel\u00E9fono:").concat(this.telefonos.informacionTelefono(), "\nNotas: ").concat(this.notas, "\n\t");
        return info;
    };
    return Persona;
}());
exports.Persona = Persona;
