(function() {
  var Connect, os, toSerial;

  require("./process");

  os = require('os');

  Connect = toSerial = function(dev, address, detached) {
    var platform, process;
    if (detached == null) {
      detached = false;
    }
    process = new Cylon.Process;
    platform = os.platform();
    switch (platform) {
      case 'linux':
        if (detached) {
          return process.spawn('sudo', ['rfcomm', 'connect', dev, address, '1'], {
            detached: detached
          });
        } else {
          return process.spawn('sudo', ['rfcomm', 'connect', dev, address, '1']);
        }
        break;
      case 'darwin':
        return console.log("OS X manages binding itself.");
      default:
        return console.log("OS not yet supported");
    }
  };

  module.exports = Connect;

}).call(this);
