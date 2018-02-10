var menu = {
    preload: function() {
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.spritesheet('sprite', 'assets/sprite.png', 32, 48);
        game.load.image('playButton', 'assets/playButton.png');
    },
    create: function() {
        console.log("Menu is running!");
        this.playAgain = game.add.sprite(game.width/2, game.height/2, "playButton");
        this.playAgain.anchor.set(0.5, 0.5);
        this.playAgain.inputEnabled = true;
        this.playAgain.events.onInputDown.add(this.startGame, this);
    },
    startGame: function() {
        game.state.start("runGame");
    }
}