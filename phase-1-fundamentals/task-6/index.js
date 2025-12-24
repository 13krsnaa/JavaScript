//learnt closure with the example

function counter(){
    let count = 0;
    return function(){
        count = count + 1;
        return count;
        console.log(count);

    
    }
}

const c = counter();
console.log(c);

