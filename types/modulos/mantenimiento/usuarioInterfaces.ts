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

export type UsuarioPropertiFilter = keyof Pick<IUsuario, {
  [K in keyof IUsuario]: IUsuario[K] extends string ? K : never;
}[keyof IUsuario]>;
