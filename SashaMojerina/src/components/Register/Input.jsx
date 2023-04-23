import React, { useRef, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './Input.module.css';

function Input({
  text, name, blurHandler, dirty, err, value, onChange,
}) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const handleFocus = () => setFocused(true);
  const handleParagraphClick = () => {
    inputRef.current.focus();
  };
  const handleBlur = (e) => {
    setFocused(value !== '');
    blurHandler(e);
  };

  return (
    <div className={s.formContainer}>
      <div className={s.formItem}>
        <p
          onClick={handleParagraphClick}
          className={`${(focused || value !== '') ? s.formLabelActive : s.formLabel}`}
        >
          {text}

        </p>
        <input
          ref={inputRef}
          type="email"
          name={name}
          id="email"
          className={(dirty && err) ? `${s.formStyleErr}` : `${s.formStyle}`}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {(dirty && err) && (
      <div className={s.errContainer}>
        <div className={s.errBody}>
          <span className={s.errBlock}>
            <span className={s.errFlex}>
              <FontAwesomeIcon className={s.errIcon} icon={faXmark} />
              <span className={s.errTextBlock}>{err}</span>
            </span>
          </span>
        </div>
      </div>
      )}
    </div>
  );
}

export default Input;
