export class Telefono {
	private tipo: String;
	private numero: Number;

	constructor(
		tipo: String,
		numero: Number
	) {
		this.tipo = tipo;
		this.numero = numero;
	}

	public getTipo() {
		return this.tipo;
	}
	public setTipo(tipo: String) {
		this.tipo = tipo;
	}
	public getNumero() {
		return this.numero;
	}
	public setNumero(numero: Number) {
		this.numero = numero;
	}
	public informacionTelefono() {
		const info: String = `
    Tipo:${this.tipo}
    Numero: ${this.numero}
    `;
		return info;
	}
}
