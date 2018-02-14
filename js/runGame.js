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

        //add ground
        var ground = game.add.sprite(0, game.height * .9, 'ground');

        //add the hero in
        this.hero = game.add.sprite(game.width*.2, ground.y-25, 'hero');

        //enable physics for hero 
        game.physics.enable(this.hero, Phaser.Physics.ARCADE);

    
    },
    makeArray: function(){
        var myArray = [];
        for(var i = start; i < end; i++) {
            myArray.push(i);
        }
        return myArray;
    },

    update: function () {

    },

    mouseDown: function(){
        this.timer = game.time.events.loop(Phaser.Time.SECOND/1000, this.increasePower, this);
    },
    mouseUp: function(){
        this.doJump();
        game.time.events.remove(this.timer);

    },
    doJump: function(){
        this.hero.body.velocity.y = -this.power*12;
    },
    gameOver: function () {
        game.state.start("gameOver");
    }
}