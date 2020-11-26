/* 
Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and MOD).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively. 

split input str into arr
iterate over each item in the array
  execute each command one at a time

*/


function minilang(commandStr) {
  let stack = [];
  let register = 0;
  let commands = commandStr.split(" ");
  for (let i = 0; i < commands.length; i++) {
    // execute(commands[i], stack, register);
    // using this function doesn't work, because it makes stack and register local variables and they are updated with the global value each time
    // instead, you would need to get rid of the parameters, and actually update the global variable each time, but that is considered bad practice
    switch (commands[i]) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        if (stack === []) {return "Error: empty stack"};
        register += stack.pop();
        break;
      case "SUB":
        if (stack === []) {return "Error: empty stack"};
        register -= stack.pop();
        break;
      case "MULT":
        register *= stack.pop();
        if (stack === []) {return "Error: empty stack"};
        break;
      case "DIV":
        if (stack === []) {return "Error: empty stack"};
        register = Math.round(register/stack.pop());
        break;
      case "MOD":
        if (stack === []) {return "Error: empty stack"};
        register = Math.round(register % stack.pop());
        break;
      case "POP":
        if (stack === []) {return "Error: empty stack"};
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(commands[i]);
        if (Number.isNaN(register)) {return "Not a valid token"};      
    }  
  }
  return undefined;
}

/* function execute(command, stack, register) {
  switch (command) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        register += stack.pop();
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "DIV":
        register = Math.round(register/stack.pop());
        break;
      case "MOD":
        register = Math.round(register % stack.pop());
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(command);     
    }  
} */

console.log(minilang('PRIT')); // changed to invalid token
// 0

console.log(minilang('5 PUSH 3 MULT PINT')); // changed to invalid token
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)