import { EcFrontPage } from './app.po';

describe('ec-front App', () => {
  let page: EcFrontPage;

  beforeEach(() => {
    page = new EcFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
