"use strict";


/* =========================================
   ELEMENTOS
========================================= */

const intro =
    document.getElementById("intro");

const openButton =
    document.getElementById("openButton");

const gift =
    document.getElementById("gift");

const mainContent =
    document.getElementById("mainContent");

const music =
    document.getElementById("backgroundMusic");

const confettiButton =
    document.getElementById("confettiButton");


/* =========================================
   CONFIGURAÇÕES
========================================= */

music.volume = 0.7;


/* =========================================
   ABRIR SURPRESA
========================================= */

async function openSurprise() {

    console.log(
        "🎁 Abrindo surpresa..."
    );


    /*
     * IMPORTANTE:
     *
     * A música é iniciada dentro de uma
     * interação do usuário.
     *
     * Isso aumenta muito a chance de o
     * navegador permitir a reprodução.
     */

    try {

        await music.play();

        console.log(
            "🎵 Música iniciada!"
        );

    } catch (error) {

        console.warn(
            "⚠️ O navegador bloqueou a reprodução automática:",
            error
        );

    }


    /* =====================================
       ANIMAÇÃO DA TELA INICIAL
    ====================================== */

    intro.classList.add(
        "hidden-intro"
    );


    /* =====================================
       MOSTRAR CONTEÚDO
    ====================================== */

    mainContent.classList.remove(
        "hidden"
    );


    /* =====================================
       CONFETES INICIAIS
    ====================================== */

    createConfetti(60);


    /* =====================================
       VOLTAR PARA O TOPO
    ====================================== */

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =========================================
   EVENTOS DE ABERTURA
========================================= */

openButton.addEventListener(
    "click",
    openSurprise
);


gift.addEventListener(
    "click",
    openSurprise
);


/* =========================================
   CONFETES
========================================= */

function createConfetti(
    amount = 80
) {

    const symbols = [

        "💖",
        "💕",
        "✨",
        "🎉",
        "🌸",
        "⭐",
        "💗"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );


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
            Math.random() * 100
            + "vw";


        confetti.style.fontSize =
            (
                12
                +
                Math.random() * 20
            )
            + "px";


        confetti.style.animationDuration =
            (
                3
                +
                Math.random() * 4
            )
            + "s";


        confetti.style.animationDelay =
            (
                Math.random() * 1.5
            )
            + "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(
            () => {

                confetti.remove();

            },
            8000
        );

    }

}


/* =========================================
   BOTÃO DE COMEMORAÇÃO
========================================= */

confettiButton.addEventListener(
    "click",
    () => {

        console.log(
            "🎉 Mais confetes!"
        );

        createConfetti(120);

    }
);


/* =========================================
   DEBUG — SITE
========================================= */

console.log(
    "%c🎂 SITE DE ANIVERSÁRIO",
    "font-size:20px;font-weight:bold"
);

console.log(
    "✅ JavaScript carregado."
);


/* =========================================
   DEBUG — MÚSICA
========================================= */

console.log(
    "🎵 Procurando musica.mp3..."
);


music.addEventListener(
    "canplaythrough",
    () => {

        console.log(
            "✅ musica.mp3 carregada corretamente!"
        );

    }
);


music.addEventListener(
    "error",
    () => {

        console.error(
            "❌ ERRO: musica.mp3 não foi encontrada."
        );

        console.error(
            "Verifique se o arquivo está na mesma pasta do index.html."
        );

    }
);


/* =========================================
   DEBUG — FOTOS
========================================= */

const images =
    document.querySelectorAll(
        "img"
    );


images.forEach(
    (image) => {

        image.addEventListener(
            "load",
            () => {

                console.log(
                    "✅ Foto carregada:",
                    image.src
                );

            }
        );


        image.addEventListener(
            "error",
            () => {

                console.warn(
                    "⚠️ Foto não encontrada:",
                    image.src
                );

            }
        );

    }
);


/* =========================================
   PROTEÇÃO CONTRA DUPLO CLIQUE
========================================= */

let surpriseOpened = false;


openButton.addEventListener(
    "click",
    () => {

        if (surpriseOpened) {

            return;

        }

        surpriseOpened = true;

    }
);
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
