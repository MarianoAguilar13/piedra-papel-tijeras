import { state } from "../../src/state";
import { computerJuego } from "../../src/computerPlay";

export function init() {
  type Jugada = "piedra" | "papel" | "tijeras";

  class PiedraEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    shadow = this.attachShadow({ mode: "open" });

    connectedCallback() {
      const piedraEl = document.querySelector(".piedra-img");
      piedraEl.addEventListener("click", (e) => {
        e.preventDefault();

        let myJugada: Jugada;
        const newData = state.getState();
        const jugadaCompu = computerJuego();
        myJugada = "piedra";
        newData.currentGame.myPlay = myJugada;
        newData.currentGame.computerPlay = jugadaCompu;
        let nuevaJugada = {
          computerPlay: jugadaCompu,
          myPlay: myJugada,
        };
        state.setState(newData);
        state.pushToHistory(nuevaJugada);
        console.log("la jugada al elegir piedra", newData.currentGame);

        console.log("El historial es", state.getState().history);
      });
    }

    render() {
      //creo el style, que solo puede ser usados por elementos del header-el
      let style = document.createElement("style");
      style.textContent = `
                                                  
                    `;
      //shadow DOM, todo lo que pasa adentro del componente, se puede crear
      //css que solo va a estar dentro del componente HeaderEl, el mode open
      //es para inspeccionar

      this.shadow.innerHTML = `
          <img class="piedra-img" src="https://marianoaguilar13.github.io/imagenes-proyecto-final/piedra.svg" alt="piedra" />
      `;

      this.shadow.appendChild(style);
    }
  }
  customElements.define("piedra-el", PiedraEl);
}
