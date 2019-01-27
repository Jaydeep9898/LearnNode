var events = require('events');
var eventemitter = new events.EventEmitter();

function eventHandler(){
     console.log("Event Handled");
     eventemitter.emit("eventName");
}

eventemitter.on('eventHandled', eventHandler);

eventemitter.on('eventName', function(){
    console.log("OK");
});

eventemitter.emit('eventHandled');

//listener #1
var listener1 = function listener1(){
    console.log('listner1 executed.');
}

//listener #2
var listener2 = function listener2(){
    console.log('listner2 executed.');
}

eventemitter.addListener('connection', listener1);

eventemitter.addListener('connection', listener2);

var eventListenerCount = require('events').EventEmitter.listenerCount(eventemitter,'connection');
console.log(eventListenerCount + " Listner(s) listening to connection event");

eventemitter.emit('connection');

eventemitter.removeListener('connection', listener1);
console.log("listner1 will not listen now");

eventemitter.emit('connection');

eventListenerCount = require('events').EventEmitter.listenerCount(eventemitter,'connection');

console.log(eventListenerCount + " Listner(s) listening to connection event");

console.log('Programm Ended.');