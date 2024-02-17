const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  test("constructor sets position and default values for mode and generatorWatts", function() {
    let rov = new Rover(98382)
    expect(rov.generatorWatts).toBe(110)
    expect(rov.position).toBe(98382)
  });

  test("response returned by receiveMessage contains the name of the message", function() {
    let cmd = [new Command('STATUS_CHECK')]
    let msg = new Message('Test message', cmd)
    let rov = new Rover(98382)
    let res = rov.receiveMessage(msg)
    expect(res.message).toBe('Test message')
  });

  test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let cmd = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]
    let msg = new Message('Test message with two commands', cmd)
    let rov = new Rover(98382)
    let res = rov.receiveMessage(msg)
    expect(res.results.length).toBe(2)
  });

  test("responds correctly to the status check command", function() {
    let cmd = [new Command('STATUS_CHECK')]
    let msg = new Message('Status check', cmd)
    let rov = new Rover(98382)
    let res = rov.receiveMessage(msg)
    expect(res).toStrictEqual({
      message: 'Status check', results: [
        { completed: true, roverStatus: { mode: 'NORMAL', generatorWatts: 110, position: 98382 } }
      ]
    })
  });
});

