import { FC } from "react";
import { FieldArrayWithId } from "react-hook-form";
import { DynamicItemField, PageFormData } from "../types";
import { DynamicFieldItem } from "../dynamic-field-item";

export interface DynamicLanguageListProps extends DynamicItemField {
  languagesFields: FieldArrayWithId<PageFormData, "languages", "id">[];
}

export const DynamicLanguageList: FC<DynamicLanguageListProps> = ({
  onRemove,
  onAdd,
  languagesFields,
  register,
  errors,
}) => (
  <ul className="form__dynamic-list">
    {languagesFields.map((field, i) => (
      <li key={field.id}>
        <DynamicFieldItem
          label="Введите язык"
          fieldId={`languages.${i}.title`}
          index={i}
          error={errors.languages?.[i]?.title?.message}
          listLength={languagesFields.length}
          onAdd={onAdd}
          onRemove={() => onRemove(i)}
        >
          <input
            type="text"
            id={`languages.${i}.title`}
            className="form__dynamic-field"
            {...register(`languages.${i}.title`)}
          />
        </DynamicFieldItem>
      </li>
    ))}
  </ul>
);
