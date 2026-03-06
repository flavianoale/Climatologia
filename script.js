const questions = [
  {
    question: "Você tem solo argiloso, chuva prevista de 18 mm em 24h e cultura em V4. Qual manejo reduz melhor risco de encharcamento e hipóxia radicular?",
    options: [
      "Irrigar normalmente para garantir lâmina total",
      "Suspender irrigação, abrir drenagem superficial e reavaliar umidade após a chuva",
      "Aplicar ureia em cobertura antes da chuva para incorporar mais rápido",
      "Realizar escarificação profunda no mesmo dia da chuva",
    ],
    correct: 1,
    explanation: "Com chuva significativa em solo argiloso, a prioridade é evitar saturação e falta de oxigênio nas raízes.",
  },
  {
    question: "Em semeadura de milho safrinha, qual combinação climática aumenta mais o risco de falha de emergência?",
    options: [
      "Noite amena (20°C) e chuva leve no dia seguinte",
      "Temperatura do solo abaixo de 14°C e período seco após plantar",
      "Umidade relativa alta e vento fraco",
      "Radiação alta e solo com palhada",
    ],
    correct: 1,
    explanation: "Solo frio reduz metabolismo da semente e seca pós-plantio limita embebição uniforme.",
  },
  {
    question: "No manejo de ferrugem asiática da soja, qual cenário meteorológico exige maior atenção para aplicação preventiva?",
    options: [
      "Dias secos, UR < 45% e forte insolação",
      "Sequência de molhamento foliar noturno, UR elevada e temperaturas entre 18 e 26°C",
      "Frente fria com geada",
      "Ventos acima de 40 km/h com baixa nebulosidade",
    ],
    correct: 1,
    explanation: "Alta umidade e molhamento foliar sustentado favorecem infecção e progresso da doença.",
  },
  {
    question: "Qual indicador é mais útil para decidir irrigação em manejo técnico diário?",
    options: [
      "Temperatura máxima isolada",
      "ETc (ETo × Kc) acumulada e umidade real do solo",
      "Apenas umidade relativa do ar às 14h",
      "Velocidade do vento média mensal",
    ],
    correct: 1,
    explanation: "A demanda hídrica da cultura depende da ETc e deve ser confrontada com a água disponível no solo.",
  },
  {
    question: "Durante florescimento do feijoeiro, ocorrência de 3 noites > 24°C tende a causar principalmente:",
    options: [
      "Aumento de fixação de vagens",
      "Abortamento floral e redução de pegamento",
      "Maior eficiência de uso de água",
      "Aceleração da nodulação",
    ],
    correct: 1,
    explanation: "Estresse térmico em fase reprodutiva prejudica fecundação e retenção de estruturas.",
  },
  {
    question: "Para reduzir deriva em pulverização, qual janela operacional é mais adequada?",
    options: [
      "Vento de 18 km/h e UR 35%",
      "Vento entre 3 e 10 km/h, UR > 55% e temperatura moderada",
      "Vento nulo ao meio-dia com 36°C",
      "Rajadas variáveis e inversão térmica no amanhecer",
    ],
    correct: 1,
    explanation: "Faixa moderada de vento e maior UR reduzem evaporação de gotas e deslocamento fora do alvo.",
  },
  {
    question: "Se a previsão indica 70% de chance de chuva > 25 mm em 6h após adubação nitrogenada em cobertura, o melhor é:",
    options: [
      "Antecipar aplicação para aproveitar chuva intensa",
      "Postergar para evitar perdas por escorrimento e volatilização associada ao manejo inadequado",
      "Dobrar dose para compensar perdas",
      "Aplicar em solo encharcado para facilitar dissolução",
    ],
    correct: 1,
    explanation: "Chuva muito intensa logo após aplicação pode aumentar perdas e reduzir eficiência do nutriente.",
  },
  {
    question: "Em cana-de-açúcar, déficit hídrico prolongado no perfil explorado tende a refletir primeiro em:",
    options: [
      "Aumento do índice de área foliar",
      "Redução da expansão foliar e perfilhamento",
      "Elevação imediata do teor de sacarose",
      "Maior alongamento de colmos",
    ],
    correct: 1,
    explanation: "A planta reduz crescimento vegetativo para limitar transpiração sob limitação de água.",
  },
  {
    question: "Qual prática melhora conservação de água no solo em cenário de veranico frequente?",
    options: [
      "Solo descoberto para aquecer mais rápido",
      "Cobertura com palhada e manutenção de estrutura superficial",
      "Aumento de gradagens sucessivas",
      "Irrigação em horários de maior radiação",
    ],
    correct: 1,
    explanation: "Palhada reduz evaporação direta e ajuda a estabilizar temperatura e infiltração.",
  },
  {
    question: "Para café, qual condição aumenta risco de geada de radiação em baixadas?",
    options: [
      "Noite nublada e vento constante",
      "Noite de céu limpo, ar seco e vento fraco",
      "Chuva contínua noturna",
      "Forte advecção quente",
    ],
    correct: 1,
    explanation: "Perda radiativa intensa sob céu limpo e pouco vento favorece resfriamento próximo ao solo.",
  },
  {
    question: "Em horticultura protegida, VPD muito alto durante a tarde geralmente causa:",
    options: [
      "Abertura estomática máxima contínua",
      "Fechamento estomático e queda de fotossíntese",
      "Eliminação de doenças sem impacto fisiológico",
      "Maior turgor foliar",
    ],
    correct: 1,
    explanation: "Demanda evaporativa excessiva leva a fechamento estomático para evitar desidratação.",
  },
  {
    question: "Qual combinação favorece maior eficiência de uso da água em pivô central?",
    options: [
      "Aplicar lâmina alta em solo já próximo da capacidade de campo",
      "Lâminas fracionadas conforme ETc e monitoramento por sensores/tensiometria",
      "Irrigar só quando houver murcha visível",
      "Programar irrigação fixa sem considerar fase fenológica",
    ],
    correct: 1,
    explanation: "Fracionamento guiado por demanda e monitoramento reduz perdas por percolação e estresse.",
  },
  {
    question: "Em semeadura direta, chuva forte logo após plantio em área com baixa cobertura pode provocar:",
    options: [
      "Apenas incremento de emergência",
      "Selamento superficial e redução de emergência",
      "Correção natural de compactação profunda",
      "Aumento da temperatura noturna do solo",
    ],
    correct: 1,
    explanation: "Impacto de gotas e enxurrada podem formar crosta superficial dificultando emergência.",
  },
  {
    question: "Qual variável meteorológica é mais crítica para estimar risco de brusone em trigo?",
    options: [
      "Apenas fotoperíodo",
      "Período de molhamento de espiga associado à temperatura",
      "Pressão atmosférica média mensal",
      "Radiação UV isolada",
    ],
    correct: 1,
    explanation: "Molhamento prolongado com faixa térmica favorável eleva muito o risco de infecção.",
  },
  {
    question: "No algodão, ondas de calor na fase de botão floral podem resultar em:",
    options: [
      "Maior retenção de estruturas reprodutivas",
      "Queda de botões e menor potencial produtivo",
      "Aumento de ciclo vegetativo",
      "Supressão total da transpiração",
    ],
    correct: 1,
    explanation: "Estresse térmico em fase reprodutiva reduz retenção e compromete rendimento final.",
  },
  {
    question: "Qual decisão é mais adequada antes de uma frente fria com chuva intensa prevista para colheita de grãos?",
    options: [
      "Aguardar frente fria passar para iniciar qualquer operação",
      "Antecipar colheita de talhões maduros e priorizar logística de secagem",
      "Elevar umidade de armazenamento para evitar quebra",
      "Desligar aeração dos silos",
    ],
    correct: 1,
    explanation: "Antecipação reduz perdas por deterioração de campo e gargalos pós-colheita.",
  },
  {
    question: "Em pastagens, sequência de dias nublados e frios tende a:",
    options: [
      "Aumentar taxa de alongamento foliar",
      "Reduzir acúmulo de forragem por menor fotossíntese",
      "Elevar digestibilidade automaticamente",
      "Eliminar necessidade de ajuste de lotação",
    ],
    correct: 1,
    explanation: "Menor radiação e frio reduzem crescimento, exigindo ajuste de manejo animal.",
  },
  {
    question: "Para minimizar estresse térmico em bovinos leiteiros, qual manejo climático é mais efetivo?",
    options: [
      "Aumentar densidade animal sem sombreamento",
      "Sombra + ventilação + aspersão em horários críticos",
      "Restringir água para reduzir calor metabólico",
      "Confinar em instalação fechada sem troca de ar",
    ],
    correct: 1,
    explanation: "Combinação de sombra, vento e resfriamento evaporativo reduz carga térmica.",
  },
  {
    question: "Qual condição aumenta risco de fitotoxicidade em aplicação foliar?",
    options: [
      "Temperatura amena e UR alta",
      "Temperatura elevada, baixa UR e radiação intensa no momento da aplicação",
      "Pulverização no fim da tarde",
      "Nebulosidade com vento leve",
    ],
    correct: 1,
    explanation: "Ambiente muito quente e seco acelera evaporação, concentra produto e eleva risco de dano.",
  },
  {
    question: "Em manejo de irrigação por gotejo, o coeficiente de uniformidade baixo implica:",
    options: [
      "Distribuição homogênea e menor variabilidade",
      "Partes da área com déficit e outras com excesso hídrico",
      "Maior precisão sem necessidade de ajuste",
      "Independência total do tipo de solo",
    ],
    correct: 1,
    explanation: "Baixa uniformidade compromete eficiência agronômica e pode reduzir produtividade média.",
  },
  {
    question: "No planejamento de semeadura, usar previsão sazonal corretamente significa:",
    options: [
      "Tratar previsão como data exata de chuva",
      "Combinar tendência climática com risco local, janela de cultivo e histórico da área",
      "Ignorar solo e cultivar",
      "Definir manejo sem revisar previsão de curto prazo",
    ],
    correct: 1,
    explanation: "Previsão sazonal orienta probabilidade, mas decisão robusta integra múltiplas informações.",
  },
  {
    question: "Qual resposta da planta é típica sob déficit de pressão de vapor muito baixo (ar úmido) por longo período?",
    options: [
      "Transpiração sempre máxima e sem riscos sanitários",
      "Menor transpiração e possível aumento de doenças por microclima úmido",
      "Fechamento estomático permanente",
      "Inibição total da respiração",
    ],
    correct: 1,
    explanation: "Ar muito úmido reduz gradiente evaporativo e pode favorecer patógenos foliares.",
  },
  {
    question: "Após chuva de baixa intensidade em solo compactado, a infiltração tende a ser:",
    options: [
      "Sempre suficiente para recarregar perfil profundo",
      "Limitada na superfície, com maior risco de escorrimento em eventos seguintes",
      "Maior que em solo estruturado",
      "Independente da densidade do solo",
    ],
    correct: 1,
    explanation: "Compactação reduz macroporos, restringindo infiltração e armazenamento efetivo de água.",
  },
  {
    question: "Em fruticultura, chuva próxima à colheita aumenta risco de perda de qualidade principalmente por:",
    options: [
      "Aumento do teor de sólidos solúveis",
      "Rachadura de frutos e maior pressão de doenças",
      "Redução de turgidez",
      "Uniformização imediata de maturação",
    ],
    correct: 1,
    explanation: "Excesso de água próximo à colheita pode causar rachaduras e deterioração sanitária.",
  },
  {
    question: "Em anos de El Niño, no Sul do Brasil, uma estratégia prudente para culturas anuais costuma ser:",
    options: [
      "Desconsiderar drenagem por haver mais chuva",
      "Reforçar planejamento de drenagem e logística por maior chance de excesso hídrico",
      "Eliminar monitoramento de doenças",
      "Aumentar adubação sem ajuste de parcelamento",
    ],
    correct: 1,
    explanation: "Maior frequência de períodos chuvosos exige foco em tráfego, drenagem e fitossanidade.",
  },
  {
    question: "Qual combinação representa melhor uma decisão agronômica orientada por risco climático?",
    options: [
      "Escolher cultivar tardia sem olhar histórico de geada",
      "Ajustar ciclo da cultivar, época de semeadura e plano de irrigação com base em probabilidade de estresse",
      "Padronizar manejo em todas as fazendas, independentemente de microclima",
      "Usar apenas média anual de chuva",
    ],
    correct: 1,
    explanation: "Gestão de risco climático combina genética, calendário e manejo hídrico por ambiente produtivo.",
  },
];

const ttsRates = [1, 1.25, 1.5, 1.75, 2];

const state = { mode: "study", index: 0, score: 0, streak: 0, hits: 0, misses: 0, answered: false, autoRead: true, ttsRate: ttsRates[0], optionMap: [] };

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionText = document.getElementById("question-text");
const answersWrap = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const feedbackText = document.getElementById("feedback-text");
const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const medalEl = document.getElementById("medal");
const hitsEl = document.getElementById("hits");
const missesEl = document.getElementById("misses");
const accuracyEl = document.getElementById("accuracy");
const finalScoreEl = document.getElementById("final-score");
const ttsBtn = document.getElementById("tts-btn");
const ttsSpeedBtn = document.getElementById("tts-speed-btn");
const autoReadBtn = document.getElementById("auto-read-btn");

const modeButtons = Array.from(document.querySelectorAll(".mode-btn[data-mode]"));

let audioCtx;
function ensureAudioContext() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
}

function playTone(type = "click") {
  ensureAudioContext();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;
  const config = {
    click: { f1: 620, f2: 760, dur: 0.08, vol: 0.04 },
    correct: { f1: 620, f2: 920, dur: 0.16, vol: 0.06 },
    wrong: { f1: 300, f2: 180, dur: 0.2, vol: 0.06 },
  }[type];

  osc.type = type === "wrong" ? "sawtooth" : "sine";
  osc.frequency.setValueAtTime(config.f1, now);
  osc.frequency.exponentialRampToValueAtTime(config.f2, now + config.dur);
  gain.gain.setValueAtTime(config.vol, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + config.dur);

  osc.start(now);
  osc.stop(now + config.dur);
}

function speakText(text) {
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "pt-BR";
  utterance.rate = state.ttsRate;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

function updateTtsSpeedLabel() {
  ttsSpeedBtn.textContent = `⏱️ Velocidade TTS: ${state.ttsRate.toFixed(2).replace(/\.00$/, "")}x`;
}

function speakCurrentQuestion(auto = false) {
  const q = questions[state.index];
  const orderedOptions = state.optionMap.length ? state.optionMap.map((originalIdx) => q.options[originalIdx]) : q.options;
  const optionsText = orderedOptions.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join(". ");
  const intro = auto ? "Próxima pergunta." : "";
  speakText(`${intro} ${q.question}. Alternativas: ${optionsText}.`);
}

function speakFeedback(text) {
  speakText(text.replace("✔", "Correto.").replace("❌", "Incorreto."));
}

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playTone("click");
    modeButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.mode = btn.dataset.mode;
  });
});

autoReadBtn.addEventListener("click", () => {
  state.autoRead = !state.autoRead;
  autoReadBtn.classList.toggle("active", state.autoRead);
  autoReadBtn.textContent = `🗣️ Leitura automática: ${state.autoRead ? "ON" : "OFF"}`;
  playTone("click");
});

ttsSpeedBtn.addEventListener("click", () => {
  const currentIndex = ttsRates.indexOf(state.ttsRate);
  const nextIndex = (currentIndex + 1) % ttsRates.length;
  state.ttsRate = ttsRates[nextIndex];
  updateTtsSpeedLabel();
  playTone("click");
});

updateTtsSpeedLabel();

startBtn.addEventListener("click", () => {
  ensureAudioContext();
  playTone("click");
  resetGame();
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestion(true);
});

restartBtn.addEventListener("click", () => {
  playTone("click");
  endScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {
  playTone("click");
  state.index += 1;
  if (state.index >= questions.length) {
    showEnd();
    return;
  }
  state.answered = false;
  feedback.classList.add("hidden");
  renderQuestion(true);
});

ttsBtn.addEventListener("click", () => {
  playTone("click");
  speakCurrentQuestion(false);
});

function renderQuestion(autoSpeak = false) {
  const q = questions[state.index];
  progressLabel.textContent = `Pergunta ${state.index + 1}/${questions.length}`;
  progressFill.style.width = `${((state.index + 1) / questions.length) * 100}%`;
  questionText.textContent = q.question;
  answersWrap.innerHTML = "";

  const shuffledOptions = q.options.map((option, originalIndex) => ({ option, originalIndex }));
  for (let i = shuffledOptions.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
  }
  state.optionMap = shuffledOptions.map((item) => item.originalIndex);

  shuffledOptions.forEach(({ option }, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = `${String.fromCharCode(65 + i)}) ${option}`;
    btn.addEventListener("click", () => handleAnswer(i));
    answersWrap.appendChild(btn);
  });

  if (autoSpeak && state.autoRead) {
    setTimeout(() => speakCurrentQuestion(true), 120);
  }
}

function handleAnswer(selected) {
  if (state.answered) return;
  state.answered = true;

  const q = questions[state.index];
  const selectedOriginalIndex = state.optionMap[selected];
  const buttons = Array.from(document.querySelectorAll(".answer-btn"));
  buttons.forEach((btn, idx) => {
    if (state.optionMap[idx] === q.correct) btn.classList.add("correct");
    if (idx === selected && selectedOriginalIndex !== q.correct) btn.classList.add("wrong");
    btn.disabled = true;
  });

  const isCorrect = selectedOriginalIndex === q.correct;
  if (isCorrect) {
    state.hits += 1;
    state.streak += 1;
    const streakBonus = state.streak >= 2 ? 5 : 0;
    state.score += 10 + streakBonus;
    playTone("correct");
    document.body.classList.add("flash-correct");
  } else {
    state.misses += 1;
    state.streak = 0;
    playTone("wrong");
    document.body.classList.add("flash-wrong");
  }

  setTimeout(() => document.body.classList.remove("flash-correct", "flash-wrong"), 420);
  updateStats();

  const explanation = state.mode === "study" ? `✔ ${q.explanation}` : isCorrect ? "✔ Resposta correta!" : "❌ Resposta incorreta.";

  setTimeout(() => {
    feedbackText.textContent = explanation;
    feedback.classList.remove("hidden");
    if (state.autoRead) speakFeedback(explanation);
  }, 1000);
}

function updateStats() {
  scoreEl.textContent = state.score;
  streakEl.textContent = state.streak;
  if (state.score >= 180) medalEl.textContent = "🥇 Ouro";
  else if (state.score >= 120) medalEl.textContent = "🥈 Prata";
  else if (state.score >= 70) medalEl.textContent = "🥉 Bronze";
  else medalEl.textContent = "Nenhuma";
}

function showEnd() {
  quizScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
  hitsEl.textContent = state.hits;
  missesEl.textContent = state.misses;
  const total = state.hits + state.misses;
  const pct = total ? Math.round((state.hits / total) * 100) : 0;
  accuracyEl.textContent = `${pct}%`;
  finalScoreEl.textContent = state.score;
  if (state.autoRead) {
    speakText(`Fim de jogo. Você acertou ${state.hits} e errou ${state.misses}. Aproveitamento de ${pct} por cento. Pontuação final ${state.score}.`);
  }
}

function resetGame() {
  speechSynthesis.cancel();
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.hits = 0;
  state.misses = 0;
  state.answered = false;
  state.optionMap = [];
  feedback.classList.add("hidden");
  updateStats();
}
