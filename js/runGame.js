var runGame = {
    preload: function () {
        game.load.image('background', 'assets/tempBackground.png');
        game.load.image('ground', 'assets/ground2.png');
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
        background = game.add.tileSprite(0, 0, 800, 600, 'background');

        //add ground
        this.ground = game.add.sprite(0, game.height * .9, 'ground');

        //add the hero in
        this.hero = game.add.sprite(game.width*.2, this.ground.y - 100, 'hero');

        //enable physics for hero 
        game.physics.enable(this.hero, Phaser.Physics.ARCADE);
        game.physics.enable(this.ground, Phaser.Physics.ARCADE);

        this.hero.body.gravity.y = 700;
        this.hero.body.bounce.set(0.5,0.5);
        this.hero.body.colliderWorldBounds = true;
        this.ground.body.immovable = true;

        //set Listeners
        //game.input.onUp.add(this.mouseUp, this);
        this.startY = this.hero.y;
        
        game.input.onDown.add(this.mouseDown, this);

        this.rocks = game.add.group();
        this.makeRocks();
        this.rocks.x = game.width - this.rocks.width;
        this.rocks.y=this.ground.y-50;
    
    },
    makeRocks: function() {
        this.rocks.removeAll();
        var rock = game.add.sprite(0, 0, "rock");
        this.rocks.add(rock);

        this.rocks.x = game.width - this.rocks.width;
        this.rocks.y = this.ground.y - 50;

        //loop through each rock + apply physics
        this.rocks.forEach(function(rock) {
            game.physics.enable(rock, Phaser.Physics.ARCADE);
            rock.body.velocity.x = -150;
            rock.body.gravity.y = 4;
            rock.body.bounce.set(1,1);
        })

        /*var wallHeight=game.rnd.integerInRange(2, 6);
        for (var i = 0; i < wallHeight; i++) {
            var rock = game.add.sprite(0, -i * 25, "rock");
            this.rocks.add(rock);
        }*/
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
        game.debug.text('Elapsed seconds: ' + this.game.time.totalElapsedSeconds(), 32, 32);
        background.tilePosition.x -= 2.5;
        game.physics.arcade.collide(this.hero, this.ground)
        game.physics.arcade.collide(this.hero, this.rocks, this.gameOver, null, this);
        game.physics.arcade.collide(this.ground, this.rocks);
        game.physics.arcade.collide(this.rocks);

        var firstRock = this.rocks.getChildAt(0);
        //if off screen reset
        if(firstRock.x < -game.width) {
            this.makeRocks();
        }
    },
    gameOver: function () {
        game.state.start("gameOver");
    }
}