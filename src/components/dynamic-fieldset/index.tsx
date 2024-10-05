import { FC, PropsWithChildren } from "react";
import "./style.css";

export interface DynamicFieldsetProps extends PropsWithChildren {
  index: number;
  onRemove: VoidFunction;
}

export const DynamicFieldset: FC<DynamicFieldsetProps> = ({
  index,
  children,
  onRemove,
}) => {
  return (
    <fieldset className="dynamic__fieldset">
      <legend className="dynamic__legend dynamic__legend--main">
        Dynamic Fieldset #{index + 1}
      </legend>
      {children}
      {index !== 0 && (
        <button
          type="button"
          className="dynamic__btn dynamic__btn--del"
          onClick={onRemove}
        >
          Удалить
        </button>
      )}
    </fieldset>
  );
};
