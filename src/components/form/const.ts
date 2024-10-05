import * as Yup from "yup";

export const countries = ["Уругвай", "Австралия", "Канада", "Зимбабве"];
export const colors = ["black", "yellow", "green", "blue"];
export const cities = [
  "Рио-де-Жанеиро",
  "Санкт-Петербург",
  "Сан-Франциско",
  "Тула",
];

export const defaultInfo = {
  country: "",
  language: "",
  email: "",
  number: 0,
  approval: true,
  text: "",
  color: "",
  cities: [],
  colors: [],
  city: "",
};

export const pageFormDefaultValues = {
  info: [{ ...defaultInfo }],
};

export const schema = Yup.object().shape({
  info: Yup.array()
    .of(
      Yup.object().shape({
        color: Yup.string()
          .required("Обязательное поле")
          .oneOf(colors, "нужно выбрать из: " + colors.join("; ")),
        cities: Yup.array()
          .of(Yup.string().required("Обязательное поле"))
          .required("Обязательное поле")
          .min(1, "Минимум 1 город"),

        colors: Yup.array()
          .of(Yup.string().required("Обязательное поле"))
          .required("Обязательное поле")
          .min(1, "Минимум 1 цвет"),
        city: Yup.string()
          .required("Обязательное поле")
          .oneOf(cities, "нужно выбрать из: " + cities.join("; ")),

        text: Yup.string()
          .required("Обязательное поле")
          .min(100, "Минимум 100 символов"),
        country: Yup.string()
          .required("Обязательное поле")
          .oneOf(countries, "нужно выбрать из: " + countries.join("; ")),
        language: Yup.string()
          .required("Обязательное поле")
          .min(2, "Минимум 2 буквы"),
        email: Yup.string()
          .required("Обязательное поле")
          .email("Некорректная почта"),
        number: Yup.number()
          .required("Обязательное поле")
          .min(0, "Минимум 0")
          .max(100, "Максимум 100"),
        approval: Yup.boolean()
          .required("Обязательное поле")
          .oneOf([true], "Нужно подтвердить"),
      })
    )
    .required("Обязательное поле"),
});
