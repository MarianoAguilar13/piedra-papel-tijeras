import { state } from "../../state";
import { computerJuego } from "../../computerPlay";

export function initPageGame(params) {
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="container">
                    <h1 class="container-cuenta-regresiva"></h1>
                    <tijeras-el class= "tijeras-img"></tijeras-el>                
                    <piedra-el class= "piedra-img"></piedra-el>
                    <papel-el class= "papel-img"></papel-el>

                </div>
            `;

  let style = document.createElement("style");
  style.textContent = `
                        .container {
                            height: 1vh;
                            width: 100%;
                            padding: 0 30px;
                        }
                        
                        @media (min-width: 600px) {
                            .container {
                            height: 0.8vh;
                            width: 450px;
                            margin: 0 auto;
                            }
                        }

                        .container-cuenta-regresiva{
                            font-family: "Poppins", sans-serif;
                            font-weight: bold;
                            font-size: 256px;
                            text-align: center;
                            color: var(--titulos);
                            margin-top: 100px;
                        }

                        .piedra-img {
                            height: 150px;
                            position: fixed;
                            bottom: -20px;
                            left: 160px;
                        }
                        @media (min-width: 600px) {
                          .piedra-img {
                            left: 640px;
                          }
                        }
    
                        .papel-img {
                            height: 150px;
                            position: fixed;
                            bottom: -20px;
                            left: 275px;
                        }
                        @media (min-width: 600px) {
                          .papel-img {
                            left: 755px;
                          }
                        }
    
                        .tijeras-img {
                            height: 150px;
                            position: fixed;
                            bottom: -20px;
                            left: 50px;
                        }
                        @media (min-width: 600px) {
                          .tijeras-img {
                            left: 530px;
                          }
                        }
                        
                      `;
  div.appendChild(style);

  function timerJugada() {
    let counter = 0;
    const cuentaRegresiva = div.querySelector(".container-cuenta-regresiva");

    const intervalId = setInterval(() => {
      counter++;

      console.log("ciclo número", counter);

      if (counter == 1) {
        cuentaRegresiva.textContent = "3";
      }
      if (counter == 2) {
        cuentaRegresiva.textContent = "2";
      }
      if (counter == 3) {
        cuentaRegresiva.textContent = "1";
      }

      if (counter > 3) {
        clearInterval(intervalId);
        params.goTo("./instructions");
      }

      const piedraEl = document.querySelector(".piedra-img");

      piedraEl.addEventListener("click", (e) => {
        e.preventDefault();
        piedraEl.setAttribute("style", "bottom:-25px;");

        //Agrego al state mi jugada y la jugada de la compu
        //tambien la pusheo en el historial

        params.goTo("./result");
        clearInterval(intervalId);
      });

      const tijerasEl = document.querySelector(".tijeras-img");

      tijerasEl.addEventListener("click", (e) => {
        e.preventDefault();
        tijerasEl.setAttribute("style", "bottom:-25px;");
        console.log("se apreto en tijeras");

        //Agrego al state mi jugada y la jugada de la compu
        //tambien la pusheo en el historial

        params.goTo("./result");
        clearInterval(intervalId);
      });

      const papelEl = document.querySelector(".papel-img");

      papelEl.addEventListener("click", (e) => {
        e.preventDefault();
        papelEl.setAttribute("style", "bottom:-25px;");
        console.log("se apreto en papel");

        //Agrego al state mi jugada y la jugada de la compu
        //tambien la pusheo en el historial

        params.goTo("./result");
        clearInterval(intervalId);
      });
    }, 1000);

    /* const piedraEl = document.querySelector(".piedra-img");

    piedraEl.addEventListener("click", (e) => {
      e.preventDefault();
      piedraEl.setAttribute("style", "bottom:-25px;");

      params.goTo("./result");
      clearInterval(intervalId);
    });

    const tijerasEl = document.querySelector(".tijeras-img");

    tijerasEl.addEventListener("click", (e) => {
      e.preventDefault();
      tijerasEl.setAttribute("style", "bottom:-25px;");
      console.log("se apreto en tijeras");

      //Agrego al state mi jugada y la jugada de la compu
      //tambien la pusheo en el historial

      params.goTo("./result");
      clearInterval(intervalId);
    });

    const papelEl = document.querySelector(".papel-img");

    papelEl.addEventListener("click", (e) => {
      e.preventDefault();
      papelEl.setAttribute("style", "bottom:-25px;");
      console.log("se apreto en papel");

      //Agrego al state mi jugada y la jugada de la compu
      //tambien la pusheo en el historial

      params.goTo("./result");
      clearInterval(intervalId);
    });*/
  }

  timerJugada();

  return div;
}
