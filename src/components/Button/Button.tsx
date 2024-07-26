import React from 'react';

type ButtonProps = {
  onClick: () => void;
  bgColor?: string;
  customButtonClass?: string;
  text?: string;
};
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
