export interface PageFormInfo {
  country: string;
  language: string;
  email: string;
  number: number;
  approval: boolean;
  text: string;
  color: string;
  cities: string[];
  colors: string[];
  city: string;
}

export interface PageFormData {
  info: PageFormInfo[];
}
