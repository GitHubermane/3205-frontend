import { Button, Input, User } from 'components';
import { useState } from 'react';
import type { UserResponse } from 'types';
import { InputType } from 'types';
import { getUser } from 'api';
import { numberValidator, emailValidator } from 'utils';
import styles from './styles.module.scss';

export const InputForm = () => {
  // Т.к. приложение небольшое делал все через локальный стейт

  // Пользователи
  const [users, setUsers] = useState([] as UserResponse[]);

  // Значения
  const [email, setEmail] = useState('jams@gmail.com');
  const [telephone, setTelephone] = useState('');

  // Ошибки
  const [emailError, setEmailError] = useState('');
  const [telephoneError, setTelephoneError] = useState('');
  // Загрузка
  const [isLoading, setIsLoading] = useState(false);

  const isValidated = () => {
    // Убираем дефисы из телефона
    const number = telephone.replace(/[^0-9]/g, '');
    if (!email) {
      setEmailError('Please enter email');
      return false;
    }
    if (!emailValidator(email)) {
      setEmailError('Not valid email');
      return false;
    }
    if (numberValidator(number)) {
      setTelephoneError('Not Valid number');
      return false;
    }
    return true;
  };

  const onGetUserClick = async () => {
    if (!isValidated()) return;
    setIsLoading(true);
    // Убираем дефисы из телефона
    const number = telephone.replace(/[^0-9]/g, '');
    const { data } = await getUser(email, number);

    setIsLoading(false);
    setUsers(data);
  };

  return (
    <div className={styles.input_form}>
      <Input
        label="Email"
        value={email}
        onChange={setEmail}
        type={InputType.email}
        error={emailError}
        onErrorChange={setEmailError}
      />
      <Input
        label="Phone"
        value={telephone}
        onChange={setTelephone}
        type={InputType.telephone}
        error={telephoneError}
        onErrorChange={setTelephoneError}
      />
      <Button
        text="Submit"
        onClick={onGetUserClick}
      />
      {isLoading && <div>Loading...</div>}
      {users.length !== 0 && (
        <div>
          <h3>User:</h3>
          {users.map((user) => (
            <User {...user} />
          ))}
        </div>
      )}
    </div>
  );
};
