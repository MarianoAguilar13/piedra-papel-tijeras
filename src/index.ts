import { state } from "./state";
import { initRouter } from "./router";

import { init as initButtonNormalEl } from "./components/boton-normal-el";
import { init as initPapelEl } from "./components/papel-el";
import { init as initPiedraEl } from "./components/piedra-el";
import { init as initTijerasEl } from "./components/tijeras-el";
import { init as initResultScoreEl } from "./components/result-score-el";

(function () {
  initButtonNormalEl();
  initPapelEl();
  initPiedraEl();
  initTijerasEl();
  initResultScoreEl();

  /* El localStorage, "history" se suscribe en el state, para que este
  el history se mantenga actualizado con el historial */

  state.subscribe(() => {
    const actualState = state.getState();
    const historyStingifeado = JSON.stringify(actualState.history);
    localStorage.setItem("history", historyStingifeado);
  });

  /*Cuando ingresa a la pag si tiene un historial guardao el localstorage
  entonces lo carga al state para que tenga el historial de jugadas actualizado */
  if (localStorage.getItem("history")!) {
    let historialDeJugadas = {
      currentGame: {
        computerPlay: "",
        myPlay: "",
      },

      history: JSON.parse(localStorage.getItem("history") || "hola"),
    };
    state.setState(historialDeJugadas);
  }

  /* Inicia el initRouter para cargar los elementos*/
  const root = document.querySelector(".root") as any;
  initRouter(root);
})();
