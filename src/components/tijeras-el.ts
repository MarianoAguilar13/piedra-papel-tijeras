import { state } from "../../src/state";
import { computerJuego } from "../../src/computerPlay";

export function init() {
  type Jugada = "piedra" | "papel" | "tijeras";

  class TijerasEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    shadow = this.attachShadow({ mode: "open" });

    connectedCallback() {
      const tijerasEl = document.querySelector(".tijeras-img");
      tijerasEl.addEventListener("click", (e) => {
        e.preventDefault();

        let myJugada: Jugada;
        const newData = state.getState();
        const jugadaCompu = computerJuego();
        myJugada = "tijeras";
        newData.currentGame.myPlay = myJugada;
        newData.currentGame.computerPlay = jugadaCompu;
        let nuevaJugada = {
          computerPlay: jugadaCompu,
          myPlay: myJugada,
        };
        state.setState(newData);
        state.pushToHistory(nuevaJugada);
        console.log("la jugada al elegir tijera", newData.currentGame);

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
            <img class="tijeras-img" src="https://marianoaguilar13.github.io/imagenes-proyecto-final/tijera.svg" alt="tijeras" />
        `;

      this.shadow.appendChild(style);
    }
  }
  customElements.define("tijeras-el", TijerasEl);
}
