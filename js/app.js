import getData from "./getData.js";
const btnDraft = document.querySelector(".btn-draft");
const cardDescription = document.getElementById("card-description");

function InfoSerie() {
  getData(`/series/phrases`)
    .then((data) => {
      cardDescription.innerHTML = `
              <img src="${data.poster}" alt="${data.title}" />
              <div>
                  <h2>${data.title}</h2>
                  <div class="description-text">
                      <p><i>"${data.phrase}"</i></p>
                      <p><b>Quoted by:</b> ${data.character}</p>
                  </div>
              </div>
          `;
    })
    .catch((error) => {
      console.error(error);
    });
}

window.addEventListener("load", InfoSerie);
btnDraft.addEventListener("click", InfoSerie);
