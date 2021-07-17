import { NgHackerNewsPage } from './app.po';

describe('ng-hacker-news App', function() {
  let page: NgHackerNewsPage;

  beforeEach(() => {
    page = new NgHackerNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
