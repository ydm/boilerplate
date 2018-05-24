/*global me */

(function (window, me) {
    'use strict';

    /* Game namespace */
    window.game = {

        // an object where to store game information
        data: {
            // score
            score: 0
        },


        // Run on page load.
        "onload": function () {
            // Initialize the video.
            if (!me.video.init(960, 640, {wrapper: "screen", scale: "auto"})) {
                window.alert("Your browser does not support HTML5 canvas.");
                return;
            }

            // Initialize the audio.
            me.audio.init("mp3,ogg");

            // set and load all resources.
            // (this will also automatically switch to the loading screen)
            me.loader.preload(this.resources, this.loaded.bind(this));
        },

        // Run on game resources loaded.
        "loaded": function () {
            me.state.set(me.state.MENU, new this.TitleScreen());
            me.state.set(me.state.PLAY, new this.PlayScreen());

            // add our player entity in the entity pool
            me.pool.register("mainPlayer", this.PlayerEntity);

            // Start the this.
            me.state.change(me.state.PLAY);
        }
    };
}(window, me));
