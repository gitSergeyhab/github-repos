import { FC } from "react";
import { DynamicFieldset } from "../dynamic-fieldset";
import {
  DynamicCheckboxGroup,
  DynamicInput,
  DynamicRadioGroup,
  DynamicSelect,
  DynamicTextarea,
} from "../dynamic-controls";
import {
  cities,
  colors,
  countries,
  defaultInfo,
  pageFormDefaultValues,
  schema,
} from "./const";
import { PageFormData } from "./types";
import { useAppFieldArray } from "../../hooks/use-app-field-array";
import { useAppForm } from "../../hooks/use-app-form";
import { getCheckboxGroupError } from "../../helpers/error";
import "./style.css";

export interface FormProps {
  onSubmit: (data: PageFormData) => void;
}
export const Form: FC<FormProps> = ({ onSubmit }) => {
  const { control, register, handleSubmit, formState } =
    useAppForm<PageFormData>(pageFormDefaultValues, schema);

  const { fields, append, remove } = useAppFieldArray({
    control,
    name: "info",
  });

  const { errors } = formState;

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, i) => (
        <div key={field.id}>
          <DynamicFieldset index={i} onRemove={() => remove(i)}>
            <DynamicCheckboxGroup
              id={`info.${i}.cities`}
              options={cities}
              control={control}
              label="1 или несколько городов (checkbox group)"
              error={getCheckboxGroupError(errors.info?.[i]?.cities)}
            />
            <DynamicCheckboxGroup
              id={`info.${i}.colors`}
              options={colors}
              control={control}
              label="1 или несколько цветов (checkbox group)"
              error={getCheckboxGroupError(errors.info?.[i]?.colors)}
            />
            <DynamicRadioGroup
              control={control}
              id={`info.${i}.city`}
              options={cities}
              error={errors.info?.[i]?.city?.message}
              label="1 Город с самым длинным и красивым названием (radio group)"
              classNames="dynamic-control--group-column"
            />
            <DynamicRadioGroup
              control={control}
              id={`info.${i}.color`}
              options={colors}
              error={errors.info?.[i]?.color?.message}
              label="1 Цвет (radio group)"
            />
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
