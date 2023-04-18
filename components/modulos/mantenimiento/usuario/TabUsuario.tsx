"use client";
import style from "@/styles/header.module.scss";
import { FC, useState, useRef } from "react";
import {
  INewUsuario,
  IUsuario,
} from "@/types/modulos/mantenimiento/usuarioInterfaces";
import { Usuario } from "../../../../types/auth/next-auth";
import UsuarioTable from "@/components/modulos/mantenimiento/usuario/UsuarioDataTable";
import UsuarioCreate from "@/components/modulos/mantenimiento/usuario/UsuarioCreateForm";
import { next } from "@/utils/nextPage";

interface ITabUsuario {
  usuario: Usuario;
  usuariosList: IUsuario[];
}

const TabUsuario: FC<ITabUsuario> = ({ usuario, usuariosList }) => {
  const refTabContainer = useRef<any>(null);
  const [render, setRender] = useState(0);

  const [usuarios, setUsuariosList] = useState<IUsuario[]>(usuariosList);
  const [newUsuario, setNewUsuario] = useState<INewUsuario>({
    nombre: "",
    correo: "",
    contrasena: "",
    accesos: [],
    sucursal_id: "",
  });
  const [editableUsuario, setEditableUsuario] = useState();

  const handleCreateUsuario = () => {

  }

  const handleEditUsuario = () => {

  }

  return (
    <div className={style.page}>
      <span className={style.title}>Usuario</span>
      <div className={style.options}>
        <div className={style.tab}>
          <span
            className={`${render == 0 && style.tabactive}`}
            onClick={() => next(0,setRender,refTabContainer)}
          >
            Lista
          </span>
          <span
            className={`${render == 1 && style.tabactive}`}
            onClick={() => next(1,setRender,refTabContainer)}
          >
            Crear
          </span>
          <span
            className={`${render == 2 ? style.tabactive : style.editdescative}`}
            onClick={() => next(2,setRender,refTabContainer)}
          >
            Editar
          </span>
        </div>
        <div className={style.btns}>
          {
            {
              0: (
                <>
                  <button className={style.editar}>EDITAR</button>
                </>
              ),
              1: (
                <>
                  <button className={style.clean}>LIMPIAR</button>
                  <button className={style.done}>CREAR</button>
                </>
              ),
              3: (
                <>
                  <button className={style.clean}>DESHACER</button>
                  <button className={style.done}>ACTUALIZAR</button>
                </>
              ),
            }[render]
          }
        </div>
      </div>
      <div className={style.content} ref={refTabContainer}>
        <UsuarioTable usuariosList={usuariosList} />
        <UsuarioCreate newUsuario={newUsuario} setNewUsuario={setNewUsuario} />
        <UsuarioCreate newUsuario={newUsuario} setNewUsuario={setNewUsuario} />
      </div>
    </div>
  );
};

export default TabUsuario;
