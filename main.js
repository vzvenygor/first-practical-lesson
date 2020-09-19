// 1. Write a JavaScript program which compute, the average marks of the following students 
// Then, this average is used to determine the corresponding grade

let students = [['John', 80], ['Bill', 77], ['David', 68], ['Ryan', 88], ['Nick', 95]];
let averageMark = 0;

for (i = 0; i < students.length; i++) {
  averageMark += students[i][1];
  averageValue = (averageMark / students.length);
}
console.log(`Average grade is ${averageValue}`);

if (averageValue < 60){
  console.log("Grade : F");      
  } else if (averageValue < 70) {
      console.log("Grade : D"); 
    } else if (averageValue < 80) {
        console.log("Grade : C"); 
      } else if (averageValue < 90) {
          console.log("Grade : B"); 
        } else if (averageValue < 100) {
            console.log("Grade : A"); 
          }

// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000

let sum = 0;

for (j = 0; j < 1000; j++) {
  if (j % 3 === 0 || j % 5 === 0) {
    sum += j;
  }
}
console.log(sum);

// 3. Write a JavaScript program to construct the following pattern, using a nested for loop.

for (x = 1; x <= 5; x++) {
  for (y = 1; y <= x; y++) {
    console.log('*'.repeat(x, y));
  }
}
