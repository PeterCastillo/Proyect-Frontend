import {
  INewUsuario,
  IUsuario,
} from "@/types/modulos/mantenimiento/usuarioInterfaces";
import style from "../../../../app/mantenimiento/usuarios/page.module.scss";
import Form from "@/components/commos/form/Form";
import { FormEvent, useState } from "react";
import { Usuario } from "@/types/auth/next-auth";
import { ISucusal } from "@/types/modulos/mantenimiento/sucursalInterfaces";

const UsuarioCreate = ({
  usuario,
  sucursales,
  handleAddUsuario,
}: {
  usuario: Usuario;
  sucursales: ISucusal[];
  handleAddUsuario: (newUsuario: IUsuario) => void;
}) => {
  const [required, setRequired] = useState(false);
  const [newUsuario, setNewUsuario] = useState<INewUsuario>({
    nombre: "",
    correo: "",
    contrasena: "",
    accesos: [],
    sucursal_id: usuario.sucursal_id,
  });

  const handleInputChange = (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.currentTarget;
    setNewUsuario({
      ...newUsuario,
      [name]: value,
    });
  };

  const handleCreate = () => {
    setRequired(true);
  };

  const handleReset = () => {
    setRequired(false)
    setNewUsuario({
      ...newUsuario,
      nombre: "",
      correo: "",
      contrasena: "",
      accesos: [],
    });
  };

  return (
    <div className={style.container_form}>
      <form className={style.form}>
        <Form
          handleOnFieldChange={handleInputChange}
          fields={[
            [
              {
                label: "Sucursal",
                name: "sucursal_id",
                disabled: !usuario.accesos.includes("ADMIN"),
                required: false,
                type: "SELECT",
                value: newUsuario.sucursal_id,
                list: sucursales.map((item) => {
                  return { value: item._id, name: item.sucursal };
                }),
              },
            ],
            [
              {
                label: "Nombre",
                name: "nombre",
                disabled: false,
                required: required && newUsuario.nombre.trim().length == 0,
                type: "INPUT",
                value: newUsuario.nombre,
              },
            ],
            [
              {
                label: "Correo",
                name: "correo",
                disabled: false,
                required: required && newUsuario.correo.trim().length == 0,
                type: "INPUT",
                value: newUsuario.correo,
              },
            ],
            [
              {
                label: "Contraseña",
                name: "contrasena",
                disabled: false,
                required: required && newUsuario.contrasena.trim().length == 0,
                type: "INPUT",
                value: newUsuario.contrasena,
              },
            ],
          ]}
        />
      </form>
      <div className={style.btns}>
        <button className={style.clean} onClick={handleReset}>
          LIMPIAR
        </button>
        <button className={style.done} onClick={handleCreate}>CREAR</button>
      </div>
    </div>
  );
};

export default UsuarioCreate;
