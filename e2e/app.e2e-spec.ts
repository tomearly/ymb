import { Ymb2Page } from './app.po';

describe('ymb2 App', function() {
  let page: Ymb2Page;

  beforeEach(() => {
    page = new Ymb2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
