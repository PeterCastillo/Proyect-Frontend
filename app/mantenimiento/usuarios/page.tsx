"use client";
import style from "@/styles/header.module.scss";
import { useState, useEffect } from "react";
import {
  INewUsuario,
  IUsuario,
} from "@/types/modulos/mantenimiento/usuarioInterfaces";
import { getUsersBySucursalService } from "@/services/modulos/mantenimiento/usuarioServices";
import { useSession } from "next-auth/react";
import UsuarioTable from "@/components/modulos/mantenimiento/usuario/UsuarioDataTable";
import UsuarioCreate from "@/components/modulos/mantenimiento/usuario/UsuarioCreateForm";

export default function Page() {
  const { data: session, status } = useSession();
  const [render, setRender] = useState(0);

  const [usuariosList, setUsuariosList] = useState<IUsuario[]>([]);
  const [newUsuario, setNewUsuario] = useState<INewUsuario>({
    nombre: "",
    correo: "",
    contrasena: "",
    accesos: [],
    sucursal: "",
  });
  const [editableUsuario, setEditableUsuario] = useState();

  const [page, setPage] = useState<number>(0);
  const [filtros, setFiltros] = useState({
    search: "",
    propertie: "nombre" as keyof IUsuario,
  });
  const getUsuariosList = async () => {
    if (session) {
      const response = await getUsersBySucursalService(
        session.user.sucursal,
        session.user.token
      );
      if (response.status === 200) {
        setUsuariosList([
          ...response.json.content,
          ...response.json.content,
          ...response.json.content,
          ...response.json.content,
          ...response.json.content,
          ...response.json.content,
        ]);
      }
    }
  };

  useEffect(() => {
    getUsuariosList();
  }, [status]);

  const renderBtns = () => {
    switch (render) {
      case 0:
        return (
          <>
            <button className={style.editar}>EDITAR</button>
          </>
        );
      case 1:
        return (
          <>
            <button className={style.clean}>LIMPIAR</button>
            <button className={style.done}>CREAR</button>
          </>
        );
      case 2:
        return (
          <>
            <button className={style.clean}>DESHACER</button>
            <button className={style.done}>ACTUALIZAR</button>
          </>
        );
    }
  };

  const renderComponet = () => {
    switch (render) {
      case 0:
        return (
          <UsuarioTable
            page={page}
            setPage={setPage}
            usuariosList={usuariosList}
            filtros={filtros}
            setFiltros={setFiltros}
          />
        );
      case 1:
        return (
          <div className={style.container_form}>
            <UsuarioCreate
              newUsuario={newUsuario}
              setNewUsuario={setNewUsuario}
            />
          </div>
        );
    }
  };

  return (
    <div className={style.page}>
      <span className={style.title}>Usuario</span>
      <div className={style.options}>
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
        <div className={style.btns}>{renderBtns()}</div>
      </div>
      <div className={style.content}>{renderComponet()}</div>
    </div>
  );
}
