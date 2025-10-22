// Inicialização automática \\

document.addEventListener("DOMContentLoaded", () => {
    mostrarDataAtual();

    // Se tiver formulário, ativa o salvamento \\
    const form = document.querySelector("form");
    if (form) form.addEventListener("submit", salvarFormulario);

    // Se for a página da tabela, carrega os dados \\
    carregarTabela();
});

// Funcao para Verificar se todos formularios foram preenchidos \\

function validarFormulario(event) {
    event.preventDefault(); // impede envio automático do formulário \\

    const nome = document.getElementById("nome")?.value.trim();
    const preferido = document.getElementById("preferido")?.value.trim();
    const nota = document.getElementById("nota")?.value.trim();

    if (nome === "" || preferido === "" || nota === "") {
        mostraMensagem("⚠️ Preencha todos os campos obrigatórios!", "alerta");
    } else {
        mostraMensagem("✅ Formulário enviado com sucesso!", "sucesso");
        document.querySelector("form").reset();
    }
}
// Funcao mostrarMensagem. Exibe mensagens de alerta ou sucesso \\

function mostrarMensagem(texto, tipo) {
    let mensagem = document.createElement("p");
    mensagem.textContent = texto;
    mensagem.classList.add("mensagem", tipo); // classes tratadas no CSS \\

    const form = document.querySelector("form");
    form.appendChild(mensagem);

    setTimeout(() => mensagem.remove(), 3);
}

// Funcao de cores TEMA GODZILLA \\

document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;

    // Paleta de cores Godzilla
    const temasGodzilla = [
        { cor: "#00bfff", gradiente: "linear-gradient(90deg, #0077ff, #00ccff)" },
        { cor: "#39ff14", gradiente: "linear-gradient(90deg, #39ff14, #00cc44)" },
        { cor: "#ff4500", gradiente: "linear-gradient(90deg, #ff4500, #ff6600)" },
        { cor: "#9b30ff", gradiente: "linear-gradient(90deg, #9b30ff, #cc33ff)" },
        { cor: "#00ffff", gradiente: "linear-gradient(90deg, #00ffff, #ff00ff)" }
    ];

    const temaAleatorio = temasGodzilla[Math.floor(Math.random() * temasGodzilla.length)];

    root.style.setProperty("--cor-godzilla", temaAleatorio.cor);
    root.style.setProperty("--gradiente-godzilla", temaAleatorio.gradiente);

    // Função auxiliar (hex → rgba)
    function hexToRgba(hex, alpha = 1) {
        const h = hex.replace("#", "");
        const bigint = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // ==========================
    // APLICAR COR GODZILLA EM LOGIN/CADASTRO
    // ==========================
    const cards = [document.getElementById("loginSection"), document.getElementById("cadastroSection")];

    cards.forEach(card => {
        if (!card) return;

        card.style.border = `2px solid ${temaAleatorio.cor}`;
        card.style.boxShadow = `0 8px 25px ${hexToRgba(temaAleatorio.cor, 0.25)}`;
        card.style.transition = "border-color 0.6s ease, box-shadow 0.6s ease";

        const titulos = card.querySelectorAll("h2, h3, .titulo-card");
        titulos.forEach(titulo => {
            titulo.style.color = temaAleatorio.cor;
            titulo.style.textShadow = `0 0 10px ${hexToRgba(temaAleatorio.cor, 0.7)}`;
            titulo.style.transition = "color 0.6s ease, text-shadow 0.6s ease";
        });

        const botoes = card.querySelectorAll("button, .btn, input[type='submit']");
        botoes.forEach(btn => {
            btn.style.background = temaAleatorio.gradiente;
            btn.style.border = `1px solid ${temaAleatorio.cor}`;
            btn.style.color = "#fff";
            btn.style.transition = "background 0.6s ease, border-color 0.6s ease, filter 0.3s";
            btn.addEventListener("mouseover", () => (btn.style.filter = "brightness(1.2)"));
            btn.addEventListener("mouseout", () => (btn.style.filter = "brightness(1)"));
        });

        const links = card.querySelectorAll("a, .link-login, .link-cadastro");
        links.forEach(link => {
            link.style.color = temaAleatorio.cor;
            link.style.transition = "color 0.6s ease";
            link.addEventListener("mouseover", () => (link.style.color = "#fff"));
            link.addEventListener("mouseout", () => (link.style.color = temaAleatorio.cor));
        });

        const inputs = card.querySelectorAll("input[type='text'], input[type='email'], input[type='password']");
        inputs.forEach(input => {
            input.style.border = `1px solid rgba(255,255,255,0.2)`;
            input.style.outline = "none";
            input.style.transition = "border-color 0.4s ease, box-shadow 0.4s ease";

            input.addEventListener("focus", () => {
                input.style.borderColor = temaAleatorio.cor;
                input.style.boxShadow = `0 0 10px ${hexToRgba(temaAleatorio.cor, 0.6)}`;
                input.style.color = temaAleatorio.cor;
            });

            input.addEventListener("blur", () => {
                input.style.borderColor = "rgba(255,255,255,0.2)";
                input.style.boxShadow = "none";
                input.style.color = "#fff";
            });
        });
    });

    // ==========================
    // TOGGLE DESCRIÇÃO (BOTÃO GODZILLA)
    // ==========================
    const botoesDescricao = document.querySelectorAll(".btn-godzilla-toggle");

    botoesDescricao.forEach((btn) => {
        // Aplica estilo Godzilla
        btn.style.background = temaAleatorio.gradiente;
        btn.style.border = `1px solid ${temaAleatorio.cor}`;
        btn.style.color = "#000";
        btn.style.transition = "all 0.3s ease";

        btn.addEventListener("mouseover", () => btn.style.filter = "brightness(1.2)");
        btn.addEventListener("mouseout", () => btn.style.filter = "brightness(1)");

        // Inicialmente escondida
        const card = btn.closest(".card");
        if (!card) return; // segurança
        const descricao = card.querySelector(".descricao");
        if (!descricao) return; // segurança

        descricao.classList.remove("mostrar");
        btn.textContent = "Mostrar Descrição";

        // Toggle apenas este card
        btn.addEventListener("click", () => {
            descricao.classList.toggle("mostrar");
            btn.textContent = descricao.classList.contains("mostrar")
                ? "Esconder Descrição"
                : "Mostrar Descrição";
        });
    });
});

// funcao calcular media \\

function calcularMedia() {
    const numberInputs = document.querySelectorAll(
        ".tabela-favoritos tbody tr td input[type='number']"
    );

    if (!numberInputs || numberInputs.length === 0) {
        alert("Nenhuma nota encontrada para calcular a média.");
        return;
    }

    let soma = 0;
    let count = 0;

    numberInputs.forEach((input) => {
        const val = parseFloat(input.value);
        if (!isNaN(val)) {
            soma += val;
            count++;
        }
    });

    if (count === 0) {
        alert("Nenhuma nota válida encontrada para calcular a média.");
        return;
    }

    const media = soma / count;
    mostrarCardMedia(media);
}

// funcao mostrar media \\

function mostrarCardMedia(media) {
    const antigo = document.querySelector(".card-media");
    if (antigo) antigo.remove();

    const card = document.createElement("div");
    card.classList.add("card-media");
    card.innerHTML = `
    <h3>📊 Média das Notas</h3>
    <p>A média das suas notas é <strong>${media.toFixed(2)}</strong>.</p>
    <button class="botao-fechar-media">✖ Fechar Resultado</button>
  `;

    const container = document.querySelector(".tabela-container") || document.body;
    container.appendChild(card);

    const btnFechar = card.querySelector(".botao-fechar-media");
    btnFechar.addEventListener("click", () => {
        card.classList.add("sumir");
        setTimeout(() => card.remove(), 400);
    });
}

// funcao mostrar a data atual \\

function mostrarDataAtual() {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString("pt-BR");
    const horaFormatada = dataAtual.toLocaleTimeString("pt-BR");
    const footer = document.querySelector("footer p");
    if (footer) {
        footer.innerHTML = `© 2025 Animes_HUB | ${dataFormatada}, ${horaFormatada}`;
    }
}

// Liga as funções aos eventos \\

document.addEventListener("DOMContentLoaded", () => {
    mostrarDataAtual();

    const tabela = document.querySelector(".tabela-favoritos");
    const container = document.querySelector(".tabela-container");

    if (tabela && container) {
        const botaoMedia = document.createElement("button");
        botaoMedia.textContent = "📊 Calcular Média";
        botaoMedia.classList.add("botao-media");
        botaoMedia.onclick = calcularMedia;
        container.appendChild(botaoMedia);
    }

    if (tabela) carregarTabela();
});

// Função: Salvar dados do formulário (contato.html) — AGORA POR CONTA DO USUÁRIO \\

function salvarFormulario(event) {
    event.preventDefault();

    // verifica login \\
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) {
        alert("⚠️ Faça login para salvar seus dados!");
        return;
    }

    const nome = document.getElementById("nome").value.trim();
    const preferido = document.getElementById("preferido").value.trim();
    const nota = document.getElementById("nota").value.trim();
    const datahora = document.getElementById("datahora").value;
    const comentario = document.getElementById("comentario").value.trim();

    if (!nome || !preferido || !nota) {
        alert("⚠️ Preencha todos os campos obrigatórios!");
        return;
    }

    const novaEntrada = { nome, preferido, nota, datahora, comentario };

    // cria uma chave única para cada usuário logado \\
    const chaveUsuario = `avaliacoes_${usuarioLogado.usuario}`;

    const dados = JSON.parse(localStorage.getItem(chaveUsuario)) || [];
    dados.push(novaEntrada);
    localStorage.setItem(chaveUsuario, JSON.stringify(dados));

    alert("✅ Dados salvos! Vá para a página de Favoritos (tabela).");
    document.querySelector("form").reset();
}

// Função: Mostrar dados salvos (tabela.html) — AGORA POR CONTA DO USUÁRIO \\

function carregarTabela() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const tbody = document.querySelector("tbody");
    if (!tbody) return;

    tbody.innerHTML = "";

    if (!usuarioLogado) {
        const msg = document.createElement("tr");
        msg.innerHTML = `<td colspan="5">⚠️ Faça login para ver suas avaliações.</td>`;
        tbody.appendChild(msg);
        return;
    }

    const chaveUsuario = `avaliacoes_${usuarioLogado.usuario}`;
    const dadosSalvos = JSON.parse(localStorage.getItem(chaveUsuario)) || [];

    if (dadosSalvos.length > 0) {
        dadosSalvos.forEach((item) => {
            const linha = document.createElement("tr");

            const dataFormatada = item.datahora
                ? new Date(item.datahora).toLocaleString("pt-BR", {
                    dateStyle: "short",
                    timeStyle: "short",
                })
                : "—";

            linha.innerHTML = `
        <td><input type="text" value="${item.preferido}" class="input-editar" disabled></td>
        <td><input type="datetime-local" value="${item.datahora || ""}" class="input-editar" disabled></td>
        <td class="celula-comentario">
          <div class="comentario-container">
            <p class="comentario-texto" style="display:none;">${item.comentario ? item.comentario.replace(/\n/g, '<br>') : "Sem comentário"}</p>
            <textarea class="input-editar comentario-edit" rows="3" disabled style="display:none;">${item.comentario || ""}</textarea>
            <button class="btn-toggle-comentario">Mostrar Comentário</button>
          </div>
        </td>
        <td><input type="number" min="0" max="10" value="${item.nota}" class="input-editar" disabled></td>
        <td>
          <button class="botao-editar">✏️ Editar</button>
          <button class="botao-salvar" style="display:none;">💾 Salvar</button>
          <button class="botao-cancelar" style="display:none;">🛑 Cancelar</button>
        </td>
      `;

            tbody.appendChild(linha);

            const btnEditar = linha.querySelector(".botao-editar");
            const btnSalvar = linha.querySelector(".botao-salvar");
            const btnCancelar = linha.querySelector(".botao-cancelar");
            const btnToggle = linha.querySelector(".btn-toggle-comentario");

            const pComentario = linha.querySelector(".comentario-texto");
            const taComentario = linha.querySelector(".comentario-edit");
            const inputs = linha.querySelectorAll(".input-editar");

            // === Mostrar/Esconder Comentário (igual à página inicial) ===
            btnToggle.addEventListener("click", () => {
                if (pComentario.style.display === "none" || pComentario.style.display === "") {
                    pComentario.style.display = "block";
                    btnToggle.textContent = "Esconder Comentário";
                } else {
                    pComentario.style.display = "none";
                    btnToggle.textContent = "Mostrar Comentário";
                }
            });

            // === Editar/Salvar/Cancelar ===
            btnEditar.addEventListener("click", () => {
                // salva valores originais e estado de exibição
                linha.dataset.original = JSON.stringify({
                    preferido: inputs[0].value,
                    datahora: inputs[1].value,
                    comentario: taComentario.value,
                    nota: inputs[3].value,
                    visivel: pComentario.style.display === "block" // salva estado
                });

                pComentario.style.display = "none";
                taComentario.style.display = "block";
                taComentario.disabled = false;

                // Oculta botão Mostrar/Esconder enquanto edita
                btnToggle.style.display = "none";

                inputs.forEach((i) => (i.disabled = false));
                btnEditar.style.display = "none";
                btnSalvar.style.display = "inline-block";
                btnCancelar.style.display = "inline-block";
            });

            btnSalvar.addEventListener("click", () => {
                const original = JSON.parse(linha.dataset.original || "{}");
                const estavaVisivel = original.visivel || false;

                item.preferido = inputs[0].value.trim();
                item.datahora = inputs[1].value;
                item.comentario = taComentario.value.trim();
                item.nota = inputs[3].value.trim();

                pComentario.innerHTML = item.comentario
                    ? item.comentario.replace(/\n/g, "<br>")
                    : "Sem comentário";

                taComentario.disabled = true;
                taComentario.style.display = "none";

                // 🔥 restaura estado anterior (mostrado ou escondido)
                pComentario.style.display = estavaVisivel ? "block" : "none";
                btnToggle.textContent = estavaVisivel ? "Esconder Comentário" : "Mostrar Comentário";

                // Mostra novamente o botão Mostrar/Esconder
                btnToggle.style.display = "inline-block";

                inputs.forEach((i) => (i.disabled = true));

                localStorage.setItem(chaveUsuario, JSON.stringify(dadosSalvos));

                btnSalvar.style.display = "none";
                btnCancelar.style.display = "none";
                btnEditar.style.display = "inline-block";

                alert("✅ Avaliação atualizada com sucesso!");
            });

            btnCancelar.addEventListener("click", () => {
                const original = JSON.parse(linha.dataset.original || "{}");
                if (original) {
                    inputs[0].value = original.preferido || "";
                    inputs[1].value = original.datahora || "";
                    taComentario.value = original.comentario || "";
                    inputs[3].value = original.nota || "";
                    pComentario.innerHTML = taComentario.value
                        ? taComentario.value.replace(/\n/g, "<br>")
                        : "Sem comentário";
                }

                taComentario.disabled = true;
                taComentario.style.display = "none";

                // 🔥 restaura também o estado anterior (mostrado/escondido)
                const estavaVisivel = original.visivel || false;
                pComentario.style.display = estavaVisivel ? "block" : "none";
                btnToggle.textContent = estavaVisivel ? "Esconder Comentário" : "Mostrar Comentário";

                // Mostra novamente o botão Mostrar/Esconder
                btnToggle.style.display = "inline-block";

                inputs.forEach((i) => (i.disabled = true));

                btnSalvar.style.display = "none";
                btnCancelar.style.display = "none";
                btnEditar.style.display = "inline-block";
            });
        });
    } else {
        const msg = document.createElement("tr");
        msg.innerHTML = `<td colspan="5">📭 Nenhuma série cadastrada ainda.</td>`;
        tbody.appendChild(msg);
    }
}

// BOTÃO DE LOGIN / SAIR NO TOPO \\

document.addEventListener("DOMContentLoaded", () => {
    const btnTopo = document.getElementById("btnLoginTopo");
    if (!btnTopo) return;

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    // Define o texto e ação do botão conforme o login \\
    if (usuarioLogado) {
        btnTopo.textContent = `👤 ${usuarioLogado.nome} (Sair)`;
        btnTopo.onclick = () => {
            if (confirm("Deseja realmente sair da conta?")) {
                localStorage.removeItem("usuarioLogado");
                window.location.href = "login.html";
            }
        };
    } else {
        btnTopo.textContent = "🔐 Login / Cadastro";
        btnTopo.onclick = () => {
            window.location.href = "login.html";
        };
    }
});

// SISTEMA DE LOGIN E CADASTRO \\

document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formLogin");
    const formCadastro = document.getElementById("formCadastro");
    const secLogin = document.getElementById("loginSection");
    const secCadastro = document.getElementById("cadastroSection");
    const btnMostrarCadastro = document.getElementById("mostrarCadastro");
    const btnMostrarLogin = document.getElementById("mostrarLogin");

    // Alternar entre login e cadastro
    if (btnMostrarCadastro && btnMostrarLogin) {
        btnMostrarCadastro.addEventListener("click", (e) => {
            e.preventDefault();
            secLogin.style.display = "none";
            secCadastro.style.display = "block";
        });

        btnMostrarLogin.addEventListener("click", (e) => {
            e.preventDefault();
            secCadastro.style.display = "none";
            secLogin.style.display = "block";
        });
    }

    // Cadastro de novo usuário
    if (formCadastro) {
        formCadastro.addEventListener("submit", (e) => {
            e.preventDefault();
            const nome = document.getElementById("nomeCadastro").value.trim();
            const usuario = document.getElementById("usuarioCadastro").value.trim();
            const senha = document.getElementById("senhaCadastro").value.trim();

            if (!nome || !usuario || !senha) {
                alert("⚠️ Preencha todos os campos!");
                return;
            }

            const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            const existe = usuarios.find(u => u.usuario === usuario);

            if (existe) {
                alert("⚠️ Este usuário já existe!");
                return;
            }

            usuarios.push({ nome, usuario, senha });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            alert("✅ Cadastro realizado com sucesso!");
            formCadastro.reset();

            // Voltar para login
            secCadastro.style.display = "none";
            secLogin.style.display = "block";
        });
    }

    // Login
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const usuario = document.getElementById("usuarioLogin").value.trim();
            const senha = document.getElementById("senhaLogin").value.trim();

            const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);

            if (user) {
                alert(`✅ Bem-vindo(a), ${user.nome}!`);
                localStorage.setItem("usuarioLogado", JSON.stringify(user));
                window.location.href = "index.html";
            } else {
                alert("❌ Usuário ou senha incorretos!");
            }
        });
    }
});