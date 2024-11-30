//   Assignment 3

let a = 5;

// let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) *  "end";

//     9              "abc"           *         5   NaN            false           *  "end"  NaN
// Output: NaN

let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && "true";

//  10  * 11 = 110        110 || "bar"  // true110    110 &&  'falsetest' // true'falsetest'    'falsetest' ||  0 && "true" // false 0   'falsetest' || 0   // true 'falsetest' 
// Output : 'falsetest';

let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";

//3 + (5 || "start") //true 5  5*4=20  20+3=23 && (3 + "value" // '3value') '3value' * 3 // NaN  NaN + 'result' // 'NaNresult'

// Output: 'NaNreult';

let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;

//   'hello' * (6+1  // 7) 'hello' * 7 // NaN // left hand side false || (5 * "abc" // NaN) NaN*1 //NaN 

// NaN + "xyz" 'NaNxyz' && 0;
// Output: 0;

let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;

//Output: true

let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
          
// 6 + "abc"// '6abc' // true  &&  8+3 // 11 // true
// Output: true;

let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";

// 'foo5' * (6+1 //7) 'foo5'*7  //NaN || 6 + (1+2 //3) 6+3  // true
// Output:true;