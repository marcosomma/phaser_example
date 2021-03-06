Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
    preload: function() {
        this.preloadBg = this.add.sprite((Ball._WIDTH-297)*0.5, (Ball._HEIGHT-145)*0.5, 'preloaderBg');
        this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('ball', 'assets/ball.png');
        this.load.image('hole', 'assets/hole.png');
        this.load.image('element-w', 'assets/element-w.png');
        this.load.image('element-h', 'assets/element-h.png');
        this.load.image('panel', 'assets/panel.png');
        this.load.image('title', 'assets/title.png');
        this.load.image('button-pause', 'assets/button-pause.png');
        this.load.image('screen-bg', 'assets/screen-bg.png');
        this.load.image('screen-mainmenu', 'assets/screen-mainmenu.png');
        this.load.image('screen-howtoplay', 'assets/screen-howtoplay.png');
        this.load.image('border-horizontal', 'assets/border-horizontal.png');
        this.load.image('border-vertical', 'assets/border-vertical.png');

        this.load.spritesheet('button-audio', 'assets/button-audio.png', 35, 35);
        this.load.spritesheet('button-start', 'assets/button-start.png', 146, 51);

        this.load.audio('audio-bounce', ['assets/bounce.ogg', 'assets/bounce.mp3', 'assets/bounce.m4a']);
    },
    create: function() {
        this.game.state.start('MainMenu');
    }
};