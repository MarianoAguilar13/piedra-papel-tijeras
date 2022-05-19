import { state } from "../../state";

export function initPageResult(params) {
  const newData = state.getState();

  const nuevoGame = newData.currentGame;

  const div = document.createElement("div");
  div.classList.add("container-result");

  // let jugadaCompuImgEl = document.createElement("div");
  // let jugadaPlayerImgEl = document.createElement("div");

  if (nuevoGame.computerPlay == "piedra") {
    //const jugadaCompuImgEl = document.createElement("piedra-computer-el");
    const jugadaCompuImgEl = document.createElement("img");
    jugadaCompuImgEl.src =
      "https://marianoaguilar13.github.io/imagenes-proyecto-final/piedra-invertido.png";
    jugadaCompuImgEl.classList.add("jugada-compu");
    // jugadaCompuImgEl.appendChild(jugadaEl);
    div.appendChild(jugadaCompuImgEl);
  }
  if (nuevoGame.computerPlay == "papel") {
    //const jugadaCompuImgEl = document.createElement("papel-computer-el");
    const jugadaCompuImgEl = document.createElement("img");
    jugadaCompuImgEl.src =
      "https://marianoaguilar13.github.io/imagenes-proyecto-final/papel-invertido.png";
    jugadaCompuImgEl.classList.add("jugada-compu");
    // jugadaCompuImgEl.appendChild(jugadaEl);
    div.appendChild(jugadaCompuImgEl);
  }
  if (nuevoGame.computerPlay == "tijeras") {
    //const jugadaCompuImgEl = document.createElement("tijeras-computer-el");
    const jugadaCompuImgEl = document.createElement("img");
    jugadaCompuImgEl.src =
      "https://marianoaguilar13.github.io/imagenes-proyecto-final/tijera-invertido.png";
    jugadaCompuImgEl.classList.add("jugada-compu");
    //jugadaCompuImgEl.appendChild(jugadaEl);
    div.appendChild(jugadaCompuImgEl);
  }

  const botonVerScoreEl = document.createElement("div");
  div.classList.add("container-boton");

  botonVerScoreEl.innerHTML = `
        <button-normal-el class="boton"> Ver Score </button-normal-el>
        `;

  div.appendChild(botonVerScoreEl);

  if (nuevoGame.myPlay == "piedra") {
    const jugadaPlayerImgEl = document.createElement("img");
    jugadaPlayerImgEl.src =
      "https://marianoaguilar13.github.io/imagenes-proyecto-final/piedra.svg";
    jugadaPlayerImgEl.classList.add("jugada-player");
    //jugadaPlayerImgEl.appendChild(jugadaEl);
    div.appendChild(jugadaPlayerImgEl);
  }
  if (nuevoGame.myPlay == "papel") {
    const jugadaPlayerImgEl = document.createElement("img");
    jugadaPlayerImgEl.src =
      "https://marianoaguilar13.github.io/imagenes-proyecto-final/papel.svg";
    jugadaPlayerImgEl.classList.add("jugada-player");
    // jugadaPlayerImgEl.appendChild(jugadaEl);
    div.appendChild(jugadaPlayerImgEl);
  }
  if (nuevoGame.myPlay == "tijeras") {
    const jugadaPlayerImgEl = document.createElement("img");
    jugadaPlayerImgEl.src =
      "https://marianoaguilar13.github.io/imagenes-proyecto-final/tijera.svg";
    jugadaPlayerImgEl.classList.add("jugada-player");
    //jugadaPlayerImgEl.appendChild(jugadaEl);
    div.appendChild(jugadaPlayerImgEl);
  }

  let style = document.createElement("style");
  style.textContent = `
                        .container-result {
                          display: flex;
                          min-height: 1vh;
                          width: 100%;
                          justify-content: space-between;
                          flex-direction: column;
                          align-content: center;
                        }
                        
                        @media (min-width: 600px) {
                          .container-result {
                            
                            height: 650px;
                            max-width: 450px;
                            margin: 0 auto;
                          }
                        }

                        .container-boton{
                          display: flex;
                          width: 100%;
                        }
                        
                        .boton {
                          width:100%;
                         
                        }
                        
                        .jugada-compu {
                          height: 300px;
                          align-self: center;
                          margin-bottom: 20px;
                        }
                        
                        .jugada-player {
                          height: 300px;
                          align-self: center;
                          margin-top: 20px;
                        }
                        
                        
                      `;

  div.appendChild(style);

  const botonScoreEl = div.querySelector(".boton");

  if (botonScoreEl != null) {
    botonScoreEl.addEventListener("click", (e) => {
      e.preventDefault();

      params.goTo("./result-score");
    });
  }

  return div;
}
