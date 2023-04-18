import { INewUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";
import style from "../../../../app/mantenimiento/usuarios/page.module.scss";
import Form from "@/components/commos/form/Form";
import { FormEvent } from "react";

const UsuarioCreate = ({
  newUsuario,
  setNewUsuario,
}: {
  newUsuario: INewUsuario;
  setNewUsuario: (newUsuario: INewUsuario) => void;
}) => {
  const handleInputChange = (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.currentTarget;
    setNewUsuario({
      ...newUsuario,
      [name]: value,
    });
  };

  return (
    <div className={style.container_form}>
      <form action="" className={style.form}>
        <Form
          handleOnFieldChange={handleInputChange}
          fields={[
            [
              {
                label: "Nombre",
                name: "nombre",
                disabled: false,
                required: false,
                type: "INPUT",
                value: newUsuario.nombre,
              },
            ],
            [
              {
                label: "Correo",
                name: "correo",
                disabled: false,
                required: false,
                type: "INPUT",
                value: newUsuario.correo,
              },
            ],
            [
              {
                label: "Contraseña",
                name: "contrasena",
                disabled: false,
                required: false,
                type: "INPUT",
                value: newUsuario.contrasena,
              },
            ],
            [
              {
                label: "Sucursal",
                name: "sucursal",
                disabled: false,
                required: false,
                type: "SELECT",
                value: newUsuario.sucursal_id,
                list: [],
              },
            ],
          ]}
        />
      </form>
    </div>
  );
};

export default UsuarioCreate;
