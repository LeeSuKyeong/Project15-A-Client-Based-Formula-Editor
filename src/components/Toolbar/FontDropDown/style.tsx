import styled from 'styled-components';
import colors from '@src/utils/colors';

export const DropDownContent = styled.div<{ dropDown: string }>`
  width: 6.25rem;
  border: 1px solid ${colors.borderGrey};
  border-radius: 12px;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.dropDown === 'open' ? 'block' : 'none')};
  position: absolute;
  top: 3.75rem;
`;

export const Content = styled.div<{ isSelected: boolean }>`
  border-radius: 12px;
  display: flex;
  align-items: center;
  .number {
    margin-left: 15px;
    font-size: 13px;
    color: ${(props) => (props.isSelected ? colors.fontGreen : colors.black)};
  }
  svg {
    visibility: ${(props) => (props.isSelected ? 'visible' : 'hidden')};
    margin-left: auto;
    margin-top: 5px;
  }
  &: hover {
    background-color: #f1f1f1;
  }
`;
