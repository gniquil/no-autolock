window.NoAutolock = {
  enableAutolock: function() {
    cordova.exec(
      function() {},
      function() {},
      "NoAutolock",
      "enableAutolock",
      []
    );
  },
  disableAutolock: function() {
    cordova.exec(
      function() {},
      function() {},
      "NoAutolock",
      "disableAutolock",
      []
    );
  }
};