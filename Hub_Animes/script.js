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

// Funcao de alteracao de fundo \\

function alterarCorDeFundo() {
    document.body.classList.toggle("tema-godzilla");
}

// funcao calcular media \\

function calcularMedia() {
    const notas = document.querySelectorAll("table tbody tr td:last-child");
    if (notas.length === 0) return;
  
    let soma = 0;
    let count = 0;
  
    notas.forEach(td => {
      const valor = parseFloat(td.textContent);
      if (!isNaN(valor)) {
        soma += valor;
        count++;
      }
    });
  
    if (count === 0) return;
  
    const media = soma / count;
  
    // Remove card antigo se existir
    const antigo = document.querySelector(".card-media");
    if (antigo) antigo.remove();
  
    // Cria o novo card
    const card = document.createElement("div");
    card.classList.add("card-media");
    card.innerHTML = `
      <h3>📊 Média das Notas</h3>
      <p>A média das séries favoritas é <strong>${media.toFixed(2)}</strong>.</p>
    `;
  
    // Adiciona no local correto
    document.getElementById("resultadoMedia").appendChild(card);
  }
  

// funcao mostrar a data atual \\

function mostrarDataAtual() {
    const rodape = document.querySelector("footer p");
    if (!rodape) return;

    function atualizar() {
        const agora = new Date();
        rodape.innerHTML = `&copy; 2025 Animes_HUB | ${agora.toLocaleString()}`;
    }

    atualizar();
    setInterval(atualizar, 1000);
}

// Liga as funções aos eventos \\

document.addEventListener("DOMContentLoaded", () => {
    mostrarDataAtual();

    const form = document.querySelector("form");
    if (form) form.addEventListener("submit", validarFormulario);

    const header = document.querySelector("header");
    if (header) {
        const botao = document.createElement("button");
        botao.textContent = "🎨 Tema Godzilla";
        botao.classList.add("botao-tema");
        botao.onclick = alterarCorDeFundo;
        header.appendChild(botao);
    }

    const tabela = document.querySelector("table");
    if (tabela) {
        const botaoMedia = document.createElement("button");
        botaoMedia.textContent = " Calcular Média";
        botaoMedia.classList.add("botao-media");
        botaoMedia.onclick = calcularMedia;
        tabela.parentElement.appendChild(botaoMedia);
    }
});

// Função: Salvar dados do formulário (contato.html) \\

function salvarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const preferido = document.getElementById("preferido").value.trim();
    const nota = document.getElementById("nota").value.trim();
    const datahora = document.getElementById("datahora").value;
    const avaliacao = document.getElementById("avaliacao").value;

    if (!nome || !preferido || !nota) {
        alert("⚠️ Preencha todos os campos obrigatórios!");
        return;
    }

    const novaEntrada = {
        nome,
        preferido,
        nota,
        datahora,
        avaliacao
    };

    const dados = JSON.parse(localStorage.getItem("avaliacoes")) || [];
    dados.push(novaEntrada);
    localStorage.setItem("avaliacoes", JSON.stringify(dados));

    alert("✅ Dados salvos! Vá para a página de Favoritos (tabela).");
    document.querySelector("form").reset();
}

// Função: Mostrar dados salvos (tabela.html) \\

function carregarTabela() {
    const tbody = document.querySelector("tbody");
    if (!tbody) return;

    const dadosSalvos = JSON.parse(localStorage.getItem("avaliacoes")) || [];

    if (dadosSalvos.length > 0) {
        dadosSalvos.forEach(item => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
          <td>${item.preferido}</td>
          <td>${item.datahora ? new Date(item.datahora).getFullYear() : "-"}</td>
          <td>Avaliação: ${item.avaliacao}</td>
          <td>${item.nota}</td>
        `;
            tbody.appendChild(linha);
        });
    } else {
        const msg = document.createElement("tr");
        msg.innerHTML = `<td colspan="4">📭 Nenhuma série cadastrada ainda. Vá até a página de Contato e envie sua avaliação!</td>`;
        tbody.appendChild(msg);
    }
}




