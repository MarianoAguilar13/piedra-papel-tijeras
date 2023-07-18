export function initPageInstructions(params) {
  const div = document.createElement("div");
  div.innerHTML = `
              <div class="container">
                  <h3 class="texto-instructions">Presioná jugar
                  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>
                  <button-normal-el class="boton"> ¡Jugar! </button-normal-el>
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
                      
                      .texto-instructions {
                          font-family: "Poppins", sans-serif;
                          font-weight: 700;
                          font-size: 36px;
                          text-align: center;
                          color: black;
                          margin-top: 40px;
                          margin-bottom: 60px;
                      }
                      
                      @media (min-width: 600px) {
                          .texto-instructions {               
                          font-size: 36px;                         
                          margin-top: 40px;
                          margin-bottom: 60px;
                          }
                      } 
                      
                      .piedra-img {
                        height: 150px;
                        position: fixed;
                        bottom: -50px;
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
                        bottom: -50px;
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
                        bottom: -50px;
                        left: 50px;
                    }
                    @media (min-width: 600px) {
                      .tijeras-img {
                        left: 530px;
                      }
                    }
                    `;
  div.appendChild(style);

  let boton = div.querySelector(".boton") as any;
  boton.addEventListener("click", (evento) => {
    evento.preventDefault();
    params.goTo("./game");
  });

  return div;
}
