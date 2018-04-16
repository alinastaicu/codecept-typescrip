import {getUrl} from 'utils/navigation';

export const getBedarfsrechnerPage = (I: CodeceptJS.I) => {
  return new class BedarfsrechnerPage {
    public email = {css: '#email'};
    public password = {css: '#password'};
    public submitButton = {css: '#c24-kb-register-btn'};

    public gotoLoginPage = () => I.amOnPage(getUrl('/user/account.html?o=activitylist'));

    public clickSubmitButton = () => I.click(this.submitButton);

    public loginForm = async (username: string, password: string) => {
      await I.fillField(this.email, username);
      await I.fillField(this.password, password);
    }
  }();
};
