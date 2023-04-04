"use client";
import style from "./page.module.scss";
import { useState, useEffect } from "react";
import { Table } from "@/components/commos/datatable/Table";
import { IUsuario } from "@/types/usuarioInterfaces";
import { getUserBySucursalService } from "@/services/usuarioServices";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  const [render, setRender] = useState(0);
  const [usuariosList, setUsuariosList] = useState<IUsuario[]>([]);

  const getUsuariosList = async () => {
    if (session) {
      const response = await getUserBySucursalService(
        session.user.sucursal,
        session.user.token
      );
      if (response.status === 200) {
        setUsuariosList(response.json.content);
      }
    }
  };

  useEffect(() => {
    getUsuariosList();
  }, [status]);

  const renderComponet = () => {
    switch (render) {
      case 0:
        return (
          <div>
            <Table
              properties={[
                { nombre: "Nombre", propertie: "nombre" },
                { nombre: "Correo", propertie: "correo" },
                { nombre: "Contraseña", propertie: "contrasena" },
                { nombre: "accesos", propertie: "accesos" },
                { nombre: "ESTADO", propertie: "estado" },
              ]}
              list={usuariosList.map((item) => {
                return {
                  ...item,
                  estado: true,
                };
              })}
            />
          </div>
        );
    }
  };
  return (
    <div className={style.page}>
      <span className={style.title}>Usuario</span>
      <div className={style.tab}>
        <span
          className={`${render == 0 && style.tabactive}`}
          onClick={() => setRender(0)}
        >
          Lista
        </span>
        <span
          className={`${render == 1 && style.tabactive}`}
          onClick={() => setRender(1)}
        >
          Crear
        </span>
        <span
          className={`${render == 2 ? style.tabactive : style.editdescative}`}
        >
          Editar
        </span>
      </div>
      <div>{renderComponet()}</div>
    </div>
  );
}
