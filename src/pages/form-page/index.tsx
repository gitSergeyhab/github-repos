import { useState } from "react";
import { Form } from "../../components/form";
import { PageFormData } from "../../components/form/types";
import { JsonText } from "../../components/json-text";

export default function FormPage() {
  const [formData, setFormData] = useState<string>("");

  const onSubmit = (data: PageFormData) => {
    setFormData(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1 className="app__title">Dynamic Form</h1>
      <Form onSubmit={onSubmit} />
      <JsonText>{formData}</JsonText>
    </div>
  );
}
