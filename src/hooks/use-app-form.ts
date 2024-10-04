import { yupResolver } from "@hookform/resolvers/yup";
import { DefaultValues, FieldValues, useForm, Resolver } from "react-hook-form";
import * as Yup from "yup";

export const useAppForm = <T extends FieldValues>(
  defaultValues: DefaultValues<T>,
  schema: Yup.ObjectSchema<T>
) => {
  const form = useForm<T>({
    defaultValues,
    resolver: yupResolver(schema) as unknown as Resolver<T, unknown>,
  });
  return form;
};
