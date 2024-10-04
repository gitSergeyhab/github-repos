import { FC } from "react";
import { FieldArrayWithId } from "react-hook-form";
import { DynamicItemField, PageFormData } from "../types";
import { DynamicFieldItem } from "../dynamic-field-item";

export interface DynamicNumberListProps extends DynamicItemField {
  numberFields: FieldArrayWithId<PageFormData, "numbers", "id">[];
}

export const DynamicNumberList: FC<DynamicNumberListProps> = ({
  onRemove,
  onAdd,
  numberFields,
  register,
  errors,
}) => (
  <ul className="form__dynamic-list">
    {numberFields.map((field, i) => {
      const fieldId = `numbers.${i}.number` as const;
      return (
        <li key={field.id}>
          <DynamicFieldItem
            label="Добавьте число от 0 до 100"
            fieldId={fieldId}
            index={i}
            error={errors.numbers?.[i]?.number?.message}
            listLength={numberFields.length}
            onAdd={onAdd}
            onRemove={() => onRemove(i)}
          >
            <input
              type="number"
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
