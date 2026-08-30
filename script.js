const startButton = document.getElementById("startButton");
const mainContent = document.getElementById("mainContent");
const musicButton = document.getElementById("musicButton");
const player = document.getElementById("youtubePlayer");

let musicPlaying = false;

function playMusic() {
    player.contentWindow.postMessage(
        JSON.stringify({
            event: "command",
            func: "playVideo",
            args: []
        }),
        "*"
    );

    musicPlaying = true;
    musicButton.textContent = "🔊";
}

function pauseMusic() {
    player.contentWindow.postMessage(
        JSON.stringify({
            event: "command",
            func: "pauseVideo",
            args: []
        }),
        "*"
    );

    musicPlaying = false;
    musicButton.textContent = "🎵";
}

startButton.addEventListener("click", () => {

    mainContent.classList.add("show");

    playMusic();

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

});

musicButton.addEventListener("click", () => {

    if (musicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }

});
