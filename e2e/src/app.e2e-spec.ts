import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // 1. Test to display a message
  it('should display message saying Ristorante Con Fusion', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('Ristorante Con Fusion');
  });
  // execute with `ng e2e`

  // 2. Test navigation to About Us Page (Nav Links)
  it('should navigate to about us page by clicking on the link', () => {
    page.navigateTo('/');

    const navlink = page.getAllElements('a').get(1);
    navlink.click();

    expect(page.getParagraphText('h3')).toBe('About Us');
  });


  // 3. Test to enable submission of a form
  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0');

    const newAuthor = page.getElement('input[type=text]');
    newAuthor.sendKeys('Test Author');

    const newComment = page.getElement('textarea');
    newComment.sendKeys('Test Comment');

    const newSubmitButton = page.getElement('button[type=submit]');
    newSubmitButton.click();

    browser.pause();
  });


});
