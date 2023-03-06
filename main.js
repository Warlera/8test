const player = document.querySelector('.audio'),
      play = document.querySelector('.play'),
      pause = document.querySelector('.pause'),
      file = document.querySelector('.file'),
      next = document.querySelector('.next_btn')

const songs = ['1','2','3','4','5','6','7','8','9','10',
'11','12','13','14','15','16','17','18','19',
'20','21','22','23','24','25','26','27','28','29',
'30','31','32','33','34','35','36','37','38','39',
'40','41','42','43','44','45','46','47','48','49',,
'50','51','52','53','54','55','56','27','58','59',
'60','61','62','63','64','65','66','67','68','69',
'70','71','72','73','74','75','76','77','78','79',
'80','81','82','83','84','85','86','87','88','89',
'90']
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let songIndex = getRandomInt(songs.length);
function Song(x) {
    file.src = 'https://cdn.megafonevent.ru/'+ x +'.mp3' 
    // file.src = x +'.mp3'   
}
Song(songs[songIndex])
document.addEventListener('DOMContentLoaded', () => {
    let audio = document.querySelector('audio');
    
    audio.volume = 0.6;
}, false);
function playSong() {
    file.play()
    play.classList.add('hidden')
    pause.classList.remove('hidden')

}
function pauseSong() {
    file.pause()
    play.classList.remove('hidden')
    pause.classList.add('hidden')
}
play.addEventListener('click', () => {
    file.currentTime = Math.random() * (file.duration - 1) + 1;
    playSong();
})
pause.addEventListener('click', () => {
    pauseSong()
})
function nextSong() {
    songIndex = getRandomInt(songs.length)
    if (songIndex > songs.length -1) {
        songIndex = 0
    }
    Song(songs[songIndex])
    playSong()
}
 next.addEventListener('click', () => {
    nextSong()
    playSong()
})
file.addEventListener('ended', nextSong)
let glowInTexts = document.querySelectorAll(".glowIn");
glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.07}s`;
    glowInText.append(span);
  });
});