module.exports = {
  tags: ['interval','github-page'],
  'Validate the interval of quotes inside github page' : function (client) {
    client
      .url('http://cauealves.github.io/quotes.js')
      .pause(1000);

    client.expect.element('body').to.be.present;

    client.end();
  }
};