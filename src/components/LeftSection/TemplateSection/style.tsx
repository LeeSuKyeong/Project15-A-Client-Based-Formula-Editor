import styled from 'styled-components';
import colors from '@src/utils/colors';

export const TemplateSectionContainer = styled.div`
  background-color: ${colors.containerBackground};
  width: 97%;
  height: 25%;
  margin-top: 14px;
  border: 1px solid ${colors.borderGrey};
  overflow: hidden;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80%;
  overflow: auto;
`;
