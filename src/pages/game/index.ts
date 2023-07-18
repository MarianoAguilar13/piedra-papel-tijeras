import { state } from "../../state";
import { computerJuego } from "../../computerPlay";

export function initPageGame(params) {
  type Jugada = "piedra" | "papel" | "tijeras";

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
                            height: 100vh;
                            width: 100%;
                            padding: 0 30px;
                        }
                        
                        @media (min-width: 600px) {
                            .container {
                            height: 80vh;
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

    //este div me mostrara en pantalla la cuenta regresiva
    const cuentaRegresiva = div.querySelector(
      ".container-cuenta-regresiva"
    ) as any;

    const intervalId = setInterval(() => {
      counter++;

      console.log("ciclo número", counter);

      //Cuenta regresiva
      /*Creo que el error esta aca, deberia comenzar de 0
      para que no me cuente una jugada extra */

      if (counter == 1) {
        cuentaRegresiva.textContent = "3";
      }
      if (counter == 2) {
        cuentaRegresiva.textContent = "2";
      }
      if (counter == 3) {
        cuentaRegresiva.textContent = "1";
      }

      /* Si pasan mas de 3 segundos osea 4 se corta la funcion
      y vuelve a instrucciones porque si llego a 4 significa
      que no eligieron antes de los 4seg */
      if (counter > 3) {
        clearInterval(intervalId);
        params.goTo("./instructions");
        alert("Se ha terminado el tiempo para seleccionar");
      }

      const piedraEl = document.querySelector(".piedra-img") as any;

      piedraEl.addEventListener("click", (e) => {
        e.preventDefault();

        /*cuando hace click, la jugada elegida, se guarda en el state
        y calcula la jugada de la compu con la funcion computerJuego
        luego guarda la jugada en ultima jugada y pushea la nueva jugada
        en el state de history*/

        let myJugada: Jugada;
        const newData = state.getState();
        const jugadaCompu = computerJuego();
        myJugada = "piedra";
        newData.currentGame.myPlay = myJugada;
        newData.currentGame.computerPlay = jugadaCompu;

        state.setState(newData);

        /*Cuando clickea la mano, termina el conteo y va a resultados
        la logica del state queda en el elemento piedra */
        clearInterval(intervalId);
        params.goTo("./result");
      });

      const tijerasEl = document.querySelector(".tijeras-img") as any;

      tijerasEl.addEventListener("click", (e) => {
        e.preventDefault();
        /*cuando hace click, la jugada elegida, se guarda en el state
        y calcula la jugada de la compu con la funcion computerJuego
        luego guarda la jugada en ultima jugada y pushea la nueva jugada
        en el state de history*/

        let myJugada: Jugada;
        const newData = state.getState();
        const jugadaCompu = computerJuego();
        myJugada = "tijeras";
        newData.currentGame.myPlay = myJugada;
        newData.currentGame.computerPlay = jugadaCompu;

        state.setState(newData);

        /*Cuando clickea la mano, termina el conteo y va a resultados
        la logica del state queda en el elemento tijeras */
        clearInterval(intervalId);
        params.goTo("./result");
      });

      const papelEl = document.querySelector(".papel-img") as any;

      papelEl.addEventListener("click", (e) => {
        e.preventDefault();
        /*cuando hace click, la jugada elegida, se guarda en el state
        y calcula la jugada de la compu con la funcion computerJuego
       luego guarda la jugada en ultima jugada y pushea la nueva jugada
       en el state de history*/

        let myJugada: Jugada;
        const newData = state.getState();
        const jugadaCompu = computerJuego();
        myJugada = "papel";
        newData.currentGame.myPlay = myJugada;
        newData.currentGame.computerPlay = jugadaCompu;

        state.setState(newData);

        /*Cuando clickea la mano, termina el conteo y va a resultados
    la logica del state queda en el elemento papel */
        clearInterval(intervalId);
        params.goTo("./result");
      });
    }, 1000);
  }

  timerJugada();

  return div;
}
