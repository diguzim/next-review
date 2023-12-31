import { capitalizeFirstLetter } from '@/utils';
import styles from './Button.module.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   * @default primary
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  className?: string;

  type?: 'button' | 'submit' | 'reset';
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  type = 'button',
  primary = true,
  size = 'medium',
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.buttonPrimary : styles.buttonSecondary;
  const sizeClassName = styles[`button${capitalizeFirstLetter(size)}`];

  return (
    <button
      type={type}
      className={[styles.button, sizeClassName, mode, className].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};

export default Button;
