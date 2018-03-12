var gameOver = {
    create: function () {
        console.log("gameOver is running!");

        background = game.add.tileSprite(0, 0, 800, 600, 'background');

        var overLogo = game.add.sprite(game.width/6, game.height/5, 'gameOverLogo');
        overLogo.scale.setTo(0.6, 0.6);
        /*this.playAgain = game.add.sprite(game.width / 2, game.height / 2, "playButton");
        this.playAgain.anchor.set(0.5, 0.5);
        this.playAgain.inputEnabled = true;
        this.playAgain.events.onInputDown.add(this.restart, this);*/
    },
    update: function() {
        background.tilePosition.x -= 2.5;
    },
    startGame: function () {
        game.state.start("runGame");
    },
    restart: function () {
        game.state.start("menu");
    }
}