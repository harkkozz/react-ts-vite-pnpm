import React from 'react';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: (bgColor: string) => ({
    cursor: 'pointer',
    display: 'flex',
    width: '5.625rem',
    border: '1px solid #000',
    borderRadius: '0.3125rem',
    padding: '0.625rem',
    margin: '0.625rem auto',
    backgroundColor: bgColor,
    fontSize: '0.875rem',
  }),
});

type ButtonProps = {
  onClick: () => void;
  bgColor?: string;
  customButtonClass?: string;
  text?: string;
};
const Button: React.FC<ButtonProps> = ({ bgColor, text, onClick }) => {
  return (
    <button {...stylex.props(styles.button(bgColor))} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
