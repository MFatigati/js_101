const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  for (let reserved = 0; reserved < RESERVED_KEYWORDS.length; reserved += 1) {
    if (name === RESERVED_KEYWORDS[reserved]) {
      return true;
    }
  }
  return false;
}

// needed to modify the loop, because return does not exist a forEach

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true
console.log(isReserved('while')); // should be: true