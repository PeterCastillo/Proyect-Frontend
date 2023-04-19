"use client";
import style from "@/styles/header.module.scss";
import { FC, useState, useRef } from "react";
import { IUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";
import { Usuario } from "../../../../types/auth/next-auth";
import UsuarioTable from "@/components/modulos/mantenimiento/usuario/UsuarioDataTable";
import UsuarioCreate from "@/components/modulos/mantenimiento/usuario/UsuarioCreateForm";
import { next } from "@/utils/nextPage";
import Tab from "../../../../components/commos/tab/Tab";
import UsuarioEdit from "./UsuarioEditableForm";
import { clsx } from "@/lib/clsx";

interface ITabUsuario {
  usuario: Usuario;
  usuariosList: IUsuario[];
}

const TabUsuario: FC<ITabUsuario> = ({ usuario, usuariosList }) => {
  const refTabContainer = useRef<any>(null);

  const [usuarios, setUsuariosList] = useState<IUsuario[]>(usuariosList);
  const [editableUsuario, setEditableUsuario] = useState<IUsuario>({
    _id: "",
    nombre: "",
    correo: "",
    contrasena: "",
    accesos: [],
    sucursal_id: "",
  });

  const handleAddUsuario = (newUsuario: IUsuario) => {
    setUsuariosList([...usuariosList, newUsuario]);
  };

  const handleSetNewInfoUsuario = (newInfoUsuario: IUsuario) => {
    setUsuariosList(
      usuariosList.map((item) =>
        item._id == newInfoUsuario._id ? newInfoUsuario : item
      )
    );
  };

  const handleEditUsuario = (usuarioToEdit_id: string) => {
    const usuario = usuariosList.find((item) => item._id == usuarioToEdit_id);
    if (usuario) {
      setEditableUsuario(usuario);
      next(2, refTabContainer);
    }
  };

  return (
    <div className={style.page}>
      <span className={style.title}>Usuario</span>
      <div className={style.options}>
        <div className={style.tab}>
          <span
            className={clsx(style.normal , style.tabactive)}
            onClick={() => next(0, refTabContainer)}
          >
            Lista
          </span>
          <span
            className={style.normal}
            onClick={() => next(1, refTabContainer)}
          >
            Crear
          </span>
          <span className={style.editdescative}>Editar</span>
        </div>
      </div>
      <div className={style.content} ref={refTabContainer}>
        <UsuarioTable
          usuariosList={usuarios}
          handleEditUsuario={handleEditUsuario}
        />
        <UsuarioCreate handleAddUsuario={handleAddUsuario} />
        <UsuarioEdit usuario={editableUsuario} />
      </div>
    </div>
  );
};

export default TabUsuario;
