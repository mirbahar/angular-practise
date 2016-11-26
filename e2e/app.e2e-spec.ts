import { AngularPractisePage } from './app.po';

describe('angular-practise App', function() {
  let page: AngularPractisePage;

  beforeEach(() => {
    page = new AngularPractisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
