const resultDisplay = document.getElementById("reuslt");
const possibleChoices = document.querySelectorAll("img");

const choices = ["rock", "paper", "scissors"];
let myChoice;
let randomChoices;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    myChoice = e.target.id;
    document.getElementById("rock").src = "img/" + myChoice + ".png";
    document.getElementById("rock-text").innerHTML = myChoice;
    document.getElementById("paper").style.visibility = "hidden";
    document.getElementById("scissors").style.visibility = "hidden";
    document.getElementById("paper-text").innerHTML = "";

    generateRandomChoice();
    getResult();
  })
);

const generateRandomChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  randomChoices = randomChoice;
  document.getElementById("scissors").style.transform = "rotatey(180deg)";
  document.getElementById("scissors").src = "img/" + randomChoice + ".png";
  document.getElementById("scissors-text").innerHTML = randomChoice;
  document.getElementById("scissors").style.visibility = "visible";
};

const getResult = () => {
  const allResult = ["TIE", "WIN", "LOSE"];
  const choices = ["rock", "paper", "scissors"];

  const choiceIndex = choices.indexOf(myChoice);
  const randomIndex = choices.indexOf(randomChoices);

  const result = (choiceIndex - randomIndex + 3) % 3;
  resultDisplay.innerHTML = "YOU  " + `${allResult[result]}!`;
};
