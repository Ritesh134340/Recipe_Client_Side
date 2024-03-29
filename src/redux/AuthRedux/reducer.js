import * as types from "./actionTypes";
import {
  SaveToLocalStorage,
  GetFromLocalStorage,
} from "../../utils/LocalStorageData";

const token = GetFromLocalStorage("token") || "";
const profile = GetFromLocalStorage("profile") || "";
const role = profile.role || "";

const initialState = {
  loading: false,
  error: false,
  token: token,
  role: role,
  profile: profile,
  resetToken: "",
  passwordToken: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true, error: false };
    case types.LOGIN_SUCCESS:
      if (payload.profile && payload.token) {
        SaveToLocalStorage("profile", payload.profile);
        SaveToLocalStorage("token", payload.token);
      }

      return {
        ...state,
        loading: false,
        error: false,
        role: payload.profile.role,
        token: payload.token,
        profile: payload.profile,
      };

    case types.LOGIN_FAILURE:
      return { ...state, loading: false, error: true };

    case types.SIGNUP_REQUEST:
      return { ...state, loading: true, error: false };
    case types.SIGNUP_SUCCESS:
      if (payload.profile && payload.token) {
        SaveToLocalStorage("profile", payload.profile);
        SaveToLocalStorage("token", payload.token);
      }

      return {
        ...state,
        loading: false,
        error: false,
        role: payload.profile.role,
        token: payload.token,
        profile: payload.profile,
      };
    case types.SIGNUP_FAILURE:
      return { ...state, loading: false, error: true };

    case types.LOGOUT_REQUEST:
      const profile = "";
      const token = "";
      const role = "";
      SaveToLocalStorage("profile", profile);
      SaveToLocalStorage("token", token);
      return { ...state, token: token, role: role, profile: profile };

    case types.GET_PROFILE_REQUEST:
      return { ...state, loading: true, error: false };

    case types.GET_PROFILE_SUCCESS:
      if (payload.profile && payload.token) {
        SaveToLocalStorage("profile", payload.profile);
        SaveToLocalStorage("token", payload.token);
      }

      return {
        ...state,
        loading: false,
        error: false,
        role: payload.profile.role,
        token: payload.token,
        profile: payload.profile,
      };

    case types.GET_PROFILE_FAILURE:
      return { ...state, loading: false, error: true };

    case types.GET_OTP_REQUEST:
      return { ...state, loading: true, error: false };
    case types.GET_OTP_SUCCESS:
      SaveToLocalStorage("resetToken", payload.token);
      return {
        ...state,
        resetToken: payload.token,
        loading: false,
        error: false,
      };
    case types.GET_OTP_FAILURE:
      return { ...state, loading: false, error: true };

    case types.VERIFY_OTP_REQUEST:
      return { ...state, loading: true, error: true };
    case types.VERIFY_OTP_SUCCESS:
      SaveToLocalStorage("passwordToken", payload.passwordToken);
      return {
        ...state,
        passwordToken: payload.passwordToken,
        resetToken: "",
        loading: false,
        error: false,
      };
    case types.VERIFY_OTP_FAILURE:
      return { ...state, loading: false, error: true };

    case types.RESET_PASSWORD_REQUEST:
      return { ...state, loading: true, error: false };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordToken: "",
        resetToken: "",
        loading: false,
        error: false,
      };
    case types.RESET_PASSWORD_FAILURE:
      return { ...state, loading: false, error: true };

    case types.EDIT_PROFILE_REQUEST:
      return { ...state, loading: true, error: false };
    case types.EDIT_PROFILE_SUCCESS:
      if (payload.profile && payload.token) {
        SaveToLocalStorage("profile", payload.profile);
        SaveToLocalStorage("token", payload.token);
      }
      return {
        ...state,
        loading: false,
        error: false,
        role: payload.profile.role,
        token: payload.token,
        profile: payload.profile,
      };
    case types.EDIT_PROFILE_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export { reducer };
