import { Types } from "../component/types/Types";
import {
  provider,
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { loginFinish } from "./ui";

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
      dispatch(login(password, email));
      dispatch(loginFinish());
    }, 3500);
  };
};
export const starREgister = (auth, email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        console.log(user);
        dispatch(login(user.uid, user.displayName));
        dispatch(loginFinish());
      }
    );
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
