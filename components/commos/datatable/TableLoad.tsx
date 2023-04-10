import style from "./table.module.scss";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React from "react";

const TableLoad = ({
  properties,
}: {
  properties: {
    nombre: string;
    propertie: string;
  }[];
}) => {
  const renderThead = () => {
    return properties.map((item) => (
      <th style={{ width: `${100 / properties.length}%` }} key={item.propertie}>
        {item.nombre}
      </th>
    ));
  };

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
          <tbody>
            <tr className={style.empty}>
              <td className={style.item} colSpan={properties.length + 1}>ㅤ
              </td>
            </tr>
            <tr className={style.empty}>
              <td className={style.item} colSpan={properties.length + 1}>
                ㅤ
              </td>
            </tr>
            <tr className={style.empty}>
              <td className={style.item} colSpan={properties.length + 1}>
                ㅤ
              </td>
            </tr>
            <tr className={style.empty}>
              <td className={style.item} colSpan={properties.length + 1}>
                ㅤ
              </td>
            </tr>
            <tr className={style.empty}>
              <td className={style.item} colSpan={properties.length + 1}>
                ㅤ
              </td>
            </tr>
            <tr className={style.empty}>
              <td className={style.item} colSpan={properties.length + 1}>
                ㅤ
              </td>
            </tr>
            <tr className={style.empty}>
              <td className={style.item} colSpan={properties.length + 1}>
                ㅤ
              </td>
            </tr>
            <tr className={style.empty}>
              <td className={style.item} colSpan={properties.length + 1}>
                ㅤ
              </td>
            </tr>
            <tr className={style.empty}>
              <td className={style.item} colSpan={properties.length + 1}>
                ㅤ
              </td>
            </tr>
            <tr className={style.empty}>
              <td className={style.item} colSpan={properties.length + 1}>
                ㅤ
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={style.pagination}>
        <div className={style.bi}>
          <BiFirstPage />
        </div>
        <div className={style.io}>
          <IoIosArrowBack />
        </div>
        <div className={style.current}>
          <div className={style.page}> 1</div>{" "}
          <div className={style.separator}></div>{" "}
          <div className={style.page}>1</div>
        </div>
        <div className={style.io}>
          <IoIosArrowForward />
        </div>
        <div className={style.bi}>
          <BiLastPage />
        </div>
      </div>
    </>
  );
};
export default TableLoad;
