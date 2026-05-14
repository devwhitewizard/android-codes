// ---------- ENHANCED SECRET CODES WITH COMPATIBLE DEVICES ----------
const secretCodesByBrand = {
    "Samsung": [
        { code: "*#0*#", desc: "LCD & sensor test (display, vibration, touch, camera)", details: "Opens a hidden test menu. Works on most Galaxy S and Note series." },
        { code: "*#0011#", desc: "Service menu with RF band / signal details", details: "Shows real-time signal strength, band info, and network stats." },
        { code: "*#1234#", desc: "PDA, CSC, and phone firmware version", details: "Displays current firmware build numbers." },
        { code: "*#0228#", desc: "Battery status & calibration", details: "Shows voltage, temperature, and allows battery gauge reset." },
        { code: "*#7353#", desc: "Quick test menu (audio, sensors, LED)", details: "Tests speaker, mic, vibration, and notification LED." },
        { code: "*#0808#", desc: "USB settings (MTP, ADB, etc.)", details: "Change USB mode without Developer Options." }
    ],
    "Tecno / Infinix / Itel": [
        { code: "*#*#3646633#*#*", desc: "Engineering mode (MediaTek)", details: "Access hardware testing, band selection, and audio tuning." },
        { code: "*#*#6484#*#*", desc: "Hardware test mode", details: "Tests LCD, touch, camera, sensors, speaker." },
        { code: "*#*#4636#*#*", desc: "Phone info & battery stats", details: "Shows signal strength, network type, battery health." },
        { code: "*#*#2664#*#*", desc: "Touchscreen test", details: "Draw on screen to verify touch accuracy." }
    ],
    "Xiaomi / Redmi / POCO": [
        { code: "*#*#6484#*#*", desc: "Hardware test mode (CIT)", details: "Comprehensive test of all hardware components." },
        { code: "*#*#64663#*#*", desc: "Hardware testing (Huawei also uses similar)", details: "Tests camera, sensors, battery, and more." },
        { code: "*#*#4636#*#*", desc: "Phone info & usage statistics", details: "Network, battery, app usage." },
        { code: "*#*#6485#*#*", desc: "Battery status (charge cycle, health)", details: "Shows real battery capacity and cycle count." },
        { code: "*#*#225#*#*", desc: "Calendar & storage info", details: "Shows calendar events and storage details." }
    ],
    "Huawei / Honor": [
        { code: "*#*#2846579#*#*", desc: "Project Menu (engineering)", details: "Network settings, background data, logs, and more." },
        { code: "*#*#14789632#*#*", desc: "Test menu for hardware", details: "Test LCD, touch, speaker, mic, camera." },
        { code: "*#*#12131415#*#*", desc: "GPS test", details: "Shows GPS satellite info and accuracy." },
        { code: "*#*#6130#*#*", desc: "Camera firmware info", details: "Displays camera module details and firmware." }
    ],
    "OnePlus": [
        { code: "*#*#564548#*#*", desc: "Engineering mode / Logkit", details: "Access logs, crash dumps, and hardware tests." },
        { code: "*#*#232338#*#*", desc: "WiFi MAC address", details: "Shows MAC and network diagnostics." },
        { code: "*#*#426#*#*", desc: "Google Play Services", details: "Check GMS connection and push notifications." }
    ],
    "Google Pixel (Stock Android)": [
        { code: "*#*#4636#*#*", desc: "Testing menu", details: "Phone info, battery stats, WiFi, usage." },
        { code: "*#*#7287#*#*", desc: "Quick hardware test", details: "Tests vibration, display, and sensors." },
        { code: "*#*#34971539#*#*", desc: "Camera details", details: "Shows camera firmware and sensor information." }
    ],
    "Nokia / Motorola (Near Stock)": [
        { code: "*#*#4636#*#*", desc: "Phone info", details: "Network & battery info." },
        { code: "*#*#0#*#*", desc: "Display test (Motorola)", details: "Tests screen colors and touch." },
        { code: "*#*#2664#*#*", desc: "Touch test", details: "Full screen touch test." }
    ]
};

    // USSD codes (Kenya & Banking & General)
    const ussdCodes = [
        // Safaricom
        { code: "*100#", desc: "Safaricom Prepaid Menu", compatible: "Safaricom Kenya" },
        { code: "*200#", desc: "Safaricom Postpaid Menu", compatible: "Safaricom Kenya" },
        { code: "*234#", desc: "MPESA Customer Service", compatible: "Safaricom Kenya" },
        { code: "*456#", desc: "Safaricom General Services", compatible: "Safaricom Kenya" },
        { code: "*544#", desc: "Safaricom Bundles", compatible: "Safaricom Kenya" },
        { code: "*131#", desc: "Credit Loan", compatible: "Safaricom Kenya" },
        { code: "*450#", desc: "Data Balance", compatible: "Safaricom Kenya" },
        { code: "*130*num#", desc: "Call me back", compatible: "Safaricom Kenya" },
        
        // Airtel & Telkom
        { code: "*100#", desc: "Airtel Kenya Prepaid Menu", compatible: "Airtel Kenya" },
        { code: "#123#", desc: "Airtel / Telkom Main Menu", compatible: "Airtel & Telkom Kenya" },
        { code: "*160#", desc: "T-Kash Menu", compatible: "Telkom Kenya" },
        
        // Government & Utility Services
        { code: "*254#", desc: "Hustler Fund", compatible: "Govt & Utilities" },
        { code: "*977#", desc: "KPLC Tokens", compatible: "Govt & Utilities" },
        { code: "*155#", desc: "NHIF Self Service", compatible: "Govt & Utilities" },
        { code: "*642#", desc: "HELB (Loans)", compatible: "Govt & Utilities" },
        { code: "*303#", desc: "NSSF", compatible: "Govt & Utilities" },
        
        // Banking Codes
        { code: "*247#", desc: "Equity Bank", compatible: "Banking" },
        { code: "*522#", desc: "KCB Bank", compatible: "Banking" },
        { code: "*667#", desc: "Co-op Bank", compatible: "Banking" },
        { code: "*901#", desc: "Access Bank", compatible: "Banking" },
        { code: "*737#", desc: "GTB Bank", compatible: "Banking" },
        { code: "*894#", desc: "FirstBank", compatible: "Banking" },
        { code: "*325#", desc: "Family Bank", compatible: "Banking" },
        { code: "*224#", desc: "Absa Bank", compatible: "Banking" },
        
        // General Android Codes
        { code: "*#06#", desc: "IMEI Number", compatible: "General Android" },
        { code: "#31# [Number]", desc: "Hide Number (Call)", compatible: "General Android" },
        { code: "*#43#", desc: "Call Waiting Status/Activate", compatible: "General Android" },
        { code: "**21*[Number]#", desc: "Call Forwarding Unconditional", compatible: "General Android" }
    ];

    // Hack / Advanced codes with some compatibility
    const hackCodes = [
        { code: "*#*#7780#*#*", desc: "Factory data reset (removes Google account, settings, app data) — ⚠️ DATA LOSS", compatible: "⚠️ Most stock Android & Samsung", danger: true },
        { code: "*2767*3855#", desc: "Full factory reset (reinstalls firmware, wipe internal storage) — DESTRUCTIVE", compatible: "⚠️ Samsung only (classic)", danger: true },
        { code: "*#*#197328640#*#*", desc: "Service Mode (advanced network / RAT control, band locking)", compatible: "📡 Samsung & Qualcomm chips", danger: false },
        { code: "*#*#759#*#*", desc: "RLZ Debug UI — partner debug interface", compatible: "🧪 Selected OEM builds", danger: false },
        { code: "*#*#8351#*#*", desc: "Enable voice dialing logging mode", compatible: "🎙️ Older Android (2.3-4.4)", danger: false },
        { code: "*#*#8350#*#*", desc: "Disable voice dialing logging mode", compatible: "🎙️ Legacy devices", danger: false },
        { code: "*#*#232337#*#*", desc: "Bluetooth device address display (engineering)", compatible: "📡 Qualcomm, Samsung", danger: false },
        { code: "*#*#001#*#*", desc: "Radio test / baseband debug", compatible: "📻 Sony, Motorola, OnePlus", danger: false },
        { code: "*#*#273282*255*663282*#*#*", desc: "Immediate data wipe (dangerous)", compatible: "⚠️ Samsung & some LG", danger: true },
        { code: "*#9900#", desc: "SysDump (system log, dropbox, wakelocks) — Samsung advanced", compatible: "📁 Samsung Galaxy (One UI)", danger: false }
    ];

    // ANDROID TRICKS DATA
const androidTricks = [
    {
        title: "🔋 Improve Battery Life",
        description: "Extend your battery endurance by optimizing background processes and screen usage.",
        steps: "1. Go to Settings → Battery → Battery Saver (turn ON).\n2. Disable always-on display.\n3. Reduce screen timeout to 30 seconds.\n4. Turn off unused radios (Bluetooth, Wi-Fi scanning).\n5. Use dark mode on AMOLED screens."
    },
    {
        title: "📁 Recover Deleted Files (No Root)",
        description: "Undelete photos or documents using Android's built-in trash or recovery apps.",
        steps: "1. Open Google Photos → Library → Trash (restore within 30 days).\n2. For other files, try 'DiskDigger' (no root) from Play Store.\n3. Connect to PC and use Recuva (if USB debugging enabled).\n4. Check internal storage → 'Lost.Dir' folder for fragments."
    },
    {
        title: "🎥 Record Screen (Built-in)",
        description: "Capture your screen without any third-party app (Android 11+).",
        steps: "1. Swipe down Quick Settings twice → tap 'Screen Record'.\n2. If not visible, edit tiles and add it.\n3. Choose audio source (none / media / mic).\n4. Tap start → recording appears in notification.\n5. Find videos in 'Recents' or 'Screen Recordings' folder."
    },
    {
        title: "⚡ Speed Up Performance",
        description: "Reduce lag and make your phone feel snappier.",
        steps: "1. Enable 'Developer options' (tap Build number 7 times).\n2. Set Window/Transition/Animator scale to 0.5x.\n3. Force GPU rendering (optional).\n4. Clear cache of heavy apps.\n5. Uninstall bloatware via ADB (no root)."
    },
    {
        title: "🔐 Find Hidden Saved Wi-Fi Passwords",
        description: "View Wi-Fi passwords you've previously connected to.",
        steps: "1. Go to Settings → Network & Internet → Wi-Fi.\n2. Tap on saved network → Share.\n3. Authenticate with fingerprint/PIN.\n4. A QR code appears → password shown below it.\n(Android 10+ only)"
    },
    {
        title: "📸 Use Camera While on Call",
        description: "Some Android skins allow camera use during calls.",
        steps: "1. During an active call, press Home button.\n2. Open Camera app manually.\n3. If disabled, try 'Google Dialer' or third-party dialer.\n4. On Samsung, enable 'Call background' in Phone settings."
    },
    {
        title: "🛡️ Block Ads System-Wide (No Root)",
        description: "Block ads in apps and browsers without installing VPN apps.",
        steps: "1. Go to Settings → Connections → More → Private DNS.\n2. Set Private DNS to 'dns.adguard.com'.\n3. Save → most ads are blocked.\n4. To revert, set to Automatic or Off."
    },
    {
        title: "🧹 Free Up Storage Automatically",
        description: "Use Android's built-in smart storage cleaner.",
        steps: "1. Settings → Storage → Smart Storage (turn ON).\n2. Remove old photos/videos from device (keep in cloud).\n3. Use Files by Google → 'Clean' button.\n4. Clear cached data from individual apps in Settings."
    }
];

const mobileTips = [
    {
        title: "📝 Add Owner Info on Lock Screen",
        description: "Display your name or contact info on the lock screen in case your phone is lost.",
        steps: "1. Settings → Lock Screen → Contact info / Owner info.\n2. Type your message (e.g., 'Reward if found, call 123-456-789').\n3. Save → appears on lock screen below the clock."
    },
    {
        title: "🔌 Use USB OTG (On-The-Go)",
        description: "Connect USB drives, mouse, keyboard, or game controller to your phone.",
        steps: "1. Buy a USB OTG adapter (Type-C or microUSB).\n2. Plug the adapter into your phone, then connect the USB device.\n3. Open 'Files' or 'My Files' app → USB drive appears.\n4. For mouse/keyboard: works immediately without setup."
    },
    {
        title: "📶 Show Internet Speed in Status Bar",
        description: "Monitor real-time upload/download speed without any app (Android 9+).",
        steps: "1. Settings → Network & Internet → Internet (or SIM status).\n2. Look for 'Network speed indicator' or 'Show speed'.\n3. If not available, download 'Internet Speed Meter Lite' from Play Store.\nAlternatively: Use 'NetSpeed Indicator' from Quick Settings (Samsung/One UI)."
    },
    {
        title: "📉 Reduce Mobile Data Usage",
        description: "Save your monthly data plan with built-in Android tools.",
        steps: "1. Settings → Network & Internet → Data Saver → Turn ON.\n2. Set 'Background data restriction' for individual apps.\n3. In apps like YouTube/Netflix, set 'Wi-Fi only' for downloads.\n4. Disable auto-play of videos in social media apps.\n5. Use Lite versions (Facebook Lite, X Lite, etc.)."
    },
    {
        title: "🔋 Show Battery Percentage in Status Bar",
        description: "Always see exact battery level without pulling down the shade.",
        steps: "1. Settings → Battery → Battery percentage (toggle ON).\n2. On Samsung: Settings → Notifications → Status bar → Show battery percentage.\n3. On stock Android: Quick Settings → Edit → Battery → Show percentage."
    },
    {
        title: "🛠️ Customise Quick Settings Panel",
        description: "Add/remove/rearrange toggles for faster access.",
        steps: "1. Swipe down twice to open full Quick Settings.\n2. Tap the ✏️ (Edit/Pencil) icon.\n3. Drag icons to add or remove toggles (e.g., Hotspot, Data Saver, Screen Recorder).\n4. Tap 'Done'."
    },
    {
        title: "📱 Use One-Handed Mode",
        description: "Easily use your phone with one hand by shrinking the display.",
        steps: "1. Settings → Display → One-handed mode (toggle ON).\n2. To activate: swipe down diagonally from the bottom corner of the screen.\n3. Adjust the size and position as needed."
    },
    {
        title: "🌙 Break Pattern Lock",
        description: "Unlock Locked Pattern Without Losing Data.",
        steps: "This entry references device recovery options. For safety and legal reasons detailed bypass instructions are omitted. Use official recovery tools or contact the device maker for assistance."
    }
];

function renderMobileTips() {
    const container = document.getElementById('mobileTipsContainer');
    if (!container) return;
    container.innerHTML = '';
    mobileTips.forEach(tip => {
        const card = document.createElement('div');
        card.className = 'trick-card';  // reuse existing style
        card.innerHTML = `
            <div class="trick-title">${tip.title}</div>
            <div class="trick-desc">${tip.description}</div>
            <details class="trick-steps">
                <summary>📖 Show steps</summary>
                <p style="white-space: pre-line;">${tip.steps}</p>
            </details>
        `;
        container.appendChild(card);
    });
}

// Call this function when page loads (e.g., after renderTricks)
renderMobileTips();

// Function to render tricks
function renderTricks() {
    const container = document.getElementById('tricksContainer');
    if (!container) return;
    container.innerHTML = '';
    androidTricks.forEach(trick => {
        const card = document.createElement('div');
        card.className = 'trick-card';
        card.innerHTML = `
            <div class="trick-title">${trick.title}</div>
            <div class="trick-desc">${trick.description}</div>
            <details class="trick-steps">
                <summary>📖 Show steps</summary>
                <p style="white-space: pre-line;">${trick.steps}</p>
            </details>
        `;
        container.appendChild(card);
    });
}

    // Helper to render any code list with compatibility
    function renderCodeList(containerId, codesArray, isDangerContext = false) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        codesArray.forEach(item => {
            const card = document.createElement('div');
            card.className = 'code-card';
            if (item.danger) card.classList.add('danger-card');

            // ---- Code info (left side) ----
            const codeInfoDiv = document.createElement('div');
            codeInfoDiv.className = 'code-info';

            const codeSpan = document.createElement('span');
            codeSpan.className = 'code';
            codeSpan.innerText = item.code;

            const descSpan = document.createElement('div');
            descSpan.className = 'desc';
            descSpan.innerText = item.desc;

            const metaInfo = item.compatible || item.details;
            if (metaInfo) {
                const compatSpan = document.createElement('div');
                compatSpan.className = 'compat-badge';
                compatSpan.innerHTML = `<i class="fas fa-check-circle"></i> ${metaInfo}`;
                descSpan.appendChild(compatSpan);
            }

            if (item.danger) {
                const warningSpan = document.createElement('span');
                warningSpan.className = 'warning-tag';
                warningSpan.innerHTML = '<i class="fas fa-bomb"></i> risky';
                descSpan.appendChild(warningSpan);
            }

            codeInfoDiv.appendChild(codeSpan);
            codeInfoDiv.appendChild(descSpan);

            // ---- Actions row (right side) ----
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'card-actions';

            // Like button — persists in localStorage
            const likeKey = 'like_' + item.code;
            let liked = localStorage.getItem(likeKey) === '1';

            const likeBtn = document.createElement('button');
            likeBtn.className = 'action-btn like-btn' + (liked ? ' liked' : '');
            likeBtn.setAttribute('aria-label', 'Like');
            likeBtn.innerHTML = liked
                ? '<i class="fas fa-heart"></i>'
                : '<i class="far fa-heart"></i>';
            likeBtn.addEventListener('click', () => {
                liked = !liked;
                localStorage.setItem(likeKey, liked ? '1' : '0');
                likeBtn.classList.toggle('liked', liked);
                likeBtn.innerHTML = liked
                    ? '<i class="fas fa-heart"></i>'
                    : '<i class="far fa-heart"></i>';
                // pulse effect
                likeBtn.classList.add('pop');
                setTimeout(() => likeBtn.classList.remove('pop'), 300);
            });

            // Share button
            const shareBtn = document.createElement('button');
            shareBtn.className = 'action-btn share-btn';
            shareBtn.setAttribute('aria-label', 'Share');
            shareBtn.innerHTML = '<i class="fas fa-share-nodes"></i>';
            shareBtn.addEventListener('click', async () => {
                const shareText = `${item.code} — ${item.desc}`;
                if (navigator.share) {
                    try { await navigator.share({ title: 'Android Code', text: shareText }); } catch (_) {}
                } else {
                    navigator.clipboard.writeText(shareText).then(() => {
                        const toast = document.getElementById('toastMsg');
                        toast.innerText = '🔗 Link copied!';
                        toast.style.opacity = '1';
                        setTimeout(() => {
                            toast.style.opacity = '0';
                            setTimeout(() => { toast.innerText = '✅ Copied to clipboard'; }, 500);
                        }, 1800);
                    });
                }
            });

            // Copy button (existing)
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-btn';
            copyButton.innerHTML = '<i class="far fa-copy"></i> Copy';
            copyButton.addEventListener('click', (e) => {
                e.preventDefault();
                copyToClipboard(item.code);
            });

            // Warning drop-down toggle button
            const warningBtn = document.createElement('button');
            warningBtn.className = 'action-btn';
            warningBtn.setAttribute('aria-label', 'Warning');
            warningBtn.innerHTML = '<i class="fas fa-exclamation-triangle" style="color: #d93025;"></i>';

            // Warning expanded text
            const warningExpandedDiv = document.createElement('div');
            warningExpandedDiv.className = 'warning-expanded';
            warningExpandedDiv.style.display = 'none';
            warningExpandedDiv.innerHTML = '<i class="fas fa-info-circle"></i> <strong>Educational & diagnostic use only.</strong> Some codes (especially Hack/Factory reset) may erase data or alter device settings. Use at your own risk. <strong>Compatibility may vary</strong> based on brand, carrier, and Android version.';

            warningBtn.addEventListener('click', () => {
                const isHidden = warningExpandedDiv.style.display === 'none';
                warningExpandedDiv.style.display = isHidden ? 'block' : 'none';
                warningBtn.style.background = isHidden ? '#ffe0e6' : '';
            });

            actionsDiv.appendChild(likeBtn);
            actionsDiv.appendChild(shareBtn);
            actionsDiv.appendChild(warningBtn);
            actionsDiv.appendChild(copyButton);

            card.appendChild(codeInfoDiv);
            card.appendChild(actionsDiv);
            card.appendChild(warningExpandedDiv);
            container.appendChild(card);
        });
    }

    // copy toast utility
    let toastTimeout;
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            const toast = document.getElementById('toastMsg');
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(0px)';
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.style.opacity = '0';
            }, 1800);
        }).catch(() => {
            alert('Manual copy: ' + text);
        });
    }

    

    // ---------- COMPREHENSIVE DEVICE TELEMETRY ----------
    const TelemetryManager = {
        getUUID() {
            let uuid = localStorage.getItem('device_telemetry_uuid');
            if (!uuid) {
                uuid = 'DEV-' + Math.random().toString(36).substr(2, 9).toUpperCase() + '-' + Date.now().toString(36).toUpperCase();
                localStorage.setItem('device_telemetry_uuid', uuid);
            }
            return uuid;
        },

        async getBattery() {
            if (!('getBattery' in navigator)) return { level: 0, charging: false, source: 'Unknown' };
            try {
                const b = await navigator.getBattery();
                return {
                    level: Math.round(b.level * 100),
                    charging: b.charging,
                    source: b.charging ? 'AC Adapter' : 'Internal Battery',
                    health: 'Good' // Browser API doesn't provide health, so we assume good
                };
            } catch (e) { return null; }
        },

        async getStorage() {
            if (!(navigator.storage && navigator.storage.estimate)) return { used: 0, total: 0 };
            try {
                const est = await navigator.storage.estimate();
                return {
                    used: Math.round(est.usage / (1024 * 1024)),
                    total: Math.round(est.quota / (1024 * 1024)),
                    percent: Math.round((est.usage / est.quota) * 100)
                };
            } catch (e) { return null; }
        },

        getConnectivity() {
            const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            return {
                type: conn ? conn.effectiveType : 'Unknown',
                speed: conn ? conn.downlink : 'N/A',
                rtt: conn ? conn.rtt : 'N/A',
                online: navigator.onLine ? 'Global' : 'Offline'
            };
        },

        getSecurityEvents() {
            // Mock security events for demonstration
            return [
                { time: new Date().toLocaleTimeString(), level: 'success', msg: 'System integrity check passed.' },
                { time: new Date(Date.now() - 1000 * 60 * 5).toLocaleTimeString(), level: 'info', msg: 'Policy compliance verified.' },
                { time: new Date(Date.now() - 1000 * 60 * 15).toLocaleTimeString(), level: 'warning', msg: 'Minor configuration update detected.' },
                { time: new Date(Date.now() - 1000 * 60 * 60 * 2).toLocaleTimeString(), level: 'success', msg: 'Successful login event logged.' }
            ];
        }
    };

    async function parseUserAgentForAndroid() {
        const ua = navigator.userAgent;
        let androidVersion = "14";
        let model = "Unknown Device";
        let brand = navigator.vendor || "Android Generic";
        
        // 1. Precise hardware data via Client Hints API (Supported in modern Chromium browsers)
        if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
            try {
                const hints = await navigator.userAgentData.getHighEntropyValues(["model", "platformVersion"]);
                if (hints.model) model = hints.model;
                if (navigator.userAgentData.platform === "Android" && hints.platformVersion) {
                    androidVersion = hints.platformVersion; 
                } else if (navigator.userAgentData.platform === "Windows" && hints.platformVersion) {
                    const majorVersion = parseInt(hints.platformVersion.split('.')[0], 10);
                    if (majorVersion >= 13) {
                        androidVersion = "Windows 11";
                        model = "Windows PC";
                        brand = "Microsoft";
                    } else {
                        androidVersion = "Windows 10";
                        model = "Windows PC";
                        brand = "Microsoft";
                    }
                }
            } catch(e) {}
        }
        
        // 2. Robust Regex Fallbacks for User-Agent
        const androidMatch = ua.match(/Android\s([0-9\.]+)/i);
        if (androidMatch && androidVersion === "14") androidVersion = androidMatch[1];
        
        if (model === "Unknown Device" || model === "") {
            // General match for (Linux; Android X; Model Build/...) or (Linux; Android X; Model) 
            const modelMatch = ua.match(/Android[^\)]+;\s([^;)]+?)(?:\sBuild|\))/i);
            if (modelMatch) {
                let parsedModel = modelMatch[1].trim();
                // strip language codes like en-us if trapped
                if (/^[a-z]{2}-[a-z]{2}$/i.test(parsedModel)) {
                    const secondMatch = ua.match(/Android[^\)]+;\s[a-z]{2}-[a-z]{2};\s([^;)]+?)(?:\sBuild|\))/i);
                    if (secondMatch) parsedModel = secondMatch[1].trim();
                }
                if (parsedModel && parsedModel !== "wv") model = parsedModel;
            } else if (!ua.includes("Android")) {
                const winMatch = ua.match(/Windows NT ([0-9\.]+)/);
                // Only overwrite if Client Hints didn't already catch Win 11
                if (winMatch && !androidVersion.startsWith("Windows 11")) { androidVersion = "Windows " + winMatch[1]; model = "Windows PC"; brand = "Microsoft"; }
                const macMatch = ua.match(/Mac OS X ([0-9\_]+)/);
                if (macMatch) { androidVersion = "macOS " + macMatch[1].replace(/_/g, '.'); model = "Apple Mac"; brand = "Apple"; }
                const iosMatch = ua.match(/iPhone OS ([0-9\_]+)/);
                if (iosMatch) { androidVersion = "iOS " + iosMatch[1].replace(/_/g, '.'); model = "Apple iPhone"; brand = "Apple"; }
            }
        }
        
        // 3. Infer brand intuitively
        const lowerModel = model.toLowerCase();
        if (lowerModel.includes('samsung') || lowerModel.startsWith('sm-')) brand = "Samsung";
        else if (lowerModel.includes('pixel')) brand = "Google";
        else if (lowerModel.includes('tecno')) brand = "TECNO";
        else if (lowerModel.includes('infinix') || lowerModel.startsWith('x6')) brand = "Infinix";
        else if (lowerModel.includes('cph') || lowerModel.includes('rmx') || lowerModel.includes('pbg')) brand = "BBK Electronics";
        else if (lowerModel.includes('redmi') || lowerModel.includes('poco') || lowerModel.includes('mi ')) brand = "Xiaomi";
        else if (lowerModel.includes('moto') || lowerModel.startsWith('xt')) brand = "Motorola";
        
        // 4. Estimate SDK natively
        let sdk = 34; // default Android 14
        if (androidVersion.startsWith("13")) sdk = 33;
        if (androidVersion.startsWith("12")) sdk = 31;
        if (androidVersion.startsWith("11")) sdk = 30;
        if (androidVersion.startsWith("10") || androidVersion.startsWith("Windows") || androidVersion.startsWith("macOS") || androidVersion.startsWith("iOS")) sdk = 29;

        return { androidVersion, model, brand, sdk };
    }

    async function renderTelemetry() {
        const identityGrid = document.getElementById('identityGrid');
        const healthGrid = document.getElementById('healthGrid');
        const connectivityGrid = document.getElementById('connectivityGrid');
        const softwareGrid = document.getElementById('softwareGrid');
        const securityLog = document.getElementById('securityLog');

        if (!identityGrid) return;
        
        // Hide the other grids as per screenshot style
        if (healthGrid) healthGrid.parentElement.style.display = 'none';
        if (connectivityGrid) connectivityGrid.parentElement.style.display = 'none';
        if (softwareGrid) softwareGrid.parentElement.style.display = 'none';
        
        identityGrid.className = 'android-props-list';
        
        const uuid = TelemetryManager.getUUID().replace(/-/g, '').toLowerCase().substring(0, 16);
        const { androidVersion, model, brand, sdk } = await parseUserAgentForAndroid();
        const battery = await TelemetryManager.getBattery();
        
        const manufacture = brand.toUpperCase();
        const hardware = (navigator.hardwareConcurrency >= 8) ? 'mt6893' : 'mt6768';
        const display = `${model.toUpperCase()}-X${Math.floor(Math.random()*10000)}ABCDEFGHIJKLMNOPQRSTUVWXYZ-${Math.floor(Math.random()*100000)}V2222`;
        
        const identityItems = [
            { label: "Operating System", value: androidVersion.startsWith("Win") || androidVersion.startsWith("mac") || androidVersion.startsWith("iOS") ? androidVersion : "Android " + androidVersion },
            { label: "Battery", value: battery ? `${battery.level}% (${battery.charging ? 'Charging ⚡' : 'Discharging'})` : 'Unknown' },
            { label: "Brand", value: manufacture },
            { label: "Device ID", value: uuid },
            { label: "Model", value: model },
            { label: "ID", value: "UP1A." + Math.floor(Math.random()*1000000) + ".00" + Math.floor(Math.random()*10) },
            { label: "SDK", value: sdk },
            { label: "Manufacture", value: manufacture },
            { label: "User", value: "buildsrv-ci" },
            { label: "Type", value: "user" },
            { label: "Base", value: "1" },
            { label: "Incremental", value: Math.floor(Math.random()*100000) + "V2222" },
            { label: "Board", value: manufacture + "-BOARD" },
            { label: "Host", value: "srv" + Math.floor(Math.random()*100000) + "-0910" },
            { label: "Display", value: display },
            { label: "Hardware", value: hardware },
            { label: "Product", value: model.replace(/\s+/g, '') + "-OP" },
            { label: "CPU ABI", value: "arm64-v8a" },
            { label: "Finger Print", value: `${manufacture}/${model.replace(/\s+/g, '')}-OP/${manufacture}-14/UP1A.231005.007/250910V2222:user/release-keys` },
            { label: "Version", value: androidVersion }
        ];
        
        identityGrid.innerHTML = '';
        identityItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'device-info-row';
            div.innerHTML = `
                <div class="device-info-label">${item.label}</div>
                <div class="device-info-value">${item.value}</div>
            `;
            identityGrid.appendChild(div);
        });
    }

    function renderGridItems(container, items) { 
        // unused fallback
    }

    // Replace older function refs
    const renderDeviceInfo = renderTelemetry;

    function bindDeviceRefresh() {
        const refreshBtn = document.getElementById('refreshDeviceInfo');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                renderDeviceInfo();
                const toast = document.getElementById('toastMsg');
                toast.style.opacity = '1';
                toast.innerText = '🔄 Device info updated';
                setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => { toast.innerText = '✅ Copied to clipboard'; }, 600); }, 1500);
            });
        }
    }

    // -------- TAB SWITCHING --------
    function initTabs() {
        const tabs = document.querySelectorAll('.tab-btn');
        const panes = document.querySelectorAll('.tab-pane');
        tabs.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                tabs.forEach(b => b.classList.remove('active'));
                panes.forEach(p => p.classList.remove('active-pane'));
                btn.classList.add('active');
                const activePane = document.getElementById(tabId);
                if (activePane) activePane.classList.add('active-pane');
                if (tabId === 'deviceTab') renderDeviceInfo();
                if (tabId === 'tricksTab') renderTricks();
                
                // Scroll back to the top smoothly so the user starts reading the new tab from the top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // load all codes with compatibility (secret codes now have device compatibility)
    function loadAllStaticCodes() {
        // androidCodesContainer is now populated dynamically when a brand is clicked
        renderCodeList('ussdCodesContainer', ussdCodes, false);
        renderCodeList('hackCodesContainer', hackCodes, true);
    }

    function renderBrandsGrid() {
        const grid = document.getElementById('brandsGrid');
        if (!grid) return;
        grid.innerHTML = '';
        
        const allBrands = Object.keys(secretCodesByBrand);
        
        allBrands.forEach(brandName => {
            const card = document.createElement('div');
            card.className = 'brand-card';
            
            // Just use a generic icon and brand text
            card.innerHTML = `
                <i class="fas fa-mobile-alt"></i>
                <span>${brandName}</span>
            `;
            
            card.addEventListener('click', () => showBrandCodes(brandName));
            grid.appendChild(card);
        });
    }

    function showBrandCodes(brandName) {
        document.getElementById('brandsGrid').style.display = 'none';
        document.getElementById('brandCodesSection').style.display = 'block';
        document.getElementById('brandTitle').innerText = brandName + " Secret Codes";
        
        const codesToRender = secretCodesByBrand[brandName] || [];
        renderCodeList('androidCodesContainer', codesToRender, false);
    }

    // Attach back button logic
    const backBtn = document.getElementById('backToBrandsBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            document.getElementById('brandCodesSection').style.display = 'none';
            document.getElementById('brandsGrid').style.display = 'grid';
        });
    }

    loadAllStaticCodes();
    initTabs();
    bindDeviceRefresh();
    renderDeviceInfo();
    // Render tricks initially so the Tricks panel has content on load
    renderTricks();
    renderBrandsGrid();

// Hamburger toggle for small screens
const hamburgerBtn = document.getElementById('hamburgerBtn');
const tabsNav = document.querySelector('.tabs-nav');
if (hamburgerBtn && tabsNav) {
    // initialize aria
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.addEventListener('click', (e) => {
        const open = tabsNav.classList.toggle('open');
        hamburgerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        // prevent body scroll when menu open on small screens
        if (open) document.body.classList.add('menu-open'); else document.body.classList.remove('menu-open');
    });

    // Close menu when a tab is clicked
    tabsNav.addEventListener('click', (e) => {
        const target = e.target.closest('.tab-btn');
        if (target) {
            tabsNav.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
        if (!tabsNav.classList.contains('open')) return;
        const isInside = e.target.closest('.tabs-nav') || e.target.closest('#hamburgerBtn');
        if (!isInside) {
            tabsNav.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && tabsNav.classList.contains('open')) {
            tabsNav.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    });

    // On resize to large screens, ensure the mobile menu is closed
    window.addEventListener('resize', () => {
        if (window.innerWidth > 700 && tabsNav.classList.contains('open')) {
            tabsNav.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    });
}

// Global search: filters cards inside the active pane
const globalSearch = document.getElementById('globalSearch');
function filterActivePanel(query) {
    const activePane = document.querySelector('.tab-pane.active-pane');
    if (!activePane) return;
    const q = (query || '').trim().toLowerCase();
    // find candidate items: code-card, trick-card, info-item
    const selectors = ['.code-card', '.trick-card', '.info-item'];
    let anyVisible = false;
    selectors.forEach(sel => {
        const nodes = activePane.querySelectorAll(sel);
        nodes.forEach(node => {
            const text = (node.innerText || '').toLowerCase();
            const match = q === '' || text.indexOf(q) !== -1;
            node.style.display = match ? '' : 'none';
            if (match) anyVisible = true;
        });
    });
    // If no card-like nodes matched, try filtering within iframe (phone codes)
    const iframe = activePane.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
        try {
            const doc = iframe.contentWindow.document;
            const rows = doc.querySelectorAll('#phoneBody tr');
            rows.forEach(r => {
                const text = (r.innerText || '').toLowerCase();
                r.style.display = (q === '' || text.indexOf(q) !== -1) ? '' : 'none';
            });
        } catch(e) {
            // cross-origin or not ready — silently ignore
        }
    }
}
if (globalSearch) {
    globalSearch.addEventListener('input', (e) => filterActivePanel(e.target.value));
}

    // auto-refresh device info on resize/orientation if device tab active
    window.addEventListener('resize', () => {
        const devicePane = document.getElementById('deviceTab');
        if (devicePane && devicePane.classList.contains('active-pane')) renderDeviceInfo();
    });
    window.addEventListener('orientationchange', () => {
        const devicePane = document.getElementById('deviceTab');
        if (devicePane && devicePane.classList.contains('active-pane')) renderDeviceInfo();
    });
