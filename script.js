/* ==========================================
   SITE DE ANIVERSÁRIO
========================================== */


/* ==========================================
   ELEMENTOS
========================================== */

const botaoAbrir =
    document.getElementById("abrirSurpresa");

const telaInicial =
    document.getElementById("inicio");

const conteudo =
    document.getElementById("conteudo");

const musica =
    document.getElementById("musica");

const velas =
    document.querySelectorAll(".candle");

const mensagemFinal =
    document.getElementById("mensagemFinal");


/* ==========================================
   ABRIR SURPRESA
========================================== */

botaoAbrir.addEventListener("click", () => {

    /* Esconde a tela inicial */

    telaInicial.classList.add("escondido");

    /* Mostra o conteúdo */

    conteudo.classList.remove("escondido");

    /* Tenta iniciar a música */

    musica.play().catch(() => {

        /*
         * Alguns navegadores podem bloquear
         * o áudio. Como o play aconteceu dentro
         * de um clique do usuário, normalmente
         * ele será permitido.
         */

        console.log(
            "O navegador bloqueou a reprodução automática."
        );

    });

    /* Vai para o começo do conteúdo */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   VELAS
========================================== */

velas.forEach((vela) => {

    vela.addEventListener("click", () => {

        /* Se já estiver apagada, não faz nada */

        if (vela.classList.contains("apagada")) {
            return;
        }


        /* Apaga a chama */

        vela.classList.add("apagada");


        /* Pequeno efeito de clique */

        vela.animate(
            [
                {
                    transform: "scale(1)"
                },

                {
                    transform: "scale(1.12)"
                },

                {
                    transform: "scale(1)"
                }
            ],
            {
                duration: 250,
                easing: "ease-out"
            }
        );


        /* Confere quantas velas foram apagadas */

        const apagadas =
            document.querySelectorAll(
                ".candle.apagada"
            );


        /* Se as duas foram apagadas */

        if (apagadas.length === velas.length) {

            mensagemFinal.classList.add("mostrar");


            /* Leva suavemente até a mensagem */

            setTimeout(() => {

                mensagemFinal.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 400);

        }

    });

});


/* ==========================================
   FALLBACK PARA A MÚSICA
========================================== */

/*
 * Se por algum motivo o navegador impedir
 * a reprodução inicial, o primeiro clique
 * em qualquer lugar da página tenta iniciar.
 */

document.addEventListener("click", () => {

    if (
        musica.paused &&
        !telaInicial.classList.contains("escondido")
    ) {
        return;
    }

    if (musica.paused) {

        musica.play().catch(() => {});

    }

});


/* ==========================================
   ERRO DAS FOTOS
========================================== */

/*
 * Se alguma foto não carregar,
 * o espaço fica visualmente discreto
 * em vez de quebrar o layout.
 */

const fotos =
    document.querySelectorAll(".foto-card img");

fotos.forEach((foto) => {

    foto.addEventListener("error", () => {

        foto.style.display = "none";

        foto.parentElement.classList.add(
            "foto-sem-imagem"
        );

    });

});


/* ==========================================
   CONSOLE
========================================== */

console.log(
    "🎂 Site de aniversário carregado com sucesso!"
);
