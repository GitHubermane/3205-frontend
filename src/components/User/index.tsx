import type { FC } from 'react';
import styles from './styles.module.scss';

type PropsType = {
  number: string;
  email: string;
};

export const User: FC<PropsType> = ({ email, number }) => (
  <div className={styles.user}>
    <div>
      Email: 
      {' '}
      <span>{email}</span>
    </div>
    <div>
      Phone number: 
      {' '}
      <span>{number}</span>
    </div>
  </div>
);
