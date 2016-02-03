/*!
 * Inline Video Player v0.0.1
 * http://iwearshorts.com/
 *
 * Includes jQuery js
 * https://jquery.com/
 *
 * Copyright 2015 Mike Newell
 * Released under the MIT license
 * https://tldrlegal.com/license/mit-license
 *
 * Date: 2015-18-07
 *
 * TODO: look for the webkit-playsinline playsinline attributes and replace videos on iphones with canvas
 *
 */

var video = $('video')[0];
var canvas = $('canvas')[0];
var ctx = canvas.getContext('2d');
var lastTime = Date.now();
var animationFrame;
var framesPerSecond = 30;
function loop() {
    var time = Date.now();
    var elapsed = (time - lastTime) / 1000;

    // render
    if(elapsed >= ((1000/framesPerSecond)/1000)) {
        video.currentTime = video.currentTime + elapsed;
        canvas.width = window.innerWidth;
        canvas.height = 3*window.innerWidth*1.4906666667;
        ctx.drawImage(video, 0, 0, window.innerWidth, window.innerWidth*1.4906666667);
        lastTime = time;

    }

    // if we are at the end of the video stop
    var currentTime = (Math.round(parseFloat(video.currentTime)*10000)/10000);
    var duration = (Math.round(parseFloat(video.duration)*10000)/10000);
    if(currentTime >= duration) {
        console.log('currentTime: ' + currentTime + ' duration: ' + video.duration);
        return;
    }

    animationFrame = requestAnimationFrame(loop);
}

$( 'document' ).ready(function() {
  video.load();
  loop();
});
