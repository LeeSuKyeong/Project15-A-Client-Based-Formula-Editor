import { createAction, handleActions } from 'redux-actions';

const DROPDOWN_STATE = 'DROPDOWN_STATE' as const;
const CLOSE = 'drawerDropdown/CLOSE';
const LATEX_STATE = 'LATEX_STATE' as const;
const DRAWING_STATE = 'DRAWING_STATE' as const;

// IState를 설정한다.
export interface IState {
  isDropdownShow: boolean;
  isClick: boolean;
  latexContainer: any;
}

export const dropdown = createAction(DROPDOWN_STATE);
export const closeDropdown = createAction(CLOSE);
export const changeLatex = createAction(LATEX_STATE);
export const drawing = createAction(DRAWING_STATE);

// action의 리턴값 설정

// 모듈의 초기 상태를 정의합니다.
const initialState: IState = {
  isDropdownShow: false,
  isClick: false,
  latexContainer: '',
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.
export const drawerDropdownHandler = handleActions(
  {
    [DROPDOWN_STATE]: (state = initialState): IState => {
      return {
        ...state,
        isDropdownShow: true,
      };
    },

    [CLOSE]: (state = initialState) => {
      return { ...state, isDropdownShow: false };
    },

    [LATEX_STATE]: (state = initialState, action: any): IState => {
      return {
        ...state,
        latexContainer: action.payload,
      };
    },
    [DRAWING_STATE]: (state = initialState, action: any): IState => {
      return {
        ...state,
        isClick: !state.isClick,
      };
    },
  },
  initialState
);
