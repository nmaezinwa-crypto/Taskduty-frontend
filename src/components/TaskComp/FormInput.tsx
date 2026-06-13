interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'date' | 'textarea';
}

const FormInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: FormInputProps) => {
  return (
    <div className="border border-gray-300 rounded p-4">
      <label className="text-gray-500 text-sm mb-1 block">{label}</label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none resize-none text-sm"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none text-sm"
        />
      )}
    </div>
  );
};

export default FormInput;