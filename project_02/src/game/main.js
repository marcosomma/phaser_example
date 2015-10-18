 /**
 *
 * Template pharse_games
 * __Author__: Marco Somma
 *
 **/
var Boot = loadScript("./js/core/Boot.min.js");
var Preloader = loadScript("./js/core/Preloader.min.js");
var MainMenu = loadScript("./js/core/MainMenu.min.js");
var Game = loadScript("./js/core/Game.min.js");
var Howto = loadScript("./js/core/Howto.min.js");
var main = {
    init: function() {
        game.state.add('Boot', Ball.Boot);
        game.state.add('Preloader', Ball.Preloader);
        game.state.add('MainMenu', Ball.MainMenu);
        game.state.add('Game', Ball.Game);
        game.state.add('Howto', Ball.Howto);
        game.state.start('Boot');
    }
};
var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'game', main);

function loadScript(url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    head.appendChild(script);
}