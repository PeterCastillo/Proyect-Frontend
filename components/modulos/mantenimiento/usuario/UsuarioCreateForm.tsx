import {
  INewUsuario,
  IUsuario,
} from "@/types/modulos/mantenimiento/usuarioInterfaces";
import style from "../../../../app/mantenimiento/usuarios/page.module.scss";
import Form from "@/components/commos/form/Form";
import { FormEvent, useState } from "react";

const UsuarioCreate = ({
  handleAddUsuario,
}: {
  handleAddUsuario: (newUsuario: IUsuario) => void;
}) => {
  const [newUsuario, setNewUsuario] = useState<INewUsuario>({
    nombre: "",
    correo: "",
    contrasena: "",
    accesos: [],
    sucursal_id: "",
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

  const handleReset = () => {
    setNewUsuario({
      ...newUsuario,
      nombre: "",
      correo: "",
      contrasena: "",
      accesos: []
    })
  }

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
      <button onClick={()=>handleAddUsuario({...newUsuario, _id: "1111"})}>HOLA</button>
    </div>
  );
};

export default UsuarioCreate;
