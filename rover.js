class Rover {
  // Write code here!
  constructor(position, mode, generatorWatts = 110) {
    this.position = position
    this.mode = 'NORMAL'
    this.generatorWatts = generatorWatts
  }
  receiveMessage(message) {
    return {
      message: message.name,
      results: message.commands
    }
  }
}

module.exports = Rover;
