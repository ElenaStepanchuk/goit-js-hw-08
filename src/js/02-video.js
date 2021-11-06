import player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);

throttle = require('lodash.throttle');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const throttleTime = _.throttle(onGetTimePlayer, 1000);

console.log(iframe);
console.log(iframePlayer);

player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


function onGetTimePlayer() {
    player
        .getCurrentTime()
        .then(function (seconds) {
            // seconds = the current playback position
            localStorage.setItem(LOCALSTORAGE_KEY, seconds);
        }).catch(function (error) {
            // an error occurred
            console.log(error);
        });
}

player.on('timeupdate', throttleTime);

const getCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(getCurrentTime).catch(function(error) {
    console.log(error);
});