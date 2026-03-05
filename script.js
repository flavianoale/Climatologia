const questions = [
  {
    question: "Qual é a diferença entre clima e tempo?",
    options: [
      "Clima é previsão diária e tempo é média de anos",
      "Tempo é estado momentâneo da atmosfera e clima é média ao longo do tempo",
      "Clima é temperatura e tempo é chuva",
      "Não existe diferença",
    ],
    correct: 1,
    explanation: "Tempo descreve condições imediatas; clima representa médias de longo prazo.",
  },
  { question: "A meteorologia estuda principalmente:", options: ["Fenômenos da atmosfera", "Somente o solo", "Mercado agrícola", "Genética vegetal"], correct: 0, explanation: "Meteorologia é o estudo dos fenômenos atmosféricos." },
  { question: "A agrometeorologia foca em:", options: ["Previsão de marés", "Influência do clima na agricultura", "Apenas máquinas agrícolas", "Comércio internacional"], correct: 1, explanation: "Ela relaciona variáveis atmosféricas com o desempenho das culturas." },
  { question: "Normal climatológica é baseada em quantos anos de dados?", options: ["5 anos", "10 anos", "20 anos", "30 anos"], correct: 3, explanation: "A referência clássica de normal climatológica utiliza 30 anos." },
  { question: "Qual destes é um elemento climático?", options: ["Preço de insumos", "Temperatura", "Área da fazenda", "Tipo de trator"], correct: 1, explanation: "Temperatura é um dos principais elementos climáticos." },
  { question: "A principal fonte de energia para o sistema climático terrestre é:", options: ["Núcleo da Terra", "Lua", "Radiação solar", "Ventos oceânicos"], correct: 2, explanation: "A radiação solar dirige temperatura, circulação e fotossíntese." },
  { question: "Qual camada da atmosfera concentra os fenômenos do tempo?", options: ["Estratosfera", "Troposfera", "Mesosfera", "Exosfera"], correct: 1, explanation: "A troposfera contém grande parte do vapor d'água e eventos meteorológicos." },
  { question: "A camada de ozônio se encontra principalmente na:", options: ["Troposfera", "Mesosfera", "Estratosfera", "Termosfera"], correct: 2, explanation: "A estratosfera abriga a camada de ozônio que absorve UV." },
  { question: "Na agricultura, a temperatura do ar influencia diretamente:", options: ["Apenas o preço final", "Germinação, crescimento e maturação", "Somente a irrigação", "Apenas o transporte"], correct: 1, explanation: "Fases fisiológicas da planta dependem de faixas térmicas." },
  { question: "Evapotranspiração é a soma de:", options: ["Chuva + infiltração", "Evaporação do solo + transpiração das plantas", "Radiação + vento", "Umidade + pressão"], correct: 1, explanation: "Esse conceito é central para manejo de irrigação e balanço hídrico." },
  { question: "Quando a umidade relativa chega perto de 100%, pode ocorrer:", options: ["Apenas vento forte", "Condensação e formação de nuvens", "Seca extrema", "Aumento de salinidade"], correct: 1, explanation: "Com ar saturado, o vapor condensa em gotículas." },
  { question: "Precipitação inclui:", options: ["Somente chuva", "Chuva, neve, granizo e garoa", "Somente granizo", "Apenas neblina"], correct: 1, explanation: "Precipitação é qualquer água que cai da atmosfera." },
  { question: "O vento ocorre devido principalmente a diferenças de:", options: ["Pressão atmosférica", "pH do solo", "Altitude da planta", "Cor das nuvens"], correct: 0, explanation: "Gradientes de pressão movimentam o ar." },
  { question: "O balanço hídrico do solo compara:", options: ["Somente temperatura máxima e mínima", "Entrada de água e saída por evapotranspiração", "Preço e produtividade", "Evaporação e radiação UV"], correct: 1, explanation: "Ele verifica déficit ou excesso hídrico para apoiar decisões." },
  { question: "Zoneamento agroclimático serve para:", options: ["Definir impostos", "Escolher culturas adequadas por região", "Substituir irrigação", "Medir ventos marítimos"], correct: 1, explanation: "Ele reduz risco agrícola ao alinhar cultura e aptidão climática." },
  { question: "Um fator climático importante para distribuir calor e umidade é:", options: ["Vento", "Textura da embalagem", "Marca do fertilizante", "Cor da semente"], correct: 0, explanation: "Ventos transportam calor e vapor d'água entre regiões." },
  { question: "A temperatura do solo pode influenciar:", options: ["Germinação e crescimento radicular", "Somente venda no atacado", "Apenas cobertura de nuvens", "Somente fotoperíodo"], correct: 0, explanation: "Processos biológicos no solo dependem da condição térmica." },
  { question: "Geada é mais crítica porque pode causar:", options: ["Aumento imediato de produtividade", "Morte de tecidos vegetais", "Redução da radiação UV", "Elevação da umidade do solo"], correct: 1, explanation: "Temperaturas abaixo de 0°C podem gerar danos severos em culturas sensíveis." },
  { question: "Qual instrumento mede precipitação em estação meteorológica?", options: ["Anemômetro", "Pluviômetro", "Higrômetro", "Barômetro"], correct: 1, explanation: "Pluviômetro registra a lâmina de chuva." },
  { question: "Classificações como Köppen e Thornthwaite ajudam no:", options: ["Zoneamento e planejamento agrícola", "Apenas cálculo de frete", "Somente mapeamento urbano", "Controle de pragas químico"], correct: 0, explanation: "Esses sistemas organizam tipos climáticos úteis para tomada de decisão." },
  { question: "A agricultura depende do clima porque:", options: ["Plantas não respondem ao ambiente", "Condições climáticas afetam água, energia e desenvolvimento", "Somente o solo importa", "Somente genética importa"], correct: 1, explanation: "Disponibilidade hídrica e térmica molda o ciclo das culturas." },
  { question: "Mudanças climáticas podem provocar na agricultura:", options: ["Nenhum efeito", "Alterações de chuva e eventos extremos", "Apenas mais vento constante", "Fim da sazonalidade"], correct: 1, explanation: "Variações climáticas intensas alteram riscos de produção." },
  { question: "Entre os elementos climáticos está a:", options: ["Pressão atmosférica", "Cotação do dólar", "Distância ao mercado", "Taxa de juros"], correct: 0, explanation: "Pressão atmosférica compõe o conjunto de variáveis do clima." },
  { question: "Orvalho ocorre quando:", options: ["A água evapora rapidamente ao meio-dia", "Vapor condensa sobre superfícies frias", "Há vento seco intenso", "A precipitação congela no ar"], correct: 1, explanation: "Noites frias e úmidas favorecem condensação em superfícies." },
  { question: "Qual combinação resume elementos climáticos centrais para a produção agrícola?", options: ["Temperatura, radiação, umidade, precipitação e vento", "Preço, crédito, estoque e frete", "Solo, trator, combustível e mão de obra", "Semente, embalagem, logística e imposto"], correct: 0, explanation: "Essas variáveis atmosféricas são base para manejo agronômico." },
];

const ttsRates = [1, 1.25, 1.5, 1.75, 2];

const state = { mode: "study", index: 0, score: 0, streak: 0, hits: 0, misses: 0, answered: false, autoRead: true, ttsRate: ttsRates[0] };

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
  const optionsText = q.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join(". ");
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

  q.options.forEach((option, i) => {
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
  const buttons = Array.from(document.querySelectorAll(".answer-btn"));
  buttons.forEach((btn, idx) => {
    if (idx === q.correct) btn.classList.add("correct");
    if (idx === selected && selected !== q.correct) btn.classList.add("wrong");
    btn.disabled = true;
  });

  const isCorrect = selected === q.correct;
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
  feedback.classList.add("hidden");
  updateStats();
}
