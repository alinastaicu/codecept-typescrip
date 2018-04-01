import {googlePage} from 'pageObjects';

Feature('WHEN testing google');

Scenario('WHEN I search "check24"', async (I) => {
  const g = googlePage(I);
  await g.gotoSearchPage();
  await g.searchText('check24');
  I.see('CHECK24 - Versicherungen, Kredit, Strom, DSL & Reisen im Vergleich', g.firstLink);
});
