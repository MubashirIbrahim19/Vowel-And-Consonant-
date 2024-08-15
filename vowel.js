const input = document.querySelector("input");
const button = document.querySelector(".button");
const vowel = document.querySelector(".vowel");
const constant = document.querySelector(".constant");
const reset = document.querySelector(".reset");
let input1 = "";
let vowelCount = 0;
let notVowel = 0;
button.addEventListener("click", () => {
  button.classList.remove("button2");
  button.classList.add("button1");
  input1 = input.value;
  for (let i of input1) {
    console.log(i);
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      ++vowelCount;
      vowelCount = vowelCount + 0;
    } else {
      ++notVowel;
      notVowel = notVowel + 0;
    }
  }
  vowel.innerText = vowelCount;
  constant.innerText = notVowel;
  console.log("sum of vowel =", vowel.innerText);
  console.log("sum of not vowel =", constant.innerText);
  button.disabled = true;
  // console.log(input1);
  console.log(button);
});

reset.addEventListener("click", () => {
  button.classList.remove("button1");
  button.classList.add("button2");
  button.disabled = false;
  input.value = "";
  vowelCount = 0;
  notVowel = 0;
  vowel.innerText = 0;
  constant.innerText = 0;
  console.log(button);
});
