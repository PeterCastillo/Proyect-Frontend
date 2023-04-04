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
      <th  style={{width: `${100 / properties.length}%`}} key={item.propertie}>{item.nombre}</th>
    ));
  };
  const renderTBody = () => {
    let emptyObject = {};
    for (let index = 0; index < properties.length; index++) {
      const element = properties[index];
      emptyObject = {
        ...emptyObject,
        [element.propertie]: "",
      };
    } 
    const newListReformed = list
    const missingObjects = 10 - Number(list.length.toString().split("").at(-1))
    for (let index = 0; index < missingObjects; index++) {
        newListReformed.push(emptyObject)
    }
    return newListReformed.map((item: any, index) => {
      const values = [];
      for (let index = 0; index < properties.length; index++) {
        const element = properties[index];
        const value = item[element.propertie];
        values.push(value);
      }
      return (
        <tr key={index}>
          {values.map((value,index) => {
            if (typeof value === "boolean") {
              return (
                <td key={index}>
                  <button>Hola</button>
                </td>
              );
            }
            if (typeof value != "string") {
              return (
                <td key={index}>
                  <select name="" id=""></select>
                </td>
              );
            }
            return <td key={index}>{value}</td>;
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
