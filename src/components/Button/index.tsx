import type { FC } from 'react';
import styles from './styles.module.scss';

type PropsType = {
  text: string;
  onClick: () => void;
};

export const Button: FC<PropsType> = ({ onClick, text }) => (
  <button
    className={styles.button}
    onClick={onClick}
  >
    {text}
  </button>
);
