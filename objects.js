const cup = {
    color: 'red',
    shape: 'circular', 
    weight: '50 grams',
    size: 'medium',
    // nested object
    description: {
        drinkType: 'tea',
        temperature: 'hot'
    },

// methods (functions stored in property)
    drink: function(){
    console.log(`Use me to drink`);
    console.log(`The main purpose of this cup is to drink ${this.description.temperature} ${this.description.drinkType}`);
    }

};


console.log({color: cup.color});
console.log('size', cup['size']);
console.log('temparature', cup.description.temperature);


const keys = Object.keys(cup);
console.log({keys});

const values = Object.values(cup);
console.log({values});

Object.keys(cup).forEach(item =>{
    console.log({key: item, values:cup[item]});
})


// adding new properties
cup.material = 'ceramic';
console.log({cup});

// changing a property
cup.color = 'green'
console.log({cup});

// deleting a property
delete cup.material;
console.log({cup});

