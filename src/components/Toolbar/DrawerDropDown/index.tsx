/* eslint-disable no-useless-return */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import ERASE from '@src/utils/svg/toolbar/erase.svg';
import { RoundButton } from '@src/components/Common/RoundButton/style';
import { dropdown, closeDropdown } from '@src/store/modules/drawerDropdown';
import DRAWER from '@src/utils/svg/toolbar/drawer.svg';
import setColors, { canvasX, canvasY } from '@src/utils/setColor';
import * as StyleComponent from './style';

const Drawer = () => {
  const ref = useRef<HTMLInputElement>();

  const { isDropdownShow } = useSelector(
    (state: RootState) => state.drawerDropdownHandler
  );
  const { isBackgroundDropdownShow } = useSelector(
    (state: RootState) => state.BackgroundDropdownHandler
  );
  const { backgroundCanvas } = useSelector(
    (state: RootState) => state.BackgroundDropdownHandler
  );
  const { completeShow } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const dispatch = useDispatch();
  const color = ['black', 'yellow', 'red', 'green'];
  const [click, setClick] = useState(false);
  const [colorValue, setColor] = useState();

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const canvas = backgroundCanvas.current;
    const contexts = canvas.getContext('2d');

    const [colors, context] = setColors(e.target, contexts);
    if (context.canvas.width !== window.innerWidth) {
      context.canvas.width = window.innerWidth;
      context.canvas.height = window.innerHeight;
    }

    setColor(colors);
  };

  const mouseDownHandler = (e: any) => {
    setClick(true);
    const canvas = backgroundCanvas.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const x = canvasX(e.clientX, canvas);
    const y = canvasY(e.clientY, canvas);
    context.beginPath();
    context.strokeStyle = colorValue;
    context.moveTo(x, y);
  };

  const mouseUpHandler = (e: any) => {
    const canvas = backgroundCanvas.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    setClick(false);
  };
  const mouseMoveHandler = (e: any) => {
    const canvas = backgroundCanvas.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const x = canvasX(e.clientX, canvas);
    const y = canvasY(e.clientY, canvas);
    if (completeShow) return;
    if (click && isDropdownShow) {
      context.lineTo(x, y);
      context.lineWidth = ref.current.value;
      context.stroke();
    }
  };
  useEffect(() => {
    if (
      backgroundCanvas.current === null ||
      backgroundCanvas.current === undefined
    ) {
      return;
    }
    const can = backgroundCanvas.current;
    const ctx = can.getContext('2d');
    ctx.strokeStyle = 'transparent';
  }, [isDropdownShow]);
  const DrawerItem = color.map(
    (value): JSX.Element => {
      return (
        <StyleComponent.DrawerDiv
          key={value.toString()}
          onClick={onClickHandler}
          color={value}
        />
      );
    }
  );

  const onClickDrawerHandler = (background: any) => {
    if (isDropdownShow) {
      dispatch(closeDropdown());
    } else {
      dispatch(dropdown());
    }
  };
  const onClickClearHandler = () => {
    const canvas = backgroundCanvas.current;
    const context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    context.clearRect(0, 0, 300, 300);
  };

  useEffect(() => {
    document.addEventListener('mouseup', mouseUpHandler);
    return () => document.removeEventListener('mouseup', mouseUpHandler);
  }, [mouseUpHandler]);
  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => document.removeEventListener('mousemove', mouseMoveHandler);
  }, [mouseMoveHandler]);
  useEffect(() => {
    document.addEventListener('mousedown', mouseDownHandler);

    return () => {
      document.removeEventListener('mousedown', mouseDownHandler);
    };
  }, [mouseDownHandler]);

  return (
    <div>
      <RoundButton onClick={() => onClickDrawerHandler(backgroundCanvas)}>
        <DRAWER />
      </RoundButton>
      {isDropdownShow && (
        <StyleComponent.DrawerContainer>
          {DrawerItem}
          <RoundButton onClick={onClickClearHandler}>
            <ERASE />
          </RoundButton>
          <input type="range" ref={ref} min="1" max="5" />
        </StyleComponent.DrawerContainer>
      )}
    </div>
  );
};

export default Drawer;
