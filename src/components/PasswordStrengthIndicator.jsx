import React from 'react';
import "./resetstyle.css"

const PasswordStrengthIndicator = ({ score,feedback }) => {
  const indicatorClasses = [
    'weak',
    'fair',
    'good',
    'strong',
    'very-strong',
  ];

  const customMessages = [
    'Min of 8 characters required',
    'Atleast one uppercase required',
    'Atleast one number required',
    'Atleast one special character required',
    'Very strong!Your password is secure.',
  ];
  return (
    <div className={`password-strength ${indicatorClasses[score]}`}>
      {customMessages[score]}
    </div>
  );
};

export default PasswordStrengthIndicator;
