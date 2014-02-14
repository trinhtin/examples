exports.install = function(framework) {
	framework.route('/', view);
	framework.route('/json/', json);
	framework.route('/plain/', plain);
};

function view() {

	var self = this;
	self.repository.ticks = new Date().getTime();

	// Save a rendered HTML into the cache (only the view - without layout, layout is not cached)
	// Documentation: http://docs.totaljs.com/FrameworkController/#controller.memorize
	// Memorize uses standard internal FrameworkCache
	self.memorize('view', new Date().add('minute', 2), function() {
		self.view('homepage', self.repository.ticks);
	});

}

function json() {

	var self = this;

	// Save a generated JSON into the cache
	// Documentation: http://docs.totaljs.com/FrameworkController/#controller.memorize
	// Memorize uses standard internal FrameworkCache
	self.memorize('json', new Date().add('minute', 2), function() {
		self.json({ ticks: new Date().getTime() });
	});
}

function plain() {

	var self = this;

	// Save a output into the cache
	// Documentation: http://docs.totaljs.com/FrameworkController/#controller.memorize
	// Memorize uses standard internal FrameworkCache
	self.memorize('plain', new Date().add('minute', 2), function() {
		self.plain('ticks: ' + new Date().getTime());
	});
}