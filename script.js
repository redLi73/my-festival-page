function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// 混雑状況をランダムに変更する（デモ用）
function updateCrowdLevel() {
    let levels = ["空いている", "やや混雑", "満員"];
    let colors = ["green", "yellow", "red"];
    let randomIndex = Math.floor(Math.random() * 3);

    document.getElementById("crowd-status").textContent = levels[randomIndex];
    document.getElementById("crowd-fill").style.width = `${(randomIndex + 1) * 30}%`;
    document.getElementById("crowd-fill").style.background = colors[randomIndex];
}

setInterval(updateCrowdLevel, 5000);
