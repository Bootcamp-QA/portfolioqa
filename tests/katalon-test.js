var assert = require('assert');

describe('katalon', function () {
  it('should do something', function () {
    browser.url('https://bootcamp-qa.github.io/portfolioqa/');
    $('=Sobre mí').click();
  });
});
