const getInstance = function(selector) {

	const pages = getCurrentPages();
	const ctx = pages[pages.length - 1];
	const component = ctx.selectComponent(selector);

	return component;
}

const Toptips = function (options) {

    const { selector = '#toptips' } = options;

    const ctx = getInstance(selector);

    ctx.show(options);
}

module.exports = {

	Toptips : Toptips

}
