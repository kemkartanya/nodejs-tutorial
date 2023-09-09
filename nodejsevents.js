const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
    console.log('Please turn off the motor!');
    setTimeout(() => {
        console.log('Please turn off the motor! Its a gentle reminder');
    }, 3000);
});
myEmitter.emit('event');

console.log('the script is running')
myEmitter.emit('WaterFull');

console.log('the script is still running')