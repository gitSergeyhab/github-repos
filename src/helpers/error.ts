import { FieldError, Merge } from "react-hook-form";

export const getCheckboxGroupError = (
  data: Merge<FieldError, (FieldError | undefined)[]> | undefined
) => {
  if (!data) return "";
  if (Array.isArray(data)) {
    return data.map((d) => (d ? d.message : "")).join("; ");
  }
  return String(data.message);
};
