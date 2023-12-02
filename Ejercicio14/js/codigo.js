const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const calculator = document.querySelector(".calculator");

const btnNumbers = document.querySelectorAll(".btn-number");

const btnOperators = document.querySelectorAll(".btn-operator");

const btnClear = document.querySelector(".clear");

const btnEqual = document.querySelector(".btn-equal");

buttons.forEach((item) => {
  item.addEventListener("click",() => {

    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Null";   
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }

    let texto = display.textContent;

    texto = texto
      .replaceAll("//", "/")
      .replaceAll("++", "+")
      .replaceAll("--", "-")
      .replaceAll("**", "*")
      .replaceAll("..", ".") 
      .replaceAll("+-", "-")
      .replaceAll("+*", "*")
      .replaceAll("+/", "/")
      .replaceAll("-+", "+")
      .replaceAll("-*", "*")
      .replaceAll("-/", "/")
      .replaceAll("*+", "+")
      .replaceAll("*-", "-")
      .replaceAll("*/", "/")
      .replaceAll("/+", "+")
      .replaceAll("/-", "-")
      .replaceAll("/*", "*")
      .replaceAll(".+", "+")
      .replaceAll(".-", "-")
      .replaceAll(".*", "*")
      .replaceAll("./", "/");

    display.textContent = texto;
  });
});



