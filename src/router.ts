import { initPageWelcome } from "./pages/welcome/index";
import { initPageInstructions } from "./pages/instructions/index";
import { initPageGame } from "./pages/game/index";
import { initPageResult } from "./pages/result/index";
import { initPageResultScore } from "./pages/result-score/index";

//Este es el nombre base de la pag de github
const BASE_PATH = "/piedra-papel-tijeras";

/*Establezco las diferentes rutas y dependiendo la ruta es la pag
que va a cargar, estas paginas estan en la carpeta pages */

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  {
    path: /\//,
    component: initPageWelcome,
  },
  {
    path: /\/welcome/,
    component: initPageWelcome,
  },
  {
    path: /\/instructions/,
    component: initPageInstructions,
  },
  {
    path: /\/game/,
    component: initPageGame,
  },
  {
    path: /\/result/,
    component: initPageResult,
  },
  {
    path: /\/result-score/,
    component: initPageResultScore,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta ", route);

    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });

        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        container.appendChild(el);
      }
    }
  }

  handleRoute(location.pathname);

  //onpopstate se fija que pasa en el estate cuando se vulve para atras
  //despues vuelve a llamar al handleRoute con la ruta que esta al volver en el history
  window.onpopstate = function (event) {
    handleRoute(location.pathname);
  };
}
