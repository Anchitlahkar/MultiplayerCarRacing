var database;
var gameState = 0, PlayerCount = 0;
var form,player,game;
var allPlayers,distance = 0;
var car1,car2,car3,car4;
var carArray = []
var car1Img,car2Img,car3Img,car4Img;
var groundImg,trackImg
var cars_End = 0



function preload() {
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")

    groundImg = loadImage("images/ground.png")
    
    trackImg = loadImage("images/track.jpg")

    Rank1Img = loadImage("images/Rank1.png")
    Rank2Img = loadImage("images/Rank2.png")
    Rank3Img = loadImage("images/Rank3.png")
}

function setup(){
    database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);

    game = new Game()
    game.getState()
    game.start()
   
}

function draw(){
    // background("white");
    if(PlayerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
    if(gameState===2){
        game.end();
    }
}

