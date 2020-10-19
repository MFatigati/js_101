/*
P
  -i
    a string
  -o
    the string, surrounded by a box
      top and bottom made up of dashes, with plus signs on end
      left and right made up of bar
  -r
    total of three bars on each side
    dash line two lines down
E
  see below
D
  just code logic
A
  get length of string
  create a string, with a plus sign, a dash, then as many dashes as characters in the string, then a plus sign and dash
    store string in variable
  create string, with a bar, dash, as many spaces as characters in string, then space dash
    store string in variable
  create string, with bar, space, string, space bar
  print the strings in order.


*/
function logInBox(str, maxWidth) {
  if (str.length > maxWidth) {
    str = str.slice(0, maxWidth);
  }
  let length = str.length;
  let line1and5 = `+-${"-".repeat(length)}-+`;
  let line2and4 = `| ${" ".repeat(length)} |`;
  let line3 = `| ${str} |`;

  console.log(`${line1and5}
${line2and4}
${line3}
${line2and4}
${line1and5}`);
}


logInBox('To boldly go where no one has gone before.', 5);
logInBox('');

/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
+--+
|  |
|  |
|  |
+--+ */