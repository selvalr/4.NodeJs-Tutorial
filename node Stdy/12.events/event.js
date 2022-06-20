var events=require('events');
var EventEmitter=new events.EventEmitter();

var values=function(){
    console.log('hello selva');
    console.log('avr');
}
EventEmitter.on('hello',values);
EventEmitter.emit('hello')