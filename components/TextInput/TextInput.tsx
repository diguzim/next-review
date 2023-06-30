import styles from './text-input.module.css';

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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * What is the className for this input?
   */
  className?: string;
  /**
   * What is the type for this input?
   * @default text
   * @optional
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color' | 'file' | 'image' | 'range' | 'hidden' | 'button' | 'submit' | 'reset' | 'checkbox' | 'radio' | 'select' | 'textarea' | 'time' | 'date' | 'datetime-local' | 'month' | 'week' | 'color' | 'file' | 'image' | 'range' | 'hidden' | 'button' | 'submit' | 'reset' | 'checkbox' | 'radio' | 'select' | 'textarea';
}

/**
 * Primary UI component for user interaction
 */
const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
  className,
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
        className={className}
        {...props}
      />
    </div>
  );
}

export default TextInput;