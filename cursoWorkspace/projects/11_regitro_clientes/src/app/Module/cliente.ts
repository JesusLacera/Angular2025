export class Cliente {
  usuario: string;
  contrasena: string;
  email: string;
  telefono: string;
  constructor(
    usuario: string,
    contrasena: string,
    email: string,
    telefono: string
  ) {
    this.usuario = usuario;
    this.contrasena = contrasena;
    this.email = email;
    this.telefono = telefono;
  }
}
