
function showTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(tab).classList.add('active');
}

function saveJornada() {
    const input = document.getElementById('jornadaInput');
    if (!input.value) return;
    const list = JSON.parse(localStorage.getItem('jornada') || '[]');
    list.push(input.value);
    localStorage.setItem('jornada', JSON.stringify(list));
    input.value = '';
    load();
}

function saveMemoria() {
    const input = document.getElementById('memoriaInput');
    if (!input.value) return;
    const list = JSON.parse(localStorage.getItem('memorias') || '[]');
    list.push(input.value);
    localStorage.setItem('memorias', JSON.stringify(list));
    input.value = '';
    load();
}

function load() {
    const jornadaList = document.getElementById('jornadaList');
    const memoriaList = document.getElementById('memoriaList');

    jornadaList.innerHTML = '';
    memoriaList.innerHTML = '';

    JSON.parse(localStorage.getItem('jornada') || '[]').forEach(m => {
        const li = document.createElement('li');
        li.textContent = m;
        jornadaList.appendChild(li);
    });

    JSON.parse(localStorage.getItem('memorias') || '[]').forEach(m => {
        const li = document.createElement('li');
        li.textContent = m;
        memoriaList.appendChild(li);
    });
}

function activateDisappear() {
    document.getElementById('blackout').style.display = 'block';
}

function deactivateDisappear() {
    document.getElementById('blackout').style.display = 'none';
}

load();
