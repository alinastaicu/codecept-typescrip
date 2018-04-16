import {getUrl} from 'utils/navigation';
import {getBedarfsrechnerPage} from 'bedarfrechner/pages';
import {MaxPecu} from 'personas/max.pecu';

Feature('When I want to know what insurance I need depending on my situation');

Scenario('WHEN I logged in', async (I) => {
  const bedarfsrechnerPage = getBedarfsrechnerPage(I);

  await bedarfsrechnerPage.gotoLoginPage();
  await bedarfsrechnerPage.loginForm(MaxPecu.email, MaxPecu.password);
  await bedarfsrechnerPage.clickSubmitButton();

  await I.amOnPage(getUrl('/user/account.html#c24-kb-ua-activitylist'));
});
