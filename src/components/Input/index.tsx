import type { ChangeEvent, FC } from 'react';
import { useId } from 'react';
import { InputType } from 'types';
import styles from './styles.module.scss';

type PropsType = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  error: string;
  onErrorChange: (value: string) => void;
  type?: InputType;
};

export const Input: FC<PropsType> = ({
  value,
  onChange,
  label,
  error,
  onErrorChange,
  type = 'text',
}) => {
  const id = useId();
  // Для обычного текста
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
    onErrorChange('');
  };

  // Для номера телефона
  const onTelephoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const telephone = e.currentTarget.value.replace(/[^0-9]/g, ''); // Удаляем все, кроме цифр
    let formattedTelephone = '';

    for (let i = 0; i < telephone.length; i += 2) {
      formattedTelephone += `${telephone.slice(i, i + 2)}-`;
    }

    formattedTelephone = formattedTelephone.slice(0, -1); // Убираем последний дефис

    onChange(formattedTelephone);
    onErrorChange('');
  };

  const isTelephone = type === InputType.telephone;

  return (
    <div className={styles.input}>
      <div className={styles.input__block}>
        <label
          className={styles.input__label}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          value={value}
          onChange={isTelephone ? onTelephoneChange : onValueChange}
          className={`${styles.input__body} ${
            error ? styles.input__error : ''
          }`}
          type="email"
          placeholder={`Enter your ${label}`}
          id={id}
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};
