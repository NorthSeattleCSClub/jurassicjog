var runGame = {
    preload: function() {
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.spritesheet('sprite', 'assets/sprite.png', 32, 48);
    },
    create: function() {
        console.log("Game is running!");
    },
    update: function() {

    },
    gameOver: function() {
        game.state.start("menu");
    }
}