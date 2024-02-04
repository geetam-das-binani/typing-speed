// const main = document.querySelector(".main");
// let count = 1;
// let wordsToShow = "I am a Web Developer";

// const typeWriter = () => {
//   const letterToShow = wordsToShow.slice(0, count);
//   main.innerText = letterToShow;
//   count === wordsToShow.length ? (count = 0) : count++;
//   setTimeout(typeWriter, 200);
// };

// typeWriter();

// (actualWords/totalTimeTaken)*60
const random_sentences = [
  "The curious cat leaped over the fence effortlessly.",
  "Rusty keys jingled in his pocket as he approached the ancient door.",
  "Bright stars twinkled in the night sky above the tranquil lake.",
  "A sudden gust of wind scattered colorful leaves across the park.",
  "The old bookshelf creaked as she reached for a dusty tome.",
  "Laughter echoed through the cozy room, filled with warmth and joy.",
  "The aroma of freshly baked bread wafted through the bustling bakery.",
  "Hikers marveled at the breathtaking view from the mountain's peak.",
  "Mysterious footsteps echoed in the empty hallway, creating an eerie atmosphere.",
  "Waves crashed against the rocky shore as the storm approached.",
];

const typing_ground = document.querySelector("#textarea");
const btn = document.querySelector("#btn");
const score = document.querySelector("#score");
const show_sentence = document.querySelector("#showSentence");
let startTime, endTime, totalTimeTaken;

const startTyping = () => {
  show_sentence.innerHTML =
    random_sentences[Math.floor(Math.random() * random_sentences.length)];
  startTime = new Date().getTime();
  btn.innerText = "Done";
};
const endTyping = () => {
  endTime = new Date().getTime();
  btn.innerText = "Start";
  endTime = new Date().getTime();
  totalTimeTaken = (endTime - startTime) / 1000;
  calculateTypingSpeed(totalTimeTaken);
  show_sentence.innerHTML = "";
  typing_ground.value = "";
};
btn.addEventListener("click", () => {
  switch (btn.innerText.toLowerCase()) {
    case "start":
      typing_ground.removeAttribute("disabled");
      typing_ground.focus();
      startTyping();
      break;

    case "done":
      typing_ground.setAttribute("disabled", "true");
      endTyping();
      break;
  }
});
function calculateTypingSpeed(timeTaken) {
  const totalWords = typing_ground.value.trim();
  const actualWords = !totalWords ? 0 : totalWords.split(" ").length;

  if (actualWords) {
    let typingSpeed = (actualWords / timeTaken) * 60;
    typingSpeed = Math.round(typingSpeed);
    score.innerHTML = `Your typing speed is ${typingSpeed} words per minute & you wrote ${actualWords} words & time taken ${timeTaken}sec`;
  } else {
    score.innerHTML = `Your typing speed is 0 words per minute & time taken ${timeTaken}sec`;
  }
}
