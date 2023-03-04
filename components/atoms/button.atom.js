import React from 'react';

const Button = ({ value, className, onClick, disabled, ...rest }) => {
  return (
    <>
      <button
        type='submit'
        className={className}
        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
