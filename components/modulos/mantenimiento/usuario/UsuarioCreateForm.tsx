import { INewUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";
import style from "../../../../app/mantenimiento/usuarios/page.module.scss"

const UsuarioCreate = ({
  newUsuario,
  setNewUsuario,
}: {
  newUsuario: INewUsuario;
  setNewUsuario: (newUsuario: INewUsuario) => void;
}) => {
  return <div className={style.container_form}>
  </div>;
};

export default UsuarioCreate;
