// Collasso delle section
const btnHideList = document.querySelectorAll(".button-hide");
btnHideList.forEach((element) => {
  element.addEventListener("click", () => {
    const target = document.querySelector(
      element.getAttribute("button-target"),
    );
    target.classList.toggle("collapse");

    const arrowElement = document.querySelector("#" + element.id + " i");
    arrowElement.classList.toggle("fa-chevron-down");
    arrowElement.classList.toggle("fa-chevron-up");
  });
});

// Contatore delle card
window.addEventListener("load", () => {
  const cardTitleList = document.querySelectorAll(".card-title");
  let counter = 0;
  cardTitleList.forEach((element) => {
    counter++;
    let oldText = element.textContent;
    let newText = `${counter}.  ${oldText}`;
    element.textContent = newText;
  });
});

// Modal autofocus
const myModal = document.getElementById("myModal");
const emailInput = document.getElementById("my-email");

myModal.addEventListener("shown.bs.modal", () => {
  emailInput.focus();
});

// Send message alert
const btnMessage = document.querySelector(".message-btn");
btnMessage.addEventListener("click", () => {
  const messageText = document.querySelector("#message-text").value;
  const myEmail = emailInput.value;
  let alertText = "";
  if (!messageText && !myEmail) {
    alertText = "Riempi tutti i campi!";
  } else if (!messageText) {
    alertText = "Inserisci il messaggio!";
  } else if (!myEmail) {
    alertText = "Inserisci la mail!";
  } else {
    alertText = "Messaggio inviato!";
  }
  alert(alertText);
});

// Bottone per far sparire tutte le card
let cardsHided = false;
const hideCards = document.querySelector(".hide-cards");
const dailyOfferImg = document.querySelector("#dailyOffer img");
hideCards.addEventListener("click", () => {
  const cardsList = document.querySelectorAll(".card");
  cardsList.forEach((element) => {
    element.classList.toggle("d-none");
  });

  dailyOfferImg.classList.toggle("d-none");
  if (!cardsHided) {
    hideCards.textContent = "Fai riapparire le cards";
    cardsHided = true;
  } else {
    hideCards.textContent = "Fai sparire le cards";
    cardsHided = false;
  }

  hideCards.classList.toggle("btn-danger");
  hideCards.classList.toggle("btn-warning");
});
