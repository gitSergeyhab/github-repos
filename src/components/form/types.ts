import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface PageFormData {
  name: string;
  countries: { name: string }[];
  languages: { title: string }[];
  emails: { email: string }[];
  numbers: { number: number }[];
  approvals: { approval: boolean }[];
  texts: { text: string }[];
}

export interface DynamicItemField {
  onRemove: (i: number) => void;
  onAdd: VoidFunction;
  register: UseFormRegister<PageFormData>;
  errors: FieldErrors<PageFormData>;
}
