const openButton = document.getElementById("openButton");
const conteudo = document.getElementById("conteudo");

const musica = document.getElementById("musica");
const musicButton = document.getElementById("musicButton");

const candles = document.querySelectorAll(".number-candle");
const cakeMessage = document.getElementById("cakeMessage");

let musicaTocando = false;


/* --------------------------------
   ABRIR PRESENTE
-------------------------------- */

openButton.addEventListener("click", async () => {

    conteudo.classList.add("show");

    openButton.textContent = "💖 Presente aberto! 💖";

    openButton.disabled = true;

    /*
       O navegador permite iniciar o áudio
       porque isso acontece depois do clique
       da pessoa.
    */

    try {

        await musica.play();

        musicaTocando = true;

        musicButton.textContent = "🔊";

    } catch (erro) {

        console.log("Não foi possível iniciar a música:", erro);

        musicButton.textContent = "▶️";

    }

    setTimeout(() => {

        conteudo.scrollIntoView({
            behavior: "smooth"
        });

    }, 400);

});


/* --------------------------------
   BOTÃO DE MÚSICA
-------------------------------- */

musicButton.addEventListener("click", async () => {

    if (musica.paused) {

        try {

            await musica.play();

            musicaTocando = true;

            musicButton.textContent = "🔊";

        } catch (erro) {

            console.log("Erro ao tocar música:", erro);

        }

    } else {

        musica.pause();

        musicaTocando = false;

        musicButton.textContent = "🔇";

    }

});


/* --------------------------------
   VELAS
-------------------------------- */

candles.forEach(candle => {

    candle.addEventListener("click", () => {

        candle.classList.toggle("off");

        const velasAcesas =
            document.querySelectorAll(
                ".number-candle:not(.off)"
            );

        if (velasAcesas.length === 0) {

            cakeMessage.textContent =
                "✨ Feliz 27! Faça um pedido! 🎂💖";

            criarConfetes();

        } else {

            cakeMessage.textContent =
                "Mais uma vela apagada! ✨";

        }

    });

});


/* --------------------------------
   CONFETES
-------------------------------- */

function criarConfetes() {

    for (let i = 0; i < 35; i++) {

        const confete = document.createElement("div");

        confete.textContent =
            ["💖", "✨", "💕", "🎉", "⭐"]
            [Math.floor(Math.random() * 5)];

        confete.style.position = "fixed";

        confete.style.left =
            Math.random() * 100 + "vw";

        confete.style.top = "-30px";

        confete.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confete.style.zIndex = "999";

        confete.style.pointerEvents = "none";

        document.body.appendChild(confete);

        const duracao =
            2000 + Math.random() * 2500;

        confete.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duracao,
                easing: "ease-in",
                fill: "forwards"
            }
        );

        setTimeout(() => {

            confete.remove();

        }, duracao);

    }

}


/* --------------------------------
   EFEITO NAS FOTOS
-------------------------------- */

const fotos = document.querySelectorAll(".photo-grid img");

fotos.forEach(foto => {

    foto.addEventListener("click", () => {

        foto.classList.toggle("foto-grande");

    });

});
