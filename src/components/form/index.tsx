import { FC } from "react";
import { DynamicFieldset } from "../dynamic-fieldset";
import {
  DynamicInput,
  DynamicSelect,
  DynamicTextarea,
} from "../dynamic-controls";
import { countries, defaultInfo, pageFormDefaultValues, schema } from "./const";
import { PageFormData } from "./types";
import { useAppFieldArray } from "../../hooks/use-app-field-array";
import { useAppForm } from "../../hooks/use-app-form";
import "./style.css";

export interface FormProps {
  onSubmit: (data: PageFormData) => void;
}
export const Form: FC<FormProps> = ({ onSubmit }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm<PageFormData>(pageFormDefaultValues, schema);

  const { fields, append, remove } = useAppFieldArray({
    control,
    name: "info",
  });

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, i) => (
        <div key={field.id}>
          <DynamicFieldset index={i} onRemove={() => remove(i)}>
            <DynamicInput
              label="Язык (input/text)"
              type="text"
              id={`info.${i}.language`}
              registerProps={{ ...register(`info.${i}.language`) }}
              error={errors?.info?.[i]?.language?.message}
            />
            <DynamicInput
              label="Email (input/email)"
              type="email"
              id={`info.${i}.email`}
              registerProps={{ ...register(`info.${i}.email`) }}
              error={errors?.info?.[i]?.email?.message}
            />
            <DynamicInput
              label="Число от 0 до 100 (input/number)"
              type="number"
              id={`info.${i}.number`}
              registerProps={{ ...register(`info.${i}.number`) }}
              error={errors?.info?.[i]?.number?.message}
            />
            <DynamicTextarea
              label="Текст от 100 символов (textarea)"
              id={`info.${i}.text`}
              registerProps={{ ...register(`info.${i}.text`) }}
              error={errors?.info?.[i]?.text?.message}
            />
            <DynamicSelect
              id={`info.${i}.country`}
              label="Страна (select)"
              options={countries}
              registerProps={{ ...register(`info.${i}.country`) }}
              error={errors?.info?.[i]?.country?.message}
            />
            <DynamicInput
              label="Согласие (checkbox)"
              type="checkbox"
              classNames="dynamic-control--checkbox"
              id={`info.${i}.approval`}
              registerProps={{ ...register(`info.${i}.approval`) }}
              error={errors?.info?.[i]?.approval?.message}
            />
          </DynamicFieldset>
          {fields.length === i + 1 && (
            <button
              type="button"
              className="form__btn form__btn--add"
              onClick={() => append({ ...defaultInfo })}
            >
              Добавить
            </button>
          )}
        </div>
      ))}
      <button type="submit" className="form__btn">
        Submit
      </button>
    </form>
  );
};
