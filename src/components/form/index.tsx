import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { pageFormDefaultValues, pageFormSchema } from "./const";
import { PageFormData } from "./types";
import { DynamicLanguageList } from "./lists/dynamic-language-list";
import { DynamicEmailList } from "./lists/dynamic-email-list";
import { DynamicCountryList } from "./lists/dynamic-country-list";
import { DynamicNumberList } from "./lists/dynamic-number-list";
import { DynamicApproveList } from "./lists/dynamic-approve-list";
import { DynamicTextList } from "./lists/dynamic-text-list";
import "./styles.css";

export const Form = () => {
  const form = useForm<PageFormData>({
    defaultValues: pageFormDefaultValues,
    resolver: yupResolver(pageFormSchema),
  });

  const { register, handleSubmit, formState, control } = form;

  const {
    fields: languagesFields,
    append: appendLanguage,
    remove: removeLanguage,
  } = useFieldArray({
    name: "languages",
    control,
  });

  const {
    fields: emailsFields,
    append: appendEmail,
    remove: removeEmail,
  } = useFieldArray({
    name: "emails",
    control,
  });

  const {
    fields: countriesFields,
    append: appendCountry,
    remove: removeCountry,
  } = useFieldArray({
    name: "countries",
    control,
  });

  const {
    fields: numbersFields,
    append: appendNumber,
    remove: removeNumber,
  } = useFieldArray({
    name: "numbers",
    control,
  });

  const {
    fields: approvalsFields,
    append: appendApprove,
    remove: removeApprove,
  } = useFieldArray({
    name: "approvals",
    control,
  });

  const {
    fields: textsFields,
    append: appendText,
    remove: removeText,
  } = useFieldArray({
    name: "texts",
    control,
  });

  const { errors } = formState;

  const onSubmit = (data: PageFormData) => {
    console.log(data, { errors });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="name">Имя</label>
      <input
        className="form__static-field"
        type="text"
        id="name"
        placeholder="name"
        {...register("name")}
      />
      <p className="form__error">{errors.name?.message}</p>
      <fieldset>
        <legend>Input Text</legend>
        <DynamicLanguageList
          errors={errors}
          languagesFields={languagesFields}
          onAdd={() => appendLanguage({ title: "" })}
          onRemove={(i: number) => removeLanguage(i)}
          register={register}
        />
      </fieldset>
      <fieldset>
        <legend>Select</legend>
        <DynamicCountryList
          errors={errors}
          countriesFields={countriesFields}
          onAdd={() => appendCountry({ name: "" })}
          onRemove={(i: number) => removeCountry(i)}
          register={register}
        />
      </fieldset>
      <fieldset>
        <legend>Input Email</legend>
        <DynamicEmailList
          errors={errors}
          emailFields={emailsFields}
          onAdd={() => appendEmail({ email: "" })}
          onRemove={(i: number) => removeEmail(i)}
          register={register}
        />
      </fieldset>
      <fieldset>
        <legend>Input Number</legend>
        <DynamicNumberList
          errors={errors}
          numberFields={numbersFields}
          onAdd={() => appendNumber({ number: 0 })}
          onRemove={(i: number) => removeNumber(i)}
          register={register}
        />
      </fieldset>
      <fieldset>
        <legend>Textarea</legend>
        <DynamicTextList
          errors={errors}
          textsFields={textsFields}
          onAdd={() => appendText({ text: "" })}
          onRemove={(i: number) => removeText(i)}
          register={register}
        />
      </fieldset>
      <fieldset>
        <legend>Checkboxes</legend>
        <DynamicApproveList
          errors={errors}
          approvalsFields={approvalsFields}
          onAdd={() => appendApprove({ approval: false })}
          onRemove={(i: number) => removeApprove(i)}
          register={register}
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};
