export interface PageFormInfo {
  country: string;
  language: string;
  email: string;
  number: number;
  approval: boolean;
  text: string;
}

export interface PageFormData {
  info: PageFormInfo[];
}
