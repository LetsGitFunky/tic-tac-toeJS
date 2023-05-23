class View {
  constructor(game, el) {
    this.game = game;
    this.el = el; 
    this.setupBoard();
  }
  
  setupBoard() {
    let box = document.createElement("ul");
    // console.log(box);
  
    // let item = document.createElement("li");

    for(let i = 0; i < 3; i ++) {
      for (let j = 0; j < 3; j ++) {
        // box.push(document.createElement("li"));
        // box.createElement("li");
        let square = document.createElement("li");
        box.append(square);

      }
    }

    this.el.append(box);
  }


  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;