// Task 2: Once Function 
//once(fn) higher-order function banao jo koi bhi function le aur aisa naya function return kare jo sirf pehli call pe fn run kare, baad me previous result hi return kare.
function oonce(fn){
    let called = false; // ye track krega ki function call hua hai
    let result; // ye function ka esult store krega
     
     return function(x){ //ye naya function hai jo arguments leta hai
        if (!called){ // agar function pehli baar call ho raha hai
            called = true; //ab function call ho chuka
            result = fn(x);
            return result;
        } else {
            return result;
        }
        return results //ye function ka result return krega
        
        }
        }
             
        
