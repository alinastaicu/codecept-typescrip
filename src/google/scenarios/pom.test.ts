import {googlePage} from 'google/pages';

Feature('WHEN testing google');

Scenario('WHEN I search "check24" with POM', async (I) => {
  const google = googlePage(I);

  await google.gotoSearchPage();
  await google.searchText('check24');

  I.see('CHECK24 - Versicherungen, Kredit, Strom, DSL & Reisen im Vergleich', google.firstResult);
});
