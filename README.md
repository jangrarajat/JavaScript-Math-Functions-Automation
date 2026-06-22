# JavaScript Math Functions Automation

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
