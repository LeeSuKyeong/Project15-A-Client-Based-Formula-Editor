import React from 'react';
import CheckIcon from '@src/utils/svg/font-check.svg';
import * as S from './style';

interface Props {
  fontSize: number;
  changeFontSize: (size: number) => void;
  selectedFontSize: number;
}

export default function FontContent({
  fontSize,
  changeFontSize,
  selectedFontSize,
}: Props) {
  const onClickHandler = () => {
    changeFontSize(fontSize);
  };

  let isSelected = false;
  if (fontSize === selectedFontSize) {
    isSelected = true;
  }

  return (
    <S.Content onClick={onClickHandler} isSelected={isSelected}>
      <div className="number">{fontSize}</div>
      <CheckIcon />
    </S.Content>
  );
}
