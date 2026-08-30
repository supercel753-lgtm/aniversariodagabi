"use strict";

const intro =
document.getElementById("intro");

const openButton =
document.getElementById("openButton");

const gift =
document.getElementById("gift");

const mainContent =
document.getElementById("mainContent");

const youtubeFrame =
document.getElementById("youtubePlayer");

const confettiButton =
document.getElementById("confettiButton");

let surpriseOpened = false;

/* =========================
ABRIR SURPRESA
========================= */

function openSurprise() {

```
if (surpriseOpened) {
    return;
}

surpriseOpened = true;

console.log("🎁 Abrindo surpresa...");


/*
 * Envia o comando PLAY para o player
 * incorporado do YouTube.
 */

youtubeFrame.contentWindow.postMessage(
    JSON.stringify({
        event: "command",
        func: "playVideo",
        args: []
    }),
    "*"
);


/* Fecha a tela inicial */

intro.classList.add(
    "hidden-intro"
);


/* Mostra o site */

mainContent.classList.remove(
    "hidden"
);


/* Confetes */

createConfetti(60);


window.scrollTo({
    top: 0,
    behavior: "instant"
});


console.log("🎵 Tentativa de iniciar música.");
```

}

/* =========================
EVENTOS
========================= */

openButton.addEventListener(
"click",
openSurprise
);

gift.addEventListener(
"click",
openSurprise
);

/* =========================
CONFETES
========================= */

function createConfetti(
amount = 80
) {

```
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
            12 +
            Math.random() * 20
        ) + "px";


    confetti.style.animationDuration =
        (
            3 +
            Math.random() * 4
        ) + "s";


    confetti.style.animationDelay =
        (
            Math.random() * 1.5
        ) + "s";


    document.body.appendChild(
        confetti
    );


    setTimeout(
        () => confetti.remove(),
        8000
    );

}
```

}

/* =========================
BOTÃO COMEMORAR
========================= */

confettiButton.addEventListener(
"click",
() => {

```
    createConfetti(120);

    console.log(
        "🎉 Mais confetes!"
    );

}
```

);

/* =========================
DEBUG
========================= */

console.log(
"%c🎂 SITE DE ANIVERSÁRIO",
"font-size:20px;font-weight:bold"
);

console.log(
"✅ JavaScript carregado."
);

/* =========================
DEBUG DAS FOTOS
========================= */

document
.querySelectorAll("img")
.forEach(
(image) => {

```
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
```

