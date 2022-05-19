import { state } from "./state";
import { initRouter } from "./router";

import { init as initButtonNormalEl } from "./components/boton-normal-el";
import { init as initPapelEl } from "./components/papel-el";
import { init as initPiedraEl } from "./components/piedra-el";
import { init as initTijerasEl } from "./components/tijeras-el";
/*import { init as initTijerasGrandesEl } from "./components/tijeras-grandes-el";
import { init as initPapelGrandeEl } from "./components/papel-grande-el";
import { init as initPiedraGrandeEl } from "./components/piedra-grande-el";
import { init as initTijerasComputerEl } from "./components/tijeras-computer-el";
import { init as initPapelComputerEl } from "./components/papel-computer-el";
import { init as initPiedraComputerEl } from "./components/piedra-computer-el";*/
import { init as initResultScoreEl } from "./components/result-score-el";

(function () {
  initButtonNormalEl();
  initPapelEl();
  initPiedraEl();
  initTijerasEl();
  /* initTijerasGrandesEl();
  initPapelGrandeEl();
  initPiedraGrandeEl();
  initTijerasComputerEl();
  initPapelComputerEl();
  initPiedraComputerEl();*/
  initResultScoreEl();

  state.subscribe(() => {
    const actualState = state.getState();
    const historyStingifeado = JSON.stringify(actualState.history);
    localStorage.setItem("history", historyStingifeado);

    console.log(localStorage.getItem("history"));
  });

  if (localStorage.getItem("history") == undefined) {
  } else {
    let historialDeJugadas = {
      currentGame: {
        computerPlay: "",
        myPlay: "",
      },

      history: JSON.parse(localStorage.getItem("history")),
    };
    state.setState(historialDeJugadas);
  }

  const root = document.querySelector(".root");
  initRouter(root);
})();
