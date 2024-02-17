const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  test("constructor sets position and default values for mode and generatorWatts", function() {
    let rov = new Rover(1234)
    expect(rov.generatorWatts).toBe(110)
    expect(rov.position).toBe(1234)
  });

  test("response returned by receiveMessage contains the name of the message", function() {
    let msg = new Message('name of message', ['TEST_COMMAND'])
    let rov = new Rover(1999, 'NORMAL', 110)
    let res = rov.receiveMessage(msg)
    expect(res.message).toBe('name of message')
  });

});

