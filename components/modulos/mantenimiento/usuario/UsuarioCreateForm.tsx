import {
  INewUsuario,
  IUsuario,
} from "@/types/modulos/mantenimiento/usuarioInterfaces";
import style from "../../../../app/mantenimiento/usuarios/page.module.scss";
import { Usuario } from "@/types/auth/next-auth";
import { ISucusal } from "@/types/modulos/mantenimiento/sucursalInterfaces";
import { useForm } from "react-hook-form";
import { sideBarOptions } from "@/utils/sideBarOptions";
import { createUserService } from "@/services/modulos/mantenimiento/usuarioServices";

const UsuarioCreate = ({
  usuario,
  sucursales,
  handleAddUsuario,
}: {
  usuario: Usuario;
  sucursales: ISucusal[];
  handleAddUsuario: (newUsuario: IUsuario) => void;
}) => {
  const accesosUsuario = sideBarOptions(usuario.accesos);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<INewUsuario>({
    defaultValues: {
      sucursal_id: usuario.sucursal_id,
      accesos: [],
    },
  });

  const handleCreate = async (userInfo: INewUsuario) => {
    const response = await createUserService(userInfo, usuario.token);
    if (response.status === 201) {
    }
  };

  const handleReset = () => {
    reset({
      nombre: "",
      correo: "",
      contrasena: "",
      accesos: [],
    });
  };

  return (
    <div className={style.container_form}>
      <form onSubmit={handleSubmit(handleCreate)} className={style.form}>
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
                  value: true,
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
                {item.subMenu.map((item) => (
                  <li key={item.name}>
                    <input
                      type="checkbox"
                      id={item.name}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        const selectedValue = item.name;
                        const previusValue = getValues("accesos");
                        setValue(
                          "accesos",
                          isChecked
                            ? [...previusValue, selectedValue]
                            : previusValue.filter(
                                (item) => item == selectedValue
                              )
                        );
                      }}
                    />
                    <label htmlFor={item.name}>{item.name}</label>
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
                    id="ADMIN"
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const selectedValue = "ADMIN";
                      const previusValue = getValues("accesos");
                      setValue(
                        "accesos",
                        isChecked
                          ? [...previusValue, selectedValue]
                          : previusValue.filter((item) => item == selectedValue)
                      );
                    }}
                  />
                  <label htmlFor={"ADMIN"}>Admin</label>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={style.btns}>
          <button type="button" className={style.clean} onClick={handleReset}>
            LIMPIAR
          </button>
          <button type="submit" className={style.done}>
            CREAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default UsuarioCreate;
