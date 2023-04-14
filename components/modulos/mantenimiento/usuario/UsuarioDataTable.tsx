import Table from "@/components/commos/datatable/Table";
import style from "@/app/mantenimiento/usuarios/page.module.scss";
import { IUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";
import { useEffect, useState, useMemo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { clsx } from "@/lib/clsx";
import TableLoad from "@/components/commos/datatable/TableLoad";

const UsuarioTable = ({
  page,
  setPage,
  usuariosList,
  filtros,
  setFiltros,
}: {
  page: number;
  setPage: (page: number) => void;
  usuariosList: IUsuario[];
  filtros: {
    search: string;
    propertie: keyof IUsuario;
  };
  setFiltros: (filtros: { search: string; propertie: keyof IUsuario }) => void;
}) => {
  const [data, setData] = useState<IUsuario[]>([]);

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

  const TableComponent = useMemo(() => {
    if (usuariosList.length < 1 || data.length < 1) {
      return (
        <TableLoad
          properties={[
            { nombre: "Nombre", propertie: "nombre" },
            { nombre: "Correo", propertie: "correo" },
            { nombre: "Contraseña", propertie: "contrasena" },
            { nombre: "accesos", propertie: "accesos" },
          ]}
        />
      );
    }
    return (
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
    );
  }, [data, page]);

  useEffect(() => {
    if (usuariosList.length > 1) {
      handleFilters();
    }
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
      {TableComponent}
    </div>
  );
};

export default UsuarioTable;
