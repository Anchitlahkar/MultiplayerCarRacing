class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState= data.val();
        })
    }

    update(state){
        database.ref('/').update({
            'gameState': state
        });
    }

    start(){
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();

            car1 = createSprite(100,200)
            car1.addImage(car1Img)

            car2 = createSprite(300,200)
            car2.addImage(car2Img) 

            car3 = createSprite(500,200)
            car3.addImage(car3Img) 

            car4 = createSprite(700,200)
            car4.addImage(car4Img) 

            carArray=[car1,car2,car3,car4]
        }
    }
    play(){
        form.hide();
        textSize(30)
        text("Game Start", 120,100);
        Player.getPlayerInfo();
        player.getCarsEnd();

        if(allPlayers!==undefined){
            background(198,135,108)
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)

            var index = 0
            var x = 175
            var y

            for (var plr in allPlayers) {
                index = index + 1
                x = x +200
                y = displayHeight - allPlayers[plr].distance
                carArray[index-1].x = x
                carArray[index-1].y = y

                if(index === player.index){
                    stroke(10)
                    fill("red")
                    ellipse(x,y,70,70)
                    carArray[index-1].shapeColor ="red"
                    camera.position.x = displayWidth/2
                    camera.position.y = carArray[index-1].y
                }
            }
        }
        
        if(keyIsDown(UP_ARROW) && player.index !==null){
            player.distance+=50;
            player.update();
        }

        if(player.distance>3700){
            gameState = 2
            console.log("insidePlay  " + player.rank)
            player.rank = cars_End
            Player.updateCarsEnd();
            player.update();
        }

        drawSprites()
    }
    
    end(){
        console.log("Game End")
        console.log("Player Rank "+player.rank)
        
        Player.getPlayerInfo()
        
        image(Rank1Img,width/2,height/2-100)
        image(Rank2Img,width/2+100,height/2+50)
        image(Rank3Img,width/2-100,height/2-50)

    }
}