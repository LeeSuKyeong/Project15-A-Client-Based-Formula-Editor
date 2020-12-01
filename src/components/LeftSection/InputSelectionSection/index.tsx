import React from 'react';
import Title from '@src/components/Common/Title';
import InputTopSelectionSection from '@src/components/LeftSection/InputSelectionSection/InputTopSelectionSection';
import InputBottomSelectionSection from '@src/components/LeftSection/InputSelectionSection/InputBottomSelectionSection';
import * as StyledComponent from './style';
import { Box } from './Box';

const InputSelectionSectionContainer = () => {
  return (
    <>
      <StyledComponent.InputSectionContainer>
        <Title title="입력 선택" />
        {/* <Box name="Glass" latex="\frac{ }{ }" /> */}
        <InputTopSelectionSection />
        <InputBottomSelectionSection />
      </StyledComponent.InputSectionContainer>
    </>
  );
};
export default InputSelectionSectionContainer;
