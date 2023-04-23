import React from 'react';
import s from './Login.module.css';
import Form from '../components/Login/Form';

function Login() {
  return (
    <main className={s.main}>
      <div className={s.headerContainer}>
        <h1 className={s.headerText}>Увійдіть або створіть обліковий запис</h1>
      </div>
      <Form />
    </main>
  );
}

export default Login;
