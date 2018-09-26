// Written in ES5
'use strict';

function HashWebpackPlugin(options) {
  this.options = options;
};

HashWebpackPlugin.prototype.apply = function (compiler) {
  // See https://webpack.js.org/api/plugins/compiler/#event-hooks
  compiler.hooks.afterEmit((compilation) => {
    var hash = compilation.hash;
    if (this.options && typeof(this.options.callback) === 'function') {
      this.options.callback(null, hash);
    }
  });
};

module.exports = HashWebpackPlugin;
