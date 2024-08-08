import "./styles.css";

type Props = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ label, type, name, value, onChange }: Props) => {
  return (
    <div>
      <label>
        <span>{label}</span>
        <input type={type} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default InputField;
