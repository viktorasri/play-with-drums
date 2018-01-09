const soundPlay = document.querySelector('.play');
const soundStop = document.querySelector('.stop');
const soundPause=document.querySelector('.pause')
const track = document.querySelector(`audio[data-key="track1"]`);
const keys = Array.from(document.querySelectorAll('.key'));

window.addEventListener('keydown', playSound);
keys.forEach((btn)=>{
    btn.addEventListener('click',function () {
        const audio = document.querySelector(`audio[data-key="${btn.dataset.key}"]`);
        const key = document.querySelector(`div[data-key="${btn.dataset.key}"]`);
        if (!audio) return;
        drumPlay(key,audio);
    })
});

soundPause.addEventListener('click',function () {
    playerPause(soundPause)
});


soundStop.addEventListener('click',function () {
    track.currentTime = 0;
    playerPause(soundStop);
    soundPause.classList.remove('active')
})
soundPlay.addEventListener('click',function () {
    track.play();
    soundPlay.classList.add('active');
    soundPause.classList.remove('active')
});
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


//---------functions-----------------

function playerPause(action){
    track.pause();
    action.classList.add('active');
    soundPlay.classList.remove('active');
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('active');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    drumPlay(key,audio);
}
function drumPlay(key,audio) {
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
}

//kint.dataSet.key