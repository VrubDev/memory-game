const CARDS_DATA = [
  { id: "waffle", name: "Belgian Waffle", img: "./assets/images/waffle.svg" },
  { id: "croissant", name: "Croissant", img: "./assets/images/croissant.svg" },
  { id: "moka", name: "Moka Pot", img: "./assets/images/moka.svg" },
  { id: "frappe", name: "Frappe", img: "./assets/images/frappe.svg" },
  { id: "donut", name: "Donut", img: "./assets/images/donut.svg" },
  { id: "tea", name: "Tea Pot", img: "./assets/images/tea.svg" },
  { id: "macaron", name: "Macarons", img: "./assets/images/macaron.svg" },
  { id: "cup", name: "Coffee Cup", img: "./assets/images/coffeecup.svg" },
];

const header = document.createElement("header");

const newGameBtn = document.createElement("button");
newGameBtn.type = "button";
newGameBtn.classList.add("btn", "new-game-btn");
newGameBtn.textContent = "New game";

const leaderBoardBtn = document.createElement("button");
leaderBoardBtn.type = "button";
leaderBoardBtn.classList.add("btn", "leaderboard-btn");
leaderBoardBtn.textContent = "Leaderboard";

header.append(newGameBtn, leaderBoardBtn);

document.body.append(header);

const main = document.createElement("main");
const title = document.createElement("h1");
title.textContent = "Match Cards!";

const statsContainer = document.createElement("div");
statsContainer.classList.add("game-stats");

const movesBox = document.createElement("div");
movesBox.classList.add("stat-item");
movesBox.textContent = "Moves: ";

const movesCount = document.createElement("span");
movesCount.id = "moves-count";
movesCount.textContent = "0";
movesBox.append(movesCount);

const pairsBox = document.createElement("div");
pairsBox.classList.add("stat-item");
pairsBox.textContent = "Pairs: ";

const pairsCount = document.createElement("span");
pairsCount.id = "pairs-count";
pairsCount.textContent = "0 / 8";
pairsBox.append(pairsCount);

statsContainer.append(movesBox, pairsBox);

const gameBoard = document.createElement("section");
gameBoard.classList.add("game-board");
gameBoard.setAttribute("aria-label", "Game board");

main.append(title, statsContainer, gameBoard);
document.body.append(main);

function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = item.id;

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.name;
  img.classList.add("card-img");

  card.append(img);
  return card;
}

function duplicateCards(cards) {
  return cards.concat(cards);
}

const doubledDeck = duplicateCards(CARDS_DATA);

doubledDeck.forEach((cardItem) => {
  const cardElement = createCard(cardItem);
  gameBoard.append(cardElement);
});
