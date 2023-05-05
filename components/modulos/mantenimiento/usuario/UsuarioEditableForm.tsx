import { editUserService } from "@/services/modulos/mantenimiento/usuarioServices";
import style from "../../../../app/mantenimiento/usuarios/page.module.scss";
import { IUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";
import { sideBarOptions } from "@/utils/sideBarOptions";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ISucusal } from "@/types/modulos/mantenimiento/sucursalInterfaces";
import { Usuario } from "@/types/auth/next-auth";

const UsuarioEdit = ({
  usuario,
  sucursales,
  editableUsuario,
  handleSetNewInfoUsuario,
  handleDeleteUsuario,
  setLoader,
}: {
  usuario: Usuario;
  sucursales: ISucusal[];
  editableUsuario: IUsuario;
  handleSetNewInfoUsuario: (newUserInfo: IUsuario) => void;
  handleDeleteUsuario: () => void
  setLoader: (state: boolean) => void;
}) => {
  const accesosUsuario = sideBarOptions(usuario.accesos);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<IUsuario>({
    defaultValues: editableUsuario,
  });

  const handleReset = () => {
    reset({ ...editableUsuario, contrasena: "" });
  };

  const handleEdit = async (userInfo: IUsuario) => {
    setLoader(true);
    const response = await editUserService(userInfo, usuario.token);
    if (response.status === 200) {
      handleSetNewInfoUsuario(response.json.content);
    }
    if (response.status === 404) {
    }
    if (response.status === 500) {
    }
    setLoader(false);
  };

  const handleDelete =async () => {
    setLoader(false);
    handleDeleteUsuario()
    setLoader(true);
  }

  useEffect(() => {
    handleReset();
  }, [editableUsuario]);

  return (
    <div className={style.container_form}>
      <form onSubmit={handleSubmit(handleEdit)} className={style.form}>
        <div className={style.input_group}>
          <div>
            <label htmlFor="">Nombre</label>
            <select id="" {...register("sucursal_id")}>
              {sucursales.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.sucursal}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={style.input_group}>
          <div>
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.nombre && <span>{errors.nombre.message}</span>}
          </div>
        </div>
        <div className={style.input_group}>
          <div>
            <label htmlFor="">Correo</label>
            <input
              type="text"
              {...register("correo", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.correo && <span>{errors.correo.message}</span>}
          </div>
        </div>
        <div className={style.input_group}>
          <div>
            <label htmlFor="">Contraseña</label>
            <input
              type="text"
              {...register("contrasena", {
                required: {
                  value: false,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.contrasena && <span>{errors.contrasena.message}</span>}
          </div>
        </div>
        <div className={style.router_user}>
          {accesosUsuario.map((item) => (
            <div key={item.name} className={style.section}>
              <div className={style.title}>
                <div></div>
                <span>{item.name}</span>
                <div></div>
              </div>
              <ul>
                {item.subMenu.map((item, index) => (
                  <li key={item.name}>
                    <input
                      type="checkbox"
                      id={item.name.concat("EDIT")}
                      checked={watch("accesos").includes(item.name)}
                      onChange={(e) => {
                        const isChecked = watch("accesos").includes(item.name);
                        const previusValue = getValues("accesos");
                        const value = item.name;
                        setValue(
                          "accesos",
                          isChecked
                            ? previusValue.filter((i) => i != value)
                            : [...previusValue, value]
                        );
                      }}
                    />
                    <label htmlFor={item.name.concat("EDIT")}>
                      {item.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {usuario.accesos.includes("ADMIN") && (
            <div className={style.section}>
              <div className={style.title}>
                <div></div>
                <span>Rol</span>
                <div></div>
              </div>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="ADMIMEDIT"
                    checked={watch("accesos").includes("ADMIN")}
                    onChange={(e) => {
                      const isChecked = watch("accesos").includes("ADMIN");
                      const previusValue = getValues("accesos");
                      const value = "ADMIN";
                      setValue(
                        "accesos",
                        isChecked
                          ? previusValue.filter((i) => i != value)
                          : [...previusValue, value]
                      );
                    }}
                  />
                  <label htmlFor={"ADMIMEDIT"}>Admin</label>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={style.btns}>
          <button type="button" className={style.delete} onClick={handleDelete}>
            ELIMINAR
          </button>
          <button type="button" className={style.clean} onClick={handleReset}>
            LIMPIAR
          </button>
          <button type="submit" className={style.done}>
            EDITAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default UsuarioEdit;
