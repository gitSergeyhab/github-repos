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
    {countriesFields.map((field, i) => (
      <li key={field.id}>
        <DynamicFieldItem
          label="Добавьте страну"
          fieldId={`countries.${i}.name`}
          index={i}
          error={errors.countries?.[i]?.name?.message}
          listLength={countriesFields.length}
          onAdd={onAdd}
          onRemove={() => onRemove(i)}
        >
          <select
            id={`countries.${i}.name`}
            className="form__dynamic-field"
            {...register(`countries.${i}.name`)}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </DynamicFieldItem>
      </li>
    ))}
  </ul>
);
