// set up questions and answers in an array
let questions = [
  {
    title: "Which one is NOT a string in javascript?",
    choices: ['"var sum = function ()"', "'2 * 0'", "234", '"How are you?"'],
    answer: "234",
  },
  {
    title: 'What does "i++" mean?',
    choices: ["i + i", "i = i + 1", "i += 1", "i + i = i"],
    answer: "i = i + 1",
  },
  {
    title: "Which one is NOT a comment in javascript?",
    choices: [
      "// \\This is a comment",
      "\\ //This is a comment",
      "/* This is a comment */",
      "/** This is a comment **/",
    ],
    answer: "\\ //This is a comment",
  },
  {
    title: "Which of these values is NOT considered false?",
    choices: ["0", '"0"', "null", "=="],
    answer: "",
  },
  {
    title: "Which statement correctly stores data into the Web Storage API?",
    choices: [
      'localStorage.getItem("year", "2001");',
      'localStorage.setItem("year", "2002");',
      'getItem.localStorage.("year", "2003");',
      'setItem.localStorage("year", "2004");',
    ],
    answer: 'localStorage.setItem("year", "2002");',
  },
];
