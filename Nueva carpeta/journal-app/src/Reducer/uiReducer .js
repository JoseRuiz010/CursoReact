import { Types } from "../component/types/Types";

const initialState = {
  loading: false,
  msgError: "",
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };

    case Types.uiREmoveError:
      return {
        ...state,
        msgError: null,
      };
    case Types.loginStart:
      return {
        ...state,
        loading: true,
      };
    case Types.loginFinish:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
