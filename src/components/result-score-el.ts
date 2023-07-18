import { state } from "../state";

export function init() {
  class ResultEscoreEl extends HTMLElement {
    //estos son los atributos que voy a estar obsevando su cambios
    static get observedAttributes() {
      return ["quienGano", "numVos", "numMaquina"];
    }

    shadow = this.attachShadow({ mode: "open" });

    constructor() {
      // Always call super first in constructor
      super();
      this.render();
    }

    //creo el style del customElement
    render() {
      let style = document.createElement("style");
      style.textContent = `
      .container-page {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 40px auto;
      }
      
      @media (min-width: 600px) {
        .container-page {
          display: flex;
          flex-direction: column;
          width: 450px;
          margin: 20px auto;
        }
      }
      
      .resultado-titulo {
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 72px;
        text-align: center;
        color: black;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      
      .container-score {
        display: flex;
        flex-direction: column;
        width: 80%;
        padding: 0 20px;
        margin: 40px auto;
        border: solid 10px black;
        border-radius: 10px;
        justify-content: space-evenly;
      }
      
      .score-titulo {
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 48px;
        text-align: center;
        color: var(--titulos);
        margin-top: 0;
        margin-bottom: 0;
      }
      
      .lista-score {
        list-style-type: none;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 32px;
        text-align: center;
        color: var(--titulos);
      }
      
      .li-score-vos {
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 32px;
        text-align: end;
        color: var(--titulos);
      }

      .li-score-maquina {
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 32px;
        text-align: end;
        color: var(--titulos);
      }
      `;

      //creo la estructura del customElement
      this.shadow.innerHTML = `
            <div class="container-page">
                <h3 class="resultado-titulo"></h3>
                <div class="container-score">
                    <h3 class="score-titulo">Score</h3>
                    <ul class="lista-score">
                      <li class="li-score-vos">vos: </li>
                      <li class="li-score-maquina">compu: </li>
                    </ul>
                </div>
            </div>

  `;

      const tituloEl = this.shadow.querySelector(".resultado-titulo") as any;
      tituloEl.textContent = this.getAttribute("quienGano");

      const scoreVosEl = this.shadow.querySelector(".li-score-vos") as any;
      scoreVosEl.textContent =
        scoreVosEl.textContent + this.getAttribute("numVos");
      const scoreMaquinaEl = this.shadow.querySelector(
        ".li-score-maquina"
      ) as any;
      scoreMaquinaEl.textContent =
        scoreMaquinaEl.textContent + this.getAttribute("numMaquina");

      this.shadow.appendChild(style);
    }
  }

  customElements.define("result-escore-el", ResultEscoreEl);
}
