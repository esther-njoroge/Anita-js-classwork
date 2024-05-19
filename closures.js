// the inner function has scope called lexical scope
function nums(){
    const a =2;
    console.log({a});
    function add(){
        const b = 3;
        console.log({add: a + b});
    };
    add();
};
nums();