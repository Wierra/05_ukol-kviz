const question = document.querySelector(".question")

question.textContent =
  "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.";

const answerPrompt = prompt("Odpověď:").toUpperCase()
// odpověď dáváme do kapitálek, abychom mohli sbírat všechny formy odpovědi - bell, Bell i BeLL apod. :-)

const answer = document.querySelector(".answer__text")
answer.textContent = answerPrompt

if (answerPrompt === "BELL") {
  answer.classList.add("answer--correct");
} else {
  answer.classList.add("answer--wrong");
}