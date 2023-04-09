import Table from "@/components/commos/datatable/Table";
import style from "@/app/mantenimiento/usuarios/page.module.scss";
import { IUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";
import { FormEvent, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"

const UsuarioTable = ({
  page,
  setPage,
  usuariosList,
}: {
  page: number;
  setPage: (page: number) => void;
  usuariosList: IUsuario[];
}) => {
  const [data, setData] = useState(usuariosList);

  useEffect(() => {
    setData(usuariosList);
  }, [usuariosList]);

  const [filtros, setFiltros] = useState({
    search: "",
  });
  
  const handleFilter = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setFiltros({
      ...filtros,
      search: value,
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
          value={filtros.search}
          onChange={handleFilter}
          autoComplete="off"
        />
        <AiOutlineSearch/>
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
