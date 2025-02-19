let currentWork;

function loadNewWork() {
    currentWork = works[Math.floor(Math.random() * works.length)];
    document.getElementById("work-display").innerText = "Eser: " + currentWork.work;

    // Önceki işaretlemeleri temizle
    document.getElementById("author-options").innerHTML = "";
    document.getElementById("period-options").innerHTML = "";
    document.getElementById("author-drop").innerText = "Yazar";
    document.getElementById("period-drop").innerText = "Dönem";
    document.getElementById("author-drop").classList.remove("correct", "wrong");
    document.getElementById("period-drop").classList.remove("correct", "wrong");

    // **Yanlış seçenekler içinden 3 tane seç, doğru olanı ekle**
    let wrongAuthors = works.filter(work => work.author !== currentWork.author);
    let shuffledAuthors = wrongAuthors.sort(() => 0.5 - Math.random()).slice(0, 3);
    shuffledAuthors.push({ author: currentWork.author }); // Doğru cevabı ekle

    // Şıkları karıştır
    shuffledAuthors.sort(() => 0.5 - Math.random());

    // **Şıkları yerleştir**
    shuffledAuthors.forEach(author => {
        let authorCard = document.createElement("div");
        authorCard.classList.add("option-card");
        authorCard.innerText = author.author;
        authorCard.dataset.author = author.author;
        authorCard.dataset.type = "author";
        authorCard.draggable = true;
        document.getElementById("author-options").appendChild(authorCard);
    });

    periods.forEach(period => {
        let periodCard = document.createElement("div");
        periodCard.classList.add("option-card");
        periodCard.innerText = period;
        periodCard.dataset.period = period;
        periodCard.dataset.type = "period";
        periodCard.draggable = true;
        document.getElementById("period-options").appendChild(periodCard);
    });

    document.getElementById("nextButton").style.display = "none"; // Yeni soru yüklendiğinde "Sonraki" butonu gizlenir

    // Olay dinleyicilerini tekrar bağla (Yeni seçenekler yüklendiği için)
    addDragEvents();
}

// **Sürükleme Olaylarını Bağla**
function addDragEvents() {
    document.querySelectorAll(".option-card").forEach(card => {
        card.addEventListener("dragstart", event => {
            event.dataTransfer.setData("text", event.target.innerText);
            event.dataTransfer.setData("type", event.target.dataset.type);
        });
    });
}

// **Sürükleme Alanları**
document.querySelectorAll(".drop-zone").forEach(zone => {
    zone.addEventListener("dragover", event => event.preventDefault());

    zone.addEventListener("drop", event => {
        event.preventDefault();
        let droppedText = event.dataTransfer.getData("text");
        let droppedType = event.dataTransfer.getData("type");

        // **Kart tipini kontrol et**
        if ((zone.id === "author-drop" && droppedType !== "author") ||
            (zone.id === "period-drop" && droppedType !== "period")) {
            alert("Bu bölüme yanlış türde bir kart bırakamazsınız!");
            return;
        }

        zone.innerText = droppedText;
        zone.classList.remove("correct", "wrong"); // Önce tüm sınıfları temizle

        if ((zone.id === "author-drop" && droppedText === currentWork.author) ||
            (zone.id === "period-drop" && droppedText === currentWork.period)) {
            zone.classList.add("correct"); // Doğruysa yeşil yap
        } else {
            zone.classList.add("wrong"); // Yanlışsa kırmızı yap
            return; // Yanlış olduğunda çık
        }
        

        // Eğer her iki bölge de doğru doldurulduysa, "Sonraki" butonu görünsün
        if (document.getElementById("author-drop").classList.contains("correct") &&
            document.getElementById("period-drop").classList.contains("correct")) {
            document.getElementById("nextButton").style.display = "block";
        }
    });
});

// **Sonraki Soru Butonu**
document.getElementById("nextButton").addEventListener("click", () => {
    loadNewWork();
});

// **Ana menüye dönüş butonu**
document.getElementById("backButton").addEventListener("click", () => window.location.href = "index.html");

// **Sayfa açılınca ilk soru yüklensin**
loadNewWork();
