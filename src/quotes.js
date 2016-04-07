/*!
 * @author Cauê Alves https://github.com/cauealves
 */

(function(window){
    var Quotes = {
        options: {
            sleep: 4, // seconds
            repeat: false,
            selector: '',
            listType: 'unordered',
            listClass: '',
            listItemClass: '',
            itemActiceClassName: ''
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

    Quotes.listElement = function() {
        switch (this.options.listType) {
            case 'unordered':
                return 'ul';
                break;
            case 'ordered':
                return 'ol';
                break;
            default:
                return 'ol';
                break;
        };
    };

    Quotes.createList = function() {
        var self = this,
            element = document.querySelector(self.options.selector);

        var listElement = document.createElement(Quotes.listElement());

        listElement.className = self.options.listClass;

        element.appendChild(listElement);

        self.phrases.forEach(function(value){
            var li = document.createElement('li');
            li.innerHTML = value;
            li.style.display = 'none';
            li.className = self.options.listItemClass;
            listElement.appendChild(li);
        });
        
        listElement.firstChild.style.display = 'block';
        listElement.firstChild.className += ' ' + self.options.itemActiceClassName + ' active';
    };

    Quotes.play = function() {
        var self = this;

        var listElement = document.querySelector(self.options.selector).querySelector('ul');

        setInterval(function(){
            var active = listElement.querySelector('.active');
            active.style.display = 'none';
            active.className += active.className.replace(' active ' + self.options.itemActiceClassName, '');

            if (null === active.nextSibling)
                next = listElement.firstChild;
            else
                next = active.nextSibling;

            next.style.display = 'block';
            next.className += ' active ' + self.options.itemActiceClassName;

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