function GameScene()
{
    var that = new Scene();


    that.Start = function ()
    {
        that.foes = [];
        


        that.playerShip = new PlayerShip(50,200, 100);
        that.playerShip.Start();
        


     
    }


    that.Update = function ()
    {


        that.playerShip.Update();


        for(var i = 0; i < that.foes.length; i++)
            that.foes[i].Update();

    }

    return that;
}
