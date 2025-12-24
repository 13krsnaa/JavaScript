//learnt closure with the example

function counter(){
    let count = 0;
    return function(){
        count = count + 1;
        console.log(count);

    
    }
}

const c = counter();
c();
c();
c();
c();
c();

console.log(c);

