import Table from "@/components/commos/datatable/Table";
import style from "@/app/mantenimiento/usuarios/page.module.scss";
import {
  IUsuario,
  UsuarioPropertiFilter,
} from "@/types/modulos/mantenimiento/usuarioInterfaces";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { clsx } from "@/lib/clsx";

const UsuarioTable = ({
  usuariosList,
  handleEditUsuario,
}: {
  usuariosList: IUsuario[];
  handleEditUsuario: (usuario_id: string) => void;
}) => {
  const [page, setPage] = useState<number>(0);
  const [filtros, setFiltros] = useState({
    search: "",
    propertie: "nombre" as UsuarioPropertiFilter,
  });
  const [optionsFilterShow, setOptionsFilterShow] = useState(false);

  return (
    <div className={style.container_table}>
      <div className={style.filter}>
        <input
          className={style.search}
          type="text"
          name="nombre"
          value={filtros.search}
          autoComplete="off"
          onChange={(e) => {
            setPage(0);
            setFiltros({ ...filtros, search: e.currentTarget.value });
          }}
        />
        <AiOutlineSearch />
        <input
          className={style.filter_current}
          type="text"
          value={filtros.propertie.split("")[0].toUpperCase()}
          readOnly
          onBlur={() => setOptionsFilterShow(false)}
          onFocus={() => setOptionsFilterShow(true)}
        />
        <div
          className={clsx(style.options, `${optionsFilterShow && style.show}`)}
        >
          <div onClick={() => setOptionsFilterShow(false)}>x</div>
          {[
            {
              name: "nombre",
              propertie: "nombre" as UsuarioPropertiFilter,
            },
            {
              name: "correo",
              propertie: "correo" as UsuarioPropertiFilter,
            },
          ].map((item, index) => (
            <span
              onClick={() =>
                setFiltros({ ...filtros, propertie: item.propertie })
              }
              key={index}
            >
              {item.name.toUpperCase()}
            </span>
          ))}
        </div>
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
            if (filtros.search) {
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
