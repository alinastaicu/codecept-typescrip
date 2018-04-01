// tslint:disable no-namespace

type ICodeceptCallback = (i: CodeceptJS.I) => void;

declare const actor: () => CodeceptJS.I;
declare const Feature: (string: string) => void;
declare const Scenario: (string: string, callback: ICodeceptCallback) => void;
declare const Before: (callback: ICodeceptCallback) => void;
declare const BeforeSuite: (callback: ICodeceptCallback) => void;
declare const After: (callback: ICodeceptCallback) => void;
declare const AfterSuite: (callback: ICodeceptCallback) => void;
declare const within: (selector: string, callback: (...params: any[]) => any) => void;

declare namespace CodeceptJS {
  export interface I {
    defineTimeout: (timeouts) => any;
    amOnPage: (amOnPage) => any;
    click: (locator, context?) => any;
    doubleClick: (locator, context?) => any;
    rightClick: (locator) => any;
    fillField: (field, value) => any;
    appendField: (field, value) => any;
    clearField: (field) => any;
    selectOption: (async) => any;
    attachFile: (locator, pathToFile) => any;
    checkOption: (field, context?) => any;
    uncheckOption: (field, context?) => any;
    grabTextFrom: (async) => any;
    grabHTMLFrom: (async) => any;
    grabValueFrom: (async) => any;
    grabCssPropertyFrom: (async) => any;
    grabAttributeFrom: (async) => any;
    seeInTitle: (text) => any;
    seeTitleEquals: (text) => any;
    dontSeeInTitle: (text) => any;
    grabTitle: () => any;
    see: (text, context?) => any;
    seeTextEquals: (text, context?) => any;
    dontSee: (text, context?) => any;
    seeInField: (field, value) => any;
    dontSeeInField: (field, value) => any;
    seeCheckboxIsChecked: (field) => any;
    dontSeeCheckboxIsChecked: (field) => any;
    seeElement: (async) => any;
    dontSeeElement: (async) => any;
    seeElementInDOM: (locator) => any;
    dontSeeElementInDOM: (locator) => any;
    seeInSource: (text) => any;
    grabSource: () => any;
    grabBrowserLogs: (async) => any;
    grabCurrentUrl: () => any;
    grabBrowserUrl: () => any;
    dontSeeInSource: (text) => any;
    seeNumberOfElements: (selector, num) => any;
    seeNumberOfVisibleElements: (locator, num) => any;
    seeCssPropertiesOnElements: (async) => any;
    seeAttributesOnElements: (async) => any;
    grabNumberOfVisibleElements: (async) => any;
    seeInCurrentUrl: (url) => any;
    dontSeeInCurrentUrl: (url) => any;
    seeCurrentUrlEquals: (url) => any;
    dontSeeCurrentUrlEquals: (url) => any;
    executeScript: (executeScript) => any;
    executeAsyncScript: (executeAsyncScript) => any;
    scrollTo: (locator, offsetX?: number, offsetY?: number) => any;
    moveCursorTo: (locator, offsetX?: number, offsetY?: number) => any;
    saveScreenshot: (async) => any;
    setCookie: (cookie) => any;
    clearCookie: (cookie) => any;
    seeCookie: (name) => any;
    dontSeeCookie: (name) => any;
    grabCookie: (name) => any;
    acceptPopup: () => any;
    cancelPopup: () => any;
    seeInPopup: (async) => any;
    grabPopupText: (async) => any;
    pressKey: (key) => any;
    resizeWindow: (async) => any;
    dragAndDrop: (srcElement, destElement) => any;
    closeOtherTabs: (async) => any;
    wait: (sec) => any;
    waitForEnabled: (async) => any;
    waitForElement: (async) => any;
    waitUntilExists: (locator, sec?) => any;
    waitInUrl: (async) => any;
    waitUrlEquals: (async) => any;
    waitForText: (async) => any;
    waitForValue: (async) => any;
    waitForVisible: (async) => any;
    waitNumberOfVisibleElements: (async) => any;
    waitForInvisible: (async) => any;
    waitToHide: (locator, sec?) => any;
    waitForStalenessOf: (locator, sec?) => any;
    waitForDetached: (async) => any;
    waitUntil: (fn, sec?, timeoutMsg?) => any;
    switchTo: (locator) => any;
    switchToNextTab: (num?: number, sec?) => any;
    switchToPreviousTab: (num?: number, sec?) => any;
    closeCurrentTab: () => any;
    openNewTab: () => any;
    grabNumberOfOpenTabs: () => any;
    refreshPage: () => any;
    scrollPageToTop: () => any;
    scrollPageToBottom: () => any;
    grabPageScrollPosition: () => any;
    runOnIOS: (caps, fn) => any;
    runOnAndroid: (caps, fn) => any;
    runInWeb: (fn) => any;
    debug: (msg) => any;
    debugSection: (section, msg) => any;
    say: (msg) => any;
    retry: (callback: (...params: any[]) => any) => any;
  }
}

declare module "codeceptjs" {
    export = CodeceptJS;
}
