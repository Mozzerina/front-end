import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './Form.module.css';
import Input from './Input';
import { registration } from '../../store/slices/authSlice';

function Form() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);

  const [emailError, setEmailError] = useState('Емеил не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [firstNameError, setFirstNameError] = useState('Имя не может быть пустым');
  const [lastNameError, setLastNameError] = useState('Фамилия не может быть пустым');

  const [formValid, setFormValid] = useState(false);

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   axios.post('https://localhost:7128/api/Auth/register', {
  //     name: firstName,
  //     surname: lastName,
  //     email,
  //     password,
  //   })
  //     .then((resp) => {
  //       if (resp.status === 200) {
  //         console.log(resp.status);
  //         return (<Navigate to="/login" />);
  //         // navigate('/login');
  //       }
  //     })
  //     .catch((err) => {
  //       setEmailError(err.response.data);
  //     });
  // };

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
    } else {
      setEmailError('');
    }
  };

  const firstNameHandler = (e) => {
    setfirstName(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 10) {
      setFirstNameError('Имя не может быть мменьше 5 или больше 10');
      if (!e.target.value) {
        setFirstNameError('Имя не может быть пустым');
      }
    } else {
      setFirstNameError('');
    }
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 10) {
      setLastNameError('Фамилия не может быть мменьше 5 или больше 10');
      if (!e.target.value) {
        setLastNameError('Фамилия не может быть пустым');
      }
    } else {
      setLastNameError('');
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
              <h2 className={s.headerFields}>Персональна інформація</h2>
              <div className={s.inputGroup}>
                <Input
                  text="First name"
                  name="firstName"
                  blurHandler={blurHandler}
                  dirty={firstNameDirty}
                  err={firstNameError}
                  value={firstName}
                  onChange={firstNameHandler}
                />
                <Input
                  text="Last name"
                  name="lastName"
                  blurHandler={blurHandler}
                  dirty={lastNameDirty}
                  err={lastNameError}
                  value={lastName}
                  onChange={lastNameHandler}
                />
              </div>
            </fieldset>
            <fieldset className={s.fieldsContainer}>
              <h2 className={s.headerFields}>Безпека облікового запису</h2>
              <div className={s.inputGroup}>
                <Input
                  text="Email address"
                  name="email"
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
              <button
                disabled={!formValid}
                onClick={() => {
                  dispatch(registration({
                    name: firstName,
                    surname: lastName,
                    email,
                    password,
                  }));
                }}
                type="submit"
                className={s.button}
              >
                Create account

              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
