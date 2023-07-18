type Jugada = "piedra" | "papel" | "tijeras";
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};

const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },

    history: [],
  },

  listeners: [],

  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay;
  },

  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    //cada constante evalua si el && devuelve true, dependiendo
    //de myPlay y computerPlay enviada por parametro
    const ganeConTijeras = myPlay == "tijeras" && computerPlay == "papel";
    const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijeras";
    const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";

    const gane = [ganeConTijeras, ganeConPiedra, ganeConPapel].includes(true);

    const perdiConTijeras = myPlay == "tijeras" && computerPlay == "piedra";
    const perdiConPiedra = myPlay == "piedra" && computerPlay == "papel";
    const perdiConPapel = myPlay == "papel" && computerPlay == "tijeras";

    const perdi = [perdiConPapel, perdiConPiedra, perdiConTijeras].includes(
      true
    );

    if (perdi == true) {
      return "Derrota";
    } else {
      if (gane == true) {
        return "Victoria";
      } else {
        return "Empate";
      }
    }
  },

  /*Aca pushea la nueva jugada acumulandola en el historial de jugada
  ya que este historial es que se va a recorrer para calcular el score */

  pushToHistory(play: Game) {
    const currentState = this.getState();
    currentState.history.push(play);
    const historyStingifeado = JSON.stringify(currentState.history);
    localStorage.setItem("history", historyStingifeado);
    this.setState(currentState);
  },

  //devuelve la data del ultimo state
  getState() {
    return this.data;
  },

  subscribe(callback) {
    // recibe callbacks para ser avisados posteriormente
    this.listeners.push(callback);
  },

  setState(newState) {
    // modifica this.data (el state) e invoca los callbacks
    this.data = newState;
    //cb de callback
    //cada vez que se modifica el state se ejecutan los cb suscriptos
    for (const cb of this.listeners) {
      cb();
    }
  },
};

export { state };
