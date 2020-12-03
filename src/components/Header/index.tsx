import React from 'react';
import SVGIcon from '@src/utils/svg/header/logo.svg';
import Button from '@src/components/Common/Button';
import colors from '@src/utils/colors';
import html2canvas from 'html2canvas';
import { RootState } from '@src/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import saveAsFile from '@src/utils/savefile';
import HeaderTitle from './HeaderTitle';
import * as StyleComponent from './style';

const Header = () => {
  const { mathQuillContainer } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const { mathQuiiFunc } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );
  const onClickImageSaveHandler = async () => {
    const mathquillSection = mathQuillContainer.current;
    const canvas = await html2canvas(mathquillSection);
    const imageUrl = canvas.toDataURL('image/gif');
    const aTag = document.createElement('a');
    document.body.appendChild(aTag);
    aTag.download = '수식 저장.gif';
    aTag.href = imageUrl;
    aTag.click();
    document.body.removeChild(aTag);
  };

  const onClickExportHandler = () => {
    alert('html css가 복사가 완료되었습니다.');
    const input = document.createElement('input');

    const style = window.getComputedStyle(
      document.querySelector('.mq-root-block')
    ) as any;
    input.setAttribute('value', JSON.stringify(style));
    saveAsFile(mathQuiiFunc.html(), 'html.txt');
    saveAsFile(JSON.stringify(style), 'css.txt');
  };
  return (
    <StyleComponent.HeaderContainer>
      <SVGIcon />
      <HeaderTitle />
      <StyleComponent.ButtonContainer>
        <Button
          color={colors.lightGrey}
          value="이미지 저장"
          onClick={onClickImageSaveHandler}
        />
        <Button
          color={colors.lightGrey}
          value="Export"
          onClick={onClickExportHandler}
        />
      </StyleComponent.ButtonContainer>
    </StyleComponent.HeaderContainer>
  );
};

export default Header;
