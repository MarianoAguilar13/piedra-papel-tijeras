import { state } from "../../state";

export function initPageResultScore(params) {
  const div = document.createElement("div");

  //me traigo la data de la ultima jugada para setearla en el historial
  const dataForPushHistory = state.getState();

  let playToPush = {
    computerPlay: dataForPushHistory.currentGame.computerPlay,
    myPlay: dataForPushHistory.currentGame.myPlay,
  };

  state.pushToHistory(playToPush);

  const newData = state.getState();

  //guardo el ultimo game y las jugadas del ultimo game
  const nuevoGame = newData.currentGame;
  const jugadaCompu = nuevoGame.computerPlay;
  const jugadaPlayer = nuevoGame.myPlay;

  //whoWins es un metodo del state que nos permite ver quien gano
  //pasandole 2 jugadas, luego guardo ese resultado
  const resultMatch = state.whoWins(jugadaPlayer, jugadaCompu);

  //me guardo el historial para recorrer y calcular el score total
  const historyRecorrer = newData.history;
  console.log("el historial", historyRecorrer);

  let winCompu = 0;
  let winPlayer = 0;

  //recorro el historial y veo quien gano cada game, luego las victorias
  //del player las guardo en una variable y las de la pc tambien
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

  //aca muestro con resultMatch, con winPlayer y WinCompu, quien
  //gano la ultima partida y cuantas victorias de cada uno
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
                              height: 100vh;
                              width: 100%;
                              
                          }
                          
                          @media (min-width: 600px) {
                              .container {
                              min-height: 80vh;
                              width: 450px;
                              margin: 0 auto;
                              }
                          }

                          .boton {
                            margin: 10px;
                          }
                          
                         
                        `;
  div.appendChild(style);

  //este boton vuelve a instrucciones para comenzar un nuevo game
  const botonVolverEl = div.querySelector(".boton-volver") as any;

  botonVolverEl.addEventListener("click", (e) => {
    e.preventDefault();
    params.goTo("./instructions");
  });

  //con este boton reiniciamos el historial
  const botonReinicioEl = div.querySelector(".boton-reinicio") as any;

  botonReinicioEl.addEventListener("click", (e) => {
    e.preventDefault();
    const newData = state.getState();
    newData.history = [{}];
    state.setState(newData);

    params.goTo("./instructions");
  });

  return div;
}
