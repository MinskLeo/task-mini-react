import AccountService from 'App/Services/AccountService';

export function getAccountDetails() {
  return (dispatch, getState) => AccountService.getAccountDetails(dispatch, getState);
}
