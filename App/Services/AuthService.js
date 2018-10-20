import ApiHelper from 'App/Helpers/ApiHelper';
import CookiesHelper from 'App/Helpers/CookieHelper';

import {
  SET_TOKEN
} from 'App/Redux/AT'

class AuthService {
  static login (data, dispatch, getState) {

    return ApiHelper.instance('auth/login', {},{...data},ApiHelper.METHOD_POST,{})
    .then(res => ApiHelper.checkStatus(res, dispatch))    
    .then(res => {
      if(res && res.content && res.content.token) {
        console.log('TOKEN: ', res.content.token);
        dispatch({
          type: SET_TOKEN,
          payload: res.content.token
        });
        CookiesHelper.setCookie('token',res.content.token);

        return res;
      } else {
        console.log('Invalid data');
        
        return null;
      }
    })
    .catch(err => {
      console.log('Token ERROR');

      return null;
    });
  }

  static async checkToken (dispatch) {
    const token = CookiesHelper.getCookie('token');
    console.log('Cookies TOKEN: ', token);
    if(token) {
      dispatch({
        type: SET_TOKEN,
        payload: token
      });
      return token;
    }

    return null;
  }
}

export default AuthService;
