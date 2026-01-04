// createRangeIterator function
function createRangeIterator(start, end) {

  // current value ko yaad rakhne ke liye variable
  let current = start;

  // iterator object return hota hai
  return {
    next: function () {

      // jab tak current end se chhota ya equal hai
      if (current <= end) {

        // pehle value return karo, phir current ++
        return {
          value: current++,
          done: false
        };

      } else {
        // jab range khatam ho jaye
        return {
          value: undefined,
          done: true
        };
      }
    }
  };
}

/* ===== USE OF ITERATOR ===== */

// iterator banao (1 se 5 tak)
const iterator = createRangeIterator(1, 5);

// pehla next call
let result = iterator.next();

// jab tak done false hai, tab tak loop chale
while (!result.done) {
  console.log(result.value);   // value print
  result = iterator.next();   // next value lo
}