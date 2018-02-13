var runGame = {
    preload: function () {
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.spritesheet('sprite', 'assets/sprite.png', 32, 48);
        game.load.atlasJSONHash('hero', 'assets/Candidate Sprite/Main Character.png', 'assets/Candidate Sprite/Main Character.json')
    },
    create: function () {
        console.log("Game is running!");

        //adding physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //background
        game.add.sprite(0, 0, 'sky');

        //add the hero in
        this.hero=game.add.sprite(game.width*.2, ground.y-25, 'hero');

        //enable physics for hero 
        game.physics.enable(this.hero, Phaser.Physics.ARCADE);

    
    },
    update: function () {

    },
    doJump: function(){
        this.hero.body.velocity.y = -this.power&*12;
    },
    gameOver: function () {
        game.state.start("gameOver");
    }
}