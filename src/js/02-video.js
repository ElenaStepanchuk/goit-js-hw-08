import player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

iframePlayer.on('timeupdate', throttle(throttleTime, 1000));


function throttleTime(currentTime) {
    const videoTime = JSON.stringify(currentTime);
    localStorage.setItem(STORAGE_KEY, videoTime);
}

iframe.addEventListener('play', handleCurrentTime);

function handleCurrentTime() {
  const savedCurrentTime = JSON.stringify(currentTime);
  localStorage.setItem(STORAGE_KEY, savedCurrentTime);
}

let savedTime = localStorage.getItem(STORAGE_KEY);
let parsedTime = JSON.parse(savedTime);

iframePlayer.setCurrentTime(parsedTime?.['seconds'] || 0).then(function (seconds = 0) {});