function greet(userName, callback){
    console.log(`Hello there ${userName}`);
    callback();
};

function intro(){
    console.log(`This is me`);
};

greet('Helen', intro)

setTimeout(intro, 2000);
// cleartimeout
setInterval(function(){
    console.log('This is an interval');
},3000);