import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);
console.log(iframe);
console.log(iframePlayer);


const paused = iframePlayer.getPaused(iframe);
console.log(paused)

