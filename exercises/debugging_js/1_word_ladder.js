let ladder = ''; // need semi-colon here, otherwise this line runs together with line 4


['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word;
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail