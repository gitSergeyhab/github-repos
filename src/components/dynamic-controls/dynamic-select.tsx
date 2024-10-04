import { FC } from "react";
import "./style.css";

export interface DynamicSelectProps {
  label?: string;
  error?: string;
  registerProps: object;
  id: string;
  options: string[];
}

export const DynamicSelect: FC<DynamicSelectProps> = ({
  label,
  error,
  registerProps,
  id,
  options,
}) => {
  return (
    <div className="dynamic-control__wrapper">
      {!!label && <label htmlFor={id}>{label}</label>}
      <select id={id} {...registerProps} className="dynamic-control">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="dynamic-error">{error}</p>
    </div>
  );
};
