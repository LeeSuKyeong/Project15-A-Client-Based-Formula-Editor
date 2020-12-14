import styled from 'styled-components';
import colors from '@src/utils/colors';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  & svg {
    cursor: pointer;
    margin-left: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  height: 65%;
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  align-items: center;
  justify-content: flex-end;
  background-color: ${colors.white};
`;

export const Title = styled.div`
  font-weight: bold;
  .bigText {
    font-size: 1.3rem;
    margin-bottom: 0.45rem;
  }
  .smallText {
    font-size: 0.87rem;
    color: ${colors.grey};
  }
`;

interface Props {
  saveClick: boolean;
}

export const SaveButtonContainer = styled.div<Props>`
  width: 380px;
  display: ${(props) => (props.saveClick ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-around;
`;

export const MiniButton = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 3px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  outline: none;
  opacity: 0.6;
  background-color: ${colors.grey};
  font-weight: bold;
  cursor: pointer;
  .text1 {
    margin-top: 5px;
    margin-left: 7px;
    margin-right: 7px;
    margin-bottom: 5px;
    color: white;
    font-size: 13px;
    font-weight: bold;
  }
  .text2 {
    margin-bottom: 5px;
    margin-left: 7px;
    margin-right: 7px;
    color: white;
    font-size: 13px;
    font-weight: bold;
  }
  &:hover {
    opacity: 1;
  }
`;
