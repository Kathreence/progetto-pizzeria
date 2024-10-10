const toggleElement = (id) => {
  const element = document.getElementById(id);
  element.classList.toggle("d-none");
};

document.getElementById("prenotare").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Hai provato a prenotare");
  toggleElement("prenotazione");
});

document.getElementById("subscribe-button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("prova");
  toggleElement("subscribe");
});

document.getElementById("xconferma").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("prova");
  toggleElement("conferma");
});

document.getElementById("xprenotazione").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("prova");
  toggleElement("prenotazione");
});

document.getElementById("xsubscribe").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("prova");
  toggleElement("subscribe");
});

document.getElementById("menuTendina").addEventListener("click", () => {
  toggleElement("tendina");
  console.log("prova");
});

const formMessage = (
  idForm,
  idName,
  idPopup,
  idRisposta,
  idMessage,
  message
) => {
  const form = document.getElementById(idForm);
  const inputName = document.getElementById(idName);
  const pMessage = document.getElementById(idMessage);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("prova");

    if (inputName) {
      const name = inputName.value.trim();
      let modifiedMessage = message.replace("cliente", name);
      // Aggiorna il messaggio
      pMessage.innerHTML = modifiedMessage;
    } else {
      pMessage.innerHTML = message;
    }

    // Toggle dei popup
    toggleElement(idPopup);
    toggleElement(idRisposta);
  });
};

formMessage(
  "formPrenotazione",
  "nomePrenotazione",
  "conferma",
  "prenotazione",
  "messaggioConferma",
  `Grazie cliente! \nTi verrà inviata un'email di conferma`
);

formMessage(
  "formSubscribe",
  "",
  "conferma",
  "subscribe",
  "messaggioConferma",
  `Grazie per esserti unito a noi! Siamo felici di averti nel nostro ristorante e non vediamo l'ora di condividere con te i nostri eventi speciali e le promozioni esclusive. Buon appetito!`
);
