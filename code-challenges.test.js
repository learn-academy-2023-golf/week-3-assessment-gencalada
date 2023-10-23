// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

function generatedFibSequence(length) {//length is the parameter
  
  const fibArr = [1, 0] //This is the first two numbers on the fib sequence (kept forgetting how to type fibonacci)
  
  for (let i=2; i < length; i++ ){//using length, it will iterate through to the given lenth in the examples

fibArr.push(fibArr[i - 1] + fibArr[i - 2]);//similar to equation i had below, 2 will be placed into i and then push the new values to the end of the array.

}

  return length < 2 ? [] : length === 2 ? [0, 1] : fibArr;//i am confused about this section of the answer.
}



// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

////// Pseudo code:
////// create a const with the first two values of the fib sequence.
////// do some research on the math it takes to create a pattern to iterate through and create a new array.
////// something i found was using n-1 for the first variable and n-2 for the second
//////

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

function sortObjectValues(obj) {
  const values = Object.values(obj);
  values.sort((a, b) => a - b); // Sort the values in ascending order
  return values;
}

const sortedValues = sortObjectValues(studyMinutesWeek1);

console.log(sortedValues)

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}

const sortedValues = sortObjectValues(studyMinutesWeek1);

expect(sortedValues).toEqual([15, 15, 20, 30, 30, 60, 90]);

// Test case for the provided object


// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

test('Sort studyMinutesWeek2 values in ascending order', () => {
  expect(sortedValues).toEqual([10, 15, 20, 45, 60, 65, 100]);
});

// Pseudo code:
//using chatGPT i asked it to create the functions above to solve the prompt and given variables.
//for the prompt, it looks like Object.value gives us the values of theobject into an array.
//sorts the values in acending order (pseudo code was already given by chatGPT for that line)
//then simply returns those values still in an array.
//