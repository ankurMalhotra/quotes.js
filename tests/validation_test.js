describe('DOM Tests', function () {
	var element;
	beforeEach(function(){
		element = document.createElement('html');
		document.body.appendChild(element);
	});
	
	afterEach(function(){
		element.remove();
		element = null;
	})
	
	it('Valid selector', function () {
		var quotes = ["Testing is cool!"];
		element.classList.add('quotes');
		var options = {
			selector: '.quotes'
		};
		expect(function () {
			Quotes.start(quotes, options);
		}).not.toThrowError();
	});

	it('Invalid selector', function () {
	    var quotes = ["Testing is cool!"];

		var options = {
			selector: '.doesNotExist'
		};
		expect(function () {
			Quotes.start(quotes, options);
		}).toThrowError("[Quotes.js]: Please, use a valid selector.");
	});
	
	it('Valid quotes', function () {
		var quotes = ["Testing is cool!"];
		element.classList.add('quotes');
		var options = {
			selector: '.quotes'
		};
		expect(function () {
			Quotes.start(quotes, options);
		}).not.toThrowError();
	});
	
	it('Invalid quotes', function () {
		element.classList.add('quotes');
		var options = {
			selector: '.quotes'
		};
		expect(function () {
			Quotes.start([], options);
		}).toThrowError("[Quotes.js]: You should pass a list of valid phrases containing the quotes you want to display!");
	});
});
