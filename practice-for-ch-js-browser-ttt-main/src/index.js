// Add your import statements for View and Game here
import View from "./ttt-view";
import Game from "../ttt_node/game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const el = document.querySelector(".ttt");
  const view = new View (game, el); 
  // el.append(view);
  
});
