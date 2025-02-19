let currentMode = '';
let currentIndex = 0;
let score = 0;
const testSetSize = 10;

const works = [
    { period: "Tanzimat", author: "Namık Kemal", work: "İntibah" },
    { period: "Servet-i Fünun", author: "Tevfik Fikret", work: "Rübab-ı Şikeste" },
    { period: "Fecr-i Ati", author: "Ahmet Haşim", work: "Şiir Hakkında Bazı Mülahazalar" },
    { period: "Milli Edebiyat", author: "Ömer Seyfettin", work: "Kaşağı" },
    { period: "Cumhuriyet Dönemi", author: "Orhan Kemal", work: "Murtaza" }
];

let currentWork = {};

function startGame(mode) {
    currentMode = mode;
    document.getElementById('mode-selection').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    document.getElementById('game-mode-title').innerText = mode === 'test' ? 'Test Modu' : 'Sınırsız Mod';
    nextQuestion();
}

function nextQuestion() {
    if (currentMode === 'test' && currentIndex >= testSetSize) {
        document.getElementById('game-container').innerHTML = `<h2>Test Bitti! Skor: ${score}/${testSetSize}</h2>`;
        return;
    }
    
    currentWork = works[Math.floor(Math.random() * works.length)];
    document.getElementById('work-title').innerText = currentWork.work;
    document.getElementById('period').innerText = 'Dönem';
    document.getElementById('author').innerText = 'Yazar';
    document.getElementById('period').classList.remove('correct', 'wrong');
    document.getElementById('author').classList.remove('correct', 'wrong');
    loadAuthors();
}

function loadAuthors() {
    const authorContainer = document.getElementById('author-choices');
    authorContainer.innerHTML = '';
    let authors = [currentWork.author];
    while (authors.length < 4) {
        let randomAuthor = works[Math.floor(Math.random() * works.length)].author;
        if (!authors.includes(randomAuthor)) authors.push(randomAuthor);
    }
    authors.sort(() => Math.random() - 0.5);
    authors.forEach(author => {
        let div = document.createElement('div');
        div.className = 'choice';
        div.draggable = true;
        div.innerText = author;
        div.ondragstart = drag;
        authorContainer.appendChild(div);
    });
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.innerText);
}

function drop(event, element) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    element.innerText = data;
    
    if (element.id === 'period' && data === currentWork.period) {
        element.classList.add('correct');
    } else if (element.id === 'period') {
        element.classList.add('wrong');
    }
    
    if (element.id === 'author' && data === currentWork.author) {
        element.classList.add('correct');
    } else if (element.id === 'author') {
        element.classList.add('wrong');
    }
    
    if (currentMode === 'test' && document.getElementById('author').innerText !== 'Yazar' && document.getElementById('period').innerText !== 'Dönem') {
        if (document.getElementById('author').classList.contains('correct') && document.getElementById('period').classList.contains('correct')) {
            score++;
        }
        currentIndex++;
        setTimeout(nextQuestion, 1000);
    }
}
