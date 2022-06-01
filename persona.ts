import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
	private nombre: String;
	private apellidos: String;
	private edad: Number;
	private DNI: String;
	private cumpleanos: Date;
	private colorFavorito: String;
	private sexo: String;
	private direcciones: Direccion
	private mails: Mail
	private telefonos: Telefono
	private notas: String;

	constructor(
		nombre: String,
		apellidos: String,
		edad: Number,
		DNI: String,
		cumpleanos: Date,
		colorFavorito: String,
		sexo: String,
		direcciones: Direccion,
		mails: Mail,
		telefonos: Telefono,
		notas: String
	) {
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

	public getNombre() {
		return this.nombre;
	}
	public setNombre(nombre: String) {
		this.nombre = nombre;
	}
	public getApellidos() {
		return this.apellidos;
	}
	public setApellidos(apellidos: String) {
		this.apellidos = apellidos;
	}
	public getEdad() {
		return this.edad;
	}
	public setEdad(edad: Number) {
		this.edad = edad;
	}
	public getDNI() {
		return this.DNI;
	}
	public setDNI(DNI: String) {
		this.DNI = DNI;
	}
	public getCumpleaños() {
		return this.cumpleanos;
	}
	public setCumpleaños(cumpleanos: Date) {
		this.cumpleanos = cumpleanos;
	}
	public getColorFavorito() {
		return this.colorFavorito;
	}
	public setColorFavorito(colorFavorito: String) {
		this.colorFavorito = colorFavorito;
	}
	public getSexo() {
		return this.sexo;
	}
	public setSexo(sexo: String) {
		this.sexo = sexo;
	}
	public getDirecciones() {
		return this.direcciones;
	}
	public setDirecciones(direcciones: Direccion) {
		this.direcciones = direcciones;
	}
	public getMail() {
		return this.mails;
	}
	public setMails(mails: Mail) {
		this.mails = mails;
	}
	public getTelefonos() {
		return this.telefonos;
	}
	public setTelefonos(telefonos: Telefono) {
		this.telefonos = telefonos
	}
	public getNotas() {
		return this.notas;
	}
	public setNotas(notas: String) {
		this.notas = notas;
	}

	public informacionPersona() {
		const info: String = `
	  Nombre: ${this.nombre}
    Apellidos: ${this.apellidos}
    Edad: ${this.edad}
    DNI: ${this.DNI}
    Fecha de Cumpleaños: ${this.cumpleanos.toDateString()}
    Color Favorito: ${this.colorFavorito}
    Género: ${this.sexo}
    Dirección: ${this.direcciones.informacionDireccion()}
    Email: ${this.mails.informacionMail()}
    Teléfono:${this.telefonos.informacionTelefono()}
    Notas: ${this.notas}
	`;
		return info;
	}




} 