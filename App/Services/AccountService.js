import ApiHelper from 'App/Helpers/ApiHelper';

class AccountService {
  static getAccountDetails (dispatch, getState) {
    const token = ApiHelper.getToken(getState);
    console.log('token: ', token);

    if(token) {
      return ApiHelper.instance(`account/profile`,{token},{},ApiHelper.METHOD_GET,{})
      .then(res => ApiHelper.checkStatus(res, dispatch))
      .catch(err => {
        console.log('RESPONSE ERROR getProfile:', err);
        return null;
      });
    }

    return null;
  }
}

export default AccountService;
