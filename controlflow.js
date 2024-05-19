// // Logical Operators
// let x = 5
// let y = 10
// if(x<0 && x>6){
//     console.log()
// }


// let n = 0
// while (n< 3){
//     n++
// }
// console.log(n)


const numbers =[23,12,5,46,37,14,2,89,55]
function checkArray(numbers){
  let newNumbers = []
    let newmultiply = numbers.slice(0,4);
    let newadd = numbers.slice(-2);
    newmultiply.forEach (x =>{
        console.log(x*x)
        return newmultiply
        // newNumbers.push(newmultiply)
    })
    newadd.forEach(x =>{
        console.log(x+10)
        return newadd
        // newNumbers.push(newadd)
    })

}
checkArray(numbers)







// function addArray(items){
//     let newvalue = items.slice(0,4)
//     let newvalue2 = items.slice(-2)
//     newvalue.forEach (i=>{
//         console.log(i*8)
//     })
//     newvalue2.forEach(i=>{
//         console.log(i +5)
//     })
// }
// addArray([12,5,34,67,28,42,17,4])




// const Numbers = [12,5,34,67,29,98,22,76]
// function checkArray(numbers){
//     numbers.forEach((number, index)=>{
//         if(index <4){
//             numbers[index]=number*8
//         }
//         else if(index>= numbers.length-2){
//             numbers[index]= number+5
//         }
//     })
//     console.log(numbers)

// }
// checkArray(Numbers)










const numbers =[23,12,5,46,37,14,2,89,55]
function checkArray(numbers){
  let newNumbers = []
    let newmultiply = numbers.slice(0,4);
    let newadd = numbers.slice(-2);
    newmultiply.forEach (x =>{
        console.log(x*x)
        return newmultiply

    })
    newadd.forEach(x =>{
        console.log(x+10)
        return newadd

    })

}
checkArray(numbers)