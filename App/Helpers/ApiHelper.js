import URL from "url";
import configs from 'App/Configs';

export default class ApiHelper {
  static METHOD_POST = "POST";
  static METHOD_GET = "GET";
  static METHOD_PUT = "PUT";
  static METHOD_DELETE = "DELETE";

  static instance(
    endpointUri: String,
    auth: Object = {},
    params: Object = {},
    method = ApiHelper.METHOD_GET,
    headers: Object = {}
  ) {

    let urlString = `${configs.API_URL}/${endpointUri}`;

    const url = URL.parse(urlString);

    headers = {
      ...headers,
    };

    if (auth && auth.token) {
      headers = {
        ...headers,
        auth: `${auth.token}`
      };
    }

    const fetchParams = {
      method,
      headers
    };

    if (method === ApiHelper.METHOD_GET) {
      url.query = {};
      Object.keys(params).forEach(key => {
        url.query[key] = params[key];
      });
      // console.log('URL', url)
    } else {
      fetchParams.headers = {
        ...headers,
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      params.authority = "MOBILE";

      fetchParams.body = JSON.stringify(params);
    }

    console.log("URL", URL.format(url));
    console.log("fetchParams", fetchParams);

    return fetch(URL.format(url), fetchParams)
    .then(res => res.json())
    .then(res => this.checkStatus(res))
  }

  static checkStatus (response) {
    console.log('STATUS: ', response.status)
    return response;
  }

  static getToken (getState) {
    const state = getState();
    const token = state.auth.token;

    if(token) {
      console.log('STATE TOKEN FOUND: ', token)
      return token;
    }

    return null;
  }
}
