const intro = document.getElementById("intro");
const openButton = document.getElementById("openButton");
const gift = document.getElementById("gift");

const mainContent =
    document.getElementById("mainContent");

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

const confettiButton =
    document.getElementById("confettiButton");

let musicPlaying = false;


/* =========================
   ABRIR SURPRESA
========================= */

async function openSurprise() {

    intro.classList.add("hidden-intro");

    mainContent.classList.remove("hidden");

    document.body.style.overflow = "auto";

    createConfetti(40);

    try {

        await music.play();

        musicPlaying = true;

        musicButton.textContent =
            "🔊 Música ligada";

    } catch (error) {

        musicButton.textContent =
            "🎵 Tocar música";

        console.log(
            "O navegador bloqueou o autoplay."
        );
    }

}


/* BOTÃO */

openButton.addEventListener(
    "click",
    openSurprise
);


/* PRESENTE */

gift.addEventListener(
    "click",
    openSurprise
);


/* =========================
   MÚSICA
========================= */

musicButton.addEventListener(
    "click",
    async () => {

        if (!musicPlaying) {

            try {

                await music.play();

                musicPlaying = true;

                musicButton.textContent =
                    "🔊 Música ligada";

            } catch {

                musicButton.textContent =
                    "⚠️ Coloque musica.mp3";

            }

        } else {

            music.pause();

            musicPlaying = false;

            musicButton.textContent =
                "🔇 Música desligada";
        }

    }
);


/* =========================
   CONFETES
========================= */

function createConfetti(amount = 80) {

    const symbols = [
        "💖",
        "💕",
        "✨",
        "🎉",
        "🌸",
        "⭐"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";

        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            12 +
            Math.random() * 20 +
            "px";


        confetti.style.animationDuration =
            3 +
            Math.random() * 4 +
            "s";


        confetti.style.animationDelay =
            Math.random() * 1.5 +
            "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(
            () => confetti.remove(),
            8000
        );
    }

}


/* BOTÃO DE COMEMORAÇÃO */

confettiButton.addEventListener(
    "click",
    () => {

        createConfetti(120);

    }
);


/* =========================
   DEBUG
========================= */

console.log(
    "%c🎂 Site de aniversário carregado!",
    "font-size:18px;color:#ff5f9e;font-weight:bold"
);


console.log(
    "Imagens esperadas: foto1.jpg, foto2.jpg, foto3.jpg, foto4.jpg"
);


console.log(
    "Música esperada: musica.mp3"
);


/* =========================
   FALLBACK DE IMAGENS
========================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                console.warn(
                    "Imagem não encontrada:",
                    image.src
                );

                image.style.background =
                    "linear-gradient(135deg,#ffb5d1,#9167ff)";

                image.alt =
                    "Foto não encontrada";

            }
        );

    });
