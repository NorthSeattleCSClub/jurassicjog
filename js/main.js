var game = new Phaser.Game(800, 600, Phaser.AUTO, '#game');game.state.add("menu", menu);
game.state.add("menu", menu);
game.state.add("runGame", runGame);
game.state.add("gameOver", gameOver);

game.state.start("menu");
