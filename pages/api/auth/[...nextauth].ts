import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        correo: {
          label: "correo",
          type: "text",
          placeholder: "peterjackcc@gmail.com",
        },
        contrasena: { label: "contrasena", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { correo, contrasena } = credentials as any;
        console.log(correo,contrasena)
        const res = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            correo,
            contrasena,
          }),
        });
        const user = await res.json();
        if (user) {
          return user.content;
        } else return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/"
  },
  callbacks: {
    async jwt({token,user}){
      return {...token,...user}
    },
    async session({session,token,user}){
      session.user = token
      return session
    }
  }
};

export default NextAuth(authOptions);
