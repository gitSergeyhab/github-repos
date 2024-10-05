import { Control, Controller, FieldValues } from "react-hook-form";

export interface DynamicRadioGroupProps<T extends FieldValues> {
  label?: string;
  error?: string;
  id: string;
  options: string[];
  control: Control<T>;
  classNames?: string;
}

export const DynamicRadioGroup = <T extends FieldValues>({
  error,
  id,
  options,
  label,
  control,
  classNames = "",
}: DynamicRadioGroupProps<T>) => {
  return (
    <Controller
      control={control}
      // @ts-expect-error: everything is fine
      name={id}
      render={({ field }) => (
        <fieldset className={`dynamic-control ${classNames}`}>
          <legend>{label}</legend>
          {options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                {...field}
                value={option}
                checked={field.value === option}
              />
              {option}
            </label>
          ))}
          <p className="dynamic-error">{error}</p>
        </fieldset>
      )}
    />
  );
};
