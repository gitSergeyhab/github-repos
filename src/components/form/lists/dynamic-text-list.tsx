import { FC } from "react";
import { FieldArrayWithId } from "react-hook-form";
import { DynamicItemField, PageFormData } from "../types";
import { DynamicFieldItem } from "../dynamic-field-item";

export interface DynamicTextListProps extends DynamicItemField {
  textsFields: FieldArrayWithId<PageFormData, "texts", "id">[];
}

export const DynamicTextList: FC<DynamicTextListProps> = ({
  onRemove,
  onAdd,
  textsFields,
  register,
  errors,
}) => (
  <ul className="form__dynamic-list">
    {textsFields.map((field, i) => (
      <li key={field.id}>
        <DynamicFieldItem
          label="Введите текст от 100 символов"
          fieldId={`texts.${i}.text`}
          index={i}
          error={errors.texts?.[i]?.text?.message}
          listLength={textsFields.length}
          onAdd={onAdd}
          onRemove={() => onRemove(i)}
        >
          <textarea
            rows={4}
            id={`texts.${i}.text`}
            className="form__dynamic-field form__dynamic-field--textarea"
            {...register(`texts.${i}.text`)}
          />
        </DynamicFieldItem>
      </li>
    ))}
  </ul>
);
