import Form from "@/components/commos/form/Form";
import { IUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";
import { FormEvent, useEffect, useState } from "react";

const UsuarioEdit = ({ usuario }: { usuario: IUsuario }) => {
  const [newInfoUsuario, setNewInfoUsuario] = useState(usuario);
  const handleInputChange = (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.currentTarget;
    setNewInfoUsuario({
      ...newInfoUsuario,
      [name]: value,
    });
  };
  const handleReset = () => {
    setNewInfoUsuario({
      ...usuario,
    });
  };
  
  useEffect(() => {
    setNewInfoUsuario(usuario);
  }, [usuario]);

  return (
    <div>
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
              value: newInfoUsuario.nombre,
            },
          ],
          [
            {
              label: "Correo",
              name: "correo",
              disabled: false,
              required: false,
              type: "INPUT",
              value: newInfoUsuario.correo,
            },
          ],
          [
            {
              label: "Contraseña",
              name: "contrasena",
              disabled: false,
              required: false,
              type: "INPUT",
              value: newInfoUsuario.contrasena,
            },
          ],
          [
            {
              label: "Sucursal",
              name: "sucursal",
              disabled: false,
              required: false,
              type: "SELECT",
              value: newInfoUsuario.sucursal_id,
              list: [],
            },
          ],
        ]}
      />
    </div>
  );
};

export default UsuarioEdit;
