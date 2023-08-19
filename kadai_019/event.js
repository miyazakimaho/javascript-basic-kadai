const clickBtn = document.getElementById("btn");

clickBtn.addEventListener("click", () => {
    const textBtn = document.getElementById("text");
    textBtn.textContent = "ボタンをクリックしました";
})