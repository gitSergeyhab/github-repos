import { useState } from "react";
import { JsonText } from "../../components/json-text";
import { Form } from "../../components/form";

export default function FormPage() {
  const [formData, setFormData] = useState<string>("");

  const onSubmit = (data: object) => {
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
