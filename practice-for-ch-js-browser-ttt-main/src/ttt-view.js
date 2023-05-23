class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.handleClick(el);
  }

  setupBoard() {
    let box = document.createElement("ul");
    for(let i = 0; i < 3; i ++) {
      for (let j = 0; j < 3; j ++) {
        let square = document.createElement("li");
        let pos = [i, j];
        square.classList.add(pos);
        box.append(square);
      }
    }
    this.el.append(box);
  }



  handleClick(e) {
    // EventTarget.addEventListener("click", ()=> alert("hello"))
    e.addEventListener("click", ()=> alert("click!"))
  }

  makeMove(square) {
  }

  handleGameOver() {
  }
}

export default View;
