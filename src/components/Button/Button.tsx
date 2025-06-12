import React from 'react';

interface ButtonProps {
  onClick: () => void;
  bgColor?: string;
  customButtonClass?: string;
  text?: string;
}
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="cursor-pointer rounded-full border px-5 py-1" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
