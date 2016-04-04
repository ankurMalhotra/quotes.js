/*!
 * @author Cauê Alves https://github.com/cauealves
 */

(function(window){
    var Quotes = {
        options: {
            sleep: 2, // seconds
            repeat: false
        }
    };

    var prefix = '[Quotes.js]';

    Quotes.error = function error(message) {
        throw new Error(prefix + ': ' + message);
    };

    Quotes.warning = function warning(message) {
        if (console && console.warn) 
            console.warn(prefix + ': ' + message);
    };

    Quotes.start = function(quotes, options) {
        if (typeof quotes !== 'object' || !quotes.length)
            this.error('You must enter a valid object of quotes!');

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