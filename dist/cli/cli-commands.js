(function() {
  var bluetooth, cliCommands, connect, scan;

  scan = require('./scan');

  connect = require('./connect-to-serial');

  bluetooth = require('./bluetooth');

  cliCommands = {
    scan: scan,
    connect: {
      toSerial: connect.toSerial
    },
    bluetooth: {
      pair: bluetooth.pair,
      unpair: bluetooth.unpair
    }
  };

  module.exports = cliCommands;

}).call(this);
