import { FC, PropsWithChildren } from "react";

export interface DynamicFieldItemProps extends PropsWithChildren {
  fieldId: string;
  index: number;
  onRemove: VoidFunction;
  onAdd: VoidFunction;
  listLength: number;
  label: string;
  error?: string;
  classNames?: string;
}

export const DynamicFieldItem: FC<DynamicFieldItemProps> = (props) => {
  const {
    index,
    children,
    error,
    listLength,
    onAdd,
    onRemove,
    label,
    fieldId,
    classNames,
  } = props;

  return (
    <div className={classNames}>
      <label className="form__label" htmlFor={fieldId}>
        {label}
      </label>
      <div className="form__dynamic-field-wrapper">
        {children}
        {index !== 0 && (
          <button
            type="button"
            className="form__field-btn form__field-btn--del"
            onClick={onRemove}
          >
            -
          </button>
        )}
        {listLength === index + 1 && (
          <button
            type="button"
            className="form__field-btn form__field-btn--add"
            onClick={onAdd}
          >
            +
          </button>
        )}
      </div>
      {error && <p className="form__error">{error}</p>}
    </div>
  );
};
