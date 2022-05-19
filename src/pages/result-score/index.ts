import { state } from "../../state";

export function initPageResultScore(params) {
  const div = document.createElement("div");

  const newData = state.getState();

  const nuevoGame = newData.currentGame;
  const jugadaCompu = nuevoGame.computerPlay;
  const jugadaPlayer = nuevoGame.myPlay;

  const resultMatch = state.whoWins(jugadaPlayer, jugadaCompu);

  const historyRecorrer = newData.history;
  console.log("el historial", historyRecorrer);

  let winCompu = 0;
  let winPlayer = 0;
  for (const gameActual of historyRecorrer) {
    console.log(gameActual);

    const playCompu = gameActual.computerPlay;
    const playPlayer = gameActual.myPlay;
    const result = state.whoWins(playPlayer, playCompu);

    if (result == "Victoria") {
      winPlayer++;
    }

    if (result == "Derrota") {
      winCompu++;
    }
  }

  div.innerHTML = `
    <div class="container">
        <result-escore-el quienGano="${resultMatch}" numVos="${winPlayer}" numMaquina="${winCompu}" ></result-escore-el>
        <button-normal-el class="boton-volver boton">Volver a Jugar</button-normal-el>
        <button-normal-el class="boton-reinicio boton">Reiniciar Score</button-normal-el>
    </div>
        `;

  let style = document.createElement("style");
  style.textContent = `
                          .container {
                              height: 1vh;
                              width: 100%;
                              
                          }
                          
                          @media (min-width: 600px) {
                              .container {
                              min-height: 0.8vh;
                              width: 450px;
                              margin: 0 auto;
                              }
                          }

                          .boton {
                            margin: 10px;
                          }
                          
                         
                        `;
  div.appendChild(style);

  const botonVolverEl = div.querySelector(".boton-volver");

  botonVolverEl.addEventListener("click", (e) => {
    e.preventDefault();
    params.goTo("./instructions");
  });

  const botonReinicioEl = div.querySelector(".boton-reinicio");

  botonReinicioEl.addEventListener("click", (e) => {
    e.preventDefault();
    const newData = state.getState();
    newData.history = [{}];
    state.setState(newData);

    params.goTo("./instructions");
  });

  return div;
}
