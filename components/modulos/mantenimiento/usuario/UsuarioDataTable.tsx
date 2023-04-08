import Table from "@/components/commos/datatable/Table";
import style from "@/app/mantenimiento/usuarios/page.module.scss";
import { IUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";
import { FormEvent, useEffect, useState } from "react";

const UsuarioTable = ({
  page,
  setPage,
  usuariosList,
  setUsuariosList,
}: {
  page: number;
  setPage: (page: number) => void;
  usuariosList: IUsuario[];
  setUsuariosList: (usuariosList: IUsuario[]) => void;
}) => {
  const [data, setData] = useState(usuariosList);

  useEffect(() => {
    setData(usuariosList);
  }, [usuariosList]);

  const [filtros, setFiltros] = useState({
    nombre: "",
  });
  
  const handleFilter = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setFiltros({
      ...filtros,
      nombre: value,
    });
    setData(
      usuariosList.filter((item) =>
        item.nombre.toUpperCase().startsWith(value.toUpperCase())
      )
    );
  };
  return (
    <div className={style.container_table}>
      <div className={style.filter}>
        <input
          type="text"
          name="nombre"
          value={filtros.nombre}
          onChange={handleFilter}
        />
      </div>
      <Table
        page={page}
        setPage={setPage}
        properties={[
          { nombre: "Nombre", propertie: "nombre" },
          { nombre: "Correo", propertie: "correo" },
          { nombre: "Contraseña", propertie: "contrasena" },
          { nombre: "accesos", propertie: "accesos" },
        ]}
        list={data.map((item) => {
          return {
            ...item,
            contrasena: "•••••••••••••••••••",
          };
        })}
      />
    </div>
  );
};

export default UsuarioTable;
