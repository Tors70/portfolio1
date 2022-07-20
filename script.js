const messages = {
  chant: ["Ohm Mani Padme Hom", "Abracadabra", "In a gada da vida"],
  focus: [
    "Clear Negative Energy",
    "Bannish unhealthy influences",
    "Embrace your power",
  ],
  avoid: ["People with blue shirts", "Pommeranian dogs", "Food with beetroot"],
};

const mixedMessages = [
  Math.floor(Math.random() * 3),
  Math.floor(Math.random() * 3),
  Math.floor(Math.random() * 3),
];
let message = `Your protective chant for this week is: ${
  messages.chant[mixedMessages[0]]
} \n
Your focus should be: ${messages.focus[mixedMessages[1]]} \n
And you should avoid: ${messages.avoid[mixedMessages[2]]}`;
console.log(message);
