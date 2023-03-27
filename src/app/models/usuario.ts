export class Usuario {
  nombreUsuario:string;
  password:string;

  constructor(nomUsuario:string,pass:string){
    this.nombreUsuario=nomUsuario;
    this.password=pass;
  }
}
