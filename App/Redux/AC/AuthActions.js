import AuthService from 'App/Services/AuthService';

export function login (data) {
  return (dispatch, getState) => AuthService.login(data, dispatch, getState);
}

export function checkToken () {
  return (dispatch, getState) => AuthService.checkToken(dispatch);
}