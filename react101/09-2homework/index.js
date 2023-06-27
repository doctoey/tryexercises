const THBText = require("thai-baht-text"); // for ES5

function convert(input) {
  let money = `${input}`;
  let moneyText = THBText(money);
  return moneyText.replace(/บาทถ้วน$/, "");
}
module.exports = {
  convert
}
