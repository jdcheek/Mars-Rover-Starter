class Rover {
  // Write code here!
  constructor(position, generatorWatts = 110) {
    this.position = position
    this.mode = 'NORMAL'
    this.generatorWatts = generatorWatts
  }
  receiveMessage(message) {
    let roverStatus = {
      mode: this.mode,
      generatorWatts: this.generatorWatts,
      position: this.position
    }

    let response = {
      message: message.name,
      results: []
    }

    message.commands.map((cmd) => {
      if (cmd.commandType === 'STATUS_CHECK') {
        response.results.push({
          completed: true,
          roverStatus
        })
      } else if (cmd.commandType === 'MODE_CHANGE') {
        roverStatus.mode = cmd.value
        response.results.push({
          completed: true
        })
      } else if (cmd.commandType === 'MOVE') {
        if (roverStatus.mode === 'LOW_POWER') {
          // do not allow movement
        } else {
          response.results.push({
            completed: true
          })
        }
      }
    })

    return response
  }
}

module.exports = Rover;
