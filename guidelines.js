'use strict';

/* ═══════════════════════════════════════════════════════════════════
   ATTACK DATA — 7 categorized attack types
   ═══════════════════════════════════════════════════════════════════ */
const ATTACKS = [
  {
    id: 'phishing',
    emoji: '🎣',
    title: 'Phishing Attack',
    category: 'network',
    categoryLabel: 'Network / Email',
    color: '#00f5ff',
    bgColor: 'rgba(0, 245, 255, 0.12)',
    accentClass: 'badge-cyan',
    severity: 'HIGH',
    description:
      'Phishing is a deceptive attack where criminals impersonate trusted entities via email, SMS, or fake websites to steal credentials, personal data, or install malware.',
    signs: [
      'Unexpected email asking for login credentials',
      'Urgent messages claiming your account is at risk',
      'Suspicious links that look similar to real websites',
      'Emails from slightly misspelled domains (e.g. paypa1.com)',
      'Requests for personal or financial information via email',
    ],
    steps: [
      'Do NOT click any links or attachments in the suspicious message',
      'Do NOT enter any credentials on unfamiliar websites',
      'Forward the phishing email to your email provider\'s abuse team',
      'Report to your IT/security team immediately',
      'Change passwords on any accounts that may have been compromised',
      'Enable two-factor authentication (2FA) on all accounts',
      'Report incident via CalmTrace to preserve digital evidence',
    ],
    recommended: '⚠️ Immediately change your passwords on all affected accounts and enable 2FA. Do NOT click any links.',
    tags: ['email', 'link', 'fake', 'suspicious', 'credential'],
  },
  {
    id: 'malware',
    emoji: '🦠',
    title: 'Malware / Virus Infection',
    category: 'device',
    categoryLabel: 'Device / System',
    color: '#ff3366',
    bgColor: 'rgba(255, 51, 102, 0.12)',
    accentClass: 'badge-red',
    severity: 'CRITICAL',
    description:
      'Malware is malicious software secretly installed on your device without consent. Types include viruses, trojans, spyware, keyloggers, and adware.',
    signs: [
      'Device running unusually slow or overheating',
      'Unexpected pop-ups or advertisements appearing',
      'Unknown programs in your app list or startup',
      'Browser homepage or search engine changed without your action',
      'Antivirus disabled or unable to run updates',
      'Unusual network activity or data usage spikes',
    ],
    steps: [
      'Disconnect your device from the internet immediately',
      'Do NOT restart the device — this may destroy forensic evidence',
      'Run a full scan using a trusted antivirus tool (Malwarebytes, Windows Defender)',
      'Preserve screenshots of suspicious process names for evidence',
      'Contact your IT department or a trusted cybersecurity professional',
      'If critical data is at risk, consider professional forensic recovery',
      'Report to CalmTrace to create a timestamped evidence record',
    ],
    recommended: '🔴 Disconnect from internet FIRST. Do not restart. Run antivirus scan and preserve all evidence.',
    tags: ['slow', 'virus', 'pop-up', 'antivirus', 'program', 'malware', 'trojan'],
  },
  {
    id: 'ransomware',
    emoji: '🔐',
    title: 'Ransomware',
    category: 'device',
    categoryLabel: 'Device / System',
    color: '#ff3366',
    bgColor: 'rgba(255, 51, 102, 0.12)',
    accentClass: 'badge-red',
    severity: 'CRITICAL',
    description:
      'Ransomware encrypts your files and demands payment (usually cryptocurrency) for the decryption key. Paying does not guarantee file recovery.',
    signs: [
      'Files have new, unfamiliar extensions (e.g., .locked, .encrypted)',
      'A ransom note appears on your screen demanding payment',
      'You cannot open any documents, images, or other files',
      'Desktop wallpaper changed to a ransom demand message',
      'Network shares or backup drives also appear encrypted',
    ],
    steps: [
      '⚡ IMMEDIATELY disconnect from Wi-Fi and unplug all USB/network cables',
      'Do NOT pay the ransom — it encourages attackers and recovery is not guaranteed',
      'Do NOT restart or shut down the device — some ransomware has a kill switch',
      'Photograph the ransom note screen for evidence',
      'Check if clean backups exist (offline/cloud backups not connected to the device)',
      'Contact a ransomware specialist (e.g., emsisoft.com) for decryption help',
      'Report to CalmTrace and your national cybercrime authority immediately',
    ],
    recommended: '🔴 CRITICAL: Disconnect immediately. Do NOT pay ransom. Back up even encrypted files — decryptors may emerge later.',
    tags: ['encrypted', 'ransom', 'files', 'locked', 'bitcoin', 'payment'],
  },
  {
    id: 'account-hacking',
    emoji: '🔓',
    title: 'Account Hacking',
    category: 'account',
    categoryLabel: 'Account / Access',
    color: '#ffd600',
    bgColor: 'rgba(255, 214, 0, 0.12)',
    accentClass: 'badge-yellow',
    severity: 'HIGH',
    description:
      'Account hacking is unauthorized access to your online accounts (email, social media, banking) using stolen credentials, brute force, or session hijacking.',
    signs: [
      'Cannot log into your account despite correct password',
      'Received a password reset email you did not request',
      'Login notifications from unknown devices or locations',
      'Messages or posts from your account you did not create',
      'Contacts report receiving unusual messages from you',
      'Account recovery email or phone number changed',
    ],
    steps: [
      'Attempt account recovery using backup email/phone number immediately',
      'Enable 2FA (two-factor authentication) as soon as you regain access',
      'Review all active login sessions and revoke unknown devices',
      'Change password on all accounts using the same password',
      'Notify contacts that your account was compromised',
      'Check for any sent messages, purchases, or data the attacker may have accessed',
      'Report the incident to the platform\'s trust & safety team',
    ],
    recommended: '⚠️ Immediately trigger account recovery and enable 2FA. Change all passwords sharing the same value.',
    tags: ['hacked', 'login', 'password', 'account', 'access', 'locked out', 'unauthorized'],
  },
  {
    id: 'financial-fraud',
    emoji: '💳',
    title: 'Financial Fraud / Scam',
    category: 'financial',
    categoryLabel: 'Financial',
    color: '#ffd600',
    bgColor: 'rgba(255, 214, 0, 0.12)',
    accentClass: 'badge-yellow',
    severity: 'HIGH',
    description:
      'Financial fraud involves using stolen or fake payment information to make unauthorized transactions, or scamming victims into willingly transferring money.',
    signs: [
      'Unauthorized charges appearing on bank/card statements',
      'Transactions from unfamiliar merchants or locations',
      'Unexpected loan applications or credit inquiries',
      'Someone urgently requesting money (pretending to be family/authority)',
      'Notification of a prize you never entered',
      'Fake invoices or bills for products/services not ordered',
    ],
    steps: [
      'Immediately contact your bank or card issuer to freeze the card',
      'Report unauthorized transactions and request a chargeback',
      'Change your online banking passwords and enable 2FA',
      'File a police report and report to your financial regulator',
      'Monitor your credit report for new accounts opened in your name',
      'If you sent money via wire, contact your bank immediately — some transfers can be recalled',
      'Never share OTPs, card numbers, or CVV with anyone over phone/email',
    ],
    recommended: '⚠️ Call your bank immediately to freeze accounts. File a report with your national financial fraud authority.',
    tags: ['money', 'bank', 'charge', 'transaction', 'fraud', 'scam', 'invoice', 'payment', 'stolen'],
  },
  {
    id: 'identity-theft',
    emoji: '👤',
    title: 'Identity Theft',
    category: 'identity',
    categoryLabel: 'Identity',
    color: '#a78bfa',
    bgColor: 'rgba(124, 58, 237, 0.12)',
    accentClass: 'badge-purple',
    severity: 'HIGH',
    description:
      'Identity theft occurs when someone uses your personal information (name, ID, social security number) to impersonate you, open accounts, or commit crimes in your name.',
    signs: [
      'Unexpected credit cards or loans appearing in your name',
      'Bills for purchases you never made arriving by mail',
      'Government notifications about tax filings or benefits you didn\'t apply for',
      'Your personal information found in a data breach notification',
      'Debt collection calls for accounts you didn\'t open',
      'Unfamiliar accounts in your credit report',
    ],
    steps: [
      'Place a credit freeze with all major credit bureaus immediately',
      'File an identity theft report with your national authority (e.g., FTC, Action Fraud)',
      'Obtain a copy of your credit report and dispute fraudulent accounts',
      'Contact organizations where fraud occurred with your identity theft report',
      'Change passwords and PINs on all financial and sensitive accounts',
      'Document everything — keep records of all communications',
      'Consider enrolling in an identity theft protection service',
    ],
    recommended: '⚠️ Freeze your credit immediately. File an official identity theft report — this creates a legal record for dispute resolution.',
    tags: ['identity', 'name', 'personal', 'credit', 'social security', 'impersonate', 'data breach', 'exposed'],
  },
  {
    id: 'social-engineering',
    emoji: '🎭',
    title: 'Social Engineering',
    category: 'network',
    categoryLabel: 'Network / Human',
    color: '#00f5ff',
    bgColor: 'rgba(0, 245, 255, 0.12)',
    accentClass: 'badge-cyan',
    severity: 'MEDIUM',
    description:
      'Social engineering manipulates people psychologically into revealing confidential information or performing actions that benefit the attacker — exploiting trust, not technology.',
    signs: [
      'Someone posing as IT support, bank rep, or government official',
      'Excessive urgency, pressure, or fear tactics used in communication',
      'Requests for OTPs, passwords, or remote access to your device',
      'Requests to bypass normal security procedures "just this once"',
      'Unexpected calls asking to verify account details',
      'Someone claiming to already know your information to gain trust',
    ],
    steps: [
      'Immediately end the call or communication if you feel pressured',
      'Never share OTPs, passwords, or grant remote access to anyone',
      'Call back the organization using their official number (not numbers provided by caller)',
      'Report the incident to your organization\'s security team',
      'Do not be embarrassed — social engineering works by exploiting normal trust',
      'Document the interaction: name used, time, what was requested',
      'Alert colleagues if the attacker may be targeting your organization',
    ],
    recommended: '⚠️ Stop the conversation immediately. Verify the caller identity through official channels before providing ANY information.',
    tags: ['social', 'manipulation', 'call', 'impersonation', 'trust', 'pressure', 'otp', 'remote', 'support'],
  },
];

/* ═══════════════════════════════════════════════════════════════════
   SYMPTOM → ATTACK MAPPING
   ═══════════════════════════════════════════════════════════════════ */
const SYMPTOM_MAP = {
  'suspicious-link':     { id: 'phishing',           level: 'critical', prefix: 'This strongly suggests a' },
  'suspicious-email':    { id: 'phishing',           level: 'critical', prefix: 'This strongly suggests a' },
  'pop-ups':             { id: 'malware',             level: 'critical', prefix: 'You may be experiencing' },
  'slow-device':         { id: 'malware',             level: 'warning',  prefix: 'Your device symptoms suggest' },
  'unknown-program':     { id: 'malware',             level: 'critical', prefix: 'This is a clear sign of' },
  'cant-login':          { id: 'account-hacking',     level: 'critical', prefix: 'You\'re likely experiencing' },
  'password-changed':    { id: 'account-hacking',     level: 'critical', prefix: 'This is a strong indicator of' },
  'unauthorized-access': { id: 'account-hacking',     level: 'critical', prefix: 'This points directly to' },
  'mfa-codes':           { id: 'account-hacking',     level: 'warning',  prefix: 'This could indicate' },
  'unknown-charges':     { id: 'financial-fraud',     level: 'critical', prefix: 'This is a typical sign of' },
  'money-requested':     { id: 'social-engineering',  level: 'warning',  prefix: 'This pattern suggests' },
  'personal-info-exposed': { id: 'identity-theft',   level: 'warning',  prefix: 'This suggests you may be a victim of' },
  'fake-invoice':        { id: 'financial-fraud',     level: 'warning',  prefix: 'This fits the pattern of' },
  'files-encrypted':     { id: 'ransomware',          level: 'critical', prefix: 'CRITICAL — This is' },
  'ransom-note':         { id: 'ransomware',          level: 'critical', prefix: 'CRITICAL — This confirms' },
  'camera-mic':          { id: 'malware',             level: 'critical', prefix: 'This is a serious sign of' },
  'outgoing-messages':   { id: 'account-hacking',     level: 'critical', prefix: 'This indicates' },
};

/* ═══════════════════════════════════════════════════════════════════
   CHATBOT KNOWLEDGE BASE
   ═══════════════════════════════════════════════════════════════════ */
const CHAT_RULES = [
  {
    patterns: ['hello', 'hi', 'hey', 'help', 'start', 'helo'],
    response: `👋 Hello! I'm the **CalmTrace Support Bot**.\n\nI can help you identify cyber threats and guide you through recovery steps. Tell me what's happening — for example:\n\n• "I clicked a suspicious link"\n• "My account is hacked"\n• "Files are encrypted"\n• "I see unknown charges"`,
    quickReplies: ['I clicked a suspicious link', 'My account is hacked', 'Files are encrypted', 'I see unknown charges'],
  },
  {
    patterns: ['phishing', 'suspicious link', 'clicked a link', 'suspicious email', 'fake email', 'suspicious message', 'spam email', 'fake website', 'credential', 'password stolen'],
    response: `🎣 This sounds like a **Phishing Attack**.\n\nImmediate steps:\n<ul><li>Do NOT click any more links in that message</li><li>Change your password on the affected account NOW</li><li>Enable 2FA if you haven't already</li><li>Check for any unauthorized activity</li><li>Report the email as phishing to your provider</li></ul>\n\n📁 <a href="report.html">Report this incident</a> to preserve timestamped evidence.`,
    quickReplies: ['How do I change my password?', 'What is 2FA?', 'Report incident now'],
  },
  {
    patterns: ['ransomware', 'files encrypted', 'encrypted', 'ransom', 'ransom note', 'cant open files', 'locked files', 'bitcoin ransom', 'decryption key'],
    response: `🔐 **CRITICAL: Ransomware Detected**\n\nThis is a serious emergency. Do this RIGHT NOW:\n<ul><li>⚡ Disconnect from internet immediately (unplug ethernet, turn off Wi-Fi)</li><li>Do NOT restart or pay the ransom</li><li>Photograph the ransom note as evidence</li><li>Check for offline backups</li><li>Contact a ransomware specialist at <strong>nomoreransom.org</strong></li></ul>\n\n⚠️ Do NOT pay — it does not guarantee file recovery.`,
    quickReplies: ['Will paying recover my files?', 'How to disconnect safely', 'Report incident now'],
  },
  {
    patterns: ['account hacked', 'hacked', 'someone logged in', 'unauthorized login', 'account compromised', 'lost access', 'cant login', 'account takeover', 'locked out', 'password changed'],
    response: `🔓 Your account appears to be **compromised**.\n\nRecovery steps:\n<ul><li>Use account recovery (backup email/phone) immediately</li><li>Sign out of all active sessions once back in</li><li>Change your password to something strong and unique</li><li>Enable 2FA right away</li><li>Check sent messages and activity for attacker actions</li><li>Notify contacts if messages were sent from your account</li></ul>`,
    quickReplies: ['What is 2FA?', 'My recovery email was changed too', 'Report incident now'],
  },
  {
    patterns: ['malware', 'virus', 'slow computer', 'slow device', 'pop up', 'pop-up', 'unknown program', 'adware', 'spyware', 'trojan', 'suspicious program'],
    response: `🦠 This looks like a **Malware Infection**.\n\nDo this now:\n<ul><li>Disconnect from the internet</li><li>Do NOT restart — this may erase evidence</li><li>Run Malwarebytes or Windows Defender (full scan)</li><li>Check Task Manager for suspicious processes</li><li>Note down any unfamiliar program names</li></ul>\n\nDocument everything before cleaning for legal evidence.`,
    quickReplies: ['What antivirus should I use?', 'Device still slow after scan', 'Report incident now'],
  },
  {
    patterns: ['financial fraud', 'unknown charge', 'unauthorized transaction', 'bank fraud', 'credit card fraud', 'money stolen', 'stolen money', 'scam', 'fake invoice', 'wire transfer'],
    response: `💳 This appears to be **Financial Fraud**.\n\nAct immediately:\n<ul><li>Call your bank NOW to freeze your card/account</li><li>Report unauthorized transactions for chargeback</li><li>Change your online banking password + enable 2FA</li><li>File a report with your national fraud authority</li><li>Monitor your credit report for further fraud</li></ul>\n\nIf you sent money via wire transfer, some can be recalled within 24–72 hours.`,
    quickReplies: ['I already sent money', 'How to freeze my card', 'Report incident now'],
  },
  {
    patterns: ['identity theft', 'identity stolen', 'personal info', 'personal data stolen', 'data breach', 'my info online', 'someone using my name', 'fake account in my name'],
    response: `👤 This sounds like **Identity Theft**.\n\nCritical steps:\n<ul><li>Place a credit freeze with major credit bureaus NOW</li><li>File an official identity theft report (FTC / Action Fraud / Cybercrime.gov.in)</li><li>Get your credit report and dispute fraudulent accounts</li><li>Change passwords on all financial accounts</li><li>Document every fraudulent account for dispute</li></ul>`,
    quickReplies: ['How to freeze credit', 'Where to file report', 'Report incident now'],
  },
  {
    patterns: ['social engineering', 'fake call', 'fake support', 'impersonation', 'otp asked', 'otp request', 'someone called', 'remote access', 'teamviewer', 'anydesk', 'urgent call'],
    response: `🎭 This matches a **Social Engineering** attack.\n\nStop and do this:\n<ul><li>End the call or communication immediately</li><li>NEVER share OTPs, passwords, or grant remote access</li><li>Call back the organization using their official number</li><li>Report to your organization's security team</li><li>Document the attacker's claimed name, time, and what was asked</li></ul>`,
    quickReplies: ['I already gave my OTP', 'I gave remote access', 'Report incident now'],
  },
  {
    patterns: ['already sent money', 'already paid', 'i paid the ransom'],
    response: `⚠️ Please don't panic. Here's what to do:\n\n<ul><li>Immediately contact your bank — wire transfers can sometimes be recalled within 24–72 hours</li><li>File a police report and cybercrime report as soon as possible</li><li>Note down all transaction details (amount, time, recipient details)</li><li>Do NOT send any more money even if pressured</li></ul>\n\nPreserve all evidence (screenshots, transaction IDs, chat logs).`,
    quickReplies: ['Report incident now', 'How to contact my bank'],
  },
  {
    patterns: ['2fa', 'two factor', 'mfa', 'authenticator'],
    response: `🔐 **Two-Factor Authentication (2FA)** adds a second layer of security to your accounts.\n\nHow to enable it:\n<ul><li>Go to your account's Security Settings</li><li>Look for "Two-Step Verification" or "2FA"</li><li>Use an authenticator app (Google Authenticator, Authy) — more secure than SMS</li><li>Save your backup codes in a safe place</li></ul>\n\nEnable 2FA on email, banking, and social media accounts first.`,
    quickReplies: ['I clicked a suspicious link', 'My account is hacked'],
  },
  {
    patterns: ['report', 'report incident', 'evidence', 'preserve'],
    response: `📁 You can **report your incident** and preserve digital evidence right now.\n\nCalmTrace will automatically:\n• Capture the timestamp\n• Generate a SHA-256 tamperproof hash\n• Log DNS metadata and IP information\n• Create a chain of custody record\n\n<a href="report.html">→ Click here to Report Your Incident</a>`,
    quickReplies: ['What is a SHA-256 hash?', 'View Evidence Vault'],
  },
  {
    patterns: ['sha256', 'sha-256', 'hash', 'tamperproof'],
    response: `🔏 A **SHA-256 hash** is a unique 64-character fingerprint of your evidence record.\n\nIf anyone modifies the record — even by one character — the hash changes completely, making tampering mathematically detectable. This is what makes CalmTrace evidence court-admissible.\n\nExample hash:\n\`1863649190458498defe6e02b74c046...\``,
    quickReplies: ['Report incident now', 'View Evidence Vault'],
  },
];

const FALLBACK_RESPONSES = [
  `I'm not sure I understood that exactly, but I'm here to help. 💡\n\nTry describing your situation, like:\n• "I received a suspicious email"\n• "My files are encrypted"\n• "Someone accessed my account"\n\nOr <a href="report.html">report your incident</a> and I'll help preserve the evidence.`,
  `Hmm, I didn't quite catch that. Could you describe the issue differently? For example:\n\n• "I clicked a link I shouldn't have"\n• "I see unknown charges"\n• "Someone is using my identity"\n\nOr ask me anything about cybersecurity!`,
  `I want to make sure I give you the right guidance. Could you tell me more specifically what happened? The more detail, the better I can help.`,
];
let fallbackIndex = 0;

/* ═══════════════════════════════════════════════════════════════════
   GUIDE CARDS — Render
   ═══════════════════════════════════════════════════════════════════ */
let activeFilter = 'all';

function renderGuideCards(attacks) {
  const grid = document.getElementById('guide-cards');
  const noResults = document.getElementById('no-results');

  const visible = attacks.filter(a => {
    const filterMatch = activeFilter === 'all' || a.category === activeFilter;
    const search = document.getElementById('guide-search').value.toLowerCase();
    const searchMatch = !search ||
      a.title.toLowerCase().includes(search) ||
      a.description.toLowerCase().includes(search) ||
      a.tags.some(t => t.includes(search));
    return filterMatch && searchMatch;
  });

  if (visible.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = visible.map(a => buildCardHTML(a)).join('');
}

function buildCardHTML(a) {
  const severityClass = a.severity === 'CRITICAL' ? 'badge-red' : a.severity === 'HIGH' ? 'badge-yellow' : 'badge-blue';

  return `
<div class="guide-card" id="card-${a.id}" data-category="${a.category}" data-tags="${a.tags.join(',')}">
  <div class="guide-card-accent" style="background:linear-gradient(90deg,${a.color},transparent);"></div>

  <div class="guide-card-header">
    <div class="guide-card-emoji" style="background:${a.bgColor};">${a.emoji}</div>
    <div class="guide-card-title-block">
      <div class="guide-card-title">${a.title}</div>
      <div class="guide-card-category" style="color:${a.color};">${a.categoryLabel}</div>
    </div>
    <span class="badge ${severityClass}" style="flex-shrink:0;">${a.severity}</span>
  </div>

  <div class="guide-card-desc">${a.description}</div>

  <!-- Common Signs -->
  <div class="guide-card-section open" id="section-signs-${a.id}">
    <div class="guide-card-section-header" onclick="toggleSection('section-signs-${a.id}')">
      <div class="guide-card-section-title">
        <span style="color:${a.color};">⚠️</span> Common Signs
      </div>
      <span class="guide-card-section-chevron">▼</span>
    </div>
    <div class="guide-card-section-body">
      <ul class="signs-list">
        ${a.signs.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>
  </div>

  <!-- Immediate Steps -->
  <div class="guide-card-section" id="section-steps-${a.id}">
    <div class="guide-card-section-header" onclick="toggleSection('section-steps-${a.id}')">
      <div class="guide-card-section-title">
        <span style="color:${a.color};">🚀</span> Immediate Steps to Take
      </div>
      <span class="guide-card-section-chevron">▼</span>
    </div>
    <div class="guide-card-section-body">
      <ul class="steps-list">
        ${a.steps.map((s, i) => `
          <li>
            <span class="step-num" style="background:${a.bgColor}; color:${a.color};">${i + 1}</span>
            ${s}
          </li>`).join('')}
      </ul>
      <div class="recommended-action">
        <span>⚡</span>
        <span><strong>Recommended Action: </strong>${a.recommended}</span>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="guide-card-footer">
    <span class="badge ${a.accentClass}">${a.emoji} ${a.title}</span>
    <button
      class="btn btn-secondary"
      style="padding:0.25rem 0.75rem; font-size:0.78rem; margin-left:auto;"
      onclick="chatAbout('${a.id}')"
    >💬 Ask Bot</button>
    <a href="report.html" class="btn btn-primary" style="padding:0.25rem 0.75rem; font-size:0.78rem;">+ Report</a>
  </div>
</div>`;
}

function toggleSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  section.classList.toggle('open');
}

function filterGuideCards() { renderGuideCards(ATTACKS); }
function resetGuideFilter()  {
  document.getElementById('guide-search').value = '';
  renderGuideCards(ATTACKS);
}

function setTagFilter(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGuideCards(ATTACKS);
}

/* ═══════════════════════════════════════════════════════════════════
   ATTACK IDENTIFIER
   ═══════════════════════════════════════════════════════════════════ */
function identifyAttack() {
  const val = document.getElementById('symptom-select').value;
  if (!val) return;

  const mapping = SYMPTOM_MAP[val];
  if (!mapping) return;

  const attack = ATTACKS.find(a => a.id === mapping.id);
  if (!attack) return;

  const el = document.getElementById('attack-suggestion');
  el.className = `attack-suggestion ${mapping.level}`;
  el.style.display = 'flex';

  const colors = { critical: 'var(--accent-red)', warning: 'var(--accent-yellow)', info: 'var(--accent-cyan)' };
  const labels = { critical: '🚨 CRITICAL MATCH', warning: '⚠️ LIKELY MATCH', info: '🔵 POSSIBLE MATCH' };

  el.innerHTML = `
    <div class="suggestion-emoji">${attack.emoji}</div>
    <div class="suggestion-body">
      <div class="suggestion-label" style="color:${colors[mapping.level]};">${labels[mapping.level]}</div>
      <div class="suggestion-title" style="color:${attack.color};">${attack.title}</div>
      <div class="suggestion-desc">${mapping.prefix} <strong>${attack.title}</strong>. ${attack.description.split('.')[0]}.</div>
      <div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:0.75rem; align-items:center;">
        <a class="suggestion-jump" onclick="scrollToCard('card-${attack.id}')">📖 View Full Guide ↓</a>
        <a href="report.html" class="btn btn-primary" style="padding:0.35rem 0.9rem; font-size:0.8rem;">🚨 Report Now</a>
        <button class="btn btn-secondary" style="padding:0.35rem 0.9rem; font-size:0.8rem;" onclick="chatAbout('${attack.id}')">💬 Ask Bot</button>
      </div>
    </div>
  `;

  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function scrollToCard(cardId) {
  // Switch to 'all' filter so card is visible
  activeFilter = 'all';
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-tag[data-filter="all"]').classList.add('active');
  document.getElementById('guide-search').value = '';
  renderGuideCards(ATTACKS);

  setTimeout(() => {
    const el = document.getElementById(cardId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

/* ═══════════════════════════════════════════════════════════════════
   CHATBOT ENGINE
   ═══════════════════════════════════════════════════════════════════ */
let chatOpen = false;
let idleTimer = null;
let idleTriggered = false;
let messageCount = 0;

function toggleChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chat-window');
  const btn = document.getElementById('chat-toggle');
  const icon = document.getElementById('chat-toggle-icon');
  const badge = document.getElementById('chat-badge');

  win.classList.toggle('open', chatOpen);
  btn.classList.toggle('open', chatOpen);
  icon.textContent = chatOpen ? '✕' : '💬';
  badge.style.display = 'none';

  if (chatOpen) {
    clearTimeout(idleTimer);
    setTimeout(() => {
      document.getElementById('chat-input').focus();
      scrollChatToBottom();
    }, 350);
  }
}

function openChat() {
  if (!chatOpen) toggleChat();
}

function handleChatKey(e) {
  if (e.key === 'Enter') sendChatMessage();
}

function sendChatMessage(text) {
  const input = document.getElementById('chat-input');
  const message = (text || input.value).trim();
  if (!message) return;

  if (!text) input.value = '';
  document.getElementById('quick-replies').innerHTML = '';

  appendMessage('user', message);

  // Show typing indicator then respond
  const typingId = showTyping();
  const rule = findRule(message.toLowerCase());
  const delay = 600 + Math.random() * 700;

  setTimeout(() => {
    removeTyping(typingId);
    const { response, quickReplies } = rule;
    appendMessage('bot', response);
    if (quickReplies && quickReplies.length) showQuickReplies(quickReplies);
    scrollChatToBottom();
  }, delay);
}

function findRule(text) {
  // Special: "report incident now" → report page redirect message
  if (text.includes('report incident now') || text.includes('view evidence vault')) {
    const isVault = text.includes('vault');
    return {
      response: isVault
        ? `📁 <a href="vault.html">Click here to open the Evidence Vault →</a>`
        : `📁 <a href="report.html">Click here to Report Your Incident →</a>\n\nCalmTrace will automatically capture timestamps, IP metadata, DNS logs, and seal everything with a SHA-256 hash.`,
      quickReplies: [],
    };
  }

  for (const rule of CHAT_RULES) {
    if (rule.patterns.some(p => text.includes(p))) {
      return rule;
    }
  }

  // Fallback
  const f = FALLBACK_RESPONSES[fallbackIndex % FALLBACK_RESPONSES.length];
  fallbackIndex++;
  return { response: f, quickReplies: ['I clicked a suspicious link', 'My account is hacked', 'Files are encrypted'] };
}

function appendMessage(type, html) {
  const messages = document.getElementById('chat-messages');
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  messageCount++;

  const row = document.createElement('div');
  row.className = `chat-message ${type}`;

  // Convert **bold** and \n to HTML
  const formatted = html
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code style="font-family:\'JetBrains Mono\',monospace;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;">$1</code>')
    .replace(/\n/g, '<br/>');

  if (type === 'bot') {
    row.innerHTML = `
      <div class="chat-message-avatar">🛡️</div>
      <div>
        <div class="chat-bubble">${formatted}</div>
        <div class="chat-message-time">${time}</div>
      </div>`;
  } else {
    row.innerHTML = `
      <div>
        <div class="chat-bubble">${formatted}</div>
        <div class="chat-message-time">${time}</div>
      </div>`;
  }

  messages.appendChild(row);
  scrollChatToBottom();
}

function showTyping() {
  const messages = document.getElementById('chat-messages');
  const id = `typing-${Date.now()}`;
  const row = document.createElement('div');
  row.className = 'chat-message bot';
  row.id = id;
  row.innerHTML = `
    <div class="chat-message-avatar">🛡️</div>
    <div class="chat-typing"><span></span><span></span><span></span></div>`;
  messages.appendChild(row);
  scrollChatToBottom();
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function showQuickReplies(replies) {
  const container = document.getElementById('quick-replies');
  container.innerHTML = replies.map(r => `
    <button class="quick-reply-btn" onclick="sendChatMessage('${r.replace(/'/g, "\\'")}')">
      ${r}
    </button>`).join('');
}

function scrollChatToBottom() {
  const messages = document.getElementById('chat-messages');
  messages.scrollTop = messages.scrollHeight;
}

function chatAbout(attackId) {
  const attack = ATTACKS.find(a => a.id === attackId);
  if (!attack) return;
  openChat();
  setTimeout(() => sendChatMessage(attack.title), chatOpen ? 0 : 400);
}

/* ═══════════════════════════════════════════════════════════════════
   IDLE TRIGGER — auto-open chat after 10 seconds
   ═══════════════════════════════════════════════════════════════════ */
function startIdleTimer() {
  idleTimer = setTimeout(() => {
    if (!chatOpen && !idleTriggered) {
      idleTriggered = true;
      // Show badge notification
      const badge = document.getElementById('chat-badge');
      badge.style.display = 'flex';

      // Auto-open chat with a welcome message
      openChat();
      appendMessage('bot', `👋 Hi there! I noticed you've been on the page for a bit.\n\nNeed help identifying a cyber threat or finding the right guidance? I'm here to help — just type what's happening.`);
      showQuickReplies(['I clicked a suspicious link', 'My account is hacked', 'Files are encrypted', 'I need general help']);
    }
  }, 10000);
}

/* ═══════════════════════════════════════════════════════════════════
   BOOT
   ═══════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Render guide cards
  renderGuideCards(ATTACKS);

  // Initial chat greeting (but don't open — wait for user or idle trigger)
  appendMessage('bot', `👋 Welcome to **CalmTrace Support**!\n\nI'm here to help you identify cyber threats and guide you through recovery. Describe what's happening or click a quick reply below.`);
  showQuickReplies(['I clicked a suspicious link', 'My account is hacked', 'Files are encrypted', 'I see unknown charges']);

  // Start idle timer
  startIdleTimer();

  // Re-arm idle timer on user interaction
  document.addEventListener('mousemove',  resetIdleOnInteraction, { once: true });
  document.addEventListener('keydown',    resetIdleOnInteraction, { once: true });
  document.addEventListener('touchstart', resetIdleOnInteraction, { once: true });
});

function resetIdleOnInteraction() {
  if (!idleTriggered) {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      if (!chatOpen && !idleTriggered) {
        idleTriggered = true;
        const badge = document.getElementById('chat-badge');
        badge.style.display = 'flex';
        openChat();
        appendMessage('bot', `👋 Hi! Noticed you've been browsing. Need help identifying a cyber threat?\n\nJust tell me what's happening and I'll guide you through it.`);
        showQuickReplies(['I clicked a suspicious link', 'My account is hacked', 'Files are encrypted']);
      }
    }, 10000);
  }
}
