import styles from './TextInput.module.css';

// <TextInput label="Email" placeholder="Enter your email" value="me@me" onChange={handleChange} className="my-custom-class" type="text" />

interface TextInputProps {
  /**
   * What is the label for this input?
   */
  label: string;
  /**
   * What is the placeholder for this input?
   */
  placeholder?: string;
  /**
   * What is the value for this input?
   */
  value?: string;
  /**
   * What is the onChange for this input?
   */
  onChangeText?: (value: string) => void;
  /**
   * What is the type for this input?
   * @default text
   * @optional
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color' | 'file' | 'range' | 'hidden' | 'checkbox' | 'radio' | 'textarea';
}

/**
 * Primary UI component for user interaction
 */
const TextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  type = 'text',
  ...props
}: TextInputProps) => {
  return (
    <div className={styles.textInput}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={label}
        {...props}
      />
    </div>
  );

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (onChangeText) {
      onChangeText(event.target.value);
    }
  }
}

export default TextInput;
