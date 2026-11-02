/**
 * app.js — SPA «Итоговый тест по гигиеническому обучению (Санминимум)»
 * Vanilla JS ES6+, без фреймворков
 */

/* ════════════════════════════════════════════════════════════
   1. БАНК ВОПРОСОВ (20 вопросов)
   Источники: ФЗ № 52, УК РФ, учебный материал по Санминимуму
   correctIndex — индекс правильного ответа (0-based)
════════════════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    text: 'Какой Федеральный закон является «конституцией» для каждого работника сферы гостеприимства в области санитарной безопасности?',
    options: [
      'Федеральный закон № 152-ФЗ',
      'Федеральный закон № 52-ФЗ',
      'Федеральный закон № 68-ФЗ',
      'Трудовой кодекс РФ'
    ],
    correctIndex: 1
  },
  {
    text: 'По данным медицинских исследований, на сколько процентов продолжительность и качество человеческой жизни зависят от безопасности среды обитания и образа жизни?',
    options: [
      'На 10–15%',
      'На 30–40%',
      'На 50–55%',
      'На 80–90%'
    ],
    correctIndex: 2
  },
  {
    text: 'Какая статья Уголовного кодекса РФ предусматривает ответственность за нарушение санитарно-эпидемиологических правил, повлекшее массовое заболевание или смерть человека?',
    options: [
      'Статья 143 УК РФ',
      'Статья 236 УК РФ',
      'Статья 238 УК РФ',
      'Статья 293 УК РФ'
    ],
    correctIndex: 1
  },
  {
    text: 'Сколько времени дается организации или должностному лицу на добровольную уплату штрафа за нарушение санитарных норм после вступления постановления в силу?',
    options: [
      '10 дней',
      '30 дней',
      '60 дней',
      '90 дней'
    ],
    correctIndex: 2
  },
  {
    text: 'Кем составляется Программа производственного контроля (ППК)?',
    options: [
      'Только Роспотребнадзором',
      'Только проектной организацией',
      'Юридическим лицом или индивидуальным предпринимателем самостоятельно',
      'Управляющей компанией здания'
    ],
    correctIndex: 2
  },
  {
    text: 'Как часто должно проводиться обследование технического состояния системы вентиляции в дальнейшем (после первых 2 лет эксплуатации)?',
    options: [
      'Не реже одного раза в 3 года',
      'Не реже одного раза в 5 лет',
      'Не реже одного раза в 10 лет',
      'Каждый год'
    ],
    correctIndex: 2
  },
  {
    text: 'Почему наличие трещин в стенах и плитке является критическим нарушением в гостинице?',
    options: [
      'Это портит внешний вид номера',
      'Это приводит к промерзанию стен',
      'Трещина — потенциальный инкубатор для бактерий, который не уберет даже дезинфекция',
      'В трещинах может застрять инвентарь'
    ],
    correctIndex: 2
  },
  {
    text: 'С какой периодичностью профессиональный стандарт требует очищать оконные стекла для поддержания уровня инсоляции?',
    options: [
      'Не менее одного раза в месяц',
      'Не менее двух раз в год',
      'Не менее одного раза в 2 года',
      'По мере видимого загрязнения'
    ],
    correctIndex: 1
  },
  {
    text: 'На сколько контейнерная площадка должна превышать площадь основания мусорных контейнеров?',
    options: [
      'На 0,5 метра во все стороны',
      'На 1 метр во все стороны',
      'На 2 метра во все стороны',
      'Ровно на площадь контейнера'
    ],
    correctIndex: 1
  },
  {
    text: 'Где должны располагаться люки мусоропровода в здании гостиницы?',
    options: [
      'В коридорах общего пользования',
      'Внутри жилых номеров',
      'Исключительно внутри служебных помещений',
      'На лестничных клетках'
    ],
    correctIndex: 2
  },
  {
    text: 'Как часто должна проводиться регулярная дезинфекционная обработка мусороприемных камер?',
    options: [
      'Ежедневно',
      'Не реже одного раза в неделю',
      'Не реже одного раза в месяц',
      'Один раз в квартал'
    ],
    correctIndex: 2
  },
  {
    text: 'Как часто должна проводиться смена постельного белья при длительном проживании гостя?',
    options: [
      'Не реже одного раза в неделю',
      'Не реже двух раз в неделю',
      'Раз в месяц',
      'Каждый день'
    ],
    correctIndex: 0
  },
  {
    text: 'Как часто должны меняться полотенца при длительном проживании гостя?',
    options: [
      'Не реже одного раза в неделю',
      'Не реже двух раз в неделю',
      'Один раз в 3 дня',
      'Каждый день'
    ],
    correctIndex: 1
  },
  {
    text: 'Через какое время влажное полотенце в условиях ванной комнаты становится идеальным инкубатором для микрофлоры?',
    options: [
      'Через 12 часов',
      'Через 24 часа',
      'Через 48 часов',
      'Через 72 часа'
    ],
    correctIndex: 2
  },
  {
    text: 'Какое строгое правило существует для инвентаря, используемого для уборки туалетов?',
    options: [
      'Его можно использовать для уборки любых помещений после дезинфекции',
      'Он должен храниться в жилых номерах',
      'Он должен быть отдельным, промаркированным и никогда не пересекаться с инвентарем для жилых комнат',
      'Его достаточно просто промыть водой после использования'
    ],
    correctIndex: 2
  },
  {
    text: 'Где категорически запрещена стирка спецодежды работников гостиницы (например, формы горничной)?',
    options: [
      'В специализированных прачечных',
      'В прачечной отеля при наличии условий',
      'Дома',
      'В химчистке по договору'
    ],
    correctIndex: 2
  },
  {
    text: 'От какого заболевания, согласно стандартам, работник должен быть вакцинирован, так как этот вирус в сотни раз заразнее ВИЧ?',
    options: [
      'Грипп',
      'Коронавирусная инфекция',
      'Вирусный гепатит В',
      'Краснуха'
    ],
    correctIndex: 2
  },
  {
    text: 'Каким путем ВИЧ-инфекция НЕ передается в бытовых условиях?',
    options: [
      'Половым путем',
      'От матери к ребенку',
      'Через кровь',
      'Контактно-бытовым путем (через общую посуду, постель, одежду)'
    ],
    correctIndex: 3
  },
  {
    text: 'Какие средства индивидуальной защиты (СИЗ) обязательны при приготовлении дезинфицирующих растворов?',
    options: [
      'Только халат и шапочка',
      'Перчатки, респираторы и защитные очки',
      'Только резиновые перчатки',
      'Медицинская маска и бахилы'
    ],
    correctIndex: 1
  },
  {
    text: 'Какой минерал называют «минералом прочности», и его основным источником являются молочные продукты и рыба?',
    options: [
      'Магний',
      'Калий',
      'Железо',
      'Кальций'
    ],
    correctIndex: 3
  }
];

/* ════════════════════════════════════════════════════════════
   2. КОНФИГУРАЦИЯ
════════════════════════════════════════════════════════════ */

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw7SxIyPBSpdR3bzpsf4D5bOVG3dbWdnO23WRPWsk0DJ-gtwAD7CJ5cGrHyrbwpPCF8/exec'; // Сюда вставите новую ссылку

/** Порог прохождения: 85% = 17 правильных из 20 */
const PASS_THRESHOLD = 0.85;
const TOTAL_QUESTIONS = QUESTIONS.length; // 20

/* ════════════════════════════════════════════════════════════
   3. СОСТОЯНИЕ ПРИЛОЖЕНИЯ
════════════════════════════════════════════════════════════ */
const state = {
  currentScene: 1,
  consentGiven: false,
  userData: {
    fullName:     '',
    organization: '',
    position:     '',
    department:   '',
    birthDate:    '',
    hireDate:     ''
  },
  answers: [],
  currentQuestionIndex: 0
};

/* ════════════════════════════════════════════════════════════
   4. DOM-ССЫЛКИ
════════════════════════════════════════════════════════════ */
const sceneMap = {
  1: document.getElementById('scene-welcome'),
  2: document.getElementById('scene-consent'),
  3: document.getElementById('scene-form'),
  4: document.getElementById('scene-quiz'),
  5: document.getElementById('scene-result')
};

const btnStart       = document.getElementById('btn-start');
const btnConsentCont = document.getElementById('btn-consent-continue');
const btnFormSubmit  = document.getElementById('btn-form-submit');
const btnNext        = document.getElementById('btn-next');
const btnNextLabel   = document.getElementById('btn-next-label');
const btnRetry       = document.getElementById('btn-retry');

const consentCheckbox = document.getElementById('consent-checkbox');

const inputFullname   = document.getElementById('input-fullname');
const inputOrg        = document.getElementById('input-org');
const inputPosition   = document.getElementById('input-position');
const inputDepartment = document.getElementById('input-department');
const inputBirthdate  = document.getElementById('input-birthdate');
const inputHiredate   = document.getElementById('input-hiredate');

const quizCounter      = document.getElementById('quiz-counter');
const progressBarFill  = document.getElementById('progress-bar-fill');
const progressBarTrack = document.getElementById('progress-bar-track');
const questionCard     = document.getElementById('question-card');
const questionNumber   = document.getElementById('question-number');
const questionText     = document.getElementById('question-text');
const optionsList      = document.getElementById('options-list');

const resultIconWrap = document.getElementById('result-icon-wrap');
const resultTitle    = document.getElementById('result-title');
const resultText     = document.getElementById('result-text');
const scoreNumber    = document.getElementById('score-number');
const scoreRingFill  = document.getElementById('score-ring-fill');
const statCorrect    = document.getElementById('stat-correct');
const statPercent    = document.getElementById('stat-percent');
const statStatus     = document.getElementById('stat-status');
const submitStatus   = document.getElementById('submit-status');

/* ════════════════════════════════════════════════════════════
   5. УПРАВЛЕНИЕ СЦЕНАМИ
════════════════════════════════════════════════════════════ */
function showScene(n) {
  Object.entries(sceneMap).forEach(([idx, scene]) => {
    if (!scene) return;
    if (Number(idx) === n) {
      scene.classList.add('active');
      scene.removeAttribute('aria-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scene.classList.remove('active');
      scene.setAttribute('aria-hidden', 'true');
    }
  });
  state.currentScene = n;
}

/* ════════════════════════════════════════════════════════════
   6. СЦЕНА 2: СОГЛАСИЕ НА ОБРАБОТКУ ПДн
════════════════════════════════════════════════════════════ */
function updateConsentButton() {
  const checked = consentCheckbox.checked;
  state.consentGiven = checked;
  btnConsentCont.disabled = !checked;
  btnConsentCont.setAttribute('aria-disabled', String(!checked));
}
consentCheckbox.addEventListener('change', updateConsentButton);

/* ════════════════════════════════════════════════════════════
   7. СЦЕНА 3: ВАЛИДАЦИЯ ФОРМЫ
════════════════════════════════════════════════════════════ */
const formFields = [
  inputFullname, inputOrg, inputPosition,
  inputDepartment, inputBirthdate, inputHiredate
];

function validateForm() {
  const allFilled = formFields.every(f => f.value.trim() !== '');
  btnFormSubmit.disabled = !allFilled;
  btnFormSubmit.setAttribute('aria-disabled', String(!allFilled));
}

formFields.forEach(field => {
  field.addEventListener('input', validateForm);
  field.addEventListener('change', validateForm);
});

function collectFormData() {
  state.userData.fullName     = inputFullname.value.trim();
  state.userData.organization = inputOrg.value.trim();
  state.userData.position     = inputPosition.value.trim();
  state.userData.department   = inputDepartment.value.trim();
  state.userData.birthDate    = inputBirthdate.value;
  state.userData.hireDate     = inputHiredate.value;
}

/* ════════════════════════════════════════════════════════════
   8. СЦЕНА 4: ЛОГИКА ТЕСТА
════════════════════════════════════════════════════════════ */
function startQuiz() {
  state.answers = [];
  state.currentQuestionIndex = 0;
  renderQuestion(0);
}

function renderQuestion(index) {
  const q = QUESTIONS[index];
  const num = index + 1;

  quizCounter.textContent = `Вопрос ${num} из ${TOTAL_QUESTIONS}`;
  const pct = (index / TOTAL_QUESTIONS) * 100;
  progressBarFill.style.width = pct + '%';
  progressBarTrack.setAttribute('aria-valuenow', String(index));

  questionNumber.textContent = 'Вопрос ' + String(num).padStart(2, '0');
  questionText.textContent = q.text;

  optionsList.innerHTML = '';
  q.options.forEach((optText, optIdx) => {
    const label = document.createElement('label');
    label.className = 'option-label';
    label.setAttribute('for', `opt-${index}-${optIdx}`);

    const radio = document.createElement('input');
    radio.type      = 'radio';
    radio.name      = `q${index}`;
    radio.id        = `opt-${index}-${optIdx}`;
    radio.value     = String(optIdx);
    radio.className = 'option-radio';
    if (state.answers[index] === optIdx) radio.checked = true;

    radio.addEventListener('change', () => onOptionSelect(index, optIdx));

    const marker = document.createElement('span');
    marker.className = 'option-marker';
    marker.setAttribute('aria-hidden', 'true');

    const textSpan = document.createElement('span');
    textSpan.className   = 'option-text';
    textSpan.textContent = optText;

    label.appendChild(radio);
    label.appendChild(marker);
    label.appendChild(textSpan);
    optionsList.appendChild(label);
  });

  updateNextButton(index);
  btnNextLabel.textContent = (index === TOTAL_QUESTIONS - 1) ? 'Завершить тест' : 'Далее';
}

function onOptionSelect(qIdx, optIdx) {
  state.answers[qIdx] = optIdx;
  updateNextButton(qIdx);
}

function updateNextButton(index) {
  const answered = state.answers[index] !== undefined;
  btnNext.disabled = !answered;
  btnNext.setAttribute('aria-disabled', String(!answered));
}

function goToNextQuestion() {
  const cur = state.currentQuestionIndex;

  if (cur < TOTAL_QUESTIONS - 1) {
    questionCard.classList.add('leaving');
    setTimeout(() => {
      questionCard.classList.remove('leaving');
      state.currentQuestionIndex = cur + 1;
      renderQuestion(state.currentQuestionIndex);
    }, 250);
  } else {
    showResults();
  }
}

/* ════════════════════════════════════════════════════════════
   9. СЦЕНА 5: РЕЗУЛЬТАТЫ
════════════════════════════════════════════════════════════ */
function calculateResult() {
  let correct = 0;
  QUESTIONS.forEach((q, idx) => {
    if (state.answers[idx] === q.correctIndex) correct++;
  });
  const percent = Math.round((correct / TOTAL_QUESTIONS) * 100);
  const passed  = (correct / TOTAL_QUESTIONS) >= PASS_THRESHOLD;
  return { correct, percent, passed };
}

function showResults() {
  const { correct, percent, passed } = calculateResult();

  showScene(5);

  resultIconWrap.textContent = passed ? '🎉' : '😔';

  resultTitle.className   = 'result-title ' + (passed ? 'success' : 'failure');
  resultTitle.textContent = passed
    ? 'Поздравляем! Тест сдан успешно.'
    : 'Тест не сдан.';

  resultText.textContent = passed
    ? 'Вы успешно прошли итоговый тест по гигиеническому обучению (Санминимум). Ваши результаты сохранены в системе.'
    : `Вы ответили правильно на ${correct} из ${TOTAL_QUESTIONS} вопросов. ` +
      'Рекомендуем освежить знания по материалам лекции и попробовать ещё раз. ' +
      'У вас обязательно получится!';

  scoreNumber.textContent = String(correct);
  statCorrect.textContent = `${correct} из ${TOTAL_QUESTIONS}`;
  statPercent.textContent = percent + '%';
  statStatus.textContent  = passed ? 'Сдал / Сдала' : 'Не сдан';
  statStatus.className    = 'stat-value stat-status ' + (passed ? 'success' : 'failure');

  const offset = 314 - (percent / 100) * 314;
  scoreRingFill.className = 'score-ring-fill ' + (passed ? 'success' : 'failure');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scoreRingFill.style.strokeDashoffset = String(offset);
    });
  });

  progressBarFill.style.width = '100%';
  progressBarTrack.setAttribute('aria-valuenow', String(TOTAL_QUESTIONS));

  submitStatus.textContent = '';
  submitStatus.className   = 'submit-status';

  const payload = {
    fullName:       state.userData.fullName,
    organization:   state.userData.organization,
    position:       state.userData.position,
    department:     state.userData.department,
    birthDate:      state.userData.birthDate,
    hireDate:       state.userData.hireDate,
    correctAnswers: correct,
    totalQuestions: TOTAL_QUESTIONS,
    percent:        percent,
    passed:         passed,
    timestamp:      new Date().toISOString()
  };

  sendResultsToGoogleSheets(payload);
}

/* ════════════════════════════════════════════════════════════
   10. ОТПРАВКА ДАННЫХ В GOOGLE SHEETS
════════════════════════════════════════════════════════════ */
async function sendResultsToGoogleSheets(payload) {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_DEPLOYED_APPS_SCRIPT_URL') {
    console.warn('[Quiz] Google Apps Script URL не настроен. Данные не отправлены.');
    submitStatus.textContent = '⚠ URL Google Sheets не настроен (см. README.md)';
    submitStatus.className   = 'submit-status error';
    return;
  }

  submitStatus.textContent = '⏳ Сохранение результатов...';
  submitStatus.className   = 'submit-status sending';

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });
    console.log('[Quiz] Данные отправлены в Google Sheets:', payload);
    submitStatus.textContent = '✅ Результаты сохранены в системе';
    submitStatus.className   = 'submit-status sent';
  } catch (error) {
    console.error('[Quiz] Ошибка отправки данных:', error);
    submitStatus.textContent = '⚠ Не удалось сохранить результаты. Обратитесь к ответственному за безопасность.';
    submitStatus.className   = 'submit-status error';
  }
}

/* ════════════════════════════════════════════════════════════
   11. СБРОС И ПЕРЕЗАПУСК
════════════════════════════════════════════════════════════ */
function resetApp() {
  state.consentGiven         = false;
  state.userData             = { fullName: '', organization: '', position: '', department: '', birthDate: '', hireDate: '' };
  state.answers              = [];
  state.currentQuestionIndex = 0;

  [inputFullname, inputOrg, inputPosition, inputDepartment, inputBirthdate, inputHiredate]
    .forEach(f => { f.value = ''; });
  validateForm();

  consentCheckbox.checked = false;
  updateConsentButton();

  scoreRingFill.style.strokeDashoffset = '314';
  scoreRingFill.className = 'score-ring-fill';

  showScene(1);
}

/* ════════════════════════════════════════════════════════════
   12. ОБРАБОТЧИКИ СОБЫТИЙ
════════════════════════════════════════════════════════════ */
btnStart.addEventListener('click', () => showScene(2));

btnConsentCont.addEventListener('click', () => {
  if (state.consentGiven) showScene(3);
});

btnFormSubmit.addEventListener('click', () => {
  collectFormData();
  startQuiz();
  showScene(4);
});

btnNext.addEventListener('click', () => {
  if (!btnNext.disabled) goToNextQuestion();
});

btnRetry.addEventListener('click', resetApp);

document.getElementById('user-form').addEventListener('submit', e => e.preventDefault());

/* ════════════════════════════════════════════════════════════
   13. ИНИЦИАЛИЗАЦИЯ
════════════════════════════════════════════════════════════ */
function init() {
  showScene(1);
  updateConsentButton();
  validateForm();
  btnNext.disabled = true;
  btnNext.setAttribute('aria-disabled', 'true');
  console.log('[Quiz] Приложение инициализировано. Вопросов:', TOTAL_QUESTIONS);
}

document.addEventListener('DOMContentLoaded', init);
