'use strict';

module.exports = function (t, a) {
	var o = {};
	t = t.call;
	t(o, {a: 2}, 'a');
	a.equal(o.a, 2);
};
