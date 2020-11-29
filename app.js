var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputText = document.querySelector("#output-text");
btnTranslate.addEventListener("click",()=>{
    outputText.innerText = textInput.value;
});

