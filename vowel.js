const input = document.querySelector("input");
const start = document.querySelector(".start");
const vowel = document.querySelector(".vowel");
const constant = document.querySelector(".constant");
const reset = document.querySelector(".reset");
let input1 = "";
let vowelCount = 0;
let notVowel = 0;
start.addEventListener("click", () => {
  start.classList.remove("button2");
  start.classList.add("button1");
  input1 = input.value.trim();
  for (let i of input1) {
    if (i.match(/[a-zA-Z]/)) {
      if (
        i === "a" ||
        i === "e" ||
        i === "i" ||
        i === "o" ||
        i === "u" ||
        i === "A" ||
        i === "E" ||
        i === "I" ||
        i === "O" ||
        i === "U"
      ) {
        vowelCount++;
        vowelCount = vowelCount + 0;
      } else {
        notVowel++;
        notVowel = notVowel + 0;
      }
    }
  }
  vowel.innerText = vowelCount;
  constant.innerText = notVowel;

  start.disabled = true;
});

reset.addEventListener("click", () => {
  start.classList.remove("button1");
  start.classList.add("button2");
  start.disabled = false;
  input.value = "";
  vowelCount = 0;
  notVowel = 0;
  vowel.innerText = 0;
  constant.innerText = 0;
});
