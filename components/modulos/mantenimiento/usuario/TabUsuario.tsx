"use client";
import style from "@/styles/header.module.scss";
import { FC, useState, useRef, FormEvent } from "react";
import { IUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";
import { Usuario } from "../../../../types/auth/next-auth";
import UsuarioTable from "@/components/modulos/mantenimiento/usuario/UsuarioDataTable";
import UsuarioCreate from "@/components/modulos/mantenimiento/usuario/UsuarioCreateForm";
import { next } from "@/utils/nextPage";
import UsuarioEdit from "./UsuarioEditableForm";
import { clsx } from "@/lib/clsx";
import { ISucusal } from "@/types/modulos/mantenimiento/sucursalInterfaces";
import { getUsersBySucursalService } from "@/services/modulos/mantenimiento/usuarioServices";
import { Loader } from "@/components/commos/loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";

interface ITabUsuario {
  usuario: Usuario;
  usuariosList: IUsuario[];
  sucursalesList: ISucusal[];
}

const TabUsuario: FC<ITabUsuario> = ({
  usuario,
  usuariosList,
  sucursalesList,
}) => {
  const refTabContainer = useRef<any>(null);
  const { theme } = useTheme();
  const [loader, setLoader] = useState(false);
  const [usuarios, setUsuariosList] = useState<IUsuario[]>(usuariosList);
  const [editableUsuario, setEditableUsuario] = useState<IUsuario>({
    _id: "",
    nombre: "",
    correo: "",
    contrasena: "",
    accesos: [],
    sucursal_id: "",
  });

  const handleAddNewUsuario = (newUsuario: IUsuario) => {
    setUsuariosList([...usuarios, newUsuario]);
  };

  const handleSetNewInfoUsuario = (newInfoUsuario: IUsuario) => {
    setUsuariosList(
      usuarios.map((item) =>
        item._id == newInfoUsuario._id ? newInfoUsuario : item
      )
    );
  };

  const handleDeleteUsuario = () => {
    setUsuariosList(usuarios.filter((item) => item._id != editableUsuario._id));
    next(0, refTabContainer);
  };

  const handleEditUsuario = (usuarioToEdit_id: string) => {
    const usuario = usuarios.find((item) => item._id == usuarioToEdit_id);
    if (usuario) {
      setEditableUsuario(usuario);
      next(2, refTabContainer);
    }
  };

  const handleChangeSucursal = async (e: FormEvent<HTMLSelectElement>) => {
    const { value: sucrusal_id } = e.currentTarget;
    setLoader(true);
    const response = await getUsersBySucursalService(
      sucrusal_id == "ALL" ? usuario.sucursal_id : sucrusal_id,
      usuario.token,
      sucrusal_id == "ALL"
    );
    setLoader(false);
    if (response.status === 200) {
      setUsuariosList(response.json.content);
      toast.success("Usuarios cargados exitosamente", { autoClose: 1000 });
    }
    if (response.status === 500 || response.status === 404) {
      toast.error("Error al cargar usuarios", { autoClose: 3000 });
    }
  };

  return (
    <div className={style.page}>
      <span className={style.title}>Usuario</span>
      <div className={style.options}>
        <div className={style.tab}>
          <span
            className={clsx(style.normal, style.tabactive)}
            onClick={() => next(0, refTabContainer)}
          >
            Lista
          </span>
          <span
            className={style.normal}
            onClick={() => next(1, refTabContainer)}
          >
            Crear
          </span>
          <span className={style.editdescative}>Editar</span>
        </div>
      </div>
      <div className={style.content} ref={refTabContainer}>
        <UsuarioTable
          usuariosList={usuarios}
          handleEditUsuario={handleEditUsuario}
        >
          <>
            {usuario.accesos.includes("ADMIN") && (
              <>
                <span>SUCURSAL</span>
                <select name="" id="" onChange={handleChangeSucursal}>
                  {sucursalesList.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.sucursal.toUpperCase()}
                    </option>
                  ))}
                  <option value="ALL">TODAS</option>
                </select>
              </>
            )}
          </>
        </UsuarioTable>
        <UsuarioCreate
          usuario={usuario}
          sucursales={sucursalesList}
          handleAddUsuario={handleAddNewUsuario}
          setLoader={setLoader}
        />
        <UsuarioEdit
          editableUsuario={editableUsuario}
          usuario={usuario}
          sucursales={sucursalesList}
          handleSetNewInfoUsuario={handleSetNewInfoUsuario}
          handleDeleteUsuario={handleDeleteUsuario}
          setLoader={setLoader}
        />
      </div>
      <Loader show={loader} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover={false}
        theme={theme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default TabUsuario;
