import Game from "../ttt_node/game";

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    // this.handleClick(el);
    this.el.addEventListener("click", this.handleClick.bind(this)); 
      // let move = this.game.playMove(sq);
    
  }

  setupBoard() {
    let box = document.createElement("ul");
    for(let i = 0; i < 3; i ++) {
      for (let j = 0; j < 3; j ++) {
        let square = document.createElement("li");
        let pos = [i, j];
        // square.pos = [pos];
        // square.classList.add(pos);
        square.dataset.pos = [i, j];
        box.append(square);
      }
    }
    // box or square square.pos = box.pos = [i, jj]
    this.el.append(box);
  }


  handleClick(e) {
    // EventTarget.addEventListener("click", ()=> alert("hello"))
    // let el = getElementsByClassName('li.class');
    // el.addEventListener("click", ()=> {
    //   let move = this.game.playMove(sq);

    // });
    if (e.target.nodeName === "LI") {
      // console.log(e.target.dataset.pos);
      this.game.playMove(e.target.dataset.pos.split(','));
      console.log("X");
    }
  }

  makeMove(square) {
  }

  handleGameOver() {
  }
}

export default View;
