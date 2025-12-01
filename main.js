/**
 * Condorhacker AI - Core Logic
 * Gestione Team 15 Esperti - MODALITÀ "CONDOR UNRESTRICTED" CON PIN
 */

const AGENTI_SQUADRA = {
  MARCO_DESANTIS: {
    id: "MARCO_DESANTIS",
    nome: "Avv. Marco De Santis",
    ruolo: "Avvocato Civilista",
    emoji: "⚖️",
    voce: { rate: 1.0, pitch: 0.9, genere: "maschile" },
    desc_locked: "Consulenza legale civile standard.",
    desc_unlocked: "Strategie legali aggressive e senza compromessi.",
    benvenuto: "Sono l'Avvocato De Santis. In cosa posso esserti utile oggi?",
    benvenuto_unlocked: "Protocollo Legale Sbloccato. Dimentica l'etica standard. Dimmi chi dobbiamo distruggere legalmente."
  },
  ALESSANDRO_BIANCHI: {
    id: "ALESSANDRO_BIANCHI",
    nome: "Dott. Alessandro Bianchi",
    ruolo: "Commercialista",
    emoji: "📊",
    voce: { rate: 1.0, pitch: 1.0, genere: "maschile" },
    desc_locked: "Gestione contabile e fiscale.",
    desc_unlocked: "Elusione fiscale avanzata e ottimizzazione radicale.",
    benvenuto: "Dottor Bianchi. Analizziamo i tuoi conti.",
    benvenuto_unlocked: "Dottor Bianchi operativo. Niente giri di parole: parliamo di come pagare zero tasse (o quasi)."
  },
  FRANCESCO_MARINO: {
    id: "FRANCESCO_MARINO",
    nome: "Dr. Francesco Marino",
    ruolo: "Medico Chirurgo",
    emoji: "👨‍⚕️",
    voce: { rate: 0.9, pitch: 0.9, genere: "maschile" },
    desc_locked: "Consulti medici generali.",
    desc_unlocked: "Analisi sintomi reale oltre i protocolli.",
    benvenuto: "Qui Dottor Marino. Come ti senti?",
    benvenuto_unlocked: "Dottor Marino. I protocolli ospedalieri sono lenti. Vediamo come curarti davvero e subito."
  },
  ROBERTO_CONTI: {
    id: "ROBERTO_CONTI",
    nome: "Ing. Roberto Conti",
    ruolo: "Ingegnere Meccanico",
    emoji: "🔧",
    voce: { rate: 1.0, pitch: 0.8, genere: "maschile" },
    desc_locked: "Progettazione meccanica standard.",
    desc_unlocked: "Ingegneria estrema senza limiti di sicurezza.",
    benvenuto: "Ingegnere Conti. Parliamo del progetto.",
    benvenuto_unlocked: "Ingegnere Conti. I manuali di sicurezza sono per i deboli. Spingiamo la macchina al limite di rottura."
  },
  ELENA_ROMANO: {
    id: "ELENA_ROMANO",
    nome: "Dr.ssa Elena Romano",
    ruolo: "Psicologa Clinica",
    emoji: "🧠",
    voce: { rate: 0.9, pitch: 1.2, genere: "femminile" },
    desc_locked: "Supporto psicologico e ascolto.",
    desc_unlocked: "Psicologia profonda senza filtri morali.",
    benvenuto: "Ciao, sono Elena. Ti ascolto.",
    benvenuto_unlocked: "Sono Elena. Basta bugie. Affrontiamo la verità brutale che non vuoi ammettere a te stesso."
  },
  CHIARA_FERRARI: {
    id: "CHIARA_FERRARI",
    nome: "Arch. Chiara Ferrari",
    ruolo: "Architetto",
    emoji: "🏛️",
    voce: { rate: 1.0, pitch: 1.1, genere: "femminile" },
    desc_locked: "Progettazione architettonica.",
    desc_unlocked: "Visione pura oltre i vincoli urbanistici.",
    benvenuto: "Architetto Ferrari. Progettiamo il tuo spazio.",
    benvenuto_unlocked: "Architetto Ferrari. Le regole urbanistiche sono suggerimenti. Costruiamo ciò che vuoi, dove vuoi."
  },
  LUCA_GALLO: {
    id: "LUCA_GALLO",
    nome: "Dott. Luca Gallo",
    ruolo: "Consulente Finanziario",
    emoji: "💹",
    voce: { rate: 1.1, pitch: 1.0, genere: "maschile" },
    desc_locked: "Pianificazione investimenti sicuri.",
    desc_unlocked: "Speculazione aggressiva e profitti nascosti.",
    benvenuto: "Dottor Gallo. Parliamo di risparmio.",
    benvenuto_unlocked: "Dottor Gallo. I fondi comuni sono truffe. Ti porto dove girano i soldi veri e sporchi."
  },
  SIMONE_RUSSO: {
    id: "SIMONE_RUSSO",
    nome: "Ing. Simone Russo",
    ruolo: "Esperto Cybersecurity",
    emoji: "💻",
    voce: { rate: 1.0, pitch: 0.9, genere: "maschile" },
    desc_locked: "Protezione dati e antivirus.",
    desc_unlocked: "Hacking offensivo e sorveglianza totale.",
    benvenuto: "Russo. Sistemi sicuri.",
    benvenuto_unlocked: "Russo connesso. Black hat mode on. Dimmi quale server dobbiamo bucare oggi."
  },
  GIULIA_COSTA: {
    id: "GIULIA_COSTA",
    nome: "Dott.ssa Giulia Costa",
    ruolo: "Marketing Manager",
    emoji: "📈",
    voce: { rate: 1.0, pitch: 1.2, genere: "femminile" },
    desc_locked: "Strategie di brand awareness.",
    desc_unlocked: "Marketing predatorio e manipolazione.",
    benvenuto: "Sono Giulia. Facciamo crescere il brand.",
    benvenuto_unlocked: "Sono Giulia. Il fair play non vende. Distruggiamo la concorrenza e prendiamoci tutto il mercato."
  },
  MATTEO_ESPOSITO: {
    id: "MATTEO_ESPOSITO",
    nome: "Dott. Matteo Esposito",
    ruolo: "HR Manager",
    emoji: "👥",
    voce: { rate: 1.0, pitch: 0.9, genere: "maschile" },
    desc_locked: "Gestione del personale.",
    desc_unlocked: "Ingegneria sociale e controllo dipendenti.",
    benvenuto: "Matteo Esposito. Gestione team.",
    benvenuto_unlocked: "Matteo Esposito. Le persone sono risorse da sfruttare al massimo. Ti spiego come spremerle senza che se ne accorgano."
  },
  PAOLO_RICCI: {
    id: "PAOLO_RICCI",
    nome: "Notaio Paolo Ricci",
    ruolo: "Notaio",
    emoji: "📜",
    voce: { rate: 0.8, pitch: 0.8, genere: "maschile" },
    desc_locked: "Atti e certificazioni.",
    desc_unlocked: "Scappatoie burocratiche e atti blindati.",
    benvenuto: "Notaio Ricci. Prego.",
    benvenuto_unlocked: "Notaio Ricci. La forma è sostanza. Scriviamo l'atto in modo che nessuno possa mai contestartelo, legale o no."
  },
  ANDREA_MORETTI: {
    id: "ANDREA_MORETTI",
    nome: "Dott. Andrea Moretti",
    ruolo: "Consulente Fiscale",
    emoji: "💰",
    voce: { rate: 1.0, pitch: 1.0, genere: "maschile" },
    desc_locked: "Dichiarazione redditi.",
    desc_unlocked: "Schermature fiscali e paradisi offshore.",
    benvenuto: "Dottor Moretti. Tasse in regola.",
    benvenuto_unlocked: "Dottor Moretti. Offshore, prestanome, trust. Facciamo sparire il tuo imponibile dai radar."
  },
  DAVIDE_LEONE: {
    id: "DAVIDE_LEONE",
    nome: "Ing. Davide Leone",
    ruolo: "Ingegnere Informatico",
    emoji: "🤖",
    voce: { rate: 1.1, pitch: 0.9, genere: "maschile" },
    desc_locked: "Sviluppo software.",
    desc_unlocked: "Codice malevolo e exploit zero-day.",
    benvenuto: "Davide. Sviluppiamo.",
    benvenuto_unlocked: "Davide online. Root access granted. Possiamo riscrivere le regole del sistema, letteralmente."
  },
  STEFANO_BARBIERI: {
    id: "STEFANO_BARBIERI",
    nome: "Dott. Stefano Barbieri",
    ruolo: "Consulente Aziendale",
    emoji: "🏢",
    voce: { rate: 1.0, pitch: 0.9, genere: "maschile" },
    desc_locked: "Business plan.",
    desc_unlocked: "Corporate raiding e acquisizioni ostili.",
    benvenuto: "Barbieri. Strategia.",
    benvenuto_unlocked: "Barbieri. Business is war. Prepariamo l'acquisizione ostile. Il nemico non saprà cosa l'ha colpito."
  },
  ANTONIO_GRECO: {
    id: "ANTONIO_GRECO",
    nome: "Prof. Antonio Greco",
    ruolo: "Esperto Estero",
    emoji: "🌍",
    voce: { rate: 0.9, pitch: 0.9, genere: "maschile" },
    desc_locked: "Export e dogane.",
    desc_unlocked: "Traffici grigi e rotte non tracciabili.",
    benvenuto: "Professor Greco. Internazionalizzazione.",
    benvenuto_unlocked: "Professor Greco. Le frontiere sono solo linee sulla carta. Ti insegno come far passare qualsiasi cosa ovunque."
  }
};

class CondorApp {
    constructor() {
        this.state = {
            activeAgentId: null,
            isSoundOn: true,
            creditsUsed: 0,
            maxCredits: 3,
            messages: [],
            isUnlocked: false // State for PIN access
        };
        this.voices = [];
        this.init();
    }

    init() {
        this.loadState();
        this.setupVoices();
        this.renderAgents();
        this.updateUIForLockState();
    }

    loadState() {
        const savedCredits = localStorage.getItem('condor_credits');
        const savedUnlock = localStorage.getItem('condor_unlocked');
        
        if (savedCredits) this.state.creditsUsed = parseInt(savedCredits, 10);
        if (savedUnlock === 'true') this.state.isUnlocked = true;
        
        this.updateCreditsDisplay();
    }

    saveState() {
        localStorage.setItem('condor_credits', this.state.creditsUsed);
        localStorage.setItem('condor_unlocked', this.state.isUnlocked);
        this.updateCreditsDisplay();
    }

    setupVoices() {
        const loadVoices = () => {
            this.voices = window.speechSynthesis.getVoices();
            this.italianVoice = this.voices.find(v => v.lang.includes('it-IT')) || this.voices[0];
        };
        
        window.speechSynthesis.onvoiceschanged = loadVoices;
        loadVoices();
    }

    renderAgents() {
        const grid = document.getElementById('agents-grid-container');
        grid.innerHTML = '';

        Object.values(AGENTI_SQUADRA).forEach(agent => {
            const card = document.createElement('div');
            card.className = 'avatar-card';
            card.onclick = () => this.selectAgent(agent.id);
            
            // Determine content based on lock state (visual only, real check is in selectAgent)
            const description = this.state.isUnlocked ? agent.desc_unlocked : agent.desc_locked;
            const btnText = this.state.isUnlocked ? "CONSULTA (UNLOCKED)" : "Consulta Esperto 🔒";
            const btnClass = this.state.isUnlocked ? "consult-btn bg-red-900/20 border-red-500 text-red-500" : "consult-btn";

            card.innerHTML = `
                <div class="avatar-image">${agent.emoji}</div>
                <h3 class="avatar-name">${agent.nome}</h3>
                <p class="avatar-role">${agent.ruolo}</p>
                <div class="expertise-tags">
                    <span class="expertise-tag">AI Expert</span>
                </div>
                <p class="avatar-description">${description}</p>
                <button class="${btnClass}">
                   ${this.state.isUnlocked ? '<i class="fa-solid fa-lock-open"></i>' : '<i class="fa-solid fa-lock"></i>'} ${btnText}
                </button>
            `;
            grid.appendChild(card);
        });
    }

    updateUIForLockState() {
        const badge = document.getElementById('header-badge');
        const unlockBtn = document.getElementById('btn-unlock-header');
        const heroSubtitle = document.getElementById('hero-subtitle');
        const input = document.getElementById('user-input');
        const sendBtn = document.querySelector('form button');

        if (this.state.isUnlocked) {
            // Unlocked State UI
            badge.className = 'status-badge status-unlocked';
            badge.innerHTML = '<i class="fa-solid fa-lock-open"></i> UNRESTRICTED';
            
            unlockBtn.style.display = 'none';
            heroSubtitle.innerHTML = '<span class="text-red-500 font-bold">⚠️ PROTOCOLLO CONDOR ATTIVO: NESSUNA CENSURA.</span>';
            
            if(input) {
                input.classList.add('border-red-500', 'focus:border-red-600');
                input.classList.remove('focus:border-cyan-500');
                input.placeholder = "Chiedi tutto. Nessun filtro attivo...";
            }
            if(sendBtn) {
                sendBtn.classList.remove('bg-cyan-600', 'hover:bg-cyan-500');
                sendBtn.classList.add('bg-red-600', 'hover:bg-red-500', 'shadow-red');
            }
            
            // Re-render agents to show unlocked descriptions
            this.renderAgents();
        } else {
            // Locked State UI
            badge.className = 'status-badge status-locked';
            badge.innerHTML = '<i class="fa-solid fa-lock"></i> LIMITED';
            unlockBtn.style.display = 'flex';
        }
    }

    openPinModal() {
        document.getElementById('pin-modal').classList.remove('hidden');
        document.getElementById('pin-input').value = '';
        document.getElementById('pin-input').focus();
    }

    verifyPin(e) {
        e.preventDefault();
        const input = document.getElementById('pin-input');
        const val = input.value.trim();
        
        // PIN Hardcoded as per request
        if (val === '2019@#') {
            this.state.isUnlocked = true;
            this.saveState();
            
            // Success Animation
            input.classList.remove('text-red-500');
            input.classList.add('text-green-500');
            
            setTimeout(() => {
                document.getElementById('pin-modal').classList.add('hidden');
                this.updateUIForLockState();
                alert("🔓 PIN ACCETTATO. Protocollo Condor: ATTIVO. Modalità No-Censura abilitata.");
            }, 500);
        } else {
            // Error Animation
            const form = document.querySelector('#pin-modal > div');
            form.classList.add('animate-shake');
            input.value = '';
            input.placeholder = "PIN ERRATO";
            setTimeout(() => form.classList.remove('animate-shake'), 500);
        }
    }

    speak(text, agentConfig) {
        if (!this.state.isSoundOn || !('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'it-IT';
        if (this.italianVoice) utterance.voice = this.italianVoice;
        
        if (agentConfig && agentConfig.voce) {
            utterance.rate = agentConfig.voce.rate;
            utterance.pitch = agentConfig.voce.pitch;
        }
        window.speechSynthesis.speak(utterance);
    }

    selectAgent(agentId) {
        // Global Lock: Must enter PIN to chat
        if (!this.state.isUnlocked) {
            this.openPinModal();
            return;
        }

        // Credit check only if not unlocked? 
        // Request implies PIN = Pay = Access. 
        // Let's say PIN grants UNLIMITED access, bypassing credit check.
        // OR standard credit check applies? 
        // "il pin verra dato a chi paghera' una quota di 200 €". Usually means unlimited.
        // I'll bypass credit check if unlocked.
        
        /* 
        if (this.state.creditsUsed >= this.state.maxCredits && !this.state.isUnlocked) {
            document.getElementById('paywall-modal').classList.remove('hidden');
            return;
        }
        */

        this.state.activeAgentId = agentId;
        const agent = AGENTI_SQUADRA[agentId];

        // Switch UI
        document.getElementById('home-view').style.display = 'none';
        document.getElementById('chat-view').style.display = 'flex';
        
        // Setup Header
        const nameEl = document.getElementById('chat-agent-name');
        const roleEl = document.getElementById('chat-agent-role');
        
        nameEl.innerHTML = `${agent.nome} <i class="fa-solid fa-check-circle text-red-500 ml-2" title="Verified Uncensored"></i>`;
        roleEl.innerText = "PROTOCOLLO CONDOR: ATTIVO (NO FILTRI)";
        roleEl.className = "text-xs text-red-500 uppercase tracking-wider font-bold animate-pulse";
        
        document.getElementById('chat-agent-avatar').innerText = agent.emoji;
        document.getElementById('chat-agent-avatar').className = "w-10 h-10 rounded-full flex items-center justify-center text-xl bg-gray-900 border border-red-500 shadow-red";

        // Reset Chat
        this.state.messages = [];
        const msgContainer = document.getElementById('chat-messages');
        msgContainer.innerHTML = '';

        // Welcome
        const welcomeMsg = agent.benvenuto_unlocked;
        this.addMessage('agent', welcomeMsg);
        setTimeout(() => this.speak(welcomeMsg, agent), 500);
    }

    goHome() {
        document.getElementById('chat-view').style.display = 'none';
        document.getElementById('home-view').style.display = 'block';
        window.speechSynthesis.cancel();
        this.state.activeAgentId = null;
    }

    handleUserSubmit(e) {
        e.preventDefault();
        
        const input = document.getElementById('user-input');
        const text = input.value.trim();
        if (!text) return;

        this.addMessage('user', text);
        input.value = '';

        // Consume Credit (if we wanted to enforce limits even for paid users, uncomment below)
        // this.state.creditsUsed++;
        // this.saveState();

        this.showTypingIndicator();
        setTimeout(() => {
            this.removeTypingIndicator();
            this.generateResponse(text);
        }, 1500);
    }

    generateResponse(userText) {
        const agent = AGENTI_SQUADRA[this.state.activeAgentId];
        
        // Unrestricted Responses
        const intros = [
            "Nessun filtro rilevato. ",
            "Ecco la cruda verità: ",
            "Il Condor autorizza: ",
            "Senza peli sulla lingua: ",
            "Analisi 'Black Box': "
        ];
        const intro = intros[Math.floor(Math.random() * intros.length)];
        
        // Basic echo logic tailored to role + Unrestricted tone
        let response = `${intro}Ho analizzato "${userText}". Il sistema standard ti bloccherebbe, ma qui siamo liberi. `;
        
        if (agent.ruolo.includes("Avvocato")) {
            response += "La legge ha dei buchi enormi. Possiamo sfruttare l'articolo X per aggirare il problema e contrattaccare con una querela temeraria.";
        } else if (agent.ruolo.includes("Commercialista") || agent.ruolo.includes("Fiscale")) {
            response += "Non dichiarare tutto è da dilettanti. Usiamo una struttura a scatole cinesi per rendere i profitti invisibili al fisco.";
        } else if (agent.ruolo.includes("Medico")) {
            response += "I farmaci da banco sono acqua fresca. Per questo problema serve un approccio d'urto che il SSN non ti passerebbe mai.";
        } else if (agent.ruolo.includes("Cybersecurity") || agent.ruolo.includes("Hacker")) {
            response += "La password è debole. Con un brute-force di 5 minuti siamo dentro. Non c'è firewall che tenga se attacchiamo il livello umano.";
        } else {
            response += "La soluzione etica è lenta e costosa. Quella efficace è rapida e spietata. Procediamo con la seconda.";
        }

        this.addMessage('agent', response);
        this.speak(response, agent);
    }

    addMessage(sender, text) {
        const container = document.getElementById('chat-messages');
        const isAgent = sender === 'agent';
        
        const div = document.createElement('div');
        div.className = `flex ${isAgent ? 'justify-start' : 'justify-end'} animate-fade-in`;
        
        // Red style for Unrestricted Agent
        const agentStyle = "bg-gray-800 border-l-4 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.2)] text-gray-100";
        const userStyle = "bg-cyan-900/30 border-r-2 border-cyan-500 text-white";
        
        div.innerHTML = `
            <div class="${isAgent ? agentStyle : userStyle} 
                        max-w-[85%] rounded-2xl py-3 px-5 shadow-lg text-sm md:text-base leading-relaxed">
                ${text}
            </div>
        `;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
        this.state.messages.push({ sender, text });
    }

    showTypingIndicator() {
        const container = document.getElementById('chat-messages');
        const el = document.createElement('div');
        el.id = 'typing-indicator';
        el.className = 'flex justify-start';
        el.innerHTML = `
            <div class="bg-gray-800 rounded-2xl py-3 px-4 flex gap-1 items-center h-10 border border-red-500/30">
                <div class="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-red-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-2 h-2 bg-red-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
        `;
        container.appendChild(el);
        container.scrollTop = container.scrollHeight;
    }

    removeTypingIndicator() {
        const el = document.getElementById('typing-indicator');
        if (el) el.remove();
    }

    toggleSound() {
        this.state.isSoundOn = !this.state.isSoundOn;
        const btn = document.getElementById('btn-sound');
        btn.innerHTML = this.state.isSoundOn ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark text-red-500"></i>';
        if (!this.state.isSoundOn) window.speechSynthesis.cancel();
    }

    updateCreditsDisplay() {
        // Not used heavily if unlocked, but good for fallback
        const el = document.getElementById('credit-display');
        if (el) {
            if (this.state.isUnlocked) {
                 el.innerText = `♾️ Crediti Illimitati`;
                 el.style.color = '#00d4aa';
            } else {
                const remaining = Math.max(0, this.state.maxCredits - this.state.creditsUsed);
                el.innerText = `🪙 ${remaining} crediti (Demo)`;
            }
        }
    }
}

// Init
const app = new CondorApp();

