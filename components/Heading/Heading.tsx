import React, { ReactNode, ElementType } from 'react';

import styles from './Heading.module.scss';

type HeadingProps = {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ size, children, className }) => {
  const HeadingTag: ElementType = `h${size}`;

  return <HeadingTag className={`${styles.heading} ${className}`}>{children}</HeadingTag>;
};

export default Heading;
