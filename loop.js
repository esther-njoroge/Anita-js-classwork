// for loop
const multiply = (numbers)=>{
    let newArray =[];

    for(let i = 0; i<numbers.length ; i++){
        const multiplyByTwo = numbers[i]*2;
        newArray.push(multiplyByTwo)
    }
    return newArray;
};
console.log(multiply([2,3,4,6,7]));

const totalSum = (arrayNums) =>{
    let sum = 0 ;
    for(let num of arrayNums){
        sum +=num
    }
    return sum;
}
console.log(totalSum([3,4,6,7,,8,9]))
const leg = true;
const kickBall = (leg) =>{
    while(leg){
        console.log('Kick the ball');
        break;
    }
}
kickBall(leg)

const checkLeg = (leg) =>{
    do{
        console.log("You have a leg: kick the ball");
        break;
    }
    while(leg)
}
// switch - checks for one condition
