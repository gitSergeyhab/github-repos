import {
  FieldValues,
  Control,
  useFieldArray,
  ArrayPath,
} from "react-hook-form";

export const useAppFieldArray = <
  T extends FieldValues,
  N extends ArrayPath<T>
>({
  control,
  name,
}: {
  control: Control<T>;
  name: N;
}) => {
  const { append, remove, fields } = useFieldArray<T, N>({
    control,
    name,
  });

  return { append, remove, fields };
};
