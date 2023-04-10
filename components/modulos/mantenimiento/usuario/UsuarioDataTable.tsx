import Table from "@/components/commos/datatable/Table";
import style from "@/app/mantenimiento/usuarios/page.module.scss";
import { IUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { clsx } from "@/lib/clsx";

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
  const [filtros, setFiltros] = useState({
    search: "pETE",
    propertie: "nombre" as keyof IUsuario,
  });
  const [optionsFilterShow, setOptionsFilterShow] = useState(false);

  const handleFilters = () => {
    if (!filtros.search) {
      return setData(usuariosList);
    }
    setData(
      usuariosList.filter((item) =>
        item[filtros.propertie]
          .toString()
          .toUpperCase()
          .startsWith(filtros.search.toUpperCase())
      )
    );
  };

  const handleSelectFilterType = <P extends keyof IUsuario>(type: P) => {
    setFiltros({
      ...filtros,
      propertie: type,
    });
  };

  useEffect(() => {
    handleFilters();
  }, [usuariosList, filtros]);

  return (
    <div className={style.container_table}>
      <div className={style.filter}>
        <input
          className={style.search}
          type="text"
          name="nombre"
          value={filtros.search}
          autoComplete="off"
          onChange={(e) =>
            setFiltros({ ...filtros, search: e.currentTarget.value })
          }
        />
        <AiOutlineSearch />
        <input
          className={style.filter_current}
          type="text"
          value={"P"}
          readOnly
          onBlur={() => setOptionsFilterShow(false)}
          onFocus={() => setOptionsFilterShow(true)}
        />
        <div
          className={clsx(style.options, `${optionsFilterShow && style.show}`)}
        >
          <div onClick={() => setOptionsFilterShow(false)}>x</div>
          {[
            { name: "nombre", propertie: "nombre" as keyof IUsuario },
            { name: "correo", propertie: "correo" as keyof IUsuario },
          ].map((item, index) => (
            <span
              onClick={() => handleSelectFilterType(item.propertie)}
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
