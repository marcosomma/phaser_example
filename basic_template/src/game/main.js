 /**
 *
 * Template pharse_games
 * __Author__: Marco Somma
 *
 **/

var main = {
    init: function() {
        /****** DELETE ME!! *******/
        var text = "Template 1.0 Phaser V="+Phaser.VERSION + " works!";
        var style = { font: "24px Arial", fill: "#fff", align: "center" };
        var t = game.add.text(this.world.centerX, this.world.centerY, text, style);
        t.anchor.setTo(0.5, 0.5);
        /**^^^^^^^^ END ^^^^^^^^**/
    },
    preload: function() {
    },
    create: function(){
    },
    update: function() {
    }
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', main);