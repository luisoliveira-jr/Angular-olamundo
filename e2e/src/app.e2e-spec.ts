import { OlaMundoPage } from './app.po';

describe('olamundo App', () => {
  let page: OlaMundoPage;

  beforeEach(() => {
    page = new OlaMundoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Olá Mundo!');
  });
});
