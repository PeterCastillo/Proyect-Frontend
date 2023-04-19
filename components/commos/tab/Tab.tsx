import { useEffect, useState } from "react";
import style from "./Tab.module.scss";

const Tab = ({
  handleNextComponent,
  editableValidator,
}: {
  handleNextComponent: (componentIndex: number) => void;
  editableValidator: string;
}) => {
  const [render, setRender] = useState(0);
  const [validador, setValidador] = useState("") 

  return (
    <div className={style.tab}>
      <span
        className={`${render == 0 && style.tabactive}`}
        onClick={() => {
          setRender(0);
          setValidador("")
          handleNextComponent(0);
        }}
      >
        Lista
      </span>
      <span
        className={`${render == 1 && style.tabactive}`}
        onClick={() => {
          setRender(1);
          setValidador("")
          handleNextComponent(1);
        }}
      >
        Crear
      </span>
      <span
        className={`${
          editableValidator && render == 2
            ? style.tabactive
            : style.editdescative
        }`}
      >
        Editar
      </span>
    </div>
  );
};

export default Tab;
