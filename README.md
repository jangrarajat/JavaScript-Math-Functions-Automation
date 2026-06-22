# JavaScript Math Functions Automation
JavaScript Math Functions Automation
Yeh project ek chhota sa automation script hai jo JavaScript ke built-in Math functions ko ek array mein store karke unhe loop ke zariye test karta hai.
Math Functions Variants
Niche un sabhi Math functions ki list hai jo is script mein use ho sakte hain:
1. Rounding & Truncating
Math.round: Nearest integer par round karta hai.
Math.ceil: Hamesha upar (next integer) le jata hai.
Math.floor: Hamesha niche (previous integer) le jata hai.
Math.trunc: Decimal part ko hata deta hai.
2. Powers & Roots
Math.pow: Power calculate karta hai (e.g., base^exp).
Math.sqrt: Square root nikalta hai.
Math.cbrt: Cube root nikalta hai.
3. Comparison & Absolute
Math.abs: Negative value ko positive mein badalta hai.
Math.max: Di gayi values mein se maximum value nikalta hai.
Math.min: Di gayi values mein se minimum value nikalta hai.
4. Random & Trigonometry
Math.random: 0 aur 1 ke beech ek random number deta hai.
Math.sign: Number ka sign (+1, -1, 0) batata hai.
Math.sin, Math.cos, Math.tan: Trigonometric values nikalne ke liye.
Code Logic
Array Structure: Functions ko mathfun array mein store kiya gaya hai.
Conditionals: Har function ke arguments (jaise pow ko 2 chahiye, sqrt ko 1) ke hisaab se if-else ka logic lagaya gaya hai.
Fixing Decimals: toFixed(2) ka use karke result ko 2 decimal places tak limit kiya gaya hai.
Notes
toFixed() method sirf numbers par kaam karta hai.

Yeh project ek chhota sa automation script hai jo JavaScript ke built-in `Math` functions ko ek array mein store karke unhe loop ke zariye test karta hai. Isme hum variables (`a`, `b`, `c`, `d`) ka use karke alag-alag math operations perform kar rahe hain.

## Project Overview
Is script ka mukhya uddeshya `Math` functions ko dynamic tareeke se execute karna hai. Kyunki har math function ke arguments alag hote hain (jaise `Math.pow` ko 2 chahiye, `Math.sqrt` ko 1, aur `Math.random` ko 0), isliye humne `if-else` logic ka use kiya hai.

## Code Logic
1. **Array Structure:** Saare math functions ko `mathfun` array mein store kiya gaya hai.
2. **Looping:** `for` loop ka use karke array ke har element ko iterate kiya gaya hai.
3. **Conditionals:**
   - **`Math.pow`:** `a` aur `b` par `power` operation perform karta hai.
   - **`Math.sqrt` / `Math.cbrt`:** `d` par operation perform karke 2 decimal tak fix (`toFixed(2)`) karta hai.
   - **`Math.random`:** 1000 se 10000 ke beech ek random number generate karke `Math.trunc` (array index 3) ka use karta hai.
   - **Default:** Baki sabhi functions (round, ceil, floor, etc.) ko `c` aur `d` arguments ke sath execute kiya jata hai.

## Variables
- `a = 2`, `b = 4`
- `c = 10.9`, `d = 10.4`

## Kaise Chalayein
Is code ko run karne ke liye aapke system mein Node.js hona chahiye:
1. File ko `index.js` ke naam se save karein.
2. Terminal mein `node index.js` type karke enter dabayein.

## Screenshot
[Image of JavaScript array of functions structure]

## Notes
- `toFixed()` method sirf numbers par kaam karta hai, isliye humne ise chain kiya hai.
- `Math.trunc` ko humne random number ke sath use kiya hai taaki output clean integer mile.
