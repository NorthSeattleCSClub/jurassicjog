var gameOver = {
    create: function () {
        console.log("gameOver is running!");

        this.playAgain = game.add.sprite(game.width / 2, game.height / 2, "playButton");
        this.playAgain.anchor.set(0.5, 0.5);
        this.playAgain.inputEnabled = true;
        this.playAgain.events.onInputDown.add(this.restart, this);
    },
    startGame: function () {
        game.state.start("runGame");
    },
    restart: function () {
        game.state.start("menu");
    }
}