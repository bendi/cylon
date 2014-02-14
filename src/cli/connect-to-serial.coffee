require "./process"
os = require 'os'

Connect =
  toSerial = (dev, address, detached = false) ->
    process = new Cylon.Process
    platform = os.platform()

    switch platform
      when 'linux'
        if detached
          process.spawn 'sudo', ['rfcomm', 'connect', dev, address, '1'], { detached: detached }
        else
          process.spawn 'sudo', ['rfcomm', 'connect', dev, address, '1']

      when 'darwin'
        console.log "OS X manages binding itself."

      else
        console.log "OS not yet supported"

module.exports = Connect
