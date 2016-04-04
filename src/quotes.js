/*!
 * @author Cauê Alves https://github.com/cauealves
 */

(function(window){
    var Quotes = {
        options: {
            sleep: 2, // seconds
            repeat: false
        },
        phrases: [

        ]
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
        if (typeof phrases !== 'object' || !phrases.length)
            this.error('You should pass a list of valid phrases containing the quotes you want to display!');

        var invalidSelector = (typeof options.selector !== 'string' || !options.selector.length);
        
        if (invalidSelector || null === document.querySelector(options.selector)) 
            this.error('Please, use a valid selector.');
        
        Quotes.phrases = phrases;
        Quotes.options = merge(options, Quotes.options);
    };

    function merge(options, defaults) {
        Object.keys(options).forEach(function(key){
            var value = options[key];
            if (defaults[key])
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