document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("consentModal");
  const closeBtn = document.querySelector(".close");
  const acceptBtn = document.getElementById("acceptBtn");
  const declineBtn = document.getElementById("declineBtn");

  // Mostra il modal al caricamento della pagina
  modal.style.display = "block";

  // Chiudi il modal quando l'utente clicca sulla X
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Accetta i termini
  acceptBtn.onclick = function () {
    modal.style.display = "none";
    // Gestisci il consenso qui
    console.log("Consenso accettato");
  };

  // Rifiuta i termini
  declineBtn.onclick = function () {
    modal.style.display = "none";
    // Gestisci il rifiuto qui
    console.log("Consenso rifiutato");
  };

  // Chiudi il modal se l'utente clicca al di fuori del modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  /*
    // Funzionamento pulsanti prenota
    document.getElementsByClassName("reservation_button").addEventListener("click", () => {

    });
*/

  // Funzionamento dei pulsanti freccia
  const immagini = [
    "https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1606265698533-c17fc6003934?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/498509761/es/foto/zeppole-e-crocche-fritti.jpg?s=612x612&w=0&k=20&c=NWyNRwVnQlVaPaVM-547XElKmk9nV9qDrwXbLW1q0WE=",
    "https://media.istockphoto.com/id/453564755/it/foto/napoletana-bab%C3%A0-al-rum.jpg?s=612x612&w=0&k=20&c=QJz9NnmPIhsr5sWM3euEukk_GNgl-bsiw1D4TAneqJw=",
  ];

  let i = Math.floor(Math.random() * immagini.length);
  const col = document.querySelector(".main_immage_row .col");
  col.style.backgroundImage = "url(" + immagini[i] + ")";

  document.getElementById("arrow_button_sx").addEventListener("click", () => {
    i = i === 0 ? immagini.length - 1 : i - 1;
    col.style.backgroundImage = "url(" + immagini[i] + ")";
  });

  document.getElementById("arrow_button_dx").addEventListener("click", () => {
    i = i === immagini.length - 1 ? 0 : i + 1;
    col.style.backgroundImage = "url(" + immagini[i] + ")";
  });

  /*
    // Funzionamento pulsanti menù
    document.getElementsByClassName("dineIn_button").addEventListener("click", () => {

    });

    document.getElementsByClassName("takeAway_button").addEventListener("click", () => {

    });



    // Funzionamento pulsante iscriviti
    document.getElementsByClassName("signOn_button").addEventListener("click", () => {

    });
*/
});
