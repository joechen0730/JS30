;(function(){
const video = document.querySelector('.viewer')
const toggle = document.querySelector('.toggle');
const skip = document.querySelectorAll('.skip');
const slider = document.querySelectorAll('.player__slider');
const progess = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const videoTimeEnd = document.querySelector('.video__end');
const videoTimeStart = document.querySelector('.video__start');

function toggle_Video() {
  let method = video.paused ? 'play' : 'pause';
  video[method]();
}
function update_Button() {
  let icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}
function skip_Video(second) {
  video.currentTime += parseFloat(second);
}
function ClickSkip_Video() {
  let second = this.dataset.skip;
  video.currentTime += parseFloat(second);
}
function slider_Video() {
  video[this.name] = this.value
}
function progess_Video() {
  let current = video.currentTime;
  let duration = video.duration;
  const percent = (current / duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  let videoTime =  [{
    'videoStamp': videoTimeStart,
    'time': current
    }, {
      'videoStamp': videoTimeEnd,
      'time': duration
    }]
  progess_videoTime(videoTime)
}
function progess_videoTime(videoTime) {
  videoTime.forEach(time_arr => {
    let time = time_arr.time;
    let el = time_arr.videoStamp;
    let hr = Math.floor(time / 3600);
    let min = Math.floor((time - (hr * 3600)) / 60);
    let sec = parseInt( time - (hr * 3600) - (min * 60));
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;
    (hr >=1) ?  hr += ':' : hr = ''
    el.textContent = hr + min + ':' + sec;
  })
}
function scrub_Video(e) {
  let scrubTime = (e.offsetX / progess.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
toggle.addEventListener('click', toggle_Video);
video.addEventListener('click', toggle_Video);
video.addEventListener('play', update_Button);
video.addEventListener('pause', update_Button);
video.addEventListener('timeupdate', progess_Video);
skip.forEach(e => e.addEventListener('click', ClickSkip_Video));
slider.forEach(e => e.addEventListener('change', slider_Video));
slider.forEach(e => e.addEventListener('mousemove', slider_Video));
document.addEventListener('keyup', e => { 
    if(e.keyCode === 32) toggle_Video();
    if(e.keyCode === 37) skip_Video(-5);
    if(e.keyCode === 39) skip_Video(5);
  })
let mousedown = false;
progess.addEventListener('mousedown', () => { mousedown = true });
progess.addEventListener('mouseup', () => { mousedown = false });
progess.addEventListener('mousemove', (e) => { mousedown && scrub_Video(e) });
progess.addEventListener('click', scrub_Video);



})()