const generateAdviceBtn = document.querySelector(".generate-advice-btn");
const numberOfAdvice = document.querySelector(".number-of-advice");
const adviceText = document.querySelector(".advice-text");

async function getInfo() {
  try {
    generateAdviceBtn.disabled = true;
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    numberOfAdvice.textContent = data["slip"]["id"];
    adviceText.textContent = `"${data["slip"]["advice"]}"`;
  } catch (error) {
    adviceText.textContent = "Could not load advice. Try again!";
    console.log(error);
  } finally {
    setTimeout(() => {
      generateAdviceBtn.disabled = false;
    }, 2000);
  }
}
getInfo();

generateAdviceBtn.addEventListener("click", () => getInfo());
