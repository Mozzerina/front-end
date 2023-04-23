import React, { useEffect, useState } from 'react';
import s from './Form.module.css';
import Input from '../Register/Input';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState('Емеил не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емейл');
    }
    if (!e.target.value) {
      setEmailError('Емеил не может быть пустым');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 10) {
      setPasswordError('Пароль не может быть мменьше 5 или больше 10');
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      case 'firstName':
        setFirstNameDirty(true);
        break;
      case 'lastName':
        setLastNameDirty(true);
        break;
    }
  };
  return (
    <div className={s.container}>
      <div className={s.body}>
        <form>
          <p>{'* вказує на обов\'язкове поле'}</p>
          <div className={s.form}>
            <fieldset className={s.fieldsContainer}>
              <div className={s.inputGroup}>
                <Input
                  text="Email address"
                  name="emailAddress"
                  blurHandler={blurHandler}
                  dirty={emailDirty}
                  err={emailError}
                  value={email}
                  onChange={emailHandler}
                />
                <Input
                  text="Password"
                  name="password"
                  blurHandler={blurHandler}
                  dirty={passwordDirty}
                  err={passwordError}
                  value={password}
                  onChange={passwordHandler}
                />
              </div>
            </fieldset>
            <div className={s.buttonContainer}>
              <button type="submit" className={s.button}>Увійти</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
