const messages = {
  chant: ["Ohm Mani Padme Hom", "Abracadabra", "In a gada da vida"],
  focus: [
    "Clear Negative Energy",
    "Bannish unhealthy influences",
    "Embrace your power",
  ],
  avoid: ["People with blue shirts", "Pommeranian dogs", "Food with beetroot"],
};

let message = `Your protective chant for this week is: ${
  messages.chant[Math.floor(Math.random() * 3)]
} \n
Your focus should be: ${messages.focus[Math.floor(Math.random() * 3)]} \n
And you should avoid: ${messages.avoid[Math.floor(Math.random() * 3)]}`;
console.log(message);
