Feature('WHEN testing google');

Scenario('WHEN I search "check24" with POM', async (I) => {
  I.amOnPage('https://www.google.de');
  I.fillField('q', 'check24');
  I.click('btnK');
  I.see('CHECK24 - Versicherungen, Kredit, Strom, DSL & Reisen im Vergleich', '.g .r a:first-child');
});
