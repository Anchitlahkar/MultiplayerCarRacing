class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = 0;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",function (data) {
            PlayerCount = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update(
            {
                'playerCount' : count
            }
        )
    }
    update(){
        var PlayerIndex = "Players/Player" + this.index

        database.ref(PlayerIndex).set(
            {
                name : this.name,
                distance : this.distance,
                rank : this.rank
            }
        )
    }
    static getPlayerInfo() {
        var playerInfoRef = database.ref('Players')
        playerInfoRef.on("value",function (data){
                allPlayers = data.val()
            }
        )
    }

    getCarsEnd(){
        var carEndRef = database.ref('carsEnd')
        carEndRef.on("value",(data)=>{
            cars_End = data.val()
        })
    }

    static updateCarsEnd(){
        database.ref('/').update({
            carsEnd : cars_End + 1
        })
        this.rank += 1
    }
}