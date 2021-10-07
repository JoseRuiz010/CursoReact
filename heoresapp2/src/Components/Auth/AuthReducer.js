import { types } from "../type/Type";

/*const state = {
  name: "Jose Ruiz",
  logged: true,
};
*/
export const autReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      //console.log("reducer");
      return {
        ...action.payload,
        logged: true,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
