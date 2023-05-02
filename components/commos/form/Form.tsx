import { FormEvent } from "react";
import style from "./Form.module.scss";

interface Select {
  type: "SELECT";
  label: string;
  name: string;
  value: string;
  disabled: boolean;
  required: boolean;
  list: {
    name: string;
    value: string;
  }[];
}
interface Input {
  type: "INPUT" | "DATE";
  label: string;
  name: string;
  value: string;
  disabled: boolean;
  required: boolean;
}

const Form = ({
  handleOnFieldChange,
  fields,
}: {
  handleOnFieldChange: (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  fields: Array<Array<Input | Select>>;
}) => {
  return (
    <>
      {fields.map((item, index) => (
        <div key={index} className={style.input_group}>
          {item.map((item, index) => {
            return (
              <div key={index}>
                <label htmlFor={item.name}>{item.label}</label>
                {
                  {
                    INPUT: (
                      <input
                        id={item.name}
                        type="text"
                        value={item.value}
                        onChange={(e) =>
                          handleOnFieldChange({
                            ...e,
                            currentTarget: {
                              ...e.currentTarget,
                              value: e.currentTarget.value.toUpperCase(),
                              name: item.name,
                            },
                          })
                        }
                        disabled={item.disabled}
                        required={item.required}
                      />
                    ),
                    SELECT: (
                      <select
                        id=""
                        name={item.name}
                        value={item.value}
                        onChange={handleOnFieldChange}
                        disabled={item.disabled}
                        required={item.required}
                      >
                        {item.type == "SELECT" &&
                          item.list.map((item, index) => (
                            <option value={item.name} key={index}>
                              {item.name}
                            </option>
                          ))}
                      </select>
                    ),
                    DATE: (
                      <input
                        id={item.name}
                        type="date"
                        name={item.name}
                        value={item.value}
                        onChange={handleOnFieldChange}
                        disabled={item.disabled}
                        required={item.required}
                      />
                    ),
                  }[item.type]
                }
                {
                  item.required && <span>Hola</span>
                }
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default Form;
