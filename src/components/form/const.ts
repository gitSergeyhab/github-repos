import * as Yup from "yup";

export const countries = ["Уругвай", "Австралия", "Канада", "Зимбабве"];

export const defaultInfo = {
  country: "",
  language: "",
  email: "",
  number: 0,
  approval: true,
  text: "",
};

export const pageFormDefaultValues = {
  info: [{ ...defaultInfo }],
};

export const schema = Yup.object().shape({
  info: Yup.array()
    .of(
      Yup.object().shape({
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
