/*!
 * @author Cauê Alves https://github.com/cauealves
 */

(function(window){
    var Quotes = {
        options: {
            sleep: 2, // seconds
            repeat: false,
            selector: '',
        },
        phrases: []
    };

    var prefix = '[Quotes.js]';

    Quotes.error = function error(message) {
        throw new Error(prefix + ': ' + message);
    };

    Quotes.warning = function warning(message) {
        if (console && console.warn) 
            console.warn(prefix + ': ' + message);
    };

    Quotes.start = function(phrases, options) {
        var invalidSelector = (typeof options.selector !== 'string' || !options.selector.length);
        
        if (invalidSelector || null === document.querySelector(options.selector)) 
            this.error('Please, use a valid selector.');

        if (typeof phrases !== 'object' || !phrases.length)
            this.error('You should pass a list of valid phrases containing the quotes you want to display!');

        Quotes.phrases = phrases;
        Quotes.options = merge(options, Quotes.options);

        Quotes.init();

    };

    Quotes.init = function() {
        this.createList();
        this.play();
    };

    Quotes.createList = function() {
        var self = this,
            element = document.querySelector(self.options.selector);

        var listElement = document.createElement('ul');

        element.appendChild(listElement);

        self.phrases.forEach(function(value){
            var li = document.createElement('li');
            li.innerHTML = value;
            li.style.display = 'none';
            element.appendChild(li);
        });
        
        element.firstChild.style.display = 'block';
        element.firstChild.className = 'active';
    };

    Quotes.play = function() {
        var self = this;

        var element = document.querySelector(self.options.selector).querySelector('ul');

        setInterval(function(){
            var active = element.querySelector('.active');

            active.style.display = 'none';
            active.className = '';

            if (null === active.nextSibling)
                next = element.firstChild;
            else
                next = active.nextSibling;

            next.style.display = 'block';
            next.className = 'active';

        }, (this.options.sleep * 1000));
    };

    function merge(options, defaults) {
        Object.keys(options).forEach(function(key){
            var value = options[key];
            if (key in defaults)
                defaults[key] = value;
        });

        return defaults;
    };

    if (typeof window === 'object') {
        window.Quotes = Quotes;
    };
})(function(){
    return this;
}());