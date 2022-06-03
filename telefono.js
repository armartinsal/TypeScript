"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    Telefono.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Telefono.prototype.informacionTelefono = function () {
        var info = "\n    Tipo:".concat(this.tipo, "\n    Numero: ").concat(this.numero, "\n    ");
        return info;
    };
    return Telefono;
}());
exports.Telefono = Telefono;