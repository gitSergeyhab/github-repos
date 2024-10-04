import { FC } from "react";
import "./style.css";

export interface DynamicTextareaProps {
  label?: string;
  error?: string;
  registerProps: object;
  id: string;
}

export const DynamicTextarea: FC<DynamicTextareaProps> = ({
  label,
  error,
  registerProps,
  id,
}) => {
  return (
    <div className="dynamic-control__wrapper">
      {!!label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        rows={4}
        className="dynamic-control dynamic-control--textarea"
        {...registerProps}
      />
      <p className="dynamic-error">{error}</p>
    </div>
  );
};
