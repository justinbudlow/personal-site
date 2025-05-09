const userName = 'Fred';
const isDarkMode = true;
let dayTime = 'morning';

if (isDarkMode) {
  console.log(`Hello ${userName}, dark mode is on!`);
} else {
  console.log(`Hello ${userName}, light mode is better today.`);
}

function greet(userName) {
    return `Hello, ${userName}! Nice to see you.`;
  }
  
  const greetArrow = (userName) => `Hey, ${userName}. You're doing great!`;
  
  console.log(greet(userName));
  console.log(greetArrow(userName));

  const greetWithTime = (name, timeOfDay) => {
    return `Good ${timeOfDay}, ${name}!`;
  };
  
  console.log(greetWithTime(userName, dayTime));