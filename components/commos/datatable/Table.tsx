import style from "./table.module.scss";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React from "react";

const Table = ({
  properties,
  list,
  page,
  setPage,
}: {
  properties: {
    nombre: string;
    propertie: string;
  }[];
  list: any[];
  page: number;
  setPage: (page: number) => void;
}) => {
  const renderThead = () => {
    return properties.map((item) => (
      <th style={{ width: `${100 / properties.length}%` }} key={item.propertie}>
        {item.nombre}
      </th>
    ));
  };
  const renderTBody = () => {
    const newListReformed = [...list];
    let emptyObject = {};
    for (let index = 0; index < properties.length; index++) {
      const element = properties[index];
      emptyObject = {
        ...emptyObject,
        [element.propertie]: "",
      };
    }
    const missingObjects = 10 - Number(list.length.toString().split("").at(-1));
    for (let index = 0; index < missingObjects; index++) {
      newListReformed.push(emptyObject);
    }
    return newListReformed
      .map((item: any, index) => {
        const values = [];
        for (let index = 0; index < properties.length; index++) {
          const element = properties[index];
          const value = item[element.propertie];
          values.push(value);
        }
        return (
          <tr
            key={index}
            className={`${
              values.filter((item) => item === "").length == values.length &&
              style.empty
            }`}
          >
            <td className={style.item}>
              {values.filter((item) => item === "").length == values.length
                ? "ㅤ"
                : index + 1}
            </td>
            {values.map((value, index) => {
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
      })
      .slice(page * 10, page * 10 + 10);
  };
  console.log("RENDER")
  return (
    <>
      <div className={style.table_container}>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.item}>ITEM</th>
              {renderThead()}
            </tr>
          </thead>
          <tbody>{renderTBody()}</tbody>
        </table>
      </div>
      <div className={style.pagination}>
        <div className={style.bi} onClick={() => setPage(0)}>
          <BiFirstPage />
        </div>
        <div
          className={style.io}
          onClick={() => {
            if (list.length == 0) {
              return;
            }
            setPage(page === 0 ? Math.ceil(list.length / 10) - 1 : page - 1);
          }}
        >
          <IoIosArrowBack />
        </div>
        <div className={style.current}>
          <div className={style.page}>{page + 1}</div>{" "}
          <div className={style.separator}></div>{" "}
          <div className={style.page}>
            {Math.ceil(list.length / 10) == 0 ? 1 : Math.ceil(list.length / 10)}
          </div>
        </div>
        <div
          className={style.io}
          onClick={() => {
            if (list.length == 0) {
              return;
            }
            setPage(page == Math.ceil(list.length / 10) - 1 ? 0 : page + 1);
          }}
        >
          <IoIosArrowForward />
        </div>
        <div
          className={style.bi}
          onClick={() => setPage(Math.ceil(list.length / 10) - 1)}
        >
          <BiLastPage />
        </div>
      </div>
    </>
  );
};
export default Table;
