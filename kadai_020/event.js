const clickBtn = document.getElementById("btn");

clickBtn.addEventListener("click", () => {
    setTimeout (() => {
        const textBtn = document.getElementById("text");
        textBtn.textContent = "ボタンをクリックしました";
    }, 2000);    
})