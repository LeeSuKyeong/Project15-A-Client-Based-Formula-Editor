import styled from 'styled-components';
import colors from '@src/utils/colors';

export const MathSectionContainer = styled.div`
  background-color: ${colors.containerBackground};
  width: 97%;
  height: 25%;
  margin-top: 14px;
  border: 1px solid ${colors.borderGrey};
  overflow: hidden;
`;
export const ButtonContainer = styled.div`
  display: flex;
  height: 80%;
  flex-wrap: wrap;
  overflow: auto;
`;
