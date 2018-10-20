import {
  SET_TOKEN,
  REMOVE_TOKEN
} from 'App/Redux/AT';
import CookieHelper from 'App/Helpers/CookieHelper';
const token = CookieHelper.getCookie('token');

const initialState = {
  token: token || ''
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    
    case REMOVE_TOKEN:
      CookieHelper.setCookie('token', '');
      return initialState;

    default: return state;
  }
}