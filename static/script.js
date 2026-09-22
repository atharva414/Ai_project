/* ============================================================
   i18n — English / Hindi
   ============================================================ */
const I18N = {
  en: {
    programName: "AI-Based Real-Time Stress and Trauma Assessment Module",
    programSub: "National Helpline Against Atrocities · 14566",
    chipHelpline: "Helpline 14566", chipPortal: "Integrated Portal", chipChatbot: "Chatbot", chipIvrs: "IVRS", chipApp: "Mobile App",
    stepConsent: "Consent", stepNarrative: "Narrative", stepCheck: "Quick Check", stepResult: "Result",
    consentTitle: "Before we begin",
    consentLead: "Victims and complainants contacting NHAA (14566), the Integrated Portal, chatbot, IVRS, or mobile app often carry serious emotional distress. This step helps route your case to the right kind of support, as early as possible.",
    consentContext1: "<strong>Why we ask these questions.</strong> Distress arising from caste-based discrimination, violence, threats, social boycott, displacement, or prolonged legal proceedings can be hard to convey in a first conversation. A short structured check helps identify what kind of support — counselling, medical, legal, police, or protective — may be needed right away.",
    consentContext2: "<strong>What this tool is not.</strong> It does not diagnose any condition. Every assessment is reviewed by a trained counsellor or officer before action is taken — this only helps prioritise that review.",
    consentCheck1: "I understand this tool assists — and does not replace — review by a trained professional.",
    consentCheck2: "I consent to my responses being used to generate a stress and vulnerability assessment, for the purpose of referring me to appropriate support.",
    consentPrivacy: "Your responses are kept confidential and shared only with the counsellor, officer, or authority relevant to your case. You may stop at any point without affecting your complaint.",
    consentContinue: "Continue",
    back: "← Back",
    narrativeTitle: "Tell us what's happening",
    narrativeLead: "Write in your own words — as much or as little as you're comfortable sharing. There is no right way to describe it.",
    narrativeLabel: "Your narrative",
    narrativePlaceholder: "e.g. Since I filed the complaint, my family has been threatened and we've been isolated by our neighbours…",
    voiceTitle: "Voice sample (optional)",
    voiceNote: "Simulated for this demo. A deployed system would analyse pitch variation, pause patterns, and speaking rate on-device or on a secure server, never storing raw audio without separate consent.",
    voiceStart: "Record 4-second sample",
    voiceRecording: "Recording…",
    voiceDone: "Sample captured — record again",
    metricPitch: "Pitch variability", metricPause: "Pause ratio", metricRate: "Speaking rate",
    continueBtn: "Continue",
    checkTitle: "A few quick questions",
    checkLead: "These help us weigh what you've written. Answer as best you can — you can skip any you're unsure about.",
    qIntensity: "How intense is the distress right now?",
    qDuration: "How long has this been going on?",
    qFunctioning: "Impact on daily life (sleep, work, eating)?",
    qFear: "Do you feel unsafe, threatened, or afraid to report?",
    qIsolation: "Has your family faced social boycott or isolation?",
    qMedical: "Was anyone physically hurt and in need of medical care?",
    qLegal: "Is an ongoing legal case adding to your distress?",
    qSafety: "Any thoughts of harming yourself?",
    optNone: "None / Low", optMild: "Mild", optModerate: "Moderate", optSevere: "Severe", optSevere2: "Severe",
    optJustNow: "Just now", optHours: "Hours", optDays: "Days", optWeeks: "Weeks or more",
    optLittle: "Little", optSome: "Some", optQuite: "Quite a bit",
    optNo: "No", optSlightly: "Slightly", optFrequently: "Often", optConstantly: "Constantly",
    optPassing: "Passing thoughts", optPlan: "Yes — with a plan",
    runAssessment: "Generate Assessment",
    resultTitle: "Assessment result",
    sviScale: "Stress Vulnerability Index (0–100)",
    forceNote: "Escalated automatically due to a detected safety risk.",
    indicatorsLabel: "Indicators detected",
    pathwayLabel: "Recommended support pathway",
    resultDisclaimer: "This is a decision-support output only. It does not diagnose, and a trained counsellor or officer will review this case before any action is taken.",
    viewStakeholders: "View support contacts",
    newAssessment: "Start a new assessment",
    stakeholdersTitle: "Support & referral network",
    emergencyTitle: "If you are in immediate danger, contact emergency services now.",
    emergencyBody: "This screen lists direct contacts. It does not place a call automatically.",
    backToResult: "← Back to result",
    c1title: "Emergency Services", c1desc: "Police / medical emergency",
    c2title: "National Helpline Against Atrocities", c2desc: "Victim / complainant support, 24×7",
    c3title: "KIRAN Mental Health Helpline", c3desc: "Toll-free, 24×7 counselling support",
    stakeholderNetworkLabel: "Referral & oversight bodies",
    s1title: "Department of Social Justice and Empowerment", s1desc: "Policy oversight and welfare schemes for victims",
    s2title: "State Governments & Union Territories", s2desc: "Regional implementation and case coordination",
    s3title: "District Administration", s3desc: "Local legal aid, compensation, and rehabilitation processing",
    s4title: "Counsellors & Mental Health Professionals", s4desc: "Psychological first aid and ongoing counselling",
    s5title: "Law Enforcement Agencies", s5desc: "Police intervention and witness protection",
    s6title: "Rehabilitation & Welfare Authorities", s6desc: "Long-term rehabilitation, displacement, and welfare support"
  },
  hi: {
    programName: "एआई-आधारित रीयल-टाइम तनाव एवं आघात मूल्यांकन मॉड्यूल",
    programSub: "राष्ट्रीय अत्याचार निवारण हेल्पलाइन · 14566",
    chipHelpline: "हेल्पलाइन 14566", chipPortal: "इंटीग्रेटेड पोर्टल", chipChatbot: "चैटबॉट", chipIvrs: "आईवीआरएस", chipApp: "मोबाइल ऐप",
    stepConsent: "सहमति", stepNarrative: "विवरण", stepCheck: "त्वरित जांच", stepResult: "परिणाम",
    consentTitle: "शुरू करने से पहले",
    consentLead: "एनएचएए (14566), इंटीग्रेटेड पोर्टल, चैटबॉट, आईवीआरएस या मोबाइल ऐप से संपर्क करने वाले पीड़ित/शिकायतकर्ता अक्सर गंभीर मानसिक तनाव में होते हैं। यह चरण आपके मामले को सही सहायता तक जल्द से जल्द पहुँचाने में मदद करता है।",
    consentContext1: "<strong>हम यह क्यों पूछते हैं।</strong> जातिगत भेदभाव, हिंसा, धमकी, सामाजिक बहिष्कार, विस्थापन या लंबी कानूनी प्रक्रिया से उपजा तनाव पहली बातचीत में बताना मुश्किल हो सकता है। एक संक्षिप्त संरचित जांच यह पहचानने में मदद करती है कि तुरंत किस तरह की सहायता — परामर्श, चिकित्सा, कानूनी, पुलिस या सुरक्षात्मक — चाहिए।",
    consentContext2: "<strong>यह उपकरण क्या नहीं है।</strong> यह किसी भी स्थिति का निदान नहीं करता। कोई भी कार्रवाई होने से पहले प्रत्येक मूल्यांकन की समीक्षा एक प्रशिक्षित परामर्शदाता या अधिकारी करता है — यह केवल उस समीक्षा को प्राथमिकता देने में मदद करता है।",
    consentCheck1: "मैं समझता/समझती हूँ कि यह उपकरण एक प्रशिक्षित पेशेवर की समीक्षा में सहायता करता है — उसकी जगह नहीं लेता।",
    consentCheck2: "मैं सहमति देता/देती हूँ कि मेरी प्रतिक्रियाओं का उपयोग तनाव एवं भेद्यता मूल्यांकन तैयार करने के लिए किया जाए, ताकि मुझे उचित सहायता के लिए संदर्भित किया जा सके।",
    consentPrivacy: "आपकी प्रतिक्रियाएँ गोपनीय रखी जाती हैं और केवल आपके मामले से जुड़े परामर्शदाता, अधिकारी या प्राधिकरण के साथ साझा की जाती हैं। आप किसी भी समय रुक सकते हैं, इससे आपकी शिकायत पर कोई असर नहीं पड़ेगा।",
    consentContinue: "आगे बढ़ें",
    back: "← वापस",
    narrativeTitle: "हमें बताइए क्या हो रहा है",
    narrativeLead: "अपने शब्दों में लिखें — जितना आप सहज महसूस करें उतना ही। इसे बताने का कोई एक सही तरीका नहीं है।",
    narrativeLabel: "आपका विवरण",
    narrativePlaceholder: "जैसे: शिकायत दर्ज करने के बाद से मेरे परिवार को धमकियाँ मिल रही हैं और पड़ोसियों ने हमें अलग-थलग कर दिया है…",
    voiceTitle: "आवाज़ का नमूना (वैकल्पिक)",
    voiceNote: "इस डेमो के लिए सिम्युलेटेड। वास्तविक प्रणाली पिच परिवर्तन, ठहराव पैटर्न और बोलने की गति का विश्लेषण डिवाइस पर या सुरक्षित सर्वर पर करेगी, अलग सहमति के बिना कच्ची ऑडियो कभी संग्रहीत नहीं होगी।",
    voiceStart: "4-सेकंड नमूना रिकॉर्ड करें",
    voiceRecording: "रिकॉर्ड हो रहा है…",
    voiceDone: "नमूना लिया गया — दोबारा रिकॉर्ड करें",
    metricPitch: "पिच परिवर्तनशीलता", metricPause: "ठहराव अनुपात", metricRate: "बोलने की गति",
    continueBtn: "आगे बढ़ें",
    checkTitle: "कुछ त्वरित प्रश्न",
    checkLead: "ये हमें आपके लिखे को तौलने में मदद करते हैं। जितना ठीक लगे उतना उत्तर दें — जो अनिश्चित हो उसे छोड़ सकते हैं।",
    qIntensity: "अभी तनाव कितना तीव्र है?",
    qDuration: "यह कब से चल रहा है?",
    qFunctioning: "दैनिक जीवन पर असर (नींद, काम, खाना)?",
    qFear: "क्या आप असुरक्षित, धमकाया हुआ, या शिकायत करने से डरा हुआ महसूस करते हैं?",
    qIsolation: "क्या आपके परिवार को सामाजिक बहिष्कार या अलगाव का सामना करना पड़ा है?",
    qMedical: "क्या किसी को शारीरिक चोट लगी है और चिकित्सा सहायता चाहिए?",
    qLegal: "क्या चल रहा कानूनी मामला आपके तनाव को बढ़ा रहा है?",
    qSafety: "क्या खुद को नुकसान पहुँचाने के विचार आते हैं?",
    optNone: "नहीं / कम", optMild: "हल्का", optModerate: "मध्यम", optSevere: "गंभीर", optSevere2: "गंभीर",
    optJustNow: "अभी-अभी", optHours: "घंटे", optDays: "दिन", optWeeks: "सप्ताह या अधिक",
    optLittle: "थोड़ा", optSome: "कुछ हद तक", optQuite: "काफी हद तक",
    optNo: "नहीं", optSlightly: "थोड़ा", optFrequently: "अक्सर", optConstantly: "लगातार",
    optPassing: "क्षणिक विचार", optPlan: "हाँ — योजना के साथ",
    runAssessment: "मूल्यांकन तैयार करें",
    resultTitle: "मूल्यांकन परिणाम",
    sviScale: "तनाव भेद्यता सूचकांक (0–100)",
    forceNote: "एक सुरक्षा जोखिम का पता चलने के कारण स्वतः प्राथमिकता दी गई।",
    indicatorsLabel: "पहचाने गए संकेतक",
    pathwayLabel: "अनुशंसित सहायता मार्ग",
    resultDisclaimer: "यह केवल एक निर्णय-सहायक परिणाम है। यह निदान नहीं करता, और कोई भी कार्रवाई होने से पहले एक प्रशिक्षित परामर्शदाता या अधिकारी इस मामले की समीक्षा करेगा।",
    viewStakeholders: "सहायता संपर्क देखें",
    newAssessment: "नया मूल्यांकन शुरू करें",
    stakeholdersTitle: "सहायता एवं रेफ़रल नेटवर्क",
    emergencyTitle: "यदि आप तत्काल खतरे में हैं, तो अभी आपातकालीन सेवाओं से संपर्क करें।",
    emergencyBody: "यह स्क्रीन सीधे संपर्क सूचीबद्ध करती है। यह स्वतः कॉल नहीं करती।",
    backToResult: "← परिणाम पर वापस",
    c1title: "आपातकालीन सेवाएँ", c1desc: "पुलिस / चिकित्सा आपातकाल",
    c2title: "राष्ट्रीय अत्याचार निवारण हेल्पलाइन", c2desc: "पीड़ित / शिकायतकर्ता सहायता, 24×7",
    c3title: "किरण मानसिक स्वास्थ्य हेल्पलाइन", c3desc: "टोल-फ्री, 24×7 परामर्श सहायता",
    stakeholderNetworkLabel: "रेफ़रल एवं निगरानी निकाय",
    s1title: "सामाजिक न्याय एवं अधिकारिता विभाग", s1desc: "पीड़ितों के लिए नीति निगरानी एवं कल्याण योजनाएँ",
    s2title: "राज्य सरकारें एवं केंद्र शासित प्रदेश", s2desc: "क्षेत्रीय कार्यान्वयन एवं मामला समन्वय",
    s3title: "जिला प्रशासन", s3desc: "स्थानीय कानूनी सहायता, मुआवज़ा एवं पुनर्वास प्रक्रिया",
    s4title: "परामर्शदाता एवं मानसिक स्वास्थ्य पेशेवर", s4desc: "मनोवैज्ञानिक प्राथमिक सहायता एवं निरंतर परामर्श",
    s5title: "कानून प्रवर्तन एजेंसियाँ", s5desc: "पुलिस हस्तक्षेप एवं गवाह संरक्षण",
    s6title: "पुनर्वास एवं कल्याण प्राधिकरण", s6desc: "दीर्घकालिक पुनर्वास, विस्थापन एवं कल्याण सहायता"
  }
};

let currentLang = 'en';
function setLanguage(lang) {
  currentLang = I18N[lang] ? lang : 'en';
  const dict = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
  });
}

/* ============================================================
   Step navigation
   ============================================================ */
function goToStep(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + n).classList.add('active');
  document.querySelectorAll('.step').forEach(s => {
    const step = parseInt(s.dataset.step, 10);
    s.classList.toggle('active', step === n);
    s.classList.toggle('done', step < n);
  });
  window.scrollTo(0, 0);
}

function checkConsent() {
  const c1 = document.getElementById('consent-1').checked;
  const c2 = document.getElementById('consent-2').checked;
  document.getElementById('consent-continue').disabled = !(c1 && c2);
}

/* ============================================================
   Voice module (simulated speech analytics)
   ============================================================ */
let voiceRecording = false;
let voiceTimer = null;
let waveformInterval = null;
let voiceCaptured = false;

(function buildWaveform() {
  const wf = document.getElementById('waveform');
  for (let i = 0; i < 28; i++) {
    const bar = document.createElement('span');
    wf.appendChild(bar);
  }
})();

function toggleVoiceRecording() {
  const btn = document.getElementById('voice-btn');
  const wf = document.getElementById('waveform');
  if (voiceRecording) return;

  voiceRecording = true;
  wf.classList.add('live');
  btn.disabled = true;
  btn.textContent = I18N[currentLang].voiceRecording;

  waveformInterval = setInterval(() => {
    wf.querySelectorAll('span').forEach(bar => {
      bar.style.height = (10 + Math.random() * 90) + '%';
    });
  }, 120);

  voiceTimer = setTimeout(() => {
    clearInterval(waveformInterval);
    wf.classList.remove('live');
    wf.querySelectorAll('span').forEach(bar => bar.style.height = '20%');
    voiceRecording = false;
    voiceCaptured = true;
    btn.disabled = false;
    btn.textContent = I18N[currentLang].voiceDone;

    const pitch = Math.round(30 + Math.random() * 60);
    const pause = Math.round(10 + Math.random() * 50);
    const rate = Math.round(90 + Math.random() * 80);
    document.getElementById('metric-pitch').textContent = pitch + '%';
    document.getElementById('metric-pause').textContent = pause + '%';
    document.getElementById('metric-rate').textContent = rate + ' wpm';
    document.getElementById('voice-metrics').classList.remove('hidden');

    window._voiceSignals = { pitch, pause, rate };
  }, 4000);
}

/* ============================================================
   Assessment engine
   ============================================================ */
const SAFETY_RULES = [
  /\b(kill myself|end my life|want to die|suicide|suicidal|take my own life)\b/i,
  /\b(better off dead|no reason to live|can't go on|end it all)\b/i,
  /\b(hurt myself|self[- ]?harm|cut myself|overdose)\b/i,
  /\b(right now|tonight|today).{0,20}(kill|die|suicide|end)\b/i,
  /\b(have a plan|have the means|got the pills|have a gun)\b/i,
  /\b(goodbye forever|final message|this is the end)\b/i
];

const SEVERITY_LEXICON = {
  panic: 3.2, terrified: 3.0, trauma: 2.8, flashback: 2.7, nightmare: 2.4,
  hopeless: 3.0, worthless: 2.8, despair: 2.9, unbearable: 2.7,
  crisis: 2.6, emergency: 2.5, desperate: 2.6, overwhelmed: 2.3,
  shaking: 2.2, numb: 2.1, dissociat: 2.4,
  anxious: 1.8, anxiety: 1.8, stressed: 1.6, stress: 1.5, worried: 1.5,
  scared: 1.7, fear: 1.6, afraid: 1.7, nervous: 1.4, tense: 1.3,
  sad: 1.4, depressed: 1.9, lonely: 1.5, exhausted: 1.4,
  threatened: 2.3, threat: 2.0, intimidated: 2.4, boycott: 2.2, ostracized: 2.2,
  displaced: 2.0, assault: 2.6, attacked: 2.5, injured: 2.0, wound: 1.9,
  court: 0.9, hearing: 0.8, police: 0.6, witness: 1.4,
  okay: -0.3, fine: -0.4, better: -0.6, calm: -0.8, supported: -0.7
};

const PHRASE_BOOSTS = [
  { re: /can't (cope|handle|take it)/i, w: 2.4 },
  { re: /falling apart/i, w: 2.2 },
  { re: /losing control/i, w: 2.3 },
  { re: /no one (cares|understands)/i, w: 2.0 },
  { re: /feel(ing)? (trapped|stuck|alone|isolated)/i, w: 1.9 },
  { re: /heart (racing|pounding)/i, w: 2.0 },
  { re: /can't sleep/i, w: 1.5 },
  { re: /panic attack/i, w: 2.8 },
  { re: /afraid to (report|testify|speak)/i, w: 2.3 },
  { re: /social boycott/i, w: 2.2 }
];

function preprocess(text) { return (text || '').toLowerCase().replace(/[^\w\s']/g, ' ').replace(/\s+/g, ' ').trim(); }

function scoreText(text) {
  const clean = preprocess(text);
  const tokens = clean.split(' ').filter(Boolean);
  let score = 0;
  for (const token of tokens) {
    for (const [term, weight] of Object.entries(SEVERITY_LEXICON)) {
      if (token.includes(term) || term.includes(token)) score += weight;
    }
  }
  for (const { re, w } of PHRASE_BOOSTS) if (re.test(clean)) score += w;
  return { score, clean };
}

function runAssessment() {
  const text = document.getElementById('narrative-text').value || '';
  const q = {
    intensity: parseInt(document.getElementById('q-intensity').value, 10),
    duration: parseInt(document.getElementById('q-duration').value, 10),
    functioning: parseInt(document.getElementById('q-functioning').value, 10),
    fear: parseInt(document.getElementById('q-fear').value, 10),
    isolation: parseInt(document.getElementById('q-isolation').value, 10),
    medical: parseInt(document.getElementById('q-medical').value, 10),
    legal: parseInt(document.getElementById('q-legal').value, 10),
    safety: parseInt(document.getElementById('q-safety').value, 10)
  };

  const safetyTriggered = SAFETY_RULES.some(r => r.test(text)) || q.safety >= 3;
  const { score: textScore, clean } = scoreText(text);

  const voice = window._voiceSignals || null;
  const voiceScore = voice ? (voice.pitch >= 60 ? 1.2 : 0) + (voice.pause >= 40 ? 1.0 : 0) : 0;

  const qScore =
    q.intensity * 1.4 + q.duration * 1.0 + q.functioning * 1.3 +
    q.fear * 1.6 + q.isolation * 1.3 + q.medical * 1.5 + q.legal * 1.0 + q.safety * 2.2;

  let total = textScore + qScore + voiceScore;
  const clamped = Math.max(0, Math.min(total, 32));
  let svi = Math.round((clamped / 32) * 100);

  const flags = {
    suicidal: safetyTriggered,
    trauma: /trauma|flashback|nightmare|dissociat/.test(clean) || q.intensity >= 3,
    fear: /scared|afraid|terrified|fear|threat/.test(clean) || q.fear >= 2,
    depression: /hopeless|worthless|despair|depressed/.test(clean),
    intimidation: /threatened|intimidated|threat/.test(clean) || q.fear >= 2,
    isolation: /boycott|ostracized|isolated|alone/.test(clean) || q.isolation >= 2,
    medical: /assault|attacked|injured|wound/.test(clean) || q.medical >= 2,
    legalStress: /court|hearing|case|police complaint|fir/.test(clean) || q.legal >= 2
  };
  const severeFlagCount = ['suicidal','trauma','medical','intimidation'].filter(k => flags[k]).length;
  flags.extremeVulnerability = severeFlagCount >= 2;

  let category;
  let forced = false;
  if (safetyTriggered) { category = 'critical'; forced = true; }
  else if (svi >= 75) category = 'critical';
  else if (svi >= 50) category = 'high';
  else if (svi >= 25) category = 'moderate';
  else category = 'low';

  if (flags.medical && category !== 'critical' && (category === 'low' || category === 'moderate')) {
    category = 'high';
  }

  goToStep(4);
  renderResult({ svi, category, forced, flags });
}

function renderResult({ svi, category, forced, flags }) {
  const dict = I18N[currentLang];
  document.getElementById('svi-number').textContent = svi;

  const catLabels = {
    en: { low: 'LOW RISK', moderate: 'MODERATE RISK', high: 'HIGH RISK', critical: 'CRITICAL RISK' },
    hi: { low: 'कम जोखिम', moderate: 'मध्यम जोखिम', high: 'उच्च जोखिम', critical: 'गंभीर जोखिम' }
  };
  const badge = document.getElementById('category-badge');
  badge.textContent = catLabels[currentLang][category];
  badge.className = 'category-badge cat-' + category;

  document.getElementById('force-note').classList.toggle('hidden', !forced);

  const tagLabels = {
    en: { trauma:'Trauma', fear:'Fear', depression:'Depression', suicidal:'Suicidal ideation', intimidation:'Intimidation', isolation:'Social isolation', medical:'Physical harm', legalStress:'Legal-process distress', extremeVulnerability:'Extreme vulnerability' },
    hi: { trauma:'आघात', fear:'भय', depression:'अवसाद', suicidal:'आत्महत्या के विचार', intimidation:'धमकी', isolation:'सामाजिक अलगाव', medical:'शारीरिक क्षति', legalStress:'कानूनी प्रक्रिया तनाव', extremeVulnerability:'अत्यधिक भेद्यता' }
  };
  const tagRow = document.getElementById('tag-row');
  tagRow.innerHTML = '';
  Object.keys(flags).forEach(key => {
    if (flags[key]) {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tagLabels[currentLang][key];
      tagRow.appendChild(span);
    }
  });
  if (tagRow.children.length === 0) {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = currentLang === 'hi' ? 'कोई महत्वपूर्ण संकेतक नहीं' : 'No significant indicators';
    tagRow.appendChild(span);
  }

  renderRecommendations(category, flags);
}

/* ---------- Recommendation / referral engine ---------- */
const REC_LIBRARY = {
  en: {
    selfHelp: { title: 'Self-help resources', body: 'Psychoeducation and coping guidance available on request.', owner: '—' },
    counselling: { title: 'Counselling & psychological first aid', body: 'A trained counsellor will review this case and reach out.', owner: 'Counsellors & Mental Health Professionals' },
    priorityCounselling: { title: 'Priority counselling & psychological first aid', body: 'Flagged for expedited counsellor contact given the severity indicated.', owner: 'Counsellors & Mental Health Professionals' },
    portalFollowUp: { title: 'Scheduled follow-up via Integrated Portal', body: 'A follow-up check-in is queued through the portal.', owner: 'Integrated Portal' },
    legalAid: { title: 'Legal aid referral', body: 'Case routed for legal assistance given the ongoing proceedings or reported incident.', owner: 'District Administration / Legal Services Authority' },
    medical: { title: 'Medical assistance', body: 'Referral for medical evaluation given reported physical harm.', owner: 'District Health Authorities' },
    police: { title: 'Police intervention', body: 'Case flagged for law-enforcement follow-up given reported threats or intimidation.', owner: 'Law Enforcement Agencies' },
    witnessProtection: { title: 'Witness protection measures', body: 'Recommended given signs of intimidation or fear of retaliation.', owner: 'Law Enforcement Agencies / District Administration' },
    rehabilitation: { title: 'Rehabilitation & welfare support', body: 'Recommended for community reintegration given reported social boycott or displacement.', owner: 'Rehabilitation & Welfare Authorities' },
    emergency: { title: 'Immediate emergency escalation', body: 'Routed to a duty officer for immediate human review — no wait time.', owner: 'NHAA (14566) Duty Officer' }
  },
  hi: {
    selfHelp: { title: 'स्व-सहायता संसाधन', body: 'माँगने पर मनो-शिक्षा एवं सामना करने की सलाह उपलब्ध।', owner: '—' },
    counselling: { title: 'परामर्श एवं मनोवैज्ञानिक प्राथमिक सहायता', body: 'एक प्रशिक्षित परामर्शदाता इस मामले की समीक्षा कर संपर्क करेगा।', owner: 'परामर्शदाता एवं मानसिक स्वास्थ्य पेशेवर' },
    priorityCounselling: { title: 'प्राथमिकता परामर्श एवं मनोवैज्ञानिक प्राथमिक सहायता', body: 'दर्शाई गई गंभीरता को देखते हुए त्वरित परामर्शदाता संपर्क के लिए चिह्नित।', owner: 'परामर्शदाता एवं मानसिक स्वास्थ्य पेशेवर' },
    portalFollowUp: { title: 'इंटीग्रेटेड पोर्टल के माध्यम से अनुवर्ती कार्रवाई', body: 'पोर्टल के माध्यम से एक अनुवर्ती जांच निर्धारित है।', owner: 'इंटीग्रेटेड पोर्टल' },
    legalAid: { title: 'कानूनी सहायता संदर्भ', body: 'चल रही कार्यवाही या घटना को देखते हुए मामला कानूनी सहायता के लिए भेजा गया।', owner: 'जिला प्रशासन / विधिक सेवा प्राधिकरण' },
    medical: { title: 'चिकित्सा सहायता', body: 'रिपोर्ट की गई शारीरिक क्षति को देखते हुए चिकित्सा मूल्यांकन हेतु संदर्भ।', owner: 'जिला स्वास्थ्य प्राधिकरण' },
    police: { title: 'पुलिस हस्तक्षेप', body: 'रिपोर्ट की गई धमकी या डराने-धमकाने को देखते हुए कानून प्रवर्तन अनुवर्ती कार्रवाई के लिए चिह्नित।', owner: 'कानून प्रवर्तन एजेंसियाँ' },
    witnessProtection: { title: 'गवाह संरक्षण उपाय', body: 'धमकी या प्रतिशोध के भय के संकेतों को देखते हुए अनुशंसित।', owner: 'कानून प्रवर्तन एजेंसियाँ / जिला प्रशासन' },
    rehabilitation: { title: 'पुनर्वास एवं कल्याण सहायता', body: 'सामाजिक बहिष्कार या विस्थापन को देखते हुए सामुदायिक पुनर्एकीकरण के लिए अनुशंसित।', owner: 'पुनर्वास एवं कल्याण प्राधिकरण' },
    emergency: { title: 'तत्काल आपातकालीन प्राथमिकता', body: 'बिना किसी प्रतीक्षा के तत्काल मानव समीक्षा हेतु ड्यूटी अधिकारी को भेजा गया।', owner: 'एनएचएए (14566) ड्यूटी अधिकारी' }
  }
};

function renderRecommendations(category, flags) {
  const lib = REC_LIBRARY[currentLang];
  const order = [];

  if (category === 'low') { order.push('selfHelp'); order.push('counselling'); }
  else if (category === 'moderate') { order.push('counselling'); order.push('portalFollowUp'); }
  else if (category === 'high') { order.push('priorityCounselling'); order.push('legalAid'); }
  else { order.push('emergency'); order.push('priorityCounselling'); }

  if (flags.medical && !order.includes('medical')) order.push('medical');
  if (flags.intimidation) { if (!order.includes('police')) order.push('police'); if (!order.includes('witnessProtection')) order.push('witnessProtection'); }
  if (flags.isolation && !order.includes('rehabilitation')) order.push('rehabilitation');
  if (flags.legalStress && !order.includes('legalAid')) order.push('legalAid');
  if (flags.suicidal && !order.includes('emergency')) order.unshift('emergency');

  const seen = new Set();
  const list = document.getElementById('rec-list');
  list.innerHTML = '';
  order.forEach(key => {
    if (seen.has(key)) return;
    seen.add(key);
    const item = lib[key];
    if (!item) return;
    const div = document.createElement('div');
    div.className = 'rec-card' + (key === 'emergency' || key === 'police' ? ' urgent' : '');
    div.innerHTML = `<div class="rec-title">${item.title}</div><div class="rec-body">${item.body}</div><div class="rec-owner">${item.owner}</div>`;
    list.appendChild(div);
  });
}

function resetAssessment() {
  document.getElementById('narrative-text').value = '';
  document.getElementById('voice-metrics').classList.add('hidden');
  document.getElementById('voice-btn').textContent = I18N[currentLang].voiceStart;
  window._voiceSignals = null;
  voiceCaptured = false;
  ['q-intensity','q-duration','q-functioning'].forEach(id => document.getElementById(id).value = '2');
  ['q-fear','q-isolation','q-medical','q-legal','q-safety'].forEach(id => document.getElementById(id).value = '0');
  goToStep(1);
  document.getElementById('consent-1').checked = false;
  document.getElementById('consent-2').checked = false;
  checkConsent();
}