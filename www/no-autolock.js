var exec = require('cordova/exec');

var noAutolock = {
  enableAutolock: function() {
    exec(
      function() {},
      function() {},
      "NoAutolock",
      "enableAutolock",
      []
    );
  },
  disableAutolock: function() {
    exec(
      function() {},
      function() {},
      "NoAutolock",
      "disableAutolock",
      []
    );
  }
};

module.exports = noAutolock;