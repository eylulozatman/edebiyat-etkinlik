let questionIndex = 0;
let correctCount = 0;
let currentWork;

function loadTestQuestion() {
    if (questionIndex >= 10) {
        document.getElementById("resultArea").innerText = `Sonuç: ${correctCount}/10`;
        return;
    }

    currentWork = works[Math.floor(Math.random() * works.length)];
    document.getElementById("work-display").innerText = "Eser: " + currentWork.work;
    document.getElementById("questionCounter").innerText = `Soru: ${questionIndex + 1}/10`;

    let authorDrop = document.getElementById("author-drop");
    let periodDrop = document.getElementById("period-drop");

    authorDrop.innerText = "Yazar";
    periodDrop.innerText = "Dönem";
    authorDrop.className = "drop-zone";
    periodDrop.className = "drop-zone";

    // Yazar seçenekleri (1 doğru + 3 yanlış)
    let shuffledAuthors = works.filter(w => w.author !== currentWork.author)
                               .sort(() => 0.5 - Math.random())
                               .slice(0, 3); // 3 yanlış al
    shuffledAuthors.push(currentWork); // Doğru ekle
    shuffledAuthors.sort(() => 0.5 - Math.random()); // Karıştır

    let authorContainer = document.getElementById("author-options");
    authorContainer.innerHTML = "";
    shuffledAuthors.forEach(author => {
        let card = document.createElement("div");
        card.classList.add("option-card");
        card.innerText = author.author;
        card.dataset.type = "author";
        card.draggable = true;
        card.addEventListener("dragstart", dragStart);
        authorContainer.appendChild(card);
    });

    // Dönem seçenekleri (Tüm dönemler her soruda gösterilecek)
    let periodContainer = document.getElementById("period-options");
    periodContainer.innerHTML = "";
    periods.forEach(period => {
        let card = document.createElement("div");
        card.classList.add("option-card");
        card.innerText = period;
        card.dataset.type = "period";
        card.draggable = true;
        card.addEventListener("dragstart", dragStart);
        periodContainer.appendChild(card);
    });

    let dropZones = document.querySelectorAll(".drop-zone");
    dropZones.forEach(zone => {
        zone.addEventListener("dragover", dragOver);
        zone.addEventListener("drop", drop);
    });
}

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.innerText);
    event.dataTransfer.setData("type", event.target.dataset.type);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let droppedText = event.dataTransfer.getData("text/plain");
    let droppedType = event.dataTransfer.getData("type");
    let targetType = event.target.dataset.type;

    if (event.target.classList.contains("correct") || event.target.classList.contains("wrong")) {
        return; // Eğer zaten cevap verildiyse değiştirme
    }

    if (droppedType === targetType) {
        event.target.innerText = droppedText;

        if (droppedType === "author") {
            if (droppedText === currentWork.author) {
                event.target.classList.add("correct");
            } else {
                event.target.classList.add("wrong");
            }
        }

        if (droppedType === "period") {
            if (droppedText === currentWork.period) {
                event.target.classList.add("correct");
            } else {
                event.target.classList.add("wrong");
            }
        }
    }

    if (document.getElementById("author-drop").innerText !== "Yazar" &&
        document.getElementById("period-drop").innerText !== "Dönem") {

        if (document.getElementById("author-drop").innerText === currentWork.author &&
            document.getElementById("period-drop").innerText === currentWork.period) {
            correctCount++;
        }

        setTimeout(() => {
            questionIndex++;
            loadTestQuestion();
        }, 1000);
    }
}

document.getElementById("backButton").addEventListener("click", () => window.location.href = "index.html");

loadTestQuestion();
