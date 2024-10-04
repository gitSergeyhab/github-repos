import { FC } from "react";
import { FieldArrayWithId } from "react-hook-form";
import { DynamicItemField, PageFormData } from "../types";
import { DynamicFieldItem } from "../dynamic-field-item";

export interface DynamicApproveListProps extends DynamicItemField {
  approvalsFields: FieldArrayWithId<PageFormData, "approvals", "id">[];
}

export const DynamicApproveList: FC<DynamicApproveListProps> = ({
  onRemove,
  onAdd,
  approvalsFields,
  register,
  errors,
}) => (
  <ul className="form__dynamic-list">
    {approvalsFields.map((field, i) => (
      <li key={field.id}>
        <DynamicFieldItem
          label="Подтвердите чnо-нибудь"
          fieldId={`approvals.${i}.approval`}
          index={i}
          error={errors.approvals?.[i]?.approval?.message}
          listLength={approvalsFields.length}
          onAdd={onAdd}
          onRemove={() => onRemove(i)}
          classNames="dynamic-checkbox"
        >
          <input
            type="checkbox"
            id={`approvals.${i}.approval`}
            className="form__dynamic-field form__dynamic-field--checkbox"
            {...register(`approvals.${i}.approval`)}
          ></input>
        </DynamicFieldItem>
      </li>
    ))}
  </ul>
);
