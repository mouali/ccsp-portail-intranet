import { CcspPortailIntranetPage } from './app.po';

describe('ccsp-portail-intranet App', function() {
  let page: CcspPortailIntranetPage;

  beforeEach(() => {
    page = new CcspPortailIntranetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
