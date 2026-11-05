const cards = document.querySelectorAll(".card");
const total = String(cards.length).padStart(2, "0");

cards.forEach((card, index) => {
  const number = card.querySelector(".card-number");
  if (number) {
    number.textContent = `${String(index + 1).padStart(2, "0")} / ${total}`;
  }

  const button = card.querySelector(".fact-button");
  const fact = card.querySelector(".fun-fact");
  if (!button || !fact) return;

  button.addEventListener("click", () => {
    const isOpen = !fact.hidden;
    fact.hidden = isOpen;
    button.setAttribute("aria-expanded", String(!isOpen));
    button.textContent = isOpen ? "Show fun fact" : "Hide fun fact";
  });
});

const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const countWord = numberWords[cards.length] || String(cards.length);
document.getElementById("team-count").textContent = countWord;
document.getElementById("story-count").textContent = countWord.toLowerCase();
