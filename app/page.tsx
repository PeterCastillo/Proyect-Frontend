"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Home() {
  const [usuario, setUsuario] = useState({
    correo: "jackcc@gmail.com",
    contrasena: "peter2002",
  });
  const handleUserLogIn = async () => {
    const result = await signIn("credentials", {
      correo: usuario.correo,
      contrasena: usuario.contrasena,
      redirect: true,
      callbackUrl: "/mantenimiento",
    });
  };
  return (
    <div>
      <div>
        <label htmlFor="">Correo:</label>
        <input
          type="text"
          name="correo"
          value={usuario.correo}
          onChange={(e) => setUsuario({ ...usuario, correo: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="">Contraseña:</label>
        <input
          type="text"
          name="contrasena"
          value={usuario.contrasena}
          onChange={(e) =>
            setUsuario({ ...usuario, contrasena: e.target.value })
          }
        />
      </div>
      <button onClick={handleUserLogIn}>Logear</button>
    </div>
  );
}
