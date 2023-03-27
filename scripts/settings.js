var mode = localStorage.getItem('mode') || 'dark';

setMode(mode);

function toggleDarkMode() { 
    mode = mode === 'light' ? 'dark' : 'light';

    localStorage.setItem('mode', mode);

    setMode(mode);
}

function setMode(mode) { 
    var body = document.body;
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(mode + '-mode');
}