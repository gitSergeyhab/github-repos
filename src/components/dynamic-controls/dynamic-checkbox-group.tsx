import { Control, Controller, FieldValues } from "react-hook-form";

export interface DynamicCheckboxGroupProps<T extends FieldValues> {
  label?: string;
  error?: string;
  id: string;
  options: string[];
  control: Control<T>;
  classNames?: string;
}

export const DynamicCheckboxGroup = <T extends FieldValues>({
  error,
  id,
  options,
  label,
  control,
  classNames = "",
}: DynamicCheckboxGroupProps<T>) => {
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
                type="checkbox"
                {...field}
                value={option}
                checked={field.value.includes(option)}
                onChange={(e) => {
                  const value = e.target.value;
                  if (e.target.checked) {
                    field.onChange([...field.value, value]);
                  } else {
                    field.onChange(
                      field.value.filter((v: string) => v !== value)
                    );
                  }
                }}
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
