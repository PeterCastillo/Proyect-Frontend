import { clsx } from "@/lib/clsx";
import style from "./MultipleFilter.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { ChangeEvent, useState } from "react";

const MultipleFilter = ({
  changeInputFilter,
  changeTypeFilter,
  filtros,
  properties,
}: {
  changeInputFilter: (event: ChangeEvent<HTMLInputElement>) => void;
  changeTypeFilter: (propertie: any) => void;
  filtros: {
    search: string;
    propertie: string;
  };
  properties: {
    name: string;
    propertie: string;
  }[];
}) => {
  const handleSelectPropertie = (propertie: string) => {
    setOptionsFilterShow(false)
    changeTypeFilter(propertie)
  }

  const [optionsFilterShow, setOptionsFilterShow] = useState(false);
  return (
    <div className={style.filter}>
      <input
        className={style.search}
        type="text"
        name="nombre"
        value={filtros.search}
        autoComplete="off"
        onChange={changeInputFilter}
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
        <span>
          FILTRAR POR: <div onClick={() => setOptionsFilterShow(false)}>x</div>
        </span>
        {properties.map((item, index) => (
          <span onClick={() => handleSelectPropertie(item.propertie)} key={index}>
            {item.name.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MultipleFilter;
