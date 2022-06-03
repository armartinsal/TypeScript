export class Direccion {
	private calle: String;
	private numero: Number;
	private piso: Number;
	private letra: String;
	private codigoPostal: Number;
	private poblacion: String;
	private provincia: String;

	constructor(
		calle: String,
		numero: Number,
		piso: Number,
		letra: String,
		codigoPostal: Number,
		poblacion: String,
		provincia: String,

	) {
		this.calle = calle;
		this.numero = numero;
		this.piso = piso;
		this.letra = letra;
		this.codigoPostal = codigoPostal;
		this.poblacion = poblacion;
		this.provincia = provincia;
	}
	public getCalle() {
		return this.calle;
	}
	public setCalle(calle: String) {
		this.calle = calle;
	}
	public getNumero() {
		return this.numero;
	}
	public setNumero(numero: Number) {
		this.numero = numero;
	}
	public getPiso() {
		return this.piso;
	}
	public setPiso(piso: Number) {
		this.piso = piso;
	}
	public getLetra() {
		return this.letra;
	}
	public setLetra(letra: String) {
		this.letra = letra;
	}
	public getCodigoPostal() {
		return this.codigoPostal;
	}
	public setCodigoPostal(codigoPostal: Number) {
		this.codigoPostal = codigoPostal;
	}
	public getPoblacion() {
		return this.poblacion;
	}
	public setPoblacion(poblacion: String) {
		this.poblacion = poblacion;
	}
	public getProvincia() {
		return this.provincia;
	}
	public setProvincia(provincia: String) {
		this.provincia = provincia;
	}

	public informacionDireccion() {
		const info: String = `
	Calle: ${this.calle}
	Numero: ${this.numero}
	Piso: ${this.piso}
	Letra: ${this.letra}
	CodigoPostal: ${this.codigoPostal}
	Poblacion: ${this.poblacion}
	Provincia: ${this.provincia}
	`;
		return info;
	}
}
