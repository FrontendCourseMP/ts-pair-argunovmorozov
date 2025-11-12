document.getElementById("checkBrackets").addEventListener("click", () => {
    const input = document.getElementById("rowBrackets").value.trim();
    const output = document.getElementById("secondResult");
    output.textContent = isValidBrackets(input) ? "✅ Да, строка валидна" : "❌ Нет, строка невалидна";
});