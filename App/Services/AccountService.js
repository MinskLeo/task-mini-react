import ApiHelper from 'App/Helpers/ApiHelper';

class AccountService {
  static getAccountDetails (dispatch, getState) {
    const token = ApiHelper.getToken(getState);

    if(token) {
      return ApiHelper.instance(`account`,{token},{},ApiHelper.METHOD_GET,{})
      .then(res => {
        console.log('RESPONSE getProifle: ', res);
      })
      .catch(err => {
        console.log('RESPONSE ERROR getProfile:', err);
      })
    }
  }
}

export default AccountService;
