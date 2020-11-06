class Form{
    constructor(){
        this.input = createInput("Name")
        this.title = createElement('h1')
        this.button = createButton('Play')
        this.reset = createButton('Reset')
        this.greeting = createElement('h3')
    }
    display(){
        this.title.html("Car Racing Game")
        this.title.position(width/2-50,50)

        this.input.position(width/2-25,height/2-150)
        
        this.button.position(width/2-25,height/2-100)

        this.reset.position(width-100,20)

        this.button.mousePressed(()=>{
                this.input.hide()
                this.button.hide()

                player.name = this.input.value()
                PlayerCount = PlayerCount + 1
                player.index = PlayerCount

                player.update()
                player.updateCount(PlayerCount)

                this.greeting.html("Hello "+ "  " + player.name)
                this.greeting.position(width/2-25,height/2-200)
            }
        )

        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
            Player.updateCarsEnd(0)
            
        })
        
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
}