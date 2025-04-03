// Terminal NoWi 
var isRoot = false;
var currentUser = 'nowi';
var password = "magic"; 
var pwMode = false; 
var commandHistory = []; 
var historyIndex = 0; 
var bazaarLoaded = false; 

var MOTD = `
  _________________________________________________________
 /                                                        /
|    ███╗   ██╗ ██████╗ ██╗    ██╗██╗                    |
|    ████╗  ██║██╔═══██╗██║    ██║██║                    |
|    ██╔██╗ ██║██║   ██║██║ █╗ ██║██║  - Novice Wizard   |
|    ██║╚██╗██║██║   ██║██║███╗██║██║                    |
|    ██║ ╚████║╚██████╔╝╚███╔███╔╝██║                    |
|    ╚═╝  ╚═══╝ ╚═════╝  ╚══╝╚══╝ ╚═╝                    |
|                                                        |
|   [!!! WARNING !!!]                                    |
|   MALWARE DETECTED: 0x5F3759DF                         |
|   INFECTION: SYSTEM32/NoWi-Core.dll                    |
|                                                        |
|   > Scanning...                                        |
|   > 127.0.0.1: Hacked by NoWi's Magic                  |
|   > Encryption: 99.9% ████████████████████▌            |
|                                                        |
 \\_______________________________________________________/
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||

Type 'help' for commands.
Source template: toor.do, enhanced by N0Wi
`;

var dangerousCmds = [
    'rm', 'rm -rf', 'rm -rf /', 'reboot', 'shutdown', 
    'telnet', 'ssh', 'scp', 'sftp', 'dd', 'mkfs', 
    'chmod 777', ':(){:|:&};:', 'mv / /dev/null'
];

console.log(
    "%cFollow the white Rabbit....knock,knock, Neo.🐇 ",
    "color:rgb(255, 34, 0); font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - The Matrix is a system, Neo. That system is our enemy 👾", "color:rgb(115, 0, 255);font-weight: bold; font-size: 14px");

var secretContent = [
    "",
    " 01001000 01000001 01000011 01001011 ",
    " 00101110 00101110 00101110 00101110 ",
    " 01000110 01001001 01010010 01000101 ",
    "   \\|/ ____ \\|/    ",
    "    @~/ ,. \\~@      ",
    "   /_( \\__/ )_\\     ",
    "      \\__U_/        ",
    " 01110011 01100101 01100011 01110010 01100101 01110100 ",
    "",
    "You've unlocked the secret mode!",
    "",
    "System secrets revealed:",
    "- The backdoor is at port 1337",
    "- The real admin password is 'h4x0r'",
    "- The system will self-destruct in 10... just kidding!",
    "- The real name of Satoshi Nakamoto is *******",
    "",
    "Opening secret portal...",
    ""
];

var tsh = {
    MOBILE: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i,
    SEPARATOR_REGEX: / |,/,
    CWD: '',
    AUTOCOMPLETE: [
        'cat', 'wget', 'curl', 'cd', 
        'cd posts', 'cd programs',
        'help', 'clear', 'pwd', 'ls',
        'ls -l', 'whoami', 'su nowi', 'su guest',
        'nmap', 'ifconfig', 'ping', 'secret',
        'sudo', 'sudo -s', 'red button',
        'wget Windows-Malware-Development.pdf''wget Wannacry.html', 
        'curl Windows-Malware-Development.pdf','curl Wannacry.html',
        'cat Wannacry.html',
        'wget --help', 'curl --help'
    ],
    MAX_HISTORY_LINE_COUNT: 25,
    lastInput: '',
    input: '',
    users: {
        'nowi': { isAdmin: true, password: 'wizard123' },
        'guest': { isAdmin: false, password: 'guest123' }
    },
    files: {
        '': {
            name: 'root',
            type: 'dir',
            content: {
                'posts': { type: 'dir' },
                'programs': { type: 'dir' },
                'Windows-Malware-Development.pdf': { 
                    type: 'file',
                    size: '1.3M',
                    content: 'https://github.com/g4l1l30sec/slumdogmillonaire/blob/main/Windows-Malware-Development.pdf'
                }
            }
        },
        'posts': {
            name: 'posts',
            type: 'dir',
            content: {
                'Wannacry.html': {
                    type: 'file',
                    size: '10.4KB',
                    content: 'https://slumdogmillonaire.pages.dev/posts/Wannacry.html'
                },
            }
        },
        'programs': {
            name: 'programs',
            type: 'dir',
            content: {
                'Umap-v0.8.tar.gz': {
                    type: 'file',
                    size: '14K',
                    content: 'https://toor.do/umap-0.8.tar.gz'
                },
                'Metasploit-UPnP-scanner.rb': {
                    type: 'file',
                    size: '11K',
                    content: 'https://toor.do/desc_files.rb'
                }
            }
        }
    }
};

function isScrolledToBottom() {
    return $(window).scrollTop() + $(window).height() >= $(document).height() - 50;
}

function scrollToBottom() {
    $('html, body').stop().animate({ scrollTop: $(document).height() }, 100);
}

function showMOTD() {
    const wasScrolledToBottom = isScrolledToBottom();
    $('#history').append($('<pre>').text(MOTD));
    if (wasScrolledToBottom) {
        scrollToBottom();
    }
}

$(document).ready(function() {
    if (tsh.MOBILE.test(navigator.userAgent.toLowerCase())) {
        tsh.MAX_HISTORY_LINE_COUNT = 10;
        $('#cursor').removeClass('blink');
    }
    
    showMOTD();
    
    $(document).on('click', 'a.download', function(e) {
        e.preventDefault();
        const file = $(this).data('file');
        addToHistory(`Downloading ${file}... (simulated)`);
    });

    tsh.DEFAULT_PROMPT = getPrompt();
    $('#prompt').text(tsh.DEFAULT_PROMPT);
});

function getPrompt() {
    const user = isRoot ? 'root' : currentUser;
    const symbol = isRoot ? '#' : '$';
    const path = tsh.CWD ? tsh.CWD : '~';
    return bazaarLoaded ? `[BAZAAR]${user}@Hal9000:${path}${symbol}` : `${user}@Hal9000:${path}${symbol}`;
}

function listFiles(longFormat, listDir) {
    let targetDir = '';
    
    if (listDir) {
        targetDir = listDir.startsWith('/') ? listDir.slice(1) : listDir;
    } else {
        targetDir = tsh.CWD ? tsh.CWD.replace(/^\//, '') : '';
    }
    
    const dir = tsh.files[targetDir] || tsh.files[''];
    if (!dir) return 'Directory not found';
    
    if (!longFormat) {
        return Object.keys(dir.content).map(name => {
            const file = dir.content[name];
            if (file.type === 'dir') return name + '/';
            return name;
        }).join(' ');
    }

    let output = [];
    const now = new Date();
    const formatDate = (date) => {
        return date.toLocaleString('default', {month: 'short'}) + ' ' + 
               date.getDate().toString().padStart(2, ' ') + ' ' +
               date.getHours().toString().padStart(2, '0') + ':' +
               date.getMinutes().toString().padStart(2, '0');
    };

    output.push(`drwxr-xr-x 2 ${currentUser} users 4.0K ${formatDate(now)} .`);
    output.push(`drwxr-xr-x 2 nowi nowi 4.0K ${formatDate(new Date(now - 86400000))} ..`);

    for (const [name, file] of Object.entries(dir.content)) {
        const type = file.type === 'dir' ? 'd' : '-';
        const date = new Date(now - Math.floor(Math.random() * 31536000000));
        const size = file.size || '4.0K';
        const link = file.type === 'file' ? `<a href="#" class="download" data-file="${name}">${name}</a>` : name;
        
        output.push(
            `${type}rwxr-xr-x 1 ${currentUser} users ${size} ` +
            `${formatDate(date)} ${link}${file.type === 'dir' ? '/' : ''}`
        );
    }

    return output.join('<br>');
}

function changeUser(username) {
    if (tsh.users[username]) {
        currentUser = username;
        isRoot = false; // Siempre resetear a no-root al cambiar de usuario
        tsh.DEFAULT_PROMPT = getPrompt();
        $('#prompt').text(tsh.DEFAULT_PROMPT);
        return `Switched to user ${username}`;
    }
    return `User ${username} does not exist`;
}

function addToHistory(line) {
    const wasScrolledToBottom = isScrolledToBottom();
    $('#history').append($('<p>').html(line));
    while ($('#history').children().length >= tsh.MAX_HISTORY_LINE_COUNT) {
        $('#history p').first().remove();
    }
    if (wasScrolledToBottom) {
        scrollToBottom();
    }
}

function renderInput() {
    const $input = $('#input');
    const currentText = $input.text();
    
    if (pwMode) {
        $input.text('*'.repeat(tsh.input.length));
    } else if (currentText !== tsh.input) {
        $input.text(tsh.input);
    }
    
    if (isScrolledToBottom()) {
        scrollToBottom();
    }
}

function showSecretContent() {
    secretContent.forEach((line, index) => {
        setTimeout(() => {
            addToHistory(line);
            
            
            if (index === secretContent.length - 1) {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
            }
        }, index * 120);
    });
}

function validateBazaarCode() {
    
    const dialog = document.getElementById('bazaarDialogContainer');
    if (dialog) {
        document.body.removeChild(dialog);
    }
    loadBazaarScript();
}

function cancelBazaarDialog() {
    const dialog = document.getElementById('bazaarDialogContainer');
    if (dialog) {
        document.body.removeChild(dialog);
    }
}

function showBazaarDialog() {
    
    const dialogContainer = document.createElement('div');
    dialogContainer.id = 'bazaarDialogContainer';
    dialogContainer.style.position = 'fixed';
    dialogContainer.style.top = '0';
    dialogContainer.style.left = '0';
    dialogContainer.style.width = '100%';
    dialogContainer.style.height = '100%';
    dialogContainer.style.backgroundColor = 'rgba(0,0,0,0.7)';
    dialogContainer.style.zIndex = '9999';
    dialogContainer.style.display = 'flex';
    dialogContainer.style.justifyContent = 'center';
    dialogContainer.style.alignItems = 'center';

    
    const dialogContent = document.createElement('div');
    dialogContent.style.background = '#111';
    dialogContent.style.border = '3px solid red';
    dialogContent.style.padding = '20px';
    dialogContent.style.width = '80%';
    dialogContent.style.maxWidth = '500px';
    dialogContent.style.color = 'white';
    
    // Password ya pre-escrito y campo oculto
    dialogContent.innerHTML = `
        <h2 style="color:red; margin-top:0;">⚠️ FINAL WARNING ⚠️</h2>
        <p>Executing BAZAAR.js will:</p>
        <ul style="text-align:left">
            <li>Run external JavaScript code</li>
            <li>Modify system behavior</li>
            <li>Potentially cause irreversible changes</li>
        </ul>
        <p>Password verification ready:</p>
        <input type="hidden" id="bazaarAuthCode" value="${password}">
        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
            <button id="bazaarExecuteBtn" style="
                padding: 10px 20px;
                background: red;
                color: white;
                border: none;
                cursor: pointer;
                width: 100%;
            ">EXECUTE BAZAAR PROTOCOL</button>
        </div>
    `;

    dialogContainer.appendChild(dialogContent);
    document.body.appendChild(dialogContainer);
    
    
    document.getElementById('bazaarExecuteBtn').addEventListener('click', function() {
        validateBazaarCode();
    });
}

function loadBazaarScript() {
    addToHistory("<span style='color:red'>BAZAAR PROTOCOL ACTIVATED</span>");
    
    const glitchEffect = document.createElement('div');
    glitchEffect.style.position = 'fixed';
    glitchEffect.style.top = '0';
    glitchEffect.style.left = '0';
    glitchEffect.style.width = '100%';
    glitchEffect.style.height = '100%';
    glitchEffect.style.background = 'url("https://media.giphy.com/media/3o7TKwxYkeW0ZvTqsU/giphy.gif")';
    glitchEffect.style.zIndex = '9998';
    glitchEffect.style.opacity = '0.7';
    glitchEffect.style.pointerEvents = 'none';
    document.body.appendChild(glitchEffect);
    
    addToHistory("Connecting to BAZAAR network...");
    addToHistory("Downloading payload...");
    
    const script = document.createElement('script');
    script.src = 'baazar.js';
    script.onload = function() {
        setTimeout(() => {
            document.body.removeChild(glitchEffect);
            addToHistory("<span style='color:red'>BAZAAR protocol completed</span>");
            addToHistory("System modified. Welcome to the other side.");
            
            tsh.DEFAULT_PROMPT = getPrompt();
            $('#prompt').text(tsh.DEFAULT_PROMPT);
            
            MOTD = `
            ██████╗  █████╗ ███████╗ █████╗ ██████╗ 
            ██╔══██╗██╔══██╗╚══███╔╝██╔══██╗██╔══██╗
            ██████╔╝███████║  ███╔╝ ███████║██████╔╝
            ██╔══██╗██╔══██║ ███╔╝  ██╔══██║██╔══██╗
            ██████╔╝██║  ██║███████╗██║  ██║██║  ██║
            ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
            
            SYSTEM MODIFIED BY BAZAAR PROTOCOL
            `;
            
            bazaarLoaded = true;
        }, 2000);
    };
    script.onerror = function() {
        document.body.removeChild(glitchEffect);
        addToHistory("<span style='color:red'>Error: baazar.js not found!</span>");
    };
    document.body.appendChild(script);
}

$(document).on('keydown', function(event) {
    if (event.which == 8) { // Backspace
        event.preventDefault();
        tsh.input = tsh.input.substring(0, tsh.input.length - 1);
        renderInput();
        return false;
    } else if (event.which == 9) { // Tab
        event.preventDefault();
        if (tsh.input.trim() == '') return false;
        const input = tsh.input.trimLeft();
        for (let i = 0; i < tsh.AUTOCOMPLETE.length; i++) {
            if (tsh.AUTOCOMPLETE[i].indexOf(input) == 0) {
                tsh.input = tsh.AUTOCOMPLETE[i];
                renderInput();
                break;
            }
        }
        return false;
    } else if (event.which == 38) { 
        event.preventDefault();
        if (commandHistory.length > 0) {
            if (historyIndex > 0) {
                historyIndex--;
            }
            tsh.input = commandHistory[historyIndex];
            renderInput();
        }
    } else if (event.which == 40) { // Flecha abajo
        event.preventDefault();
        if (commandHistory.length > 0) {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                tsh.input = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                tsh.input = '';
            }
            renderInput();
        }
    } else if (event.ctrlKey && (event.which == 67 || event.which == 99)) { // Ctrl+C
        event.preventDefault();
        if (pwMode) {
            addToHistory($('#line').text() + '^C');
            addToHistory("Password input cancelled.");
            pwMode = false;
        } else {
            addToHistory($('#line').text() + '^C');
        }
        tsh.input = '';
        renderInput();
        return false;
    }
});

$(document).on('keypress', function(event) {
    const keyCode = event.keyCode || event.which;
    if (keyCode == 13) { // Enter
        event.preventDefault();
        const input = tsh.input.trim();
        
        if (pwMode) {
            addToHistory($('#line').text());
            if (input === password) {
                if (isRoot) {
                    showSecretContent();
                } else {
                    addToHistory("Password correct but you're not root!");
                    addToHistory("Use 'sudo -s' to become root first.");
                }
            } else {
                addToHistory('Wrong password. Try again or press Ctrl+C to cancel. Hint: View Inspect (F12)');
            }
            tsh.input = '';
            pwMode = false;
            renderInput();
            return;
        }
        
        if (input === 'clear') {
            $('#history').empty();
            showMOTD();
            tsh.input = '';
            renderInput();
            return;
        }
        
        addToHistory($('#line').text());
        if (input != '') {
            tsh.lastInput = input;
            commandHistory.push(input);
            historyIndex = commandHistory.length;
        }
        
        let output = '';
        
        if (input === 'red button') {
            output = `<span style="color:red;font-weight:bold">
            ██████╗ ███████╗██████╗     ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗
            ██╔══██╗██╔════╝██╔══██╗    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║
            ██████╔╝█████╗  ██║  ██║    ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║
            ██╔══██╗██╔══╝  ██║  ██║    ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║
            ██║  ██║███████╗██████╔╝    ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║
            ╚═╝  ╚═╝╚══════╝╚═════╝     ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
            </span><br><br>
            [WARNING] This will execute external code. Continue? (type 'confirm red button' to proceed)`;
        } else if (input === 'confirm red button') {
            addToHistory("Initializing BAZAAR protocol...");
            if (!isRoot) {
                addToHistory("<span style='color:red'>ACCESS DENIED: Root privileges required</span>");
            } else {
                showBazaarDialog();
            }
        } else {
            switch (input.split(' ')[0]) {
                case 'pwd':
                    output = tsh.CWD ? tsh.CWD : '/';
                    break;
                    
                case 'su':
                    if (input.split(' ')[1]) {
                        output = changeUser(input.split(' ')[1]);
                    } else {
                        output = 'su: missing username';
                    }
                    break;
                    
                case 'sudo':
                    if (input === 'sudo -s') {
                        if (currentUser === 'nowi') {
                            isRoot = true;
                            tsh.DEFAULT_PROMPT = getPrompt();
                            $('#prompt').text(tsh.DEFAULT_PROMPT);
                            output = 'Switched to root';
                        } else {
                            output = 'sudo: only user "nowi" can become root';
                        }
                    } else {
                        output = 'sudo: you need to specify a command to run as root';
                    }
                    break;
                    
                case 'whoami':
                    output = currentUser;
                    break;
                    
                case 'help':
                    output = `Hi! Welcome to NoWi Terminal<br><br>
                        <b>Basic Commands:</b><br>
                        <b>cd</b> [dir] - Change directory<br>
                        <b>clear</b> - Clear screen and show MOTD<br>
                        <b>pwd</b> - Current directory<br>
                        <b>ls</b> [-l] - List files<br>
                        <b>cat</b> [file] - Show file<br>
                        <b>wget</b> [file] - Download file<br>
                        <b>curl</b> [file] - Download file<br>
                        <b>su</b> [user] - Switch user<br>
                        <b>sudo</b> -s - Become root (admin)<br>
                        <b>whoami</b> - Show current user<br>
                        <b>help</b> - This help<br>
                        <b>secret</b> - Unlock secret mode (root only)<br>
                        <b style="color:red">red button</b> - [DANGER] Don't try this folks<br>
                        <br>
                        <b>Press tab for autocomplete</b>`;
                    break;
                    
                case 'ls':
                    const lsParams = input.split(' ');
                    const longFormat = lsParams.includes('-l') || lsParams.includes('-alh') || lsParams.includes('-lh');
                    const lsDir = lsParams.length > 1 && !lsParams[1].startsWith('-') ? lsParams[lsParams.length - 1] : '';
                    output = listFiles(longFormat, lsDir);
                    break;
                    
                case 'cd':
                    const cdDir = input.split(' ')[1] || '';
                    const cdError = processCd(cdDir);
                    if (cdError) output = cdError;
                    tsh.DEFAULT_PROMPT = getPrompt();
                    $('#prompt').text(tsh.DEFAULT_PROMPT);
                    break;
                    
                case 'wget':
                case 'curl':
                    const fileToDownload = input.split(' ')[1];
                    if (!fileToDownload) {
                        if (input.startsWith('wget')) {
                            output = `wget: missing URL<br>
                                Usage: wget [URL]...<br>
                                <br>
                                Try 'wget --help' for more options.`;
                        } else {
                            output = `curl: try 'curl --help' or 'curl --manual' for more information`;
                        }
                    } else if (fileToDownload === '--help') {
                        if (input.startsWith('wget')) {
                            output = `GNU Wget 1.21.2, a non-interactive network retriever.<br>
                                Usage: wget [URL]...<br>
                                <br>
                                Just specify the file you want to download. No fancy options here.`;
                        } else {
                            output = `curl: try just downloading the file you need. No fancy options here.`;
                        }
                    } else {
                        let fileFound = false;
                        let fileUrl = '';
                        
                        if (tsh.files[''].content[fileToDownload]) {
                            fileFound = true;
                            fileUrl = tsh.files[''].content[fileToDownload].content;
                        }
                        
                        if (tsh.files['posts'].content[fileToDownload]) {
                            fileFound = true;
                            fileUrl = tsh.files['posts'].content[fileToDownload].content;
                        }
                        
                        if (tsh.files['programs'].content[fileToDownload]) {
                            fileFound = true;
                            fileUrl = tsh.files['programs'].content[fileToDownload].content;
                        }
                        
                        if (fileFound) {
                            output = `Downloading ${fileToDownload}...`;
                            setTimeout(() => {
                                window.location.href = fileUrl;
                            }, 1000);
                        } else if (fileToDownload === '*') {
                            output = `No wildcard downloads. Seriously, you only need 1 parameter and it's a file<br><img src='https://i.imgur.com/mmmkay.gif'>`;
                        } else {
                            output = `${fileToDownload}: File not found`;
                        }
                    }
                    break;
                    
                case 'cat':
                    const fileToShow = input.split(' ')[1];
                    if (!fileToShow) {
                        output = 'cat: missing file argument';
                    } else if (fileToShow === 'upnp-faq.txt') {
                        $.ajax({
                            url: 'https://toor.do/upnp.html',
                            type: 'get',
                            async: false,
                            success: function(html) {
                                addToHistory(html);
                            }
                        });
                    } else {
                        let fileFound = false;
                        let fileUrl = '';
                        
                        if (tsh.files[''].content[fileToShow]) {
                            fileFound = true;
                            fileUrl = tsh.files[''].content[fileToShow].content;
                        }
                        
                        if (tsh.files['posts'].content[fileToShow]) {
                            fileFound = true;
                            fileUrl = tsh.files['posts'].content[fileToShow].content;
                        }
                        
                        if (tsh.files['programs'].content[fileToShow]) {
                            fileFound = true;
                            fileUrl = tsh.files['programs'].content[fileToShow].content;
                        }
                        
                        if (fileFound) {
                            if (fileToShow.endsWith('.tar.gz') || fileToShow.endsWith('.ppt') || fileToShow.endsWith('.pdf') || fileToShow.endsWith('.rb')) {
                                output = `Displaying binary file... redirecting to download`;
                                setTimeout(() => {
                                    window.location.href = fileUrl;
                                }, 1000);
                            } else {
                                $.ajax({
                                    url: fileUrl,
                                    type: 'get',
                                    async: false,
                                    success: function(content) {
                                        addToHistory(content);
                                    }
                                });
                            }
                        } else {
                            output = `cat: ${fileToShow}: No such file`;
                        }
                    }
                    break;
                    
                case 'secret':
                    pwMode = true;
                    addToHistory("Enter secret password: (input will be hidden, Ctrl+C to cancel)");
                    tsh.input = '';
                    renderInput();
                    break;
                    
                default:
                    if (dangerousCmds.includes(input.split(' ')[0])) {
                        output = `<pre style="font-family: monospace; color: #00ff00; background-color: #000; padding: 10px; border: 1px solid #ff00ff; max-width: 100%; overflow-x: auto;">
                          .-^-.
                        .'=^=^='.
                      /=^=^=^=^=\\ 
                     :^=^=^=^=^=^: 
                     |^=^=^=^=^=^| 
                     |^=^=/_\=^=^| 
                     :^=^=|*|=^=^: 
                      \\=^=^=^=^=/ 
                       '.=^=^=.' 
                         \`~~~\` 
                   
       ░█▀▀░█░░░█▀█░█▀▀░▀█▀░█▀▀░█▀▀  ░█▀▀░█▀█░█▀▄░█▀▀
       ░█▀▀░█░░░█▀█░▀▀█░░█░░█▀▀░▀▀█  ░█▀▀░█▀█░█▀▄░▀▀█
       ░▀░░░▀▀▀░▀░▀░▀▀▀░░▀░░▀▀▀░▀▀▀  ░▀▀▀░▀░▀░▀░▀░▀▀▀
       
       ERROR: 0x7F4E1D | CORRUPTION DETECTED | SYSTEM FAILURE
       [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 87%
       
       >_ REBOOTING... 
       >_ INITIALIZING STELLAR_DRIVE... 
       >_ WARNING: UNKNOWN ENTITY ON BOARD 
       
       ║▌║█║▌│║▌║▌█║▌│║▌║▌█║▌│║▌║▌█║▌│║▌║▌█║▌│║▌║▌█║▌│
       ▓▒░ GLITCH PROTOCOL ░▒▓▒░ ACTIVATED ░▒▓▒░ ERROR ░▒▓
       
       ╔════════════════════════════════════════════════╗
       ║ *$#@! SYSTEM COMPROMISED: [STARSHIP_AI.EXE]    ║
       ║ >> RUNNING DIAGNOSTICS...                      ║
       ║ >> MALWARE SIGNATURE: [VOID-CORRUPTOR v9.4.2]  ║
       ║ >> Wake UP, Neo, the Matrix has you..........  ║
       ╚════════════════════════════════════════════════╝
       
       ░░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░
       ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░
       ░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░
       ░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░
       ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒
       ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
       ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
       ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒
       ░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░
       ░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░
       ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░
       ░░░░░░▒▒▒▒▓▓▓▓▓▓▒▒▒▒░░░░░
       
       [SYSTEM SHUTDOWN IN 10...9...8...]
    </pre>`;
                    } else {
                        output = `${input.split(' ')[0]}: command not found`;
                    }
                    break;
            }
        }
        
        if (output) addToHistory(output);
        tsh.input = '';
        renderInput();
        scrollToBottom();
    } else {
        event.preventDefault();
        tsh.input = tsh.input + String.fromCharCode(keyCode);
        renderInput();
    }
});

function processCd(dir) {
    if (!dir || dir === '~' || dir === '/') {
        tsh.CWD = '';
        return;
    }

    if (dir === '..') {
        tsh.CWD = '';
        return;
    }

    const targetDir = dir.startsWith('/') ? dir.slice(1) : dir;
    if (tsh.files[targetDir]) {
        tsh.CWD = `/${targetDir}`;
    } else {
        return `cd: ${dir}: No such directory`;
    }
}

$('input').focus(function() {
    $('#cursor').addClass('blink');
}).blur(function() {
    $('#cursor').removeClass('blink');
});

$(document).on('click touchstart', function() {
    $('input').focus();
});
