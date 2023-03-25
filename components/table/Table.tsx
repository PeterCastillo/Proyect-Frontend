import { IUsuario } from "@/types/usuarioInterfaces";
import style from "./table.module.scss";

export const Table = ({
  properties,
  list,
}: {
  properties: {
    nombre: string;
    propertie: string;
  }[];
  list: any[];
}) => {
  const renderThead = () => {
    return properties.map((item) => (
      <th key={item.propertie}>{item.nombre}</th>
    ));
  };
  const renderTBody = () => {
    let emptyObject = {};
    for (let index = 0; index < properties.length; index++) {
      const element = properties[index];
      emptyObject = {
        ...emptyObject,
        [element.propertie]: "gola",
      };
    } 
    const newListReformed = list
    const missingObjects = 10 - Number(list.length.toString().split("").at(-1))
    for (let index = 0; index < missingObjects; index++) {
        newListReformed.push(emptyObject)
    }
    return newListReformed.map((item: any) => {
      const values = [];
      for (let index = 0; index < properties.length; index++) {
        const element = properties[index];
        const value = item[element.propertie];
        values.push(value);
      }
      return (
        <tr>
          {values.map((value) => {
            if (typeof value === "boolean") {
              return (
                <td>
                  <button>Hola</button>
                </td>
              );
            }
            if (typeof value != "string") {
              return (
                <td>
                  <select name="" id=""></select>
                </td>
              );
            }
            return <td>{value}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <table className={style.table}>
      <thead>
        <tr>{renderThead()}</tr>
      </thead>
      <tbody>{renderTBody()}</tbody>
    </table>
  );
};
