import { browser, by, element } from 'protractor';

export class AppPage {

  // Navigation
  navigateTo(link: string) {
    return browser.get(link);
  }
  // Display Messages (text)
  getParagraphText(selector: string) {
    return element(by.css(selector)).getText();
  }
  // Select Link (About Us)
  getElement(selector: string) {
    return element(by.css(selector));
  }
  // Check if the link navigated to was the 'About Us' page
  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }


}
