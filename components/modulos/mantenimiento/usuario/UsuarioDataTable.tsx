import Table from "@/components/commos/datatable/Table";
import style from "@/app/mantenimiento/usuarios/page.module.scss";
import {
  IUsuario,
  UsuarioPropertiFilter,
} from "@/types/modulos/mantenimiento/usuarioInterfaces";
import React, { useState } from "react";
import MultipleFilter from "@/components/commos/multipleFilter/MultipleFilter";

const UsuarioTable = ({
  usuariosList,
  handleEditUsuario,
  children,
}: {
  usuariosList: IUsuario[];
  handleEditUsuario: (usuario_id: string) => void;
  children: JSX.Element;
}) => {
  const [page, setPage] = useState<number>(0);
  const [filtros, setFiltros] = useState({
    search: "",
    propertie: "nombre" as UsuarioPropertiFilter,
  });

  return (
    <div className={style.container_table}>
      <div className={style.table_header}>
        <div className={style.filters}>
          <MultipleFilter
            changeInputFilter={(e) => {
              setPage(0);
              setFiltros({ ...filtros, search: e.currentTarget.value });
            }}
            filtros={filtros}
            properties={[
              {
                name: "nombre",
                propertie: "nombre",
              },
              {
                name: "correo",
                propertie: "correo",
              },
            ]}
            changeTypeFilter={(propertie: UsuarioPropertiFilter) => {
              setPage(0);
              setFiltros({ ...filtros, propertie: propertie });
            }}
          />
        </div>
        <div className={style.sucursales}>{children}</div>
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
        list={usuariosList
          .filter((item) => {
            if (filtros.search && filtros.propertie) {
              return item[filtros.propertie]
                .toUpperCase()
                .startsWith(filtros.search.toUpperCase());
            }
            return item;
          })
          .map((item) => {
            return {
              ...item,
              contrasena: "•••••••••••••••••••",
            };
          })}
        handleEdit={handleEditUsuario}
      />
    </div>
  );
};

export default UsuarioTable;
