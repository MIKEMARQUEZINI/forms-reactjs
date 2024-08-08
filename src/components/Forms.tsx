import { ChangeEvent, FormEvent, useState } from "react";
import InputField from "../generics/InputField";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const Forms = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //função que recebe um evento de mudança de input, onde é possível pegar o valor do input e o nome do input e atualizar o estado do formulário
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleValidationField = (field: string) => {
    //função que recebe um campo e verifica se ele está preenchido e se não tem espaços em branco
    return field.trim().length > 0;
  };

  const handleValidationEmail = (email: string) => {
    //função que recebe um email e verifica se ele é válido
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const validateField = (
    //função que recebe um valor, uma função de validação e uma mensagem de erro e retorna um booleano
    value: string,
    validationFn: (value: string) => boolean,
    errorMessage: string
  ): boolean => {
    if (!validationFn(value)) {
      //se a função de validação retornar false, exibe a mensagem de erro e retorna false
      alert(errorMessage);
      return false;
    }
    return true;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!validateField(formData.name, handleValidationField, "Nome inválido"))
      return;
    if (
      !validateField(formData.phone, handleValidationField, "Celular inválido")
    )
      return;
    if (!validateField(formData.email, handleValidationEmail, "Email inválido"))
      return;

    console.log(formData);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Celular"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Forms;
