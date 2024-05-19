// they take in a call back function which takes in two call back functions as arguments
// 3parts
const internship = true;

const ourPromise = new Promise((resolve, reject)=>{
    if (internship){
        resolve('I made it');
    }
    else{
        reject('I will not give up')
    }
});
ourPromise.then(()=>{
    // ourPromise.then((response)=>{      ----> when up there its false   (then console)
    console.log('I will get confirmed')
})
.catch(()=>{
    // .catch((error)=>{  ----->   when you want to see the error (then console)
    console.log('I will continue applying');
})
.finally(()=>{
    console.log('I will be a software engineer');
})

// console.log({ourPromise})


// chaining - help us solve for errors even if  u turn to false
// .then
// .catch
// .finally

// async
// try and catch to handle errors
async function myAkiraChixDream(){
    try{
        await ourPromise;

    }
    catch{
        console.log('I will get a job one day');
    }
   
}
myAkiraChixDream();
console.log({ourPromise})