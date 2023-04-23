import React from 'react';
import s from './Register.module.css';
import Form from '../components/Register/Form';

function Register() {
  return (
    <main className={s.main}>
      <div className={s.headerContainer}>
        <h1 className={s.headerText}>Створити аккаунт</h1>
        <h2 className={s.contentHeaderText}>НАГОРОДИ MOZZERINA®</h2>
        <p className={s.contentText}>
          Приєднуйтесь до програми Starbucks Rewards,
          щоб отримати зірки за безкоштовну їжу та напої будь-яким способом.
          Отримайте доступ до мобільного замовлення, винагороди на день народження та більше
        </p>
      </div>
      <Form />
    </main>
  );
}

export default Register;
