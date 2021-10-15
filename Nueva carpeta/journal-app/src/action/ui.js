import { Types } from "../component/types/Types";

export const setError = (err) => ({
  type: Types.uiSetError,
  payload: err,
});
export const removeError = (err) => ({
  type: Types.uiREmoveError,
});
export const loginStart = () => ({
  type: Types.loginStart,
});
export const loginFinish = () => ({
  type: Types.loginFinish,
});
