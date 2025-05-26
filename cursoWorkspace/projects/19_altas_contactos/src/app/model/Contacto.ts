export class Contacto {
  nombre: string;
  telefono: string;
  email: string;
  constructor(nombre?: string, telefono?: string, email?: string) {
    this.nombre = nombre || '';
    this.telefono = telefono || '';
    this.email = email || '';
  }
}
