module.exports = {
  tags: ['interval','github-page'],
  'Validate the interval of quotes inside github page' : function (client) {
    client
      .url('http://cauealves.github.io/quotes.js')
      .pause(1000);

    var itemActiveClass = '.list-quotes li.active';

    client.expect.element('.list-quotes').to.be.visible;
    
    client
        .assert
        .containsText(
            itemActiveClass,
            'You never lose a dream. It just incubates as a hobby.'
    ).pause(6000);

    client
        .assert
        .containsText(
            itemActiveClass,
            'Design is not just what it looks like and feels like. Design is how it works.'
    ).pause(6000);

    client
        .assert
        .containsText(
            itemActiveClass,
            'Innovation distinguishes between a leader and a follower.'
    ).pause(6000);
    
    client
        .assert
        .containsText(
            itemActiveClass,
            'Have enough courage to trust love one more time and always one more time.'
    ).pause(6000);

    client.end();
  }
};