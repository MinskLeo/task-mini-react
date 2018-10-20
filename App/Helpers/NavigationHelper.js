import createBrowserHistory from 'history/createBrowserHistory';
import Console from 'App/Helpers/ConsoleHelper';

export const navigator = createBrowserHistory();

class NavigationHelper {
  static navigate(route, params?) {
    Console.Info(`Navigating to ${route}`);
    navigator.push(route, {...params});
  }

  static goBack () {
    Console.Info(`Navigating BACK`);
    navigator.goBack();
  }

  static goForward () {
    Console.Info(`Navigating FORWARD`);
    navigator.goForward();
  }

  static navigateReplace (route, params?) {
    Console.Info(`Navigating REPLACE to ${route}`);
    navigator.replace(route,{...params});
  }
}

export default NavigationHelper;
