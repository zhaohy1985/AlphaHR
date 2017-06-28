import { AlphaHRPage } from './app.po';

describe('alpha-hr App', () => {
  let page: AlphaHRPage;

  beforeEach(() => {
    page = new AlphaHRPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
