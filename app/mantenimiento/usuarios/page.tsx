"use client";
import style from "@/styles/header.module.scss";
import { useState, useEffect, useRef } from "react";
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
  const refTabContainer = useRef<any>(null);
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

  // useEffect(() => {
  //   getUsuariosList();
  // }, [status]);


  // const renderBtns = () => {
  //   switch (render) {
  //     case 0:
  //       return (
  //         <>
  //           <button className={style.editar}>EDITAR</button>
  //         </>
  //       );
  //     case 1:
  //       return (
  //         <>
  //           <button className={style.clean}>LIMPIAR</button>
  //           <button className={style.done}>CREAR</button>
  //         </>
  //       );
  //     case 2:
  //       return (
  //         <>
  //           <button className={style.clean}>DESHACER</button>
  //           <button className={style.done}>ACTUALIZAR</button>
  //         </>
  //       );
  //   }
  // };

  const next = (component: number) => {
    const renders = refTabContainer.current.children;
    if(component == 1 || component == 2){
      refTabContainer.current.style.height = `max-content`
    } else {
      refTabContainer.current.style.height = `100%`
    }
    for (let i = 0; i < renders.length; i++) {
      renders[i].style.height = `100%`;
      if (i != component) {
        renders[i].style.height = `0rem`;
        renders[i].style.transition = `50ms ease-out all`;
      }
    }
    const transformNumber = component * 100;
    refTabContainer.current.style.transition = `150ms ease-out all`;
    refTabContainer.current.style.transform = `translateX(calc(-${transformNumber}% - ${
      component * 10
    }px))`;
  };

  return (
    <div className={style.page}>
      <span className={style.title}>Usuario</span>
      <div className={style.options}>
        <div className={style.tab}>
          <span
            className={`${render == 0 && style.tabactive}`}
            onClick={() => next(0)}
          >
            Lista
          </span>
          <span
            className={`${render == 1 && style.tabactive}`}
            onClick={() => next(1)}
          >
            Crear
          </span>
          <span
            className={`${render == 2 ? style.tabactive : style.editdescative}`}
            onClick={() => next(2)}
          >
            Editar
          </span>
        </div>
        {/* <div className={style.btns}>{renderBtns()}</div> */}
      </div>
      <div className={style.content} ref={refTabContainer}>
        {/* <UsuarioTable
          usuariosList={usuariosList}
        /> */}
        {/* <UsuarioCreate newUsuario={newUsuario} setNewUsuario={setNewUsuario} />
        <UsuarioCreate newUsuario={newUsuario} setNewUsuario={setNewUsuario} /> */}
      </div>
    </div>
  );
}
