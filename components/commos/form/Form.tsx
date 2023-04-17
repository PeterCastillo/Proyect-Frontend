import { FormEvent } from "react";

interface IForm {
  handleOnFieldChange: (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
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
    <div key={index}>
      {item.map((item, index) => {
        return {
          INPUT: <input type="text" key={index} />,
          SELECT: <select name="" id="" key={index}></select>,
          DATE: <input type="date" key={index} />,
        }[item.type];
      })}
    </div>
  ));
};

export default Form;
