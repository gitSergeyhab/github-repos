import { FC } from "react";
import { FieldArrayWithId } from "react-hook-form";
import { DynamicItemField, PageFormData } from "../types";
import { DynamicFieldItem } from "../dynamic-field-item";
import { countries } from "../const";

export interface DynamicCountryListProps extends DynamicItemField {
  countriesFields: FieldArrayWithId<PageFormData, "countries", "id">[];
}

export const DynamicCountryList: FC<DynamicCountryListProps> = ({
  onRemove,
  onAdd,
  countriesFields,
  register,
  errors,
}) => (
  <ul className="form__dynamic-list">
    {countriesFields.map((field, i) => {
      const fieldId = `countries.${i}.name` as const;
      return (
        <li key={field.id}>
          <DynamicFieldItem
            label="Добавьте страну"
            fieldId={fieldId}
            index={i}
            error={errors.countries?.[i]?.name?.message}
            listLength={countriesFields.length}
            onAdd={onAdd}
            onRemove={() => onRemove(i)}
          >
            <select
              id={fieldId}
              className="form__dynamic-field"
              {...register(fieldId)}
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </DynamicFieldItem>
        </li>
      );
    })}
  </ul>
);
