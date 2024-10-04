import { FC } from "react";
import "./style.css";

export interface DynamicInputProps {
  label?: string;
  type: string;
  classNames?: string;
  error?: string;
  registerProps: object;
  id: string;
}

export const DynamicInput: FC<DynamicInputProps> = ({
  label,
  type,
  classNames,
  error,
  registerProps,
  id,
}) => {
  return (
    <div className="dynamic-control__wrapper">
      {!!label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        className={`dynamic-control ${classNames}`}
        {...registerProps}
      />
      <p className="dynamic-error">{error}</p>
    </div>
  );
};
