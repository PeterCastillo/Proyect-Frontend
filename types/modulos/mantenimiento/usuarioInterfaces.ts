export interface IUsuario {
  _id: string;
  nombre: string;
  correo: string;
  contrasena: string;
  accesos: string[];
  sucursal_id: string;
}

export interface INewUsuario {
  nombre: string;
  correo: string;
  contrasena: string;
  accesos: string[];
  sucursal_id: string;
}
