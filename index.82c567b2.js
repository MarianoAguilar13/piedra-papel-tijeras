const e={};function t(e){let t=document.createElement("div");t.innerHTML=`
            <div class="container">
                <h1 class="titulo">Piedra, Papel o Tijera</h1>
                <button-normal-el class="boton"> Empezar </button-normal-el>
                <tijeras-el class= "tijeras-img"></tijeras-el>                
                <piedra-el class= "piedra-img"></piedra-el>
                <papel-el class= "papel-img"></papel-el>

            </div>
        `;let i=document.createElement("style");i.textContent=`
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
                    
                    .titulo {
                        font-family: "Poppins", sans-serif;
                        font-weight: bold;
                        font-size: 72px;
                        text-align: center;
                        color: var(--titulos);
                        margin-top: 60px;
                        margin-bottom: 80px;
                    }
                    
                    @media (min-width: 600px) {
                        .titulo {
                        font-family: "Poppins", sans-serif;
                        font-weight: bold;
                        font-size: 60px;
                        text-align: center;
                        color: var(--titulos);
                        margin-top: 60px;
                        margin-bottom: 40px;
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
                  `,t.appendChild(i);let n=t.querySelector(".boton");return n.addEventListener("click",t=>{t.preventDefault(),e.goTo("./instructions")}),t}function i(){let e=Math.trunc(3*Math.random()+0);return 0==e?"piedra":1==e?"papel":"tijeras"}const n="/piedra-papel-tijeras";function o(){return location.host.includes("github.io")}const a=[{path:/\//,component:t},{path:/\/welcome/,component:t},{path:/\/instructions/,component:function(e){let t=document.createElement("div");t.innerHTML=`
              <div class="container">
                  <h3 class="texto-instructions">Presion\xe1 jugar
                  y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>
                  <button-normal-el class="boton"> \xa1Jugar! </button-normal-el>
                  <tijeras-el class= "tijeras-img"></tijeras-el>                
                  <piedra-el class= "piedra-img"></piedra-el>
                  <papel-el class= "papel-img"></papel-el>
              </div>
          `;let i=document.createElement("style");return i.textContent=`
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
                    `,t.appendChild(i),t.querySelector(".boton").addEventListener("click",t=>{t.preventDefault(),e.goTo("./game")}),t}},{path:/\/game/,component:function(t){let n=document.createElement("div");n.innerHTML=`
                <div class="container">
                    <h1 class="container-cuenta-regresiva"></h1>
                    <tijeras-el class= "tijeras-img"></tijeras-el>                
                    <piedra-el class= "piedra-img"></piedra-el>
                    <papel-el class= "papel-img"></papel-el>

                </div>
            `;let o=document.createElement("style");return o.textContent=`
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
                        
                      `,n.appendChild(o),!function(){let o=0,a=n.querySelector(".container-cuenta-regresiva"),l=setInterval(()=>{console.log("ciclo n\xfamero",++o),1==o&&(a.textContent="3"),2==o&&(a.textContent="2"),3==o&&(a.textContent="1"),o>3&&(clearInterval(l),t.goTo("./instructions"),alert("Se ha terminado el tiempo para seleccionar"));let n=document.querySelector(".piedra-img");n.addEventListener("click",n=>{n.preventDefault();let o=e.getState(),a=i();o.currentGame.myPlay="piedra",o.currentGame.computerPlay=a,e.setState(o),clearInterval(l),t.goTo("./result")});let r=document.querySelector(".tijeras-img");r.addEventListener("click",n=>{n.preventDefault();let o=e.getState(),a=i();o.currentGame.myPlay="tijeras",o.currentGame.computerPlay=a,e.setState(o),clearInterval(l),t.goTo("./result")});let s=document.querySelector(".papel-img");s.addEventListener("click",n=>{n.preventDefault();let o=e.getState(),a=i();o.currentGame.myPlay="papel",o.currentGame.computerPlay=a,e.setState(o),clearInterval(l),t.goTo("./result")})},1e3)}(),n}},{path:/\/result/,component:function(t){let i=e.getState(),n=i.currentGame,o=document.createElement("div");if(o.classList.add("container-result"),"piedra"==n.computerPlay){let e=document.createElement("img");e.src="https://marianoaguilar13.github.io/imagenes-proyecto-final/piedra-invertido.png",e.classList.add("jugada-compu"),o.appendChild(e)}if("papel"==n.computerPlay){let e=document.createElement("img");e.src="https://marianoaguilar13.github.io/imagenes-proyecto-final/papel-invertido.png",e.classList.add("jugada-compu"),o.appendChild(e)}if("tijeras"==n.computerPlay){let e=document.createElement("img");e.src="https://marianoaguilar13.github.io/imagenes-proyecto-final/tijera-invertido.png",e.classList.add("jugada-compu"),o.appendChild(e)}let a=document.createElement("div");if(o.classList.add("container-boton"),a.innerHTML=`
        <button-normal-el class="boton"> Ver Score </button-normal-el>
        `,o.appendChild(a),"piedra"==n.myPlay){let e=document.createElement("img");e.src="https://marianoaguilar13.github.io/imagenes-proyecto-final/piedra.svg",e.classList.add("jugada-player"),o.appendChild(e)}if("papel"==n.myPlay){let e=document.createElement("img");e.src="https://marianoaguilar13.github.io/imagenes-proyecto-final/papel.svg",e.classList.add("jugada-player"),o.appendChild(e)}if("tijeras"==n.myPlay){let e=document.createElement("img");e.src="https://marianoaguilar13.github.io/imagenes-proyecto-final/tijera.svg",e.classList.add("jugada-player"),o.appendChild(e)}let l=document.createElement("style");l.textContent=`
                        .container-result {
                          display: flex;
                          min-height: 100vh;
                          width: 100%;
                          justify-content: space-between;
                          flex-direction: column;
                          align-content: center;
                        }
                        
                        @media (min-width: 600px) {
                          .container-result {
                            
                            height: 650px;
                            max-width: 450px;
                            margin: 0 auto;
                          }
                        }

                        .container-boton{
                          display: flex;
                          width: 100%;
                        }
                        
                        .boton {
                          width:100%;
                         
                        }
                        
                        .jugada-compu {
                          height: 300px;
                          align-self: center;
                          margin-bottom: 20px;
                        }
                        
                        .jugada-player {
                          height: 300px;
                          align-self: center;
                          margin-top: 20px;
                        }
                        
                        
                      `,o.appendChild(l);let r=o.querySelector(".boton");return null!=r&&r.addEventListener("click",e=>{e.preventDefault(),t.goTo("./result-score")}),o}},{path:/\/result-score/,component:function(t){let i=document.createElement("div"),n=e.getState(),o={computerPlay:n.currentGame.computerPlay,myPlay:n.currentGame.myPlay};e.pushToHistory(o);let a=e.getState(),l=a.currentGame,r=l.computerPlay,s=l.myPlay,p=e.whoWins(s,r),c=a.history;console.log("el historial",c);let d=0,m=0;for(let t of c){console.log(t);let i=t.computerPlay,n=t.myPlay,o=e.whoWins(n,i);"Victoria"==o&&m++,"Derrota"==o&&d++}i.innerHTML=`
    <div class="container">
        <result-escore-el quienGano="${p}" numVos="${m}" numMaquina="${d}" ></result-escore-el>
        <button-normal-el class="boton-volver boton">Volver a Jugar</button-normal-el>
        <button-normal-el class="boton-reinicio boton">Reiniciar Score</button-normal-el>
    </div>
        `;let u=document.createElement("style");u.textContent=`
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
                          
                         
                        `,i.appendChild(u);let h=i.querySelector(".boton-volver");h.addEventListener("click",e=>{e.preventDefault(),t.goTo("./instructions")});let g=i.querySelector(".boton-reinicio");return g.addEventListener("click",i=>{i.preventDefault();let n=e.getState();n.history=[{}],e.setState(n),t.goTo("./instructions")}),i}}];!function(){if(function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=document.createElement("style");e.textContent=`
                    .boton {
                        border: solid 5px;
                        border-color: var(--azul-borde);
                        border-radius: 10px;
                        height: 80px;
                        width: 100%;
                        font-family: "Odibee Sans", cursive;
                        font-weight: 400;
                        font-size: 36px;
                        background-color: var(--azul-boton);
                        color: whitesmoke;
                        margin-top: 20px;
                    }
                        
                `;let t=document.createElement("button");t.classList.add("boton"),t.textContent=this.textContent,this.shadow.appendChild(t),this.shadow.appendChild(e)}}customElements.define("button-normal-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=document.createElement("style");e.textContent=`
                           
                  `,this.shadow.innerHTML=`
        <img class="papel-img" src="https://marianoaguilar13.github.io/imagenes-proyecto-final/papel.svg" alt="papel" />
    `,this.shadow.appendChild(e)}}customElements.define("papel-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=document.createElement("style");e.textContent=`
                                                  
                    `,this.shadow.innerHTML=`
          <img class="piedra-img" src="https://marianoaguilar13.github.io/imagenes-proyecto-final/piedra.svg" alt="piedra" />
      `,this.shadow.appendChild(e)}}customElements.define("piedra-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=document.createElement("style");e.textContent=`                       
                          
                      `,this.shadow.innerHTML=`
            <img class="tijeras-img" src="https://marianoaguilar13.github.io/imagenes-proyecto-final/tijera.svg" alt="tijeras" />
        `,this.shadow.appendChild(e)}}customElements.define("tijeras-el",e)}(),function(){class e extends HTMLElement{static get observedAttributes(){return["quienGano","numVos","numMaquina"]}constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=document.createElement("style");e.textContent=`
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
      `,this.shadow.innerHTML=`
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

  `;let t=this.shadow.querySelector(".resultado-titulo");t.textContent=this.getAttribute("quienGano");let i=this.shadow.querySelector(".li-score-vos");i.textContent=i.textContent+this.getAttribute("numVos");let n=this.shadow.querySelector(".li-score-maquina");n.textContent=n.textContent+this.getAttribute("numMaquina"),this.shadow.appendChild(e)}}customElements.define("result-escore-el",e)}(),e.subscribe(()=>{let t=e.getState(),i=JSON.stringify(t.history);localStorage.setItem("history",i)}),void 0==localStorage.getItem("history"));else{let t={currentGame:{computerPlay:"",myPlay:""},history:JSON.parse(localStorage.getItem("history")||"hola")};e.setState(t)}let t=document.querySelector(".root");!function(e){function t(e){let t=o()?n+e:e;history.pushState({},"",t),i(t)}function i(i){console.log("El handleRoute recibi\xf3 una nueva ruta ",i);let l=o()?i.replace(n,""):i;for(let i of a)if(i.path.test(l)){let n=i.component({goTo:t});for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(n)}}i(location.pathname),window.onpopstate=function(e){i(location.pathname)}}(t)}();
//# sourceMappingURL=index.82c567b2.js.map
