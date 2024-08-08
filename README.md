# Forms Component

Este é um componente React chamado `Forms`, que fornece um formulário simples com validação básica de campos de texto, email e número de telefone. O componente utiliza hooks do React, como `useState`, para gerenciar o estado do formulário e validar os dados do usuário.

## Funcionalidades

- **Validação de Campo**: Verifica se os campos de texto (`name` e `phone`) estão preenchidos e não contêm espaços em branco.
- **Validação de Email**: Verifica se o email inserido é válido, utilizando uma expressão regular.
- **Submissão de Formulário**: O formulário pode ser enviado apenas se todas as validações forem bem-sucedidas.

## Estrutura do Componente

O componente `Forms` gerencia os seguintes dados do formulário:

- `name`: Nome do usuário (texto).
- `email`: Email do usuário (texto com validação de formato de email).
- `phone`: Número de telefone do usuário (texto).

### Estado

O estado do componente é gerenciado pelo hook `useState`, que mantém os valores atuais de `name`, `email` e `phone`.

```typescript
const [formData, setFormData] = useState<FormData>({
  name: "",
  email: "",
  phone: "",
});
```

### Manipulação de Mudanças

A função handleChange é chamada sempre que um campo do formulário é alterado. Ela atualiza o estado com o novo valor do campo correspondente.

```typescript
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
```

### Validação

Campo de Texto
A função handleValidationField verifica se um campo de texto é válido, ou seja, se não está vazio e não contém apenas espaços em branco.

```typescript
const handleValidationField = (field: string) => {
  return field.trim().length > 0;
};
```

### Email

A função handleValidationEmail valida o formato do email inserido, usando uma expressão regular.

```typescript
const handleValidationEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};
```

### Submissão do Formulário

A função handleSubmit é responsável por processar o envio do formulário. Ela valida cada campo usando a função validateField, e se todas as validações passarem, os dados do formulário são exibidos no console e o formulário é resetado.

```typescript
const handleSubmit = (event: FormEvent) => {
  event.preventDefault();

  if (!validateField(formData.name, handleValidationField, "Nome inválido"))
    return;
  if (!validateField(formData.phone, handleValidationField, "Celular inválido"))
    return;
  if (!validateField(formData.email, handleValidationEmail, "Email inválido"))
    return;

  console.log(formData);
  setFormData({ name: "", email: "", phone: "" });
};
```

### Uso

Para usar o componente Forms, basta importá-lo e incluí-lo em seu JSX:

```typescript
import Forms from "./components/Forms";

function App() {
  return (
    <div>
      <h1>Formulário de Contato</h1>
      <Forms />
    </div>
  );
}

export default App;
```

O componente Forms pode ser facilmente estendido para incluir mais campos ou validações adicionais, conforme necessário.
# forms-reactjs
