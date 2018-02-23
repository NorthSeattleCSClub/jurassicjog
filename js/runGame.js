var runGame = {
    preload: function () {
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.spritesheet('sprite', 'assets/sprite.png', 32, 48);
        game.load.image('hero', 'assets/Main Character/Jurassic Jog MC clone.png');
        game.load.image('rock', 'assets/Rock 1/Rock 1.png');
    },
    create: function () {
        //erase this later
        console.log("Game is running!");

        //adding physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //background
        game.add.sprite(0, 0, 'sky');

        //add ground
        this.ground = game.add.sprite(0, game.height * .9, 'ground');

        //add the hero in
        //
        this.hero = game.add.sprite(game.width*.2, this.ground.y - 100, 'hero');

        //enable physics for hero 
        game.physics.enable(this.hero, Phaser.Physics.ARCADE);
        game.physics.enable(this.ground, Phaser.Physics.ARCADE);

        this.hero.body.gravity.y = 700;
        this.hero.body.colliderWorldBounds = true;
        this.ground.body.immovable = true;

        //set Listeners
        //game.input.onUp.add(this.mouseUp, this);
        this.startY = this.hero.y;
        
        game.input.onDown.add(this.mouseDown, this);

    
    },
    makeArray: function(){
        var myArray = [];
        for(var i = start; i < end; i++) {
            myArray.push(i);
        }
        return myArray;
    },


    //mouseDown: function(){
    //      this.timer = game.time.events.loop(Phaser.Time.SECOND/1000, this);
    //},
    mouseDown: function(){
        //if(this.hero.y != this.startY){
        //    return;
        //}
        this.doJump();

    },
    doJump: function(){
        this.hero.body.velocity.y = -250;
    },

    update: function(){
        game.physics.arcade.collide(this.hero, this.ground);
    },
    gameOver: function () {
        game.state.start("gameOver");
    }
}