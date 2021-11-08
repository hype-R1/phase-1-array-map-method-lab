const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (placeHolder) => {
  //name the function place input for placeholder of array 
  return tutorials.map( str => {
    // returns the array map method to put the str in new array 
    const tokens = str.split(` `);
    // tokens are the indv words int he str we are spliting each one with a spacee
    const capTokens = tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
    //these will be the returnd cap strings
           //map the tokens and cap each one stop it at the second indec of the word 
    const response = capTokens.join(` `);
    //response is the words cap we have to join them back 
    return response;
  });
}

