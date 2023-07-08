import React from 'react';

import s from './index.module.scss';

const ErrorMessage = ({children, onClick, ...props}) => {
  return (
    <div {...props} className={s['error-message']} onClick={onClick}>
      {children}
    </div>
  );
};

export default ErrorMessage;
