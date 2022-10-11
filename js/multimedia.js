const videos = document.querySelectorAll("#selection-video .el-grid-multimedia a");
const podcasts = document.querySelectorAll("#selection-podcast .el-grid-multimedia a");
const lightbox = document.getElementById('lightbox-alert');
let iframe = lightbox.querySelector('iframe');

videos.forEach((video, index) => {
    video.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        lightbox.classList.add('el-active');
        readMultimedia(video.href, 'YouTube video player')
    });
});

podcasts.forEach((audio, index) => {
    audio.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        lightbox.classList.add('el-active');
        readMultimedia(audio.href, 'Spotify audio player')
    });
});

lightbox.addEventListener('click', () => {
    iframe.src = '';
    iframe.title = '';
    lightbox.classList.remove('el-active');
});

function readMultimedia(src, title){
    lightbox.classList.add('el-active');
    iframe.src = src;
    iframe.title = title;
}