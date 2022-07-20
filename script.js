function generateRnd(num) {
  let rnd = Math.floor(Math.random() * num);
  return rnd;
}
const messages = {
  chant: ["Ohm Mani Padme Hom", "Abracadabra", "In a gada da vida"],
  focus: [
    "Clear Negative Energy",
    "Bannish unhealthy influences",
    "Embrace your power",
  ],
  avoid: ["People with blue shirts", "Pommeranian dogs", "Food with beetroot"],
};

let finalMessage = [];

for (let prop in messages) {
  let num = generateRnd(messages[prop].length);
  switch (prop) {
    case "chant":
      finalMessage.push(
        `Your protective chant for this week is: ${messages[prop][num]}`
      );
      break;
    case "focus":
      finalMessage.push(`Your focus should be: ${messages[prop][num]}`);
      break;
    case "avoid":
      finalMessage.push(`And you should avoid: ${messages[prop][num]}`);
      break;
    case "default":
      finalMessage.push(`There is not enough info!`);
  }
}

function generateMsg() {
  console.log(finalMessage.join("\n"));
}
generateMsg();
