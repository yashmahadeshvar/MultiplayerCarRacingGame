class Form{
    constructor(){
        this.input = createInput("").attribute('placeholder','Enter your name');
        this.button = createButton('Play');
		this.button.size(100);
		this.button.style('background-color','blue');
        this.greeting = createElement('h3');
        this.title = createElement('h2');
        this.reset = createButton('Reset Game');
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        //var title = createElement('h2');
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 100,50);

        this.input.position(displayWidth/2 - 90, displayHeight/2 - 180);
        this.button.position(displayWidth/2 - 30, displayHeight/2 - 100);
        this.reset.position(displayWidth-150,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2 - 120, displayHeight/4);
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            Player.updateCarsAtEnd(0);

            database.ref('/').update({
                players: null
              });
        });

    }
}