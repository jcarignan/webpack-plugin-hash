// Written in ES5
'use strict';

function HashWebpackPlugin(options) {
  this.options = options;
};

HashWebpackPlugin.prototype.apply = function (compiler) {
  // See https://webpack.js.org/api/plugins/compiler/#event-hooks  
  const cb = (compilation) => {
	  var hash = compilation.hash;
		if (this.options && typeof(this.options.callback) === 'function') {
		  this.options.callback(null, hash);
		}
  }
  
  if (compiler.hooks) {
	  const plugin = { name: 'HashWebpackPlugin' };
	  compiler.hooks.afterEmit.tap(plugin, cb);
	} else {
	  compiler.plugin('after-emit', cb);
	}
};

module.exports = HashWebpackPlugin;
