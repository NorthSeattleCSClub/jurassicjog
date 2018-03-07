var menu = {
    preload: function () {
        game.load.image('sky', 'assets/sky.png');
        game.load.image('background', 'assets/tempBackground.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.spritesheet('sprite', 'assets/sprite.png', 32, 48);
        game.load.image('playButton', 'assets/jjPlayBtn.png');
        game.load.image('logo', 'assets/jjLogo.png');
        game.load.image('settingsBtn', 'assets/jjSettingsBtn.png');
        game.load.image('leaderboardBtn', 'assets/jjLeaderboardBtn.png');
        game.load.image('storeBtn', 'assets/jjStoreBtn.png');
        game.load.image('hero', 'assets/Main Character/Jurassic Jog MC clone.png')
    },
    create: function () {
        console.log("Menu is running!");

        //game.add.sprite(0,0, 'background');
        background = game.add.tileSprite(0, 0, 800, 600, 'background');
        this.playAgain = game.add.sprite(game.width / 2, game.height / 2, "playButton");
        this.playAgain.anchor.set(0.5, 0.5);
        this.playAgain.inputEnabled = true;
        this.playAgain.events.onInputDown.add(this.startGame, this);

        game.add.sprite(game.width/6, game.height/5, 'logo');
        game.add.sprite(game.width/6, game.height/1.4, 'storeBtn');
        game.add.sprite(game.width/2.5, game.height/1.4, 'leaderboardBtn');
        game.add.sprite(game.width/1.5, game.height/1.4, 'settingsBtn');

    },
    update: function() {
        background.tilePosition.x -= 2.5;
    },
    startGame: function () {
        game.state.start("runGame");
    }
}