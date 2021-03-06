import React from 'react';
import ToolBar from '@src/components/Toolbar/ToolBar';
import Header from '@src/components/Header';
import LeftSection from '@src/components/LeftSection/LeftSection';
import MainSection from '@src/components/MainSection/MainSection';
import SubSection from '@src/components/SubSection';
import { RootState } from '@src/store/modules';
import { useSelector } from 'react-redux';
import * as StyleComponent from './style';

export const HeaderSection = () => {
  return (
    <StyleComponent.Header>
      <Header />
    </StyleComponent.Header>
  );
};

export const Aside = () => {
  return (
    <StyleComponent.Aside>
      <LeftSection />
    </StyleComponent.Aside>
  );
};

export const Section = () => {
  const { visible } = useSelector((state: RootState) => state.graphReducer);
  return (
    <StyleComponent.Main>
      <ToolBar />
      <StyleComponent.MoveArea>
        <MainSection visible={visible} />
        <SubSection visible={visible} />
      </StyleComponent.MoveArea>
    </StyleComponent.Main>
  );
};
