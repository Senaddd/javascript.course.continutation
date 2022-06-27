function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim(); //trim gets rid of whitespace of the actual content

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error")
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
