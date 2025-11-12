function isValidBrackets(str: string): boolean {
    const stack: string[] = [];
    const pairs: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of str) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else if ([')', ']', '}'].includes(char)) {
            const top = stack.pop();
            if (top !== pairs[char]) {
                return false;
            }
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

const inputRowBrackets = document.getElementById("rowBrackets") as HTMLInputElement;
const buttonCheckBrackets = document.getElementById("checkBrackets") as HTMLButtonElement;
const outputSecondResult = document.getElementById("secondResult") as HTMLOutputElement;

buttonCheckBrackets.addEventListener("click", (): void => {
    const value = inputRowBrackets.value.trim();
    const valid = isValidBrackets(value);
    outputSecondResult.textContent = valid ? "Да, строка валидна" : "Нет, строка невалидна";
});