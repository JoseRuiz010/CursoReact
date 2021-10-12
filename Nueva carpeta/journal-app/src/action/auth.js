import { Types } from "../component/types/Types";
import { provider, auth } from "../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";

export const login = (uid, displayName) => ({
  type: Types.login,
  payload: {
    uid,
    displayName,
  },
});

export const starLogin = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(1234, "Pedro"));
    }, 3500);
  };
};

export const googleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
      console.log(user.uid, " ", user.displayName);
    });
  };
};
