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
    {emailFields.map((field, i) => {
      const fieldId = `emails.${i}.email` as const;
      return (
        <li key={field.id}>
          <DynamicFieldItem
            label="Добавьте электронную почту"
            fieldId={fieldId}
            index={i}
            error={errors.emails?.[i]?.email?.message}
            listLength={emailFields.length}
            onAdd={onAdd}
            onRemove={() => onRemove(i)}
          >
            <input
              type="email"
              id={fieldId}
              className="form__dynamic-field"
              {...register(fieldId)}
            />
          </DynamicFieldItem>
        </li>
      );
    })}
  </ul>
);
