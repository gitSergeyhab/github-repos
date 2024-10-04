import * as Yup from "yup";
import { PageFormData } from "./types";

export const pageFormDefaultValues = {
  name: "",
  languages: [{ title: "" }],
  countries: [{ name: "" }],
  emails: [{ email: "" }],
  numbers: [{ number: 0 }],
  approvals: [{ approval: false }],
  texts: [{ text: "" }],
};

export const countries = ["Уругвай", "Австралия", "Канада", "Зимбабве"];

export const pageFormSchema: Yup.ObjectSchema<PageFormData> =
  Yup.object().shape({
    name: Yup.string().required("Обязательное поле").min(2, "Минимум 2 буквы"),
    countries: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string()
            .required("Обязательное поле")
            .oneOf(countries, `нужно выбрать из: ${countries.join("; ")}`),
        })
      )
      .required("Обязательное поле"),
    languages: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string()
            .required("Обязательное поле")
            .min(2, "Минимум 2 буквы"),
        })
      )
      .required("Обязательное поле"),
    emails: Yup.array()
      .of(
        Yup.object().shape({
          email: Yup.string()
            .required("Обязательное поле")
            .email("Некорректная почта"),
        })
      )
      .required("Обязательное поле"),
    numbers: Yup.array()
      .of(
        Yup.object().shape({
          number: Yup.number()
            .required("Обязательное поле")
            .min(0, "Минимум 0")
            .max(100, "Максимум 100"),
        })
      )
      .required("Обязательное поле"),

    approvals: Yup.array()
      .of(
        Yup.object().shape({
          approval: Yup.boolean()
            .required("Обязательное поле")
            .isTrue("Нужно подтвердить"),
        })
      )
      .required("Обязательное поле"),

    texts: Yup.array()
      .of(
        Yup.object().shape({
          text: Yup.string()
            .required("Обязательное поле")
            .min(100, "Минимум 100 символов"),
        })
      )
      .required("Обязательное поле"),
  });
