import { state } from "../../src/state";
import { computerJuego } from "../../src/computerPlay";

export function init() {
  type Jugada = "piedra" | "papel" | "tijeras";

  class PapelEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    shadow = this.attachShadow({ mode: "open" });

    connectedCallback() {
      const papelEl = document.querySelector(".papel-img");
      papelEl.addEventListener("click", (e) => {
        e.preventDefault();

        let myJugada: Jugada;
        const newData = state.getState();
        const jugadaCompu = computerJuego();
        myJugada = "papel";
        newData.currentGame.myPlay = myJugada;
        newData.currentGame.computerPlay = jugadaCompu;
        let nuevaJugada = {
          computerPlay: jugadaCompu,
          myPlay: myJugada,
        };
        state.setState(newData);
        state.pushToHistory(nuevaJugada);
        console.log("la jugada al elegir papel", newData.currentGame);

        console.log("El historial es", state.getState().history);

        console.log("SOLO OCURRE UNA VEZ AL ELEGIR PAPEL");
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
        <img class="papel-img" src="https://marianoaguilar13.github.io/imagenes-proyecto-final/papel.svg" alt="papel" />
    `;

      this.shadow.appendChild(style);
    }
  }
  customElements.define("papel-el", PapelEl);
}
