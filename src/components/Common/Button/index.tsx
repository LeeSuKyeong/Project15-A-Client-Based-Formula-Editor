/* eslint-disable import/extensions */
import React from 'react';
import * as StyleComponent from './style';

interface ButtonProps {
  color: string;
  value: string;
  onClick: () => void;
}

const Button = ({ color, value, onClick }: ButtonProps) => {
  return (
    <StyleComponent.CustomButton color={color} onClick={onClick}>
      {value}
    </StyleComponent.CustomButton>
  );
};
export default Button;
