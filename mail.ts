export class Mail {
	private tipo: String;
	private direccion: String;

	constructor(
		tipo: String,
		direccion: String,
	) {
		this.tipo = tipo;
		this.direccion = direccion;
	}
	public getTipo() {
		return this.tipo;
	}
	public setTipo(tipo: String) {
		this.tipo = tipo;
	}
	public getDireccion() {
		return this.direccion;
	}
	public setDireccion(direccion: String) {
		this.direccion = direccion;
	}
	public informacionMail() {
		const info: String = `
    Tipo:${this.tipo}
    Direccion: ${this.direccion}
    `;
		return info;
	}
}
