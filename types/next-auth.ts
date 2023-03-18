import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

export interface Usuario {
  sub: string,
  id: string,
  nombre: string,
  correo: string,
  contrasena: string
  accesos: [],
  token: string,
  accessTokenExpires: number,
  iat: number,
  exp: number,
  jti: string,
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: Usuario;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    sub: string;
    id: string;
    nombre: string;
    correo: string;
    contrasena: string
    accesos: [];
    token: string;
    accessTokenExpires: number;
    iat: number;
    exp: number;
    jti: string;
  }
}
