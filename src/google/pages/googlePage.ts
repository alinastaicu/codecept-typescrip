export const googlePage = (I: CodeceptJS.I) => {
  return new class GogolePage {
    public firstResult = {css: '.g .r a:first-child'};

    public gotoSearchPage = () => I.amOnPage('https://www.google.de');

    public fillSearchInput = (value: string) => I.fillField('q', value);

    public clickSearchButton = () => I.click('btnK');

    public async searchText(value: string) {
      await this.fillSearchInput(value);
      await this.clickSearchButton();
    }
  }();
};
