window.enableAutolock = function() {
  cordova.exec(
    function() {},
    function() {},
    "NoAutolock",
    "enableAutolock",
    []
  );
};

window.disableAutolock = function() {
  cordova.exec(
    function() {},
    function() {},
    "NoAutolock",
    "disableAutolock",
    []
  );
};