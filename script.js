// Navigation Logic
const holyVerses = {
    christianity: {
        happy: [
            { text: "This is the day the Lord has made; let us rejoice and be glad in it.", source: "Psalm 118:24" },
            { text: "Rejoice in the Lord always. I will say it again: Rejoice!", source: "Philippians 4:4" }
        ],
        sad: [
            { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", source: "Psalm 34:18" },
            { text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.", source: "Revelation 21:4" }
        ],
        angry: [
            { text: "In your anger do not sin: Do not let the sun go down while you are still angry.", source: "Ephesians 4:26" },
            { text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry.", source: "James 1:19" }
        ],
        scared: [
            { text: "So do not fear, for I am with you; do not be dismayed, for I am your God.", source: "Isaiah 41:10" },
            { text: "When I am afraid, I put my trust in you.", source: "Psalm 56:3" }
        ],
        misunderstood: [
            { text: "Fear not, for I have redeemed you; I have called you by name; you are mine.", source: "Isaiah 43:1" },
            { text: "The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.", source: "1 Samuel 16:7" }
        ],
        meh: [
            { text: "Be still, and know that I am God.", source: "Psalm 46:10" },
            { text: "Whatever you do, work at it with all your heart, as working for the Lord.", source: "Colossians 3:23" }
        ],
        suicidal: [
            { text: "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.", source: "Jeremiah 29:11" }
        ]
    },
    islam: {
        happy: [
            { text: "If you are grateful, I will surely give you more.", source: "Quran 14:7" },
            { text: "And He gave you from all you asked of Him.", source: "Quran 14:34" }
        ],
        sad: [
            { text: "So verily, with every difficulty, there is relief.", source: "Quran 94:5" },
            { text: "Do not lose heart nor fall into despair.", source: "Quran 3:139" }
        ],
        angry: [
            { text: "Those who spend in ease and adversity and those who restrain anger and pardon people - Allah loves the doers of good.", source: "Quran 3:134" },
            { text: "The strong is not the one who overcomes the people by his strength, but the strong is the one who controls himself while in anger.", source: "Hadith Sahih Al-Bukhari" }
        ],
        scared: [
            { text: "Do not be afraid; I am with you, all-hearing and all-seeing.", source: "Quran 20:46" },
            { text: "Allah is sufficient for us, and He is the best disposer of affairs.", source: "Quran 3:173" }
        ],
        misunderstood: [
            { text: "And He is with you wherever you are.", source: "Quran 57:4" },
            { text: "Verily, Allah knows what is in the hearts.", source: "Quran 3:154" }
        ],
        meh: [
            { text: "Verily, in the remembrance of Allah do hearts find rest.", source: "Quran 13:28" }
        ],
        suicidal: [
            { text: "Allah does not burden a soul beyond that it can bear.", source: "Quran 2:286" }
        ]
    },
    judaism: {
        happy: [
            { text: "Serve the Lord with gladness; come before His presence with singing.", source: "Psalm 100:2" },
            { text: "Light is sweet, and it is pleasant for the eyes to see the sun.", source: "Ecclesiastes 11:7" }
        ],
        sad: [
            { text: "The Lord is my shepherd; I shall not want.", source: "Psalm 23:1" },
            { text: "He heals the brokenhearted and binds up their wounds.", source: "Psalm 147:3" }
        ],
        angry: [
            { text: "A soft answer turns away wrath, but a harsh word stirs up anger.", source: "Proverbs 15:1" },
            { text: "He who is slow to anger is better than the mighty.", source: "Proverbs 16:32" }
        ],
        scared: [
            { text: "The Lord is my light and my salvation; whom shall I fear?", source: "Psalm 27:1" },
            { text: "For I, the Lord your God, hold your right hand.", source: "Isaiah 41:13" }
        ],
        misunderstood: [
            { text: "Behold, how good and how pleasant it is for brethren to dwell together in unity!", source: "Psalm 133:1" },
            { text: "Man sees what is visible to the eyes, but the Lord sees into the heart.", source: "1 Samuel 16:7" }
        ],
        meh: [
            { text: "Trust in the Lord with all your heart and lean not on your own understanding.", source: "Proverbs 3:5" }
        ],
        suicidal: [
            { text: "Select life, so that you and your children may live.", source: "Deuteronomy 30:19" }
        ]
    },
    buddhism: {
        happy: [
            { text: "Radiate boundless love towards the entire world.", source: "Karaniya Metta Sutta" },
            { text: "Happiness comes when your work and words are of benefit to yourself and others.", source: "Buddha" }
        ],
        sad: [
            { text: "Overcome the angry by non-anger; overcome the wicked by goodness.", source: "Dhammapada 223" },
            { text: "Just as a solid rock is not shaken by the storm, even so the wise are not affected by praise or blame.", source: "Dhammapada 81" }
        ],
        angry: [
            { text: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.", source: "Buddha" }
        ],
        scared: [
            { text: "The whole secret of existence is to have no fear. Never fear what will become of you, depend on no one.", source: "Buddha" }
        ],
        misunderstood: [
            { text: "Peace comes from within. Do not seek it without.", source: "Dhammapada" }
        ],
        meh: [
            { text: "The mind is everything. What you think you become.", source: "Buddha" }
        ],
        suicidal: [
            { text: "Each morning we are born again. What we do today is what matters most.", source: "Buddha" }
        ]
    },
    hinduism: {
        happy: [
            { text: "When a man dwells on the objects of sense, attachment to them is produced; from attachment springs desire.", source: "Bhagavad Gita 2.62" },
            { text: "Man is made by his belief. As he believes, so he is.", source: "Bhagavad Gita" }
        ],
        sad: [
            { text: "The soul is neither born, and nor does it die.", source: "Bhagavad Gita" },
            { text: "The wise grieve neither for the living nor for the dead.", source: "Bhagavad Gita 2.11" }
        ],
        angry: [
            { text: "From anger comes delusion; from delusion loss of memory; from loss of memory the destruction of discrimination.", source: "Bhagavad Gita 2.63" }
        ],
        scared: [
            { text: "The peaceful mind is free from fear.", source: "Bhagavad Gita" }
        ],
        misunderstood: [
            { text: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.", source: "Bhagavad Gita" }
        ],
        meh: [
            { text: "Perform your obligatory duty, for action is better than inaction.", source: "Bhagavad Gita 3.8" }
        ],
        suicidal: [
            { text: "The self-controlled soul, who moves amongst sense objects, free from either attachment or repulsion, wins eternal Peace.", source: "Bhagavad Gita 2.64" }
        ]
    },
    sikhism: {
        happy: [
            { text: "He who has no faith in himself can never have faith in God.", source: "Guru Nanak" },
            { text: "Beings of all kinds were created by You; You know their hearts.", source: "Guru Granth Sahib 133" }
        ],
        sad: [
            { text: "Pain is the medicine, and pleasure is the disease, because where there is pleasure, there is no desire for God.", source: "Guru Granth Sahib 469" }
        ],
        angry: [
            { text: "To conquer the mind is to conquer the world.", source: "Guru Nanak" }
        ],
        scared: [
            { text: "He who has no fear of God, has no fear of anyone.", source: "Guru Nanak" }
        ],
        misunderstood: [
            { text: "Recognize the whole human race as one.", source: "Guru Gobind Singh" }
        ],
        meh: [
            { text: "Truth is the highest virtue, but higher still is truthful living.", source: "Guru Nanak" }
        ],
        suicidal: [
            { text: "Why do you waver, O mind? The Lord Himself shall protect you.", source: "Guru Granth Sahib 671" }
        ]
    }
};

const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');

function navigateTo(targetId) {
    // Update Nav
    navBtns.forEach(btn => {
        if (btn.dataset.target === targetId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update View
    views.forEach(view => {
        if (view.id === targetId) {
            view.classList.add('active');
        } else {
            view.classList.remove('active');
        }
    });

    // Toggle body class for header hiding
    if (targetId === 'dashboard') {
        document.body.classList.remove('feature-active');
    } else {
        document.body.classList.add('feature-active');
    }

    // Close menu if open (on mobile)
    const navMenu = document.getElementById('nav-menu');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    if (navMenu && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        const icon = hamburgerBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    }
}

// Event Listeners for Nav
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navigateTo(btn.dataset.target);
    });
});

// Refresh Dashboard Quotes Logic
function refreshDashboardQuotes() {
    const dailyQuotes = [
        "\"Stars can't shine without darkness.\" ✨",
        "\"Turn your wounds into wisdom.\" – Oprah",
        "\"You are enough just as you are.\"",
        "\"One day at a time.\"",
        "\"Breathe. It's just a bad day, not a bad life.\""
    ];

    const funnyQuotes = [
        "\"I followed my heart, and it led me to the fridge.\" 🥑",
        "\"I’m not lazy, I’m on energy saving mode.\" 🔋",
        "\"My bed is a magical place where I suddenly remember everything I forgot to do.\" 🛌",
        "\"Don't worry, even the moon goes through phases.\" 🌙",
        "\"I put the 'Pro' in procrastinate.\" 😅",
        "\"Maybe you should eat some makeup so you can be pretty on the inside too.\" 💄",
        "\"My life is about as organized as a $5 bin of DVD's at Walmart.\" 📀",
        "\"I'm not saying I'm Batman, I'm just saying no one has ever seen me and Batman in a room together.\" 🦇",
        "\"Stress is when you wake up screaming and then realize you haven't fallen asleep yet.\" 😱",
        "\"My goal this weekend is to move just enough so people don't think I'm dead.\" 🛋️",
        "\"I finally realized that people are prisoners of their phones... that's why it's called a cell phone.\" 📱",
        "\"I'm on a seafood diet. I see food and I eat it.\" 🍕",
        "\"Common sense is like deodorant. The people who need it most never use it.\" 🧼",
        "\"I'm walking around like everything is fine, but deep down, inside my shoe, my sock is sliding off.\" 🧦",
        "\"A day without sunshine is like, you know, night.\" 🌑"
    ];

    const motivationalFooterQuotes = [
        "\"Your potential is endless. Go do what you were created to do.\" ✨",
        "\"Believe you can and you're halfway there.\"",
        "\"The only way to do great work is to love what you do.\"",
        "\"Don't watch the clock; do what it does. Keep going.\"",
        "\"Everything you’ve ever wanted is on the other side of fear.\"",
        "\"You are stronger than you think.\"",
        "\"Growth is a process, not an event.\"",
        "\"One small positive thought in the morning can change your whole day.\""
    ];

    const dailyEl = document.getElementById('daily-quote');
    const funnyEl = document.getElementById('hero-quote-funny');
    const footerEl = document.getElementById('dashboard-footer-quote');

    if (dailyEl) {
        dailyEl.innerText = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];
    }

    if (funnyEl) {
        funnyEl.innerText = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
    }

    if (footerEl) {
        footerEl.innerText = motivationalFooterQuotes[Math.floor(Math.random() * motivationalFooterQuotes.length)];
    }

    updateReligiousVerse();
}

function updateReligiousVerse() {
    const religion = localStorage.getItem('userReligion') || 'none';
    const container = document.getElementById('religious-verse-container');
    const textEl = document.getElementById('religious-verse-text');
    const sourceEl = document.getElementById('religious-verse-source');

    if (!container || !textEl || !sourceEl) return;

    if (religion === 'none' || !holyVerses[religion]) {
        container.classList.add('hidden');
        return;
    }

    // Get latest mood
    const history = JSON.parse(localStorage.getItem('moodHistory') || '[]');
    const latestMood = history.length > 0 ? history[0].mood : 'meh';

    const religionData = holyVerses[religion];
    // Find verses for mood, fallback to 'meh' if not found
    const verses = religionData[latestMood] || religionData['meh'] || [];

    if (verses.length === 0) {
        container.classList.add('hidden');
        return;
    }

    const randomVerse = verses[Math.floor(Math.random() * verses.length)];

    textEl.innerText = `"${randomVerse.text}"`;
    sourceEl.innerText = `— ${randomVerse.source}`;
    container.classList.remove('hidden');
}

// Call on startup
document.addEventListener('DOMContentLoaded', refreshDashboardQuotes);

// -----------------------------------------------------------------
// FEATURE 1: MOOD MONITOR
// -----------------------------------------------------------------
const moodBtns = document.querySelectorAll('.mood-btn');
const moodList = document.getElementById('mood-list');
const moodInsightCard = document.getElementById('mood-insight-card');
const moodBasedQuote = document.getElementById('mood-based-quote');

moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Visual feedback
        moodBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        const mood = btn.dataset.mood;
        const color = btn.style.getPropertyValue('--mood-color');
        const iconClass = btn.querySelector('i').className;

        saveMood(mood, color, iconClass);
        updateMoodQuote(mood);
        updateMonsterMood(mood);

        // Show Monster Transition Overlay
        showMonsterTransition(mood, iconClass, color, () => {
            // After transition, navigate to appropriate section
            switch (mood) {
                case 'suicidal':
                    navigateTo('breathe');
                    document.querySelector('.emergency-meditation-card')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'sad':
                case 'misunderstood':
                    navigateTo('chat');
                    break;
                case 'angry':
                    navigateTo('breathe');
                    break;
                case 'scared':
                    navigateTo('games');
                    document.getElementById('light-trace-area')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'happy':
                    navigateTo('grow');
                    break;
                case 'meh':
                    navigateTo('sounds');
                    break;
            }
        });
    });
});

function showMonsterTransition(mood, iconClass, color, callback) {
    const isNegative = ['sad', 'angry', 'misunderstood', 'suicidal', 'scared'].includes(mood);
    const isPositive = ['happy', 'meh'].includes(mood);

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'monster-transition-overlay';

    // Get monster messages
    const messages = {
        sad: "I feel your sadness... Let me help you find someone to talk to.",
        angry: "Take a deep breath with me... Let's calm down together.",
        misunderstood: "I understand... Let's find someone who will listen.",
        suicidal: "You're not alone. I'm here with you. Let's get you some help.",
        scared: "It's okay to be scared... Let me show you something calming.",
        happy: "Yay! I'm so happy for you! Let's celebrate together!",
        meh: "That's okay... Let me play you something soothing."
    };

    // Build monster HTML
    overlay.innerHTML = `
        <div class="transition-monster-container">
            <div class="transition-emotion-icon" style="color: ${color}">
                <i class="${iconClass}"></i>
            </div>
            ${isPositive ? `
                <i class="fa-solid fa-heart hug-heart"></i>
                <i class="fa-solid fa-heart hug-heart"></i>
                <i class="fa-solid fa-heart hug-heart"></i>
            ` : ''}
            <div class="monster ${mood}">
                <div class="stars-container">
                    <i class="fa-solid fa-star star-1"></i>
                    <i class="fa-solid fa-star star-2"></i>
                    <i class="fa-solid fa-star star-3"></i>
                </div>
                <div class="monster-body">
                    <div class="monster-hair"></div>
                    <div class="monster-accessories"></div>
                    <div class="monster-face">
                        <div class="monster-eyebrows">
                            <div class="eyebrow left"></div>
                            <div class="eyebrow right"></div>
                        </div>
                        <div class="monster-eyes">
                            <div class="eye left"><div class="eyelashes"></div></div>
                            <div class="eye right"><div class="eyelashes"></div></div>
                            <div class="tear tear-1"></div>
                            <div class="tear tear-2"></div>
                        </div>
                        <div class="monster-mouth">
                            <div class="tooth"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="transition-message">${messages[mood] || "Let me guide you..."}</p>
    `;

    document.body.appendChild(overlay);

    // Apply monster customization
    updateMonsterAppearance();

    // Start animation after a brief pause
    setTimeout(() => {
        if (isNegative) {
            overlay.classList.add('dissolving');
        } else if (isPositive) {
            overlay.classList.add('hugging');
        }
    }, 1000);

    // Remove overlay and navigate
    const duration = isNegative ? 4000 : 3000;
    setTimeout(() => {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            overlay.remove();
            if (callback) callback();
        }, 500);
    }, duration);
}


function saveMood(mood, color, iconClass) {
    const entry = {
        mood,
        color,
        iconClass,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Save to LocalStorage
    let history = JSON.parse(localStorage.getItem('moodHistory') || '[]');
    history.unshift(entry);
    localStorage.setItem('moodHistory', JSON.stringify(history.slice(0, 50)));

    addMoodToHistory(entry);
    updateReligiousVerse(); // Update dashboard verse when mood changes
    updateSurahRecommendations(); // Update recommended surah
}

function addMoodToHistory(entry) {
    // Remove empty state if present
    const emptyState = moodList.querySelector('.empty-state');
    if (emptyState) {
        emptyState.remove();
    }

    const li = document.createElement('li');
    li.className = 'mood-item';
    li.innerHTML = `
        <span class="mood-dot" style="background-color: ${entry.color}"></span>
        <i class="${entry.iconClass}" style="color: ${entry.color}"></i>
        <strong>${entry.mood.charAt(0).toUpperCase() + entry.mood.slice(1)}</strong>
        <span style="margin-left: auto; color: var(--text-muted); font-size: 0.9rem;">${entry.timestamp}</span>
    `;

    // Add to top
    moodList.insertBefore(li, moodList.firstChild);
}

function updateMoodQuote(mood) {
    let quote = "";

    // Logic for quotes based on mood
    switch (mood) {
        case 'happy':
            const happyQuotes = [
                "Keep shining, the world needs your light.",
                "Savor this moment, you earned it.",
                "Your positivity is contagious!"
            ];
            quote = happyQuotes[Math.floor(Math.random() * happyQuotes.length)];
            triggerCelebration("YOU EARN IT", true); // Confetti for happy
            break;

        case 'sad':
            const toughQuotes = [
                "This too shall pass. You are stronger than you know.",
                "Tough times never last, but tough people do.",
                "Breathe. You're doing the best you can."
            ];
            quote = "Helpful Tip: Try a 5-minute breathing exercise or a relaxing game. " + toughQuotes[Math.floor(Math.random() * toughQuotes.length)];
            triggerCelebration("YOU CAN DO IT", true); // Confetti and encouragement for sad
            break;

        case 'angry':
            const calms = [
                "Take a deep breath. This feeling will pass.",
                "Peace comes from within. Do not seek it without.",
                "Let it go. You are safe."
            ];
            quote = calms[Math.floor(Math.random() * calms.length)];
            triggerCelebration("STOP, BREATHE, AND LET IT GO", false, false); // No confetti or fireworks for anger
            break;

        case 'misunderstood':
            const misunderQuotes = [
                "Your truth is valid, even if others don't see it yet.",
                "You know who you are. That is enough.",
                "It’s okay to feel alone in your thoughts. You are still whole."
            ];
            quote = misunderQuotes[Math.floor(Math.random() * misunderQuotes.length)];
            triggerCelebration("YOU'RE PERFECT", true, false); // Confetti but no fireworks
            break;

        case 'meh':
            quote = "It's okay to just exist today. No pressure to be anything else.";
            break;

        case 'scared':
            const scaredQuotes = [
                "Fear is just a feeling, not a fact. You are safe.",
                "Courage is not the absence of fear, but acting in spite of it.",
                "Breathe. You have handled everything life has thrown at you so far."
            ];
            quote = scaredQuotes[Math.floor(Math.random() * scaredQuotes.length)];
            triggerCelebration("NOTHING'S GONNA HURT YOU", true, false); // Confetti but no fireworks
            break;

        case 'suicidal':
            quote = "Your life is valuable. PLEASE, STAY. HELP IS AVAILABLE.";
            triggerCrisisAlert();
            break;

        default:
            quote = "Listen to your heart.";
    }

    moodBasedQuote.innerText = quote;
    moodInsightCard.style.display = 'block';

    // Add subtle animation
    moodInsightCard.style.animation = 'none';
    moodInsightCard.offsetHeight; /* trigger reflow */
    moodInsightCard.style.animation = 'fadeIn 0.5s ease';
}

function triggerCrisisAlert() {
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay crisis'; // Add crisis class for red theme
    document.body.appendChild(overlay);

    const alertText = document.createElement('div');
    alertText.className = 'good-job-text';
    alertText.style.color = '#ef4444'; // Red color
    alertText.innerHTML = '<strong>YOU\'RE NOT ALONE ON THIS</strong>';
    overlay.appendChild(alertText);

    setTimeout(() => {
        overlay.remove();
        // Auto-navigation is now handled by the main mood button listener
    }, 4000);
}

function updateMonsterMood(mood) {
    const monsters = document.querySelectorAll('.monster');
    monsters.forEach(monster => {
        // Remove previous mood classes
        monster.className = 'monster';
        // Add new mood class
        monster.classList.add(mood);
    });
}

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// FEATURE 2: BREATHE (Reducing Stress)
// -----------------------------------------------------------------
const circleContainer = document.querySelector('.circle-container');
const breathText = document.getElementById('breath-text');
const toggleBreathBtn = document.getElementById('toggle-breath-btn');
const breathBtns = document.querySelectorAll('.breath-selector button');

let isBreathing = false;
let breathInterval;
let currentBreathMode = 'relax'; // 'relax' or 'box'

// Switch Modes
breathBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (isBreathing) stopBreathing();

        breathBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentBreathMode = btn.dataset.style;

        // Update styling/text reset
        toggleBreathBtn.textContent = "Start Exercise";
        toggleBreathBtn.style.backgroundColor = "";
    });
});

toggleBreathBtn.addEventListener('click', () => {
    if (!isBreathing) {
        startBreathing();
        toggleBreathBtn.textContent = "Stop Exercise";
        toggleBreathBtn.style.backgroundColor = "#ef4444"; // Red to stop
    } else {
        stopBreathing();
        toggleBreathBtn.textContent = "Start Exercise";
        toggleBreathBtn.style.backgroundColor = ""; // Reset
    }
});

function startBreathing() {
    isBreathing = true;
    runBreathCycle();
}

function stopBreathing() {
    isBreathing = false;
    clearTimeout(breathInterval); // Using Timeout for variable lengths
    breathText.innerText = 'Breathe In';
    circleContainer.className = 'circle-container';
}

function runBreathCycle() {
    if (!isBreathing) return;

    if (currentBreathMode === 'relax') {
        // 4-7-8 Technique (Simplified for visual balance)
        // Inhale (4s), Hold (2s), Exhale (4s) - Visual Cycle ~8s
        breathText.innerText = 'Breathe In';
        circleContainer.className = 'circle-container breathe-in';

        breathInterval = setTimeout(() => {
            if (!isBreathing) return;
            breathText.innerText = 'Hold';
            circleContainer.className = 'circle-container breathe-hold';

            breathInterval = setTimeout(() => {
                if (!isBreathing) return;
                breathText.innerText = 'Breathe Out';
                circleContainer.className = 'circle-container breathe-out';

                breathInterval = setTimeout(runBreathCycle, 3000); // Wait for exhale
            }, 2000); // Hold
        }, 3000); // Inhale

    } else {
        // Box Breathing (4-4-4-4)
        breathText.innerText = 'Inhale (4s)';
        circleContainer.className = 'circle-container breathe-in';

        breathInterval = setTimeout(() => {
            if (!isBreathing) return;
            breathText.innerText = 'Hold (4s)';
            circleContainer.className = 'circle-container breathe-hold';

            breathInterval = setTimeout(() => {
                if (!isBreathing) return;
                breathText.innerText = 'Exhale (4s)';
                circleContainer.className = 'circle-container breathe-out';

                breathInterval = setTimeout(() => {
                    if (!isBreathing) return;
                    breathText.innerText = 'Hold (4s)';
                    circleContainer.className = 'circle-container'; // Neutral state

                    breathInterval = setTimeout(runBreathCycle, 4000); // Hold empty
                }, 4000); // Exhale
            }, 4000); // Hold full
        }, 4000); // Inhale
    }
}


// --- EMERGENCY MEDITATION LOGIC ---
const startEmergencyBtn = document.getElementById('start-emergency-btn');
const stopEmergencyBtn = document.getElementById('stop-emergency-btn');
const emergencyTimerDisplay = document.getElementById('emergency-timer-display');
const emergencyInstruction = document.getElementById('emergency-instruction');

let emergencyTimeLeft = 60;
let emergencyInterval;

if (startEmergencyBtn) {
    startEmergencyBtn.addEventListener('click', startEmergencyMeditation);
}

if (stopEmergencyBtn) {
    stopEmergencyBtn.addEventListener('click', stopEmergencyMeditation);
}

function startEmergencyMeditation() {
    emergencyTimeLeft = 60;
    startEmergencyBtn.classList.add('hidden');
    stopEmergencyBtn.classList.remove('hidden');
    emergencyTimerDisplay.classList.remove('hidden');

    // Smoothly turn screen soft blue
    document.body.classList.add('panic-active');

    updateEmergencyUI();

    emergencyInterval = setInterval(() => {
        emergencyTimeLeft--;
        updateEmergencyUI();

        if (emergencyTimeLeft <= 0) {
            finishEmergencyMeditation();
        }
    }, 1000);
}

function stopEmergencyMeditation() {
    clearInterval(emergencyInterval);
    document.body.classList.remove('panic-active');
    startEmergencyBtn.classList.remove('hidden');
    stopEmergencyBtn.classList.add('hidden');
    emergencyTimerDisplay.classList.add('hidden');
    emergencyInstruction.innerText = "Press start to begin immediate grounding.";
    emergencyTimerDisplay.innerText = "01:00";
    stopEmergencyBtn.innerText = "Stop";
}

function updateEmergencyUI() {
    const minutes = Math.floor(emergencyTimeLeft / 60);
    const seconds = emergencyTimeLeft % 60;
    emergencyTimerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Panic Attack Step-by-Step Instructions
    if (emergencyTimeLeft > 52) {
        emergencyInstruction.innerHTML = "<strong>Step 1:</strong> Find a safe place to sit. You are not in danger. Your body is just in 'alert' mode. 🧘‍♂️";
    } else if (emergencyTimeLeft > 42) {
        emergencyInstruction.innerHTML = "<strong>Step 2:</strong> Breathe in slowly... hold... breathe out. Panic attacks are temporary. This WILL pass. 🌬️";
    } else if (emergencyTimeLeft > 32) {
        emergencyInstruction.innerHTML = "<strong>Step 3:</strong> Focus on your feet. Feel the solid ground. You are anchored and safe in this moment. ⚓";
    } else if (emergencyTimeLeft > 22) {
        emergencyInstruction.innerHTML = "<strong>Step 4:</strong> Observe the sensation. It's just adrenaline. It cannot hurt you. You are in control. 🤝";
    } else if (emergencyTimeLeft > 12) {
        emergencyInstruction.innerHTML = "<strong>Step 5:</strong> Name 3 things you see. Focus your mind on the here and now. 👀";
    } else {
        emergencyInstruction.innerHTML = "<strong>Step 6:</strong> Almost there. Take a final deep breath. You handled the peak. 💙";
    }
}

function finishEmergencyMeditation() {
    clearInterval(emergencyInterval);
    document.body.classList.remove('panic-active');

    const contacts = getContacts();
    if (contacts.length > 0) {
        const topContact = contacts[0];
        emergencyInstruction.innerHTML = `
            <div style="border: 2px solid #ef4444; padding: 1rem; border-radius: 12px; background: rgba(239, 68, 68, 0.1);">
                <p style="margin-bottom:1rem; font-weight:bold;">The peak is passing. If you still feel bad, we can call ${topContact.name} for you.</p>
                <a href="tel:${topContact.phone}" class="emergency-btn" style="text-decoration:none; display:inline-block; margin-bottom:0.5rem;">
                    <i class="fa-solid fa-phone"></i> Call ${topContact.name} Now
                </a>
            </div>
        `;
    } else {
        emergencyInstruction.innerText = "Well done. You navigated through the peak. Stay here as long as you need.";
    }

    stopEmergencyBtn.innerText = "Finish";
    triggerCelebration("GENTLE CARE", true, false);
}


// FEATURE 5: ACCOUNT & PROFILE (Including Monster Customization)
// -----------------------------------------------------------------
const saveAccountBtn = document.getElementById('save-account-btn');
const accountNameInput = document.getElementById('account-name');
const monsterNameInput = document.getElementById('monster-name-input');

// Customization Options
const colorOptions = document.querySelectorAll('.color-btn');
const hairOptions = document.querySelectorAll('#hair-options .option-btn');
const accOptions = document.querySelectorAll('#acc-options .option-btn');
const teethOptions = document.querySelectorAll('#teeth-options .option-btn');

let currentCustomization = {
    name: "Nimbus",
    color: "#ffffff",
    hair: "none",
    accessory: "none",
    teeth: "none"
};

// Load profile on start
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
});

function loadProfile() {
    // 1. Load User Name
    const savedName = localStorage.getItem('profileName');
    if (savedName) {
        accountNameInput.value = savedName;
        updateGreeting(savedName);
    }

    // 2. Load Monster Customization
    const savedCustomization = localStorage.getItem('monsterCustomization');
    if (savedCustomization) {
        currentCustomization = JSON.parse(savedCustomization);

        // Update Inputs/UI to match saved state
        if (monsterNameInput) monsterNameInput.value = currentCustomization.name;

        // Update Active States
        updateActiveOption(colorOptions, currentCustomization.color, 'data-color');
        updateActiveOption(hairOptions, currentCustomization.hair, 'data-hair');
        updateActiveOption(accOptions, currentCustomization.accessory, 'data-acc');
        updateActiveOption(teethOptions, currentCustomization.teeth, 'data-teeth');
    }

    // Apply look immediately
    updateMonsterAppearance();
}

function updateActiveOption(nodeList, value, textAttr) {
    nodeList.forEach(btn => {
        if (btn.getAttribute(textAttr) === value) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Event Listeners for Customization
colorOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        colorOptions.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCustomization.color = btn.dataset.color;
        updateMonsterAppearance();
    });
});

hairOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        hairOptions.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCustomization.hair = btn.dataset.hair;
        updateMonsterAppearance();
    });
});

accOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        accOptions.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCustomization.accessory = btn.dataset.acc;
        updateMonsterAppearance();
    });
});

teethOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        teethOptions.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCustomization.teeth = btn.dataset.teeth;
        updateMonsterAppearance();
    });
});

function updateMonsterAppearance() {
    // Select all monsters (Dashboard + Profile)
    const monsters = document.querySelectorAll('.monster');

    monsters.forEach(monster => {
        const body = monster.querySelector('.monster-body');
        const hairContainer = monster.querySelector('.monster-hair');
        const accContainer = monster.querySelector('.monster-accessories');
        const mouth = monster.querySelector('.monster-mouth');

        // 1. Apply Base Color (Neutral State primarily)
        // Note: Moods might override this via CSS, but we set a custom property 
        // that CSS can use if we adjust it, or direct style for neutral.
        if (monster.classList.contains('neutral')) {
            body.style.backgroundColor = currentCustomization.color;
        }

        // 2. Apply Hair
        hairContainer.innerHTML = ''; // Clear current
        hairContainer.className = 'monster-hair'; // Reset classes

        if (currentCustomization.hair === 'hair-spiky') {
            hairContainer.classList.add('hair-spiky');
            hairContainer.innerHTML = `
                <div class="hair-spike s1"></div>
                <div class="hair-spike s2"></div>
                <div class="hair-spike s3"></div>
                <div class="hair-spike s4"></div>
                <div class="hair-spike s5"></div>
            `;
        } else if (currentCustomization.hair === 'hair-long') {
            hairContainer.classList.add('hair-long');
            hairContainer.innerHTML = `
                <div class="hair-back-l"></div>
                <div class="hair-back-r"></div>
                <div class="hair-fringe"></div>
            `;
        } else if (currentCustomization.hair === 'hair-buns') {
            hairContainer.classList.add('hair-buns');
            hairContainer.innerHTML = `
                <div class="bun left"><div class="bun-texture"></div></div>
                <div class="bun right"><div class="bun-texture"></div></div>
            `;
        } else if (currentCustomization.hair === 'hair-curly') {
            hairContainer.classList.add('hair-curly');
            hairContainer.innerHTML = '';
            for (let i = 0; i < 12; i++) {
                hairContainer.innerHTML += `<div class="curl c${i}"></div>`;
            }
        } else if (currentCustomization.hair === 'hair-mohawk') {
            hairContainer.classList.add('hair-mohawk');
            hairContainer.innerHTML = `<div class="strip"></div><div class="strip-top"></div>`;
        } else if (currentCustomization.hair === 'hair-braids') {
            hairContainer.classList.add('hair-braids');
            hairContainer.innerHTML = `
                <div class="braid-set left">
                    <div class="segment"></div><div class="segment"></div><div class="segment"></div>
                </div>
                <div class="braid-set right">
                    <div class="segment"></div><div class="segment"></div><div class="segment"></div>
                </div>
            `;
        } else if (currentCustomization.hair === 'hair-afro') {
            hairContainer.classList.add('hair-afro');
            hairContainer.innerHTML = `<div class="afro-base"></div><div class="afro-puffs"></div>`;
        } else if (currentCustomization.hair === 'hair-ponytail') {
            hairContainer.classList.add('hair-ponytail');
            hairContainer.innerHTML = `<div class="hair-top"></div><div class="tail-clip"></div><div class="tail-main"></div>`;
        }

        // 3. Apply Accessories
        accContainer.innerHTML = '';
        if (currentCustomization.accessory === 'acc-glasses') {
            accContainer.innerHTML = `
                <div class="acc-glasses">
                    <div class="lens"></div>
                    <div class="bridge"></div>
                    <div class="lens"></div>
                </div>
            `;
        } else if (currentCustomization.accessory === 'acc-bow') {
            accContainer.innerHTML = `
                <div class="acc-bow">
                    <div class="bow-l"></div>
                    <div class="bow-center"></div>
                    <div class="bow-r"></div>
                </div>
            `;
        } else if (currentCustomization.accessory === 'acc-hat') {
            accContainer.innerHTML = `<div class="acc-hat"></div>`;
        } else if (currentCustomization.accessory === 'acc-headphones') {
            accContainer.innerHTML = `
                <div class="acc-headphones">
                    <div class="band"></div>
                    <div class="ear-l"></div>
                    <div class="ear-r"></div>
                </div>
            `;
        } else if (currentCustomization.accessory === 'acc-crown') {
            accContainer.innerHTML = `<div class="acc-crown"></div>`;
        } else if (currentCustomization.accessory === 'acc-mustache') {
            accContainer.innerHTML = `<div class="acc-mustache"><div class="m-l"></div><div class="m-r"></div></div>`;
        } else if (currentCustomization.accessory === 'acc-eyepatch') {
            accContainer.innerHTML = `<div class="acc-eyepatch"><div class="strap"></div><div class="patch"></div></div>`;
        } else if (currentCustomization.accessory === 'acc-halo') {
            accContainer.innerHTML = `<div class="acc-halo"></div>`;
        }

        // 4. Apply Teeth
        mouth.innerHTML = '';
        if (currentCustomization.teeth === 'tooth-snaggle') {
            mouth.innerHTML = `<div class="tooth-snaggle"></div>`;
        } else if (currentCustomization.teeth === 'tooth-fangs') {
            mouth.innerHTML = `<div class="tooth-fangs"><div class="f-l"></div><div class="f-r"></div></div>`;
        } else if (currentCustomization.teeth === 'tooth-buck') {
            mouth.innerHTML = `<div class="tooth-buck"><div class="b-l"></div><div class="b-r"></div></div>`;
        } else if (currentCustomization.teeth === 'tooth-grin') {
            mouth.innerHTML = `<div class="tooth-grin"><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
        }
    });

    // 4. Update Name Display
    const nameDisplays = document.querySelectorAll('.monster-name-display');
    nameDisplays.forEach(el => {
        el.innerText = currentCustomization.name || "Nimbus";
    });
}

if (saveAccountBtn) {
    saveAccountBtn.addEventListener('click', () => {
        // Save User Name
        const name = accountNameInput.value.trim();
        if (name) {
            localStorage.setItem('profileName', name);
            updateGreeting(name);
        }

        // Save Monster Customization
        // Update name in object
        const mName = monsterNameInput.value.trim();
        if (mName) currentCustomization.name = mName;

        localStorage.setItem('monsterCustomization', JSON.stringify(currentCustomization));

        // Save Religion
        const religionSelect = document.getElementById('user-religion');
        if (religionSelect) {
            localStorage.setItem('userReligion', religionSelect.value);
            updateReligiousVerse();
        }

        alert('Profile & Monster saved successfully!');
    });
}

function updateGreeting(name) {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.innerText = `Welcome back, ${name} `;
}


// -----------------------------------------------------------------
// FEATURE 3: GROW / JOURNAL (Emotional Awareness)
// -----------------------------------------------------------------
const saveJournalBtn = document.getElementById('save-journal');
const journalEntry = document.getElementById('journal-entry');
const journalList = document.getElementById('journal-list');

// Load entries on startup
document.addEventListener('DOMContentLoaded', loadJournalEntries);

saveJournalBtn.addEventListener('click', () => {
    const text = journalEntry.value.trim();
    if (text) {
        // Save to LocalStorage
        const entry = {
            id: Date.now(),
            text: text,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        saveJournalEntry(entry);

        // Visual feedback
        const originalText = saveJournalBtn.innerText;
        saveJournalBtn.innerText = "Saved!";
        saveJournalBtn.style.borderColor = "#4ade80";
        saveJournalBtn.style.color = "#4ade80"; // Green

        setTimeout(() => {
            journalEntry.value = "";
            saveJournalBtn.innerText = originalText;
            saveJournalBtn.style.borderColor = "";
            saveJournalBtn.style.color = "";
        }, 1500);
    }
});

function saveJournalEntry(entry) {
    let entries = getJournalEntries();
    entries.unshift(entry); // Add to top
    localStorage.setItem('journalEntries', JSON.stringify(entries));
    renderJournalEntry(entry, true); // true = prepend
}

function getJournalEntries() {
    const entries = localStorage.getItem('journalEntries');
    return entries ? JSON.parse(entries) : [];
}

function loadJournalEntries() {
    const entries = getJournalEntries();
    const list = document.getElementById('journal-list');

    if (entries.length > 0) {
        // Clear empty state if we have entries
        const emptyState = list.querySelector('.empty-state');
        if (emptyState) emptyState.remove();

        entries.forEach(entry => renderJournalEntry(entry, false));
    }
}

function initAccountReligion() {
    const religion = localStorage.getItem('userReligion');
    const select = document.getElementById('user-religion');
    if (religion && select) {
        select.value = religion;
    }
}

document.addEventListener('DOMContentLoaded', initAccountReligion);


function renderJournalEntry(entry, prepend) {
    const list = document.getElementById('journal-list');

    // Check if we need to remove empty state
    const emptyState = list.querySelector('.empty-state');
    if (emptyState) emptyState.remove();

    const div = document.createElement('div');
    div.className = 'journal-item';
    div.innerHTML = `
        <div class="journal-item-header">
            <span class="journal-date"><i class="fa-regular fa-calendar"></i> ${entry.date}</span>
            <span class="journal-timestamp"><i class="fa-regular fa-clock"></i> ${entry.time}</span>
        </div>
        <div class="journal-text">${entry.text}</div>
    `;

    if (prepend) {
        list.prepend(div);
    } else {
        list.appendChild(div);
    }
}

// -----------------------------------------------------------------
// PERSONAL AFFIRMATIONS LOGIC
// -----------------------------------------------------------------
const saveQuoteBtn = document.getElementById('save-personal-quote-btn');
const quoteInput = document.getElementById('personal-quote-input');
const quotesList = document.getElementById('personal-quotes-list');

document.addEventListener('DOMContentLoaded', loadPersonalQuotes);

if (saveQuoteBtn) {
    saveQuoteBtn.addEventListener('click', () => {
        const text = quoteInput.value.trim();
        if (text) {
            const quotes = getPersonalQuotes();
            quotes.unshift(text);
            localStorage.setItem('personalQuotes', JSON.stringify(quotes));

            renderPersonalQuote(text, true);
            quoteInput.value = '';
        }
    });
}

function getPersonalQuotes() {
    const q = localStorage.getItem('personalQuotes');
    return q ? JSON.parse(q) : [];
}

function loadPersonalQuotes() {
    const quotes = getPersonalQuotes();
    quotes.forEach(q => renderPersonalQuote(q, false));
}

function renderPersonalQuote(text, prepend) {
    if (!quotesList) return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>"${text}"</span>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    `;

    // Delete functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        removePersonalQuote(text);
        li.remove();
    });

    if (prepend) quotesList.prepend(li);
    else quotesList.appendChild(li);
}

function removePersonalQuote(text) {
    let quotes = getPersonalQuotes();
    quotes = quotes.filter(q => q !== text);
    localStorage.setItem('personalQuotes', JSON.stringify(quotes));
}


// -----------------------------------------------------------------
// EMERGENCY CONTACTS LOGIC
// -----------------------------------------------------------------
const addContactBtn = document.getElementById('add-contact-btn');
const contactNameInput = document.getElementById('contact-name');
const contactPhoneInput = document.getElementById('contact-phone');
const contactsList = document.getElementById('contacts-list');

document.addEventListener('DOMContentLoaded', loadContacts);

if (addContactBtn) {
    addContactBtn.addEventListener('click', () => {
        const name = contactNameInput.value.trim();
        const phone = contactPhoneInput.value.trim();

        if (name && phone) {
            const contacts = getContacts();
            const newContact = { id: Date.now(), name, phone };
            contacts.push(newContact);
            localStorage.setItem('emergencyContacts', JSON.stringify(contacts));

            renderContact(newContact, true);
            contactNameInput.value = '';
            contactPhoneInput.value = '';
        } else {
            alert('Please enter both a name and a number.');
        }
    });
}

function getContacts() {
    const c = localStorage.getItem('emergencyContacts');
    return c ? JSON.parse(c) : [];
}

function loadContacts() {
    const contacts = getContacts();
    contacts.forEach(c => renderContact(c, false));
}

function renderContact(contact, appendToEnd) {
    if (!contactsList) return;

    const li = document.createElement('li');
    // Using a different icon for contacts
    li.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:flex-start;">
            <span style="font-weight:bold;">${contact.name}</span>
            <span style="font-size:0.8rem; color:var(--text-muted);">${contact.phone}</span>
        </div>
        <div style="display:flex; gap:0.5rem">
            <a href="tel:${contact.phone}" class="call-btn" style="color:#4ade80; font-size:1.1rem;"><i class="fa-solid fa-phone"></i></a>
            <button class="delete-btn" style="color:#ef4444;"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;

    // Delete functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        removeContact(contact.id);
        li.remove();
    });

    contactsList.appendChild(li);
}

function removeContact(id) {
    let contacts = getContacts();
    contacts = contacts.filter(c => c.id !== id);
    localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
}


// -----------------------------------------------------------------
// DYNAMIC COPING STRATEGIES LOGIC
// -----------------------------------------------------------------
const strategyBtns = document.querySelectorAll('.chip-btn');
const strategyDisplay = document.getElementById('strategy-display');

const strategies = {
    anxiety: [
        { title: "The 5-4-3-2-1 Technique", text: "Acknowledge 5 things you see, 4 things you can touch, 3 things you hear, 2 things you can smell, and 1 thing you can taste." },
        { title: "Box Breathing", text: "Inhale for 4 seconds, hold for 4, exhale for 4, and hold for 4. Repeat until you feel grounded." },
        { title: "Ice Cube Trick", text: "Hold an ice cube in your hand. The intense sensation focuses your mind on the present moment." }
    ],
    anger: [
        { title: "Angry Drawing", text: "Scribble furiously on a piece of paper until the page is full, then crumple it up and throw it away." },
        { title: "Temperature Reset", text: "Splash cold water on your face. It triggers the 'dive reflex' which instantly slows down your heart rate." },
        { title: "Letter Burning", text: "Write a letter to the person/situation making you angry. Don't send it. Destroy it safely." }
    ],
    sadness: [
        { title: "Comfort Box", text: "Gather 3 items that bring you comfort (soft blanket, favorite photo, scented candle) and sit with them." },
        { title: "Gentle Movement", text: "Stretch your arms up high or take a slow walk. Moving your body can slightly shift your emotional state." },
        { title: "Opposite Action", text: "If you want to isolate, text one friend. If you want to stay in bed, wash your face. Do one small opposite thing." }
    ],
    stress: [
        { title: "Brain Dump", text: "Write down every single thing you need to do. Get it out of your head and onto paper." },
        { title: "Progressive Muscle Relaxation", text: "Tense your toes for 5 seconds, then release. Move up to your calves, thighs, and so on until you reach your head." },
        { title: "Micro-Break", text: "Step away from screens for 5 minutes. Look out a window or close your eyes." }
    ],
    panic: [
        { title: "Shock the System", text: "Snap a rubber band on your wrist or clap your hands loudly to break the panic loop." },
        { title: "Feet on Floor", text: "Stomp your feet. Feel the solid ground beneath you. Say 'I am here, I am safe' out loud." },
        { title: "Visual Anchor", text: "Find 3 blue objects in the room. Name them out loud." }
    ]
};

strategyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Visual Active State
        strategyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Get Random Strategy for Emotion
        const emotion = btn.dataset.emotion;
        const pool = strategies[emotion];
        const randomStrategy = pool[Math.floor(Math.random() * pool.length)];

        // Update Display with Animation
        strategyDisplay.classList.remove('fade-in');
        void strategyDisplay.offsetWidth; // Trigger reflow

        strategyDisplay.innerHTML = `
            <h4>${randomStrategy.title}</h4>
            <p>${randomStrategy.text}</p>
        `;
        strategyDisplay.classList.add('fade-in');
    });
});

// Random Strategy on Refresh
function loadRandomStrategyOnStart() {
    // Pick random emotion
    const keys = Object.keys(strategies);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    // Pick random strategy from that emotion
    const pool = strategies[randomKey];
    const randomStrategy = pool[Math.floor(Math.random() * pool.length)];

    // Update Display
    if (strategyDisplay) {
        strategyDisplay.innerHTML = `
            <div style="margin-bottom:0.5rem; text-transform:capitalize; font-size:0.8rem; opacity:0.7; color:var(--primary);"><i class="fa-solid fa-lightbulb"></i> Suggested for ${randomKey}</div>
            <h4>${randomStrategy.title}</h4>
            <p>${randomStrategy.text}</p>
        `;
    }

    // Highlight the button
    strategyBtns.forEach(btn => {
        if (btn.dataset.emotion === randomKey) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', loadRandomStrategyOnStart);

// -----------------------------------------------------------------
// FEATURE 6: DAILY GOALS & CHECK-IN
// -----------------------------------------------------------------
const goalInput = document.getElementById('new-goal-input');
const addGoalBtn = document.getElementById('add-goal-btn');
const goalsList = document.getElementById('daily-goals-list');
const checkinStatus = document.getElementById('daily-checkin-status');

document.addEventListener('DOMContentLoaded', loadGoals);

if (addGoalBtn) {
    addGoalBtn.addEventListener('click', () => {
        const text = goalInput.value.trim();
        if (text) {
            const goals = getGoals();
            goals.push({ id: Date.now(), text: text, done: false });
            saveGoals(goals);
            renderGoals();
            goalInput.value = '';
        }
    });
}

function getGoals() {
    const data = localStorage.getItem('dailyGoals');
    if (!data) return [];

    // Check if new day, reset if so
    const parsed = JSON.parse(data);
    const today = new Date().toDateString();
    if (parsed.date !== today) {
        return []; // New day, new goals
    }
    return parsed.items;
}

function saveGoals(items) {
    const data = {
        date: new Date().toDateString(),
        items: items
    };
    localStorage.setItem('dailyGoals', JSON.stringify(data));
}

function loadGoals() {
    renderGoals();
    updateCheckinStatus();
}

function renderGoals() {
    if (!goalsList) return;
    const goals = getGoals();
    goalsList.innerHTML = '';

    if (goals.length === 0) {
        goalsList.innerHTML = '<div style="font-size:0.9rem; color:var(--text-muted); font-style:italic;">No goals set for today yet.</div>';
        return;
    }

    goals.forEach(goal => {
        const div = document.createElement('div');
        div.className = `goal - item ${goal.done ? 'done' : ''} `;
        div.innerHTML = `
            <input type="checkbox" ${goal.done ? 'checked' : ''}>
            <span>${goal.text}</span>
        `;

        // Toggle Goal
        div.querySelector('input').addEventListener('change', () => {
            goal.done = !goal.done;
            saveGoals(goals);
            renderGoals();
            if (goal.done) checkAllGoalsComplete();
        });

        goalsList.appendChild(div);
    });
}

function checkAllGoalsComplete() {
    const goals = getGoals();
    if (goals.length > 0 && goals.every(g => g.done)) {
        triggerCelebration("YOURE AWESOME AND YOU CAN DO EVEN BETTER");
    }
}

function triggerCelebration(customText = "YOURE AWESOME AND YOU CAN DO EVEN BETTER", showConfetti = true, showFireworks = true) {
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    document.body.appendChild(overlay);

    const goodJob = document.createElement('div');
    goodJob.className = 'good-job-text';
    goodJob.innerText = customText;
    overlay.appendChild(goodJob);

    if (showConfetti) {
        // Confetti
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
            confetti.style.animationDelay = Math.random() * 3 + 's';
            overlay.appendChild(confetti);
        }
    }

    let fireworkInterval;
    if (showFireworks) {
        // Fireworks
        function createFirework() {
            if (!document.contains(overlay)) return;
            const x = Math.random() * 100 + 'vw';
            const y = Math.random() * 100 + 'vh';
            const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

            for (let i = 0; i < 20; i++) {
                const p = document.createElement('div');
                p.className = 'firework-particle';
                p.style.backgroundColor = color;
                p.style.left = x;
                p.style.top = y;
                const angle = (i / 20) * Math.PI * 2;
                const velocity = 50 + Math.random() * 50;
                p.style.setProperty('--x', Math.cos(angle) * velocity + 'px');
                p.style.setProperty('--y', Math.sin(angle) * velocity + 'px');
                overlay.appendChild(p);
                setTimeout(() => p.remove(), 1000);
            }
        }
        fireworkInterval = setInterval(createFirework, 400);
    }

    setTimeout(() => {
        if (fireworkInterval) clearInterval(fireworkInterval);
        overlay.remove();
    }, 5000);
}


function updateCheckinStatus() {
    // Check if mood recorded today
    const history = localStorage.getItem('moodHistory');
    let checkedIn = false;
    if (history) {
        const entries = JSON.parse(history);
        const today = new Date().toLocaleDateString();
        // Assuming entries have a date string format from earlier implementation
        // Simplified check: if last entry is today. 
        // Note: Earlier mood saving logic used 'timestamp' which is full string.
        // We'll check if any start with today's date string.
        checkedIn = entries.some(e => e.date === today || e.timestamp?.includes(today));
    }

    if (checkinStatus) {
        if (checkedIn) {
            checkinStatus.innerText = "Checked In ✔";
            checkinStatus.classList.remove('pending');
            checkinStatus.classList.add('complete');
        } else {
            checkinStatus.innerText = "Check-in Pending";
            checkinStatus.classList.add('pending');
            checkinStatus.classList.remove('complete');
        }
    }
}
// Hook into mood save to update status live
const originalSaveMood = window.saveMood || function () { }; // Backup if exists
// We will call updateCheckinStatus inside the existing saveMood if possible or just modify it. Since I can't easily modify existing functions without full replace, I'll rely on the fact that saving mood updates the history storage, and I can listen to it or just call updateCheckinStatus() in my event listeners if I had access. 
// Easier: Just let the user refresh or navigate. Or, add a global event listener for click on mood buttons.
const globalMoodBtns = document.querySelectorAll('.mood-btn');
globalMoodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(updateCheckinStatus, 100); // Wait for save
    });
});


// -----------------------------------------------------------------
// FEATURE 7: GRATEFULNESS BOARD
// -----------------------------------------------------------------
const addGratefulBtn = document.getElementById('add-grateful-btn');
const gratefulGrid = document.getElementById('grateful-grid');

document.addEventListener('DOMContentLoaded', loadGratefulNotes);

if (addGratefulBtn) {
    addGratefulBtn.addEventListener('click', () => {
        const note = prompt("What are you grateful for today?");
        if (note && note.trim()) {
            const notes = getGratefulNotes();
            notes.push({ id: Date.now(), text: note.trim() });
            localStorage.setItem('gratefulNotes', JSON.stringify(notes));
            renderGratefulNotes();
        }
    });
}

function getGratefulNotes() {
    const n = localStorage.getItem('gratefulNotes');
    return n ? JSON.parse(n) : [];
}

function loadGratefulNotes() {
    renderGratefulNotes();
}

function renderGratefulNotes() {
    if (!gratefulGrid) return;
    const notes = getGratefulNotes();
    gratefulGrid.innerHTML = '';

    if (notes.length === 0) {
        gratefulGrid.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:2rem;">Add a sticky note to start your board!</div>';
        return;
    }

    notes.forEach(note => {
        const div = document.createElement('div');
        div.className = 'sticky-note';
        div.innerHTML = `
            ${note.text}
    <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button>
    `;

        div.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('Remove this note?')) {
                const newNotes = notes.filter(n => n.id !== note.id);
                localStorage.setItem('gratefulNotes', JSON.stringify(newNotes));
                renderGratefulNotes();
            }
        });

        gratefulGrid.appendChild(div);
    });
}





// -----------------------------------------------------------------
// FEATURE 4: AURA CHAT (AI Companion)
// -----------------------------------------------------------------
const chatInput = document.getElementById('chat-input');
const sendChatBtn = document.getElementById('send-chat-btn');
const chatHistory = document.getElementById('chat-history');

// On load, update the initial message in HTML to have suggested chips if needed, 
// or just append them now.
// Let's replace the content of the chat history with a fresh start that includes options.
setTimeout(() => {
    chatHistory.innerHTML = ''; // Clear hardcoded HTML
    const userName = localStorage.getItem('profileName') || 'friend';
    addMessage(`Hey ${userName}! I'm Aura, your AI companion. I'm here to listen, support, and help you find your calm. How are you feeling in this moment?`, 'ai', ["I'm feeling stressed", "Just want to talk", "Need some advice", "I had a great day!"]);
}, 100);

sendChatBtn.addEventListener('click', handleChatSubmit);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChatSubmit();
});

function handleChatSubmit() {
    const text = chatInput.value.trim();
    if (!text) return;
    submitUserMessage(text);
}

function submitUserMessage(text) {
    // Add User Message
    addMessage(text, 'user');
    chatInput.value = '';

    // Scroll to bottom
    scrollToBottom();

    // Simulate AI thinking and reply
    showTypingIndicator();

    setTimeout(() => {
        const response = generateAIResponse(text);
        removeTypingIndicator();

        if (typeof response === 'string') {
            addMessage(response, 'ai');
        } else {
            addMessage(response.text, 'ai', response.chips);
        }

        scrollToBottom();
    }, 1500 + Math.random() * 1000);
}

function scrollToBottom() {
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function addMessage(text, sender, chips = []) {
    if (!chatHistory) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;

    const icon = sender === 'ai' ? 'fa-robot' : 'fa-user';

    let contentHtml = `<div class="bubble-container">
        <div class="bubble">${text}</div>
    </div>`;

    msgDiv.innerHTML = `
        <div class="avatar"><i class="fa-solid ${icon}"></i></div>
        ${contentHtml}
    `;

    // Process suggested chips
    if (chips && chips.length > 0) {
        const chipsContainer = document.createElement('div');
        chipsContainer.className = 'suggested-chips';

        chips.forEach(chipText => {
            const chipBtn = document.createElement('button');
            chipBtn.className = 'chat-chip-btn';
            chipBtn.innerText = chipText;
            chipBtn.onclick = () => {
                submitUserMessage(chipText);
                chipsContainer.style.opacity = '0.5';
                chipsContainer.style.pointerEvents = 'none';
            };
            chipsContainer.appendChild(chipBtn);
        });

        msgDiv.appendChild(chipsContainer);
    }

    chatHistory.appendChild(msgDiv);
    scrollToBottom();
}

function showTypingIndicator() {
    if (!chatHistory) return;

    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.className = 'typing-dots';
    typingDiv.innerHTML = `
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    `;
    chatHistory.appendChild(typingDiv);
    scrollToBottom();
}

function removeTypingIndicator() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

// -----------------------------------------------------------------
// AI CONTEXT & LOGIC (Professional Counselor Persona)
// -----------------------------------------------------------------

// Enhanced State to track conversation flow and memory
const aiContext = {
    topicHistory: [], // ['anxiety', 'bullying']
    stateData: {},    // { currentProblem: 'school stress' }
    currentState: 'idle',
    lastSentiment: 'neutral',
    messageCount: 0
};

function generateAIResponse(input) {
    aiContext.messageCount++;
    const lowerInput = input.toLowerCase().replace(/[^\w\s]/g, "");
    const has = (keywords) => keywords.some(k => lowerInput.includes(k));
    const userName = localStorage.getItem('profileName') || 'friend';

    // 0. Detect INTENT (Follow-up vs New Topic)
    const lastTopic = aiContext.topicHistory[aiContext.topicHistory.length - 1];
    const isFollowUp = has(['how', 'tell me more', 'why', 'what else', 'continue', 'yes', 'okay', 'explain']);

    // Helper to log conversation history
    const recordTopic = (topic) => {
        if (topic !== lastTopic) aiContext.topicHistory.push(topic);
        if (aiContext.topicHistory.length > 5) aiContext.topicHistory.shift();
    };

    // Therapeutic validation phrases
    const validate = () => `I hear you ${userName}, and what you're feeling is completely valid. Your emotions are not weaknesses—they're signals that something needs your attention.`;

    // 1. STATE-BASED RESPONSES
    if (aiContext.currentState === 'awaiting_bad_day_details') {
        if (has(['bully', 'bullied', 'picked on', 'mean'])) {
            aiContext.currentState = 'awaiting_bullying_details';
            return {
                text: `I am so sorry you experienced that, ${userName}. Bullying is a form of emotional abuse, and I want you to know it's never your fault. Can you tell me more about what happened? I'm here to listen.`,
                chips: ["It happened at school", "It happened online", "I don't want to say"]
            };
        }
        aiContext.currentState = 'idle';
    }

    if (aiContext.currentState === 'awaiting_bullying_details') {
        aiContext.currentState = 'idle';
        aiContext.lastSentiment = 'sad';
        const contacts = getContacts();
        let response = `Thank you for trusting me with this. Here's what I want you to know:\n\n` +
            `🛡️ **This is NOT your fault.** Bullies act out of their own pain, not because of anything wrong with you.\n\n` +
            `📝 **Document everything.** Write down dates, times, and what was said.\n\n` +
            `🗣️ **Tell a trusted adult.** A parent, teacher, or counselor can help.\n\n` +
            `💪 **Practice the "Grey Rock" technique:** Become emotionally unresponsive. Don't react, don't engage.\n\n`;

        return {
            text: response + (contacts.length > 0 ? `I see you have emergency contacts. Want to reach out?` : `Consider adding emergency contacts in your Profile settings.`),
            chips: ["Tell me about Grey Rock", "I'm scared to report it", "How do I talk to my parents?"]
        };
    }

    if (aiContext.currentState === 'awaiting_good_day_details') {
        aiContext.currentState = 'idle';
        return {
            text: `That's beautiful! 🌟 Here's a therapeutic exercise: Write down THREE specific things that made today good. This is called a "gratitude anchor".`,
            chips: ["How does that work?", "Done!", "Tell me another exercise"]
        };
    }

    // 2. CRISIS INTERVENTION
    if (has(['suicid', 'kill myself', 'end it all', 'die', 'hurt myself', 'dont want to live'])) {
        return {
            text: `I'm so glad you reached out. What you're feeling is heavy, but know: **you are not alone, and there IS help.**\n\n` +
                `🆘 **Immediate Steps:**\n` +
                `1. **Call 988 (US)** or your local helpline\n` +
                `2. **Go to someone** — don't be alone\n\n` +
                `💙 **You matter.** This pain is temporary. Please reach out to a professional right now.`,
            chips: ["International helplines", "I'm with someone", "I'll call now"]
        };
    }

    // BAD DAY TRIGGER
    if (has(['bad day', 'horrible day', 'terrible day', 'worst day'])) {
        aiContext.currentState = 'awaiting_bad_day_details';
        return {
            text: "I'm sorry you're going through this. Bad days don't define you. What specifically made today difficult?",
            chips: ["Something at school/work", "Feeling lonely", "Just everything together"]
        };
    }

    // GOOD DAY TRIGGER
    if (has(['good day', 'great day', 'amazing day'])) {
        aiContext.currentState = 'awaiting_good_day_details';
        recordTopic('positive');
        return {
            text: "That's wonderful! 🎉 Celebrating wins is vital for mental health. What made it special?",
            chips: ["I achieved a goal", "Socialized with friends", "Just felt peaceful"]
        };
    }

    // POSITIVE STATES
    if (has(['happy', 'good', 'joy', 'wonderful', 'better', 'hopeful'])) {
        recordTopic('positive');
        aiContext.lastSentiment = 'happy';
        return {
            text: `That's wonderful to hear! 🌟 Positive emotions deserve attention too. Savor this moment—really feel it in your body. What do you think is contributing to this shift?`,
            chips: ["Personal growth", "Good news", "Just a good day"]
        };
    }

    // ANXIETY / PANIC
    if (has(['anxio', 'stress', 'panic', 'nervous', 'scared', 'worry'])) {
        recordTopic('anxiety');
        return {
            text: `I can sense the overwhelm. Let's ground you right now with the **5-4-3-2-1 Technique**. Look around: What are 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste?`,
            chips: ["It's working", "Need another way", "Why am I feeling this?"]
        };
    }

    // ADVICE REQUEST
    if (has(['advice', 'help me', 'what should i do', 'tips for'])) {
        recordTopic('advice');
        return {
            text: `I'd be more than happy to offer some guidance, ${userName}. Often when we feel stuck, a small shift can make a big difference. What area is weighing on you the most right now?`,
            chips: ["Sleep & Rest", "Managing Stress", "Communication", "Self-Love"]
        };
    }

    // GREETING
    if (has(['hi', 'hello', 'hey', 'aura'])) {
        return {
            text: `Hello ${userName}! 💙 It's so good to see you again. I'm here to support your mental wellness journey. How's your heart feeling in this moment?`,
            chips: ["I'm okay", "A bit down", "Anxious", "Excited!"]
        };
    }

    // SADNESS / DEPRESSION
    if (has(['sad', 'depress', 'unhappy', 'lonely', 'grief', 'crying', 'tears'])) {
        recordTopic('sadness');
        aiContext.lastSentiment = 'sad';
        return {
            text: `${validate()}\n\n` +
                `**Here are some clinically-proven techniques that may help:**\n\n` +
                `🧊 **Cold Water Reset:** Splash cold water on your face or hold ice cubes. This activates your "dive reflex" and calms your nervous system instantly.\n\n` +
                `📓 **Emotion Journaling:** Write "I feel [emotion] because [reason]." This externalizes the feeling and reduces its intensity.\n\n` +
                `🚶 **Movement:** Even a 5-minute walk can increase serotonin and dopamine.\n\n` +
                `Would you like to try one of these, ${userName}?`,
            chips: ["Tell me more about Cold Water Reset", "I'll try journaling", "Let's just talk"]
        };
    }

    // ANGER
    if (has(['angr', 'mad', 'furious', 'resent', 'hate', 'frustrated'])) {
        recordTopic('anger');
        return {
            text: `Anger is a valid emotion—it often protects us from deeper pain. Let's work with it, not against it.\n\n` +
                `**Here are some anger management techniques:**\n\n` +
                `⏸️ **STOP Method:** Stop, Take a breath, Observe your feelings, Proceed mindfully.\n\n` +
                `💪 **Physical Release:** Do 20 jumping jacks, squeeze a pillow, or stomp your feet. Anger is physical energy—let it out safely.\n\n` +
                `Would you like to explore what triggered this anger, ${userName}?`,
            chips: ["Tell me about the STOP method", "I need to release it physically", "What's the root of my anger?"]
        };
    }

    // FATIGUE / BURNOUT
    if (has(['tired', 'exhaust', 'burnout', 'lazy', 'no energy', 'drained'])) {
        return {
            text: `Your exhaustion is real and valid. Burnout is your body's way of saying "enough."\n\n` +
                `**Recovery strategies:**\n\n` +
                `🛏️ **Prioritize sleep hygiene:** No screens 1 hour before bed, keep your room cool and dark.\n\n` +
                `🍎 **Check your basics:** Are you eating enough? Drinking water? Small deficits add up.\n\n` +
                `📅 **Cancel something.** Give yourself permission to say "no" to one obligation this week.\n\n` +
                `🧘 **Micro-rest:** Even 5 minutes of sitting with eyes closed can help restore energy.\n\n` +
                `⚠️ **If this has lasted more than 2 weeks**, please consider speaking with a doctor. Persistent fatigue can have medical causes.`,
            chips: ["Tips for better sleep", "How to say no", "I need a doctor"]
        };
    }

    // SELF-WORTH / NEGATIVE SELF-TALK
    if (has(['not enough', 'failure', 'worthless', 'bad person', 'hate myself', 'not good enough', 'ugly', 'stupid'])) {
        return {
            text: `I hear your inner critic speaking, and I want to gently challenge it.\n\n` +
                `**Cognitive Behavioral Technique — Evidence Review:**\n\n` +
                `📋 Write down the negative thought: "I am a failure."\n\n` +
                `✅ Now list 3 pieces of **evidence AGAINST** this thought. (Times you succeeded, helped someone, learned something new.)\n\n` +
                `🔄 **Reframe the thought:** Instead of "I am a failure," try "I am learning and growing, and setbacks are part of that."\n\n` +
                `💙 **Affirmation:** You are worthy of love and belonging—not because of what you do, but because of who you ARE.\n\n` +
                `Would you like to do this exercise together right now?`,
            chips: ["Let's do it", "Tell me an affirmation", "Why do I think this way?"]
        };
    }

    // RELATIONSHIPS
    if (has(['family', 'mom', 'dad', 'brother', 'sister', 'parent', 'friend', 'relationship', 'girlfriend', 'boyfriend', 'partner', 'marriage'])) {
        return {
            text: `Relationships can be our greatest source of joy—and also our deepest wounds.\n\n` +
                `**Healthy communication technique — "I" Statements:**\n\n` +
                `Instead of: "You always ignore me!"\n` +
                `Try: "I feel hurt when I don't feel heard. I need more attention in our conversations."\n\n` +
                `**This format:** "I feel [emotion] when [situation]. I need [request]."\n\n` +
                `Would you like to practice this for a specific situation you're dealing with?`,
            chips: ["Explain 'I' statements", "How to set boundaries", "My relationship is ending"]
        };
    }

    // SCHOOL / WORK STRESS
    if (has(['work', 'school', 'exam', 'grade', 'boss', 'job', 'deadline', 'homework', 'college', 'university'])) {
        return {
            text: `Academic and work pressure can feel crushing. Here are some evidence-based strategies:\n\n` +
                `📝 **Pomodoro Technique:** Work for 25 minutes, then take a 5-minute break. Repeat.\n\n` +
                `🎯 **Eat the Frog:** Do your hardest task first thing in the morning when willpower is highest.\n\n` +
                `📋 **Brain Dump:** Write down EVERYTHING on your mind (tasks, worries). This frees up mental RAM.\n\n` +
                `⚖️ **Set boundaries:** You are not your productivity. Your worth is not measured by grades or performance.\n\n` +
                `What specific thing is causing the most stress right now?`,
            chips: ["Tell me about Pomodoro", "How to 'Eat the Frog'", "I need help with boundaries"]
        };
    }

    // SLEEP PROBLEMS
    if (has(['cant sleep', 'insomnia', 'sleep', 'nightmare', 'dreams', 'awake'])) {
        return {
            text: `Sleep issues can affect every part of your life. Here's what research shows helps:\n\n` +
                `🌙 **Sleep Hygiene Checklist:**\n` +
                `• No caffeine after 2 PM\n` +
                `• No screens 1 hour before bed\n` +
                `• Keep your room cool\n\n` +
                `🧘 **Body Scan Meditation:** Relax every muscle group from toes to head.\n\n` +
                `Try the calming sounds in our Sounds section.`,
            chips: ["Tell me about Body Scan", "Sounds section", "I'll try no screens"]
        };
    }

    // GRATITUDE / THANKS
    if (has(['thank', 'appreciate', 'helpful', 'helped'])) {
        return {
            text: "You're so welcome! I'm glad I could be here for you. Remember: you did the hard work by being open. Is there anything else on your mind?",
            chips: ["I'm feeling better", "Actually, one more thing", "How can I stay positive?"]
        };
    }

    // FOLLOW-UP INTELLIGENCE (The "Smart" Bridge)
    if (isFollowUp && lastTopic) {
        if (lastTopic === 'anxiety') {
            return {
                text: `The 5-4-3-2-1 technique works by pulling your brain out of "future-worry" mode and into the present moment. It physically slows your heart rate. Should we try another grounding exercise, or talk about what's causing the stress?`,
                chips: ["Another exercise", "Talk about the cause", "I'm feeling better"]
            };
        }
        if (lastTopic === 'sadness') {
            return {
                text: `I understand, ${userName}. When we're sad, even small steps feel like mountains. Journaling helps because it "empties" the heavy thoughts from your brain onto paper. Do you want to try writing just one sentence together?`,
                chips: ["Yes, let's try", "Maybe later", "Why does this happen?"]
            };
        }
        if (lastTopic === 'anger') {
            return {
                text: `The STOP method is great because it creates a "gap" between the trigger and your reaction. In that gap, you have power. Do you feel like the anger is starting to cool down, or is it still quite intense?`,
                chips: ["Cooling down", "Still intense", "Need to vent more"]
            };
        }
        // Generic follow-up if lastTopic is something else
        return {
            text: `I'm really interested in hearing more about that, ${userName}. It helps to get these thoughts out. What's the biggest thing on your mind regarding ${lastTopic === 'advice' ? 'the advice we discussed' : 'what we were just talking about'}?`,
            chips: ["Tell me more", "I'm not sure", "Let's change topics"]
        };
    }

    // FALLBACK
    const therapeuticFallbacks = [
        `Tell me more about that, ${userName}. What emotions come up when you think about it?`,
        `I'm listening, ${userName}. What would feel most helpful for us to focus on right now?`,
        `That sounds like a lot to handle. How is this situation affecting your peace lately?`,
        `I'm right here with you. What do you think is at the heart of this feeling?`
    ];
    const randomFallback = therapeuticFallbacks[Math.floor(Math.random() * therapeuticFallbacks.length)];

    return {
        text: randomFallback,
        chips: ["I'm feeling sad", "I'm stressed", "Can you give me advice?", "Let's talk about something else"]
    };
}

// -----------------------------------------------------------------
// FEATURE 10: GAMES LOGIC (WEATHER MOODS, SHAPE POP, ZEN DRAWING, FOCUS DOTS)
// -----------------------------------------------------------------

// --- REALISTIC RAIN SYSTEM ---
class RainSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.drops = [];
        this.splashes = [];
        this.numberOfDrops = 150;
        this.animationId = null;
        this.wind = 2;
        this.isActive = false;

        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createDrop() {
        return {
            x: Math.random() * (this.canvas.width + 200) - 100,
            y: Math.random() * -this.canvas.height,
            length: 10 + Math.random() * 20,
            speed: 15 + Math.random() * 10,
            opacity: 0.1 + Math.random() * 0.4,
            width: 1 + Math.random() * 1
        };
    }

    createSplash(x, y) {
        for (let i = 0; i < 4; i++) {
            this.splashes.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 4,
                vy: -Math.random() * 4,
                life: 1.0,
                size: 1 + Math.random() * 2
            });
        }
    }

    init() {
        this.drops = [];
        for (let i = 0; i < this.numberOfDrops; i++) {
            this.drops.push(this.createDrop());
        }
    }

    update() {
        if (!this.isActive) return;

        // Update Drops
        this.drops.forEach(drop => {
            drop.y += drop.speed;
            drop.x += this.wind;

            if (drop.y > this.canvas.height) {
                if (Math.random() > 0.5) this.createSplash(drop.x, this.canvas.height);
                // Reset drop
                drop.y = Math.random() * -100;
                drop.x = Math.random() * (this.canvas.width + 200) - 100;
            }
        });

        // Update Splashes
        for (let i = this.splashes.length - 1; i >= 0; i--) {
            const s = this.splashes[i];
            s.x += s.vx;
            s.y += s.vy;
            s.vy += 0.2; // gravity
            s.life -= 0.03;
            if (s.life <= 0) this.splashes.splice(i, 1);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw Drops
        this.ctx.lineCap = 'round';
        this.drops.forEach(drop => {
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(167, 243, 208, ${drop.opacity})`;
            this.ctx.lineWidth = drop.width;
            this.ctx.moveTo(drop.x, drop.y);
            this.ctx.lineTo(drop.x + (this.wind * 0.5), drop.y + drop.length);
            this.ctx.stroke();
        });

        // Draw Splashes
        this.splashes.forEach(s => {
            this.ctx.beginPath();
            this.ctx.fillStyle = `rgba(167, 243, 208, ${s.life * 0.5})`;
            this.ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    start() {
        if (this.isActive) return;
        this.isActive = true;
        this.init();
        this.animate();
    }

    stop() {
        this.isActive = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

let rainOverlay = null;

function toggleRain(show, container) {
    if (show) {
        if (!rainOverlay) {
            const canvas = document.createElement('canvas');
            container.appendChild(canvas);
            rainOverlay = new RainSystem(canvas);
        }
        rainOverlay.start();
    } else {
        if (rainOverlay) {
            rainOverlay.stop();
        }
    }
}

// 0. WEATHER MOODS
function initWeatherMoods() {
    const weatherBtns = document.querySelectorAll('.weather-btn');
    const weatherVisual = document.getElementById('weather-visual');
    const weatherMessage = document.getElementById('weather-message');
    const iconContainer = document.getElementById('weather-icon-container');
    const interactiveIcon = document.getElementById('weather-interactive-icon');
    const fullscreenContainer = document.getElementById('weather-fullscreen-container');

    let currentTaps = 0;
    const maxTaps = 5;
    let currentType = '';

    const weatherData = {
        sunny: {
            message: "Keep shining! You're doing great.",
            color: "rgba(251, 191, 36, 0.4)",
            animation: "sunny-glow",
            icon: "fa-sun"
        },
        rainy: {
            message: "Storms pass. Every cloud has a silver lining.",
            color: "rgba(15, 23, 42, 0.7)",
            animation: "rainy-fall",
            icon: "fa-cloud-showers-heavy"
        },
        cloudy: {
            message: "It's okay to feel a bit grey. Better days are ahead.",
            color: "rgba(148, 163, 184, 0.4)",
            animation: "cloudy-drift",
            icon: "fa-cloud"
        },
        stormy: {
            message: "Release the tension. Let it all out.",
            color: "rgba(10, 15, 24, 0.8)",
            animation: "stormy-flash",
            icon: "fa-bolt"
        }
    };

    weatherBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentType = btn.dataset.weather;
            const data = weatherData[currentType];

            // Reset Game State
            currentTaps = 0;
            weatherMessage.classList.remove('visible');
            weatherVisual.className = 'weather-visual';
            weatherVisual.style.background = 'transparent';

            // Reset Fullscreen & Stop Rain
            if (fullscreenContainer) {
                fullscreenContainer.className = 'weather-fullscreen-container';
                fullscreenContainer.style.background = 'transparent';
                toggleRain(false);
            }

            // Setup Icon
            iconContainer.classList.remove('hidden');
            iconContainer.style.transform = 'scale(1)';
            interactiveIcon.className = `fa-solid ${data.icon}`;
            interactiveIcon.style.fontSize = '4rem';

            // Highlight button
            weatherBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    iconContainer.addEventListener('click', () => {
        if (!currentType) return;
        currentTaps++;

        const scale = 1 + (currentTaps * 0.8);
        const fontSize = 4 + (currentTaps * 4);

        iconContainer.style.transform = `scale(${scale})`;
        interactiveIcon.style.fontSize = `${fontSize}rem`;

        if (currentTaps >= maxTaps) {
            const data = weatherData[currentType];

            // Final Growth & Reveal
            iconContainer.classList.add('hidden');
            weatherVisual.className = 'weather-visual ' + data.animation;
            weatherVisual.style.background = data.color;

            // Apply to Fullscreen
            if (fullscreenContainer) {
                fullscreenContainer.className = 'weather-fullscreen-container ' + data.animation;
                fullscreenContainer.style.background = data.color;

                // Trigger Realistic Rain
                if (currentType === 'rainy' || currentType === 'stormy') {
                    toggleRain(true, fullscreenContainer);
                }
            }

            setTimeout(() => {
                weatherMessage.innerText = data.message;
                weatherMessage.classList.add('visible');
            }, 500);
        }
    });
}

// Call on startup
document.addEventListener('DOMContentLoaded', initWeatherMoods);

// Cleanup on navigation
window.addEventListener('hashchange', () => {
    const fullscreenContainer = document.getElementById('weather-fullscreen-container');
    if (fullscreenContainer) {
        fullscreenContainer.className = 'weather-fullscreen-container';
        fullscreenContainer.style.background = 'transparent';
        toggleRain(false);
    }
});



// 1. SHAPE POP
const shapePopArea = document.getElementById('shape-pop-area');
const startShapePopBtn = document.getElementById('start-shape-pop');
let shapePopInterval;

if (startShapePopBtn) {
    startShapePopBtn.addEventListener('click', () => {
        if (shapePopInterval) {
            clearInterval(shapePopInterval);
            shapePopInterval = null;
            startShapePopBtn.innerText = "Start";
            shapePopArea.innerHTML = '<p class="game-hint">Pop shapes to relax!</p>';
        } else {
            shapePopArea.innerHTML = '';
            startShapePopBtn.innerText = "Stop";
            shapePopInterval = setInterval(createPopShape, 1000);
        }
    });
}

function createPopShape() {
    const shapes = ['circle', 'square', 'triangle', 'star'];
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    const shape = document.createElement('div');
    shape.className = 'pop-shape';

    const size = 40 + Math.random() * 40;
    const x = Math.random() * (shapePopArea.clientWidth - size);
    const y = Math.random() * (shapePopArea.clientHeight - size);
    const color = `hsl(${Math.random() * 360}, 70%, 60%)`;

    shape.style.width = size + 'px';
    shape.style.height = size + 'px';
    shape.style.left = x + 'px';
    shape.style.top = y + 'px';
    shape.style.backgroundColor = color;

    if (shapeType === 'circle') shape.style.borderRadius = '50%';
    else if (shapeType === 'triangle') {
        shape.style.backgroundColor = 'transparent';
        shape.style.width = '0';
        shape.style.height = '0';
        shape.style.borderLeft = (size / 2) + 'px solid transparent';
        shape.style.borderRight = (size / 2) + 'px solid transparent';
        shape.style.borderBottom = size + 'px solid ' + color;
    } else if (shapeType === 'star') {
        shape.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
    }

    shape.addEventListener('click', () => {
        // Create tiny explosion effect
        for (let i = 0; i < 8; i++) {
            const p = document.createElement('div');
            p.style.position = 'absolute';
            p.style.width = '4px';
            p.style.height = '4px';
            p.style.background = color;
            p.style.left = (x + size / 2) + 'px';
            p.style.top = (y + size / 2) + 'px';
            p.style.borderRadius = '50%';
            shapePopArea.appendChild(p);
            const angle = (i / 8) * Math.PI * 2;
            p.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${Math.cos(angle) * 30}px, ${Math.sin(angle) * 30}px)`, opacity: 0 }
            ], { duration: 500, easing: 'ease-out' }).onfinish = () => p.remove();
        }
        shape.remove();
    });

    shapePopArea.appendChild(shape);
    // Auto remove after 3 seconds if not popped
    setTimeout(() => { if (shape.parentNode) shape.remove(); }, 3000);
}

// 2. ZEN DRAWING PAD
const canvas = document.getElementById('zen-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const colorPicker = document.getElementById('draw-color');
const clearBtn = document.getElementById('clear-canvas');
const saveBtn = document.getElementById('save-canvas');

let drawing = false;
let lastX = 0;
let lastY = 0;

if (canvas && ctx) {
    function resizeCanvas() {
        if (canvas.offsetWidth === 0) return;

        // Save current drawing
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCanvas.width > 0 && tempCanvas.height > 0) {
            tempCtx.drawImage(canvas, 0, 0);
        }

        // Resize
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Fill background white (good for export)
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Restore context settings
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 5;

        // Restore drawing
        if (tempCanvas.width > 0 && tempCanvas.height > 0) {
            ctx.drawImage(tempCanvas, 0, 0);
        }
    }

    const ro = new ResizeObserver(() => resizeCanvas());
    ro.observe(canvas);

    function getCoords(e) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    function startDrawing(e) {
        drawing = true;
        const coords = getCoords(e);
        lastX = coords.x;
        lastY = coords.y;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
    }

    function draw(e) {
        if (!drawing) return;
        if (e.type === 'touchmove') e.preventDefault();

        const coords = getCoords(e);

        ctx.strokeStyle = colorPicker.value;
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();

        lastX = coords.x;
        lastY = coords.y;
    }

    function stopDrawing() {
        drawing = false;
        ctx.closePath();
    }

    // Mouse Listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    // Touch Listeners
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startDrawing(e);
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        draw(e);
    }, { passive: false });

    canvas.addEventListener('touchend', stopDrawing);

    clearBtn.addEventListener('click', () => {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    saveBtn.addEventListener('click', () => {
        const dataUrl = canvas.toDataURL('image/png');
        saveZenMasterpiece(dataUrl);

        // Visual feedback for the user
        const originalText = saveBtn.innerText;
        saveBtn.innerText = "Saved to Gallery!";
        saveBtn.classList.add('success');
        setTimeout(() => {
            saveBtn.innerText = originalText;
            saveBtn.classList.remove('success');
        }, 2000);
    });
}

const zenGallery = document.getElementById('zen-gallery');

function saveZenMasterpiece(dataUrl) {
    const pieces = getZenMasterpieces();
    pieces.unshift({ id: Date.now(), data: dataUrl });
    localStorage.setItem('zenMasterpieces', JSON.stringify(pieces.slice(0, 12))); // Keep last 12
    renderZenGallery();
}

function getZenMasterpieces() {
    const data = localStorage.getItem('zenMasterpieces');
    return data ? JSON.parse(data) : [];
}

function renderZenGallery() {
    if (!zenGallery) return;
    const pieces = getZenMasterpieces();
    zenGallery.innerHTML = '';

    if (pieces.length === 0) {
        zenGallery.innerHTML = '<p class="empty-state">No masterpieces saved yet. Start drawing to see them here!</p>';
        return;
    }

    pieces.forEach(piece => {
        const div = document.createElement('div');
        div.className = 'zen-piece-card';
        div.innerHTML = `
            <img src="${piece.data}" alt="Zen Art">
            <button class="delete-zen-btn" onclick="deleteZenPiece(${piece.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        zenGallery.appendChild(div);
    });
}

window.deleteZenPiece = function (id) {
    if (confirm('Delete this masterpiece?')) {
        const pieces = getZenMasterpieces().filter(p => p.id !== id);
        localStorage.setItem('zenMasterpieces', JSON.stringify(pieces));
        renderZenGallery();
    }
}

// Initial render
document.addEventListener('DOMContentLoaded', renderZenGallery);

// 3. FOCUS DOTS
const dotsContainer = document.getElementById('dots-container');
const startFocusBtn = document.getElementById('start-focus-dots');
const focusStatus = document.getElementById('focus-status');

let sequence = [];
let userSequence = [];
let isShowingSequence = false;
let currentFocusLevel = 1;

if (startFocusBtn) {
    startFocusBtn.addEventListener('click', () => {
        startFocusGame();
    });
}

function startFocusGame() {
    sequence = [];
    userSequence = [];
    dotsContainer.innerHTML = '';
    focusStatus.innerText = `Level ${currentFocusLevel}: Watch the sequence closely...`;
    startFocusBtn.disabled = true;

    // Number of dots increases with level: start at 4 dots
    const numDots = 3 + currentFocusLevel;

    // Create random dots
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'focus-dot';
        const x = 10 + Math.random() * 80;
        const y = 10 + Math.random() * 80;
        dot.style.left = x + '%';
        dot.style.top = y + '%';
        dot.style.width = Math.max(30, 60 - (currentFocusLevel * 2)) + 'px'; // Get smaller
        dot.style.height = dot.style.width;
        dot.dataset.index = i;
        dot.innerText = i + 1;
        dot.style.display = 'none';
        dotsContainer.appendChild(dot);
        sequence.push(dot);
    }

    showSequence();
}

async function showSequence() {
    isShowingSequence = true;
    // Faster sequence as level increases
    const delay = Math.max(300, 800 - (currentFocusLevel * 50));

    for (let i = 0; i < sequence.length; i++) {
        await new Promise(r => setTimeout(r, delay));
        sequence[i].style.display = 'flex';
        sequence[i].classList.add('active');
        setTimeout(() => sequence[i].classList.remove('active'), 500);
    }

    await new Promise(r => setTimeout(r, 1000));
    // Clear numbers for the test
    sequence.forEach(dot => {
        dot.innerText = '';
    });

    focusStatus.innerText = "Now, click them in the order they appeared!";
    isShowingSequence = false;

    sequence.forEach(dot => {
        dot.addEventListener('click', handleDotClick);
    });
}

function handleDotClick(e) {
    if (isShowingSequence) return;

    const dot = e.target;
    if (!dot.classList.contains('focus-dot')) return;

    const index = parseInt(dot.dataset.index);

    if (index === userSequence.length) {
        userSequence.push(index);
        dot.style.background = '#4ade80'; // Correct
        dot.style.boxShadow = '0 0 20px #4ade80';
        dot.innerText = userSequence.length;

        if (userSequence.length === sequence.length) {
            currentFocusLevel++;
            focusStatus.innerText = `Level ${currentFocusLevel - 1} Complete! Your cognitive clarity is sharp. 🌟`;
            startFocusBtn.disabled = false;
            startFocusBtn.innerText = `Start Level ${currentFocusLevel} `;
            triggerCelebration("EXCELLENT FOCUS", true, false);
        }
    } else {
        focusStatus.innerText = `Almost! Level ${currentFocusLevel} stopped.Try again ? 💙`;
        dot.style.background = '#f87171';
        dot.style.boxShadow = '0 0 20px #f87171';
        setTimeout(() => {
            startFocusBtn.disabled = false;
            startFocusBtn.innerText = "Retry Level";
        }, 1000);
    }
}

// 4. CALM LIGHT TRACING
const lightTraceArea = document.getElementById('light-trace-area');
const movingLight = document.getElementById('moving-light');
const toggleLightBtn = document.getElementById('toggle-light-trace');
const traceInstruction = document.getElementById('trace-instruction');

let isTracingGameActive = false;
let lightPos = { x: 50, y: 50 }; // Percentage
let targetPos = { x: 50, y: 50 };
let lightMoveInterval;
let particleInterval;

if (toggleLightBtn) {
    toggleLightBtn.addEventListener('click', () => {
        if (!isTracingGameActive) {
            startLightTracing();
        } else {
            stopLightTracing();
        }
    });
}

function startLightTracing() {
    isTracingGameActive = true;
    toggleLightBtn.innerText = "Stop Tracing";
    movingLight.classList.add('active');
    traceInstruction.innerText = "Keep your cursor on the light to find peace.";

    // Pick first target
    pickNewTarget();

    // Smooth movement loop
    lightMoveInterval = setInterval(updateLightPosition, 50);

    // Mouse interaction
    movingLight.addEventListener('mouseenter', () => movingLight.classList.add('tracing'));
    movingLight.addEventListener('mouseleave', () => movingLight.classList.remove('tracing'));

    // Optional: Leave a trail when tracing
    movingLight.addEventListener('mousemove', (e) => {
        if (movingLight.classList.contains('tracing')) {
            createTraceParticle(e.clientX, e.clientY);
        }
    });
}

function stopLightTracing() {
    isTracingGameActive = false;
    toggleLightBtn.innerText = "Start Tracing";
    movingLight.classList.remove('active');
    movingLight.classList.remove('tracing');
    traceInstruction.innerText = "Follow the light to find your calm.";
    clearInterval(lightMoveInterval);
}

function pickNewTarget() {
    // Move to a random spot, but not too close to the current one
    let newX, newY;
    do {
        newX = 10 + Math.random() * 80;
        newY = 10 + Math.random() * 80;
    } while (Math.abs(newX - lightPos.x) < 20 && Math.abs(newY - lightPos.y) < 20);

    targetPos = { x: newX, y: newY };
}

function updateLightPosition() {
    if (!isTracingGameActive) return;

    // Slow, soothing movement speed
    const speed = 0.15;
    const dx = targetPos.x - lightPos.x;
    const dy = targetPos.y - lightPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 1) {
        pickNewTarget();
    } else {
        lightPos.x += (dx / distance) * speed;
        lightPos.y += (dy / distance) * speed;
    }

    movingLight.style.left = lightPos.x + '%';
    movingLight.style.top = lightPos.y + '%';
}

function createTraceParticle(x, y) {
    const rect = lightTraceArea.getBoundingClientRect();
    const px = x - rect.left;
    const py = y - rect.top;

    const p = document.createElement('div');
    p.className = 'trace-particle';
    p.style.left = px + 'px';
    p.style.top = py + 'px';
    p.style.background = `rgba(16, 185, 129, ${0.4 + Math.random() * 0.4})`;

    lightTraceArea.appendChild(p);

    p.animate([
        { transform: 'scale(1)', opacity: 0.8 },
        { transform: 'scale(0)', opacity: 0 }
    ], { duration: 1500, easing: 'ease-out' }).onfinish = () => p.remove();
}

// --- SOUNDS & RELAXATION LOGIC ---
const playerBar = document.getElementById('sound-player-bar');
const pTitle = document.getElementById('p-title');
const pStatus = document.getElementById('p-status');
const pPlayPauseBtn = document.getElementById('p-play-pause');
const pStopBtn = document.getElementById('p-stop');
const pProgressBar = document.getElementById('player-progress-bar');
const pProgressContainer = document.getElementById('player-progress-container');

let isPlaying = false;
let currentSoundSrc = null;
const audioPlayer = new Audio();
audioPlayer.preload = "auto";

// Use Event Delegation for all sound cards (handles dynamic mood cards too)
document.addEventListener('click', (e) => {
    const card = e.target.closest('.sound-card');
    if (card) {
        const title = card.dataset.title;
        const src = card.dataset.src;

        if (currentSoundSrc === src) {
            togglePlayPause();
        } else {
            playNewSound(src, title);
        }
    }
});

function playNewSound(src, title) {
    // Reset previous actives
    document.querySelectorAll('.sound-card').forEach(c => c.classList.remove('active'));

    // Find the card being played and any duplicates (like in recommendation)
    document.querySelectorAll(`.sound-card[data-src="${src}"]`).forEach(c => {
        c.classList.add('active');
        const btn = c.querySelector('.play-btn-circle i');
        if (btn) btn.className = 'fa-solid fa-spinner fa-spin'; // Show loading
    });

    currentSoundSrc = src;
    audioPlayer.pause();
    audioPlayer.src = src;
    audioPlayer.load(); // Explicitly load the new source

    if (pStatus) pStatus.innerText = "Connecting...";
    if (pTitle) pTitle.innerText = title;
    if (playerBar) playerBar.classList.remove('hidden');

    audioPlayer.play().then(() => {
        isPlaying = true;
        if (pStatus) pStatus.innerText = "Now Playing...";
        if (pPlayPauseBtn) pPlayPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        updateCardIcons();
    }).catch(err => {
        console.error("Audio playback failed:", err);
        if (pStatus) pStatus.innerText = "Playback Error - Try again";
        updateCardIcons();
    });
}

function updateCardIcons() {
    document.querySelectorAll('.sound-card').forEach(c => {
        const icon = c.querySelector('.play-btn-circle i');
        if (!icon) return;

        if (c.classList.contains('active')) {
            icon.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
        } else {
            icon.className = 'fa-solid fa-play';
        }
    });
}

function togglePlayPause() {
    if (!currentSoundSrc) return;

    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        if (pStatus) pStatus.innerText = "Paused";
        if (pPlayPauseBtn) pPlayPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        if (pStatus) pStatus.innerText = "Resuming...";
        audioPlayer.play().then(() => {
            isPlaying = true;
            if (pStatus) pStatus.innerText = "Now Playing...";
            if (pPlayPauseBtn) pPlayPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }).catch(err => console.error("Audio resume failed:", err));
    }
    updateCardIcons();
}

if (pPlayPauseBtn) {
    pPlayPauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePlayPause();
    });
}

if (pStopBtn) {
    pStopBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        stopSound();
    });
}

function stopSound() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    isPlaying = false;
    currentSoundSrc = null;
    if (playerBar) playerBar.classList.add('hidden');
    document.querySelectorAll('.sound-card').forEach(c => {
        c.classList.remove('active');
        const icon = c.querySelector('.play-btn-circle i');
        if (icon) icon.className = 'fa-solid fa-play';
    });
}

audioPlayer.addEventListener('ended', stopSound);
audioPlayer.addEventListener('error', () => {
    if (pStatus) pStatus.innerText = "Error Loading Audio";
    updateCardIcons();
});

// Update progress bar
audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        if (pProgressBar) pProgressBar.style.width = progress + '%';
    }
});

if (pProgressContainer) {
    pProgressContainer.addEventListener('click', (e) => {
        if (!audioPlayer.duration) return;
        const rect = pProgressContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = x / width;
        audioPlayer.currentTime = percentage * audioPlayer.duration;
    });
}

/* --- MOOD BASED SURAH LOGIC --- */
const moodSurahs = {
    happy: { title: "Surah Ar-Rahman", artist: "Gratitude & Joy", src: "https://download.quranicaudio.com/quran/abdurrahmaan_as-sudays/055.mp3" },
    sad: { title: "Surah Yusuf", artist: "Hope & Patience", src: "https://download.quranicaudio.com/quran/abdurrahmaan_as-sudays/012.mp3" },
    angry: { title: "Surah Al-Asr", artist: "Peace & Time", src: "https://download.quranicaudio.com/quran/abdurrahmaan_as-sudays/103.mp3" },
    scared: { title: "Surah Ash-Sharh", artist: "Relief & Comfort", src: "https://download.quranicaudio.com/quran/abdurrahmaan_as-sudays/094.mp3" },
    misunderstood: { title: "Surah Maryam", artist: "Divine Support", src: "https://download.quranicaudio.com/quran/abdurrahmaan_as-sudays/019.mp3" },
    meh: { title: "Surah Al-Mulk", artist: "Contemplation", src: "https://download.quranicaudio.com/quran/abdurrahmaan_as-sudays/067.mp3" },
    suicidal: { title: "Surah Al-Baqarah", artist: "Spiritual Protection", src: "https://download.quranicaudio.com/quran/abdurrahmaan_as-sudays/002.mp3" }
};

function updateSurahRecommendations() {
    const section = document.getElementById('mood-surah-section');
    const container = document.getElementById('mood-surah-card-container');
    if (!section || !container) return;

    const history = JSON.parse(localStorage.getItem('moodHistory') || '[]');
    const latestMood = history.length > 0 ? history[0].mood : 'meh';
    const surah = moodSurahs[latestMood] || moodSurahs['meh'];

    section.classList.remove('hidden');
    container.innerHTML = `
        <div class="sound-card active mood-recommendation-card" data-src="${surah.src}" data-title="${surah.title}">
            <div class="sound-info">
                <span class="sound-title">${surah.title}</span>
                <span class="sound-artist">${surah.artist}</span>
            </div>
            <button class="play-btn-circle"><i class="fa-solid fa-play"></i></button>
        </div>
        <p style="font-size: 0.85rem; margin-top: 0.8rem; font-style: italic; opacity: 0.8; color: var(--text-main);">
            "${latestMood.charAt(0).toUpperCase() + latestMood.slice(1)}" mood detected. This Surah is recommended for your heart right now.
        </p>
    `;
}

document.addEventListener('DOMContentLoaded', updateSurahRecommendations);

// -----------------------------------------------------------------
// HAMBURGER MENU & ACCOUNT DRAWER LOGIC
// -----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navBtns = document.querySelectorAll('.nav-btn');
    const accountToggleBtn = document.getElementById('account-toggle-btn');
    const accountDrawer = document.getElementById('account-drawer');
    const closeAccountBtn = document.getElementById('close-account-btn');

    if (hamburgerBtn && navMenu) {
        // Toggle Nav Menu
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('show');

            // Close account drawer if open
            if (accountDrawer) accountDrawer.classList.remove('show');

            // Toggle Icon
            const icon = hamburgerBtn.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close when a nav link is clicked
        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                navMenu.classList.remove('show');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    if (accountToggleBtn && accountDrawer) {
        // Toggle Account Drawer
        accountToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            accountDrawer.classList.toggle('show');

            // Close nav menu if open
            if (navMenu && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                const icon = hamburgerBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        if (closeAccountBtn) {
            closeAccountBtn.addEventListener('click', () => {
                accountDrawer.classList.remove('show');
            });
        }
    }

    // Single click-outside listener for both menus
    document.addEventListener('click', (e) => {
        // Close Nav
        if (navMenu && navMenu.classList.contains('show') && !navMenu.contains(e.target)) {
            navMenu.classList.remove('show');
            const icon = hamburgerBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }
        // Close Account
        if (accountDrawer && accountDrawer.classList.contains('show') && !accountDrawer.contains(e.target)) {
            accountDrawer.classList.remove('show');
        }
    });
});
