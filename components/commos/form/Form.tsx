import { FormEvent } from "react";

interface IForm {
  handleOnFieldChange: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
  fields: Array<{
    name: string;
    value: string;
    disabled: boolean;
    required: boolean;
    type: "INPUT" | "SELECT" | "DATE";
  }>[];
}
const Form = ({ handleOnFieldChange, fields }: IForm) => {
  return fields.map((item, index) => (
    <div>
      {item.map((item, index) => {
        return {
          INPUT: <div>Hola</div>,
          SELECT: <div>Hola</div>,
          DATE: <div>Hola</div>,
        }[item.type];
      })}
    </div>
  ));
};

export default Form;
