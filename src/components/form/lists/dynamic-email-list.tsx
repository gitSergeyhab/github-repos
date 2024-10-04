import { FC } from "react";
import { FieldArrayWithId } from "react-hook-form";
import { DynamicItemField, PageFormData } from "../types";
import { DynamicFieldItem } from "../dynamic-field-item";

export interface DynamicEmailListProps extends DynamicItemField {
  emailFields: FieldArrayWithId<PageFormData, "emails", "id">[];
}

export const DynamicEmailList: FC<DynamicEmailListProps> = ({
  onRemove,
  onAdd,
  emailFields,
  register,
  errors,
}) => (
  <ul className="form__dynamic-list">
    {emailFields.map((field, i) => (
      <li key={field.id}>
        <DynamicFieldItem
          label="Добавьте электронную почту"
          fieldId={`emails.${i}.email`}
          index={i}
          error={errors.emails?.[i]?.email?.message}
          listLength={emailFields.length}
          onAdd={onAdd}
          onRemove={() => onRemove(i)}
        >
          <input
            type="email"
            id={`emails.${i}.email`}
            className="form__dynamic-field"
            {...register(`emails.${i}.email`)}
          />
        </DynamicFieldItem>
      </li>
    ))}
  </ul>
);
