import Button from '@/components/Button';
import styles from './Form.module.css'
import Heading from '../Heading';

interface FormProps {
  /**
   * What's the title for this form?
   */
  title: string;
  /**
   * What will happen on submit?
   */
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  /**
   * What is the "submit" button text?
   * @default Submit
   * @optional
   */
  submitText?: string;
  /**
   * What are the children?
   * @optional
   */
  children?: React.ReactNode;
}

const Form = ({
  title,
  onSubmit,
  submitText = 'Submit',
  children,
}: React.PropsWithChildren<FormProps>) => {
  return (
    <section className={styles.container}>
      <Heading size={1} >{title}</Heading>
      <form onSubmit={onSubmit} className={styles.form}>
        {children}
        <Button label={submitText} type="submit" size='large' />
      </form>
    </section>
  );
}

export default Form;
