const personAge = (age) => {
    if (age >= 18){
        console.log("You are an adult");
    }
    else if (age > 13 && age < 18){
        console.log("You are a teenager");
    }
    else{
        console.log("You are a child");
    }
};
personAge(12)

const greeting = (daysOfTheWeek) => {
    switch (daysOfTheWeek) {
        case "Monday":
            console.log("Hello Monday");
            break;

        case "Tuesday":
            console.log("Hello Tuesday");
            break;

        case "Wednesday":
            console.log("Hello Wednesday");
            break;

        case "Thursday":
            console.log("Hello Thursday");
            break;

        case "Friday":
            console.log("Hello Friday");
            break;

        case "Saturday":
            console.log("Hello Saturday");
            break;

        case "Sunday":
            console.log("Hello Sunday");
            break;
        default:
            console.log("Invalid day of the week");

    }
};
greeting("Wednesday")