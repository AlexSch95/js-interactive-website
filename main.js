console.log("Javascript Tutorial wird gestartet");

// Logging Funktion für Aktionen, die gleich auf der Seite gemacht werden
function logAction(action, details){
    console.log(`Aktion: ${action},`, details || '');
}

// Komponente 1: Counter
// Schritt 1: Initialisiere den CounterValue, der dann verändert wird
let counterValue = 0;

function incrementCounter() {
    // console.log("Counter wird erhöht");
    if (counterValue >= 100) {
        // hole dir das feedback Element über die ID
        const feedbackElement = document.getElementById('counter-feedback');
        // Setze die Warnung in Text Content ein
        feedbackElement.innerHTML = "<strong>Warnung: </strong>Counter hat sein Maximum erreicht";
        // Mache ein neuen Style da drauf für eine Warnung
        feedbackElement.style.color = '#D48C70';
        // Setze ein Timeout auf 3000 ms = 3 sekunden, danach ist alles wieder wie vorher
        setTimeout(() => {
            feedbackElement.textContent = "Feedback";
            feedbackElement.style.color = '#67595E';
        }, 3000)
        return;
    }
    counterValue = counterValue + 1;
    // console.log("Neuer Counter-Value ist", counterValue);
    // counterValue++;
    document.getElementById('counter-value').textContent = counterValue;
    logAction("Erhöhen-Button gedrückt", "Der Counter wird nun erhöht");
}

function decrementCounter(){
    // console.log("Counter wird verringert");
    // console.log("Neuer Counter-Value ist", counterValue);
    // Achtung: Feedback geben, dass Counter ab 0 negativ nicht verringert werden kann
    if (counterValue <= 0) {
        // hole dir das feedback Element über die ID
        const feedbackElement = document.getElementById('counter-feedback');
        // Setze die Warnung in Text Content ein
        feedbackElement.innerHTML = "<strong>Warnung: </strong>Negativer Counter nicht erlaubt";
        // Mache ein neuen Style da drauf für eine Warnung
        feedbackElement.style.color = '#D48C70';
        logAction("Warnung", "Der Counter ist bei 0 angekommen und kann nicht verringert werden");
        // Setze ein Timeout auf 3000 ms = 3 sekunden, danach ist alles wieder wie vorher
        setTimeout(() => {
            feedbackElement.textContent = "Feedback";
            feedbackElement.style.color = '#67595E';
        }, 3000)
        return;
    }
    // counterValue = counterValue - 1;
    counterValue -= 1;
    document.getElementById('counter-value').textContent = counterValue;
    // console.log("Counter wurde verringert");
    logAction("Verringern-Button gedrückt", "Der Counter wird nun verringert");
}

function resetCounter(){
    // console.log("Counter wird zurückgesetzt");
    if (counterValue === 0) {
        // hole dir das feedback Element über die ID
        const feedbackElement = document.getElementById('counter-feedback');
        // Setze die Warnung in Text Content ein
        feedbackElement.innerHTML = "<strong>Warnung: </strong>Counter ist bereits auf 0";
        // Mache ein neuen Style da drauf für eine Warnung
        feedbackElement.style.color = '#D48C70';
        logAction("Warnung", "Der Counter wurde bereits geresettet");
        // Setze ein Timeout auf 3000 ms = 3 sekunden, danach ist alles wieder wie vorher
        setTimeout(() => {
            feedbackElement.textContent = "Feedback";
            feedbackElement.style.color = '#67595E';
        }, 3000)
        return;
    }
    counterValue = 0;
    document.getElementById('counter-value').textContent = counterValue;
    logAction("Zurücksetzen-Button gedrückt", "Der Counter wird nun zurückgesetzt");
}

function multiplyCounter(){
    // console.log("Counter wird verzehnfacht");
    counterValue *= 10;
    if (counterValue >= 100) {
        counterValue = 100;
        document.getElementById('counter-value').textContent = counterValue;
        // hole dir das feedback Element über die ID
        const feedbackElement = document.getElementById('counter-feedback');
        // Setze die Warnung in Text Content ein
        feedbackElement.innerHTML = "<strong>Warnung: </strong>Counter hat sein Maximum (100) erreicht";
        // Mache ein neuen Style da drauf für eine Warnung
        feedbackElement.style.color = '#D48C70';
        logAction("Warnung", "Der Counter hat sein Maximum von 100 erreicht");
        // Setze ein Timeout auf 3000 ms = 3 sekunden, danach ist alles wieder wie vorher
        setTimeout(() => {
            feedbackElement.textContent = "Feedback";
            feedbackElement.style.color = '#67595E';
        }, 3000)
        return;
    }
    document.getElementById('counter-value').textContent = counterValue;
    logAction("Verzehnfachen-Button gedrückt", "Der Counter wird nun verzehnfacht");
}




// Komponente 2: Text verändern

let originalText = "Das ist ein Beispieltext";
let isBold = false;

function makeUppercase() {
    // Hier holen wir uns erstmal nur das Text-Element als HTML-Element aus unserem DOM
    const textElement = document.getElementById('demo-text');
    // Schreibe den Inhalt in Großbuchstaben
    textElement.textContent = textElement.textContent.toUpperCase();
    logAction("Text verändert", "Text in Großbuchstaben")
}

function makeLowercase() {
    // Hier holen wir uns erstmal nur das Text-Element als HTML-Element aus unserem DOM
    const textElement = document.getElementById('demo-text');
    // Schreibe den Inhalt in Kleinbuchstaben
    textElement.textContent = textElement.textContent.toLowerCase();
    logAction("Text verändert", "Text in Kleinbuchstaben")
}

function toggleBold() {
    const textElement = document.getElementById('demo-text');
    // if (isBold) {
    //     textElement.classList.remove('text-bold');
    //     isBold = false;
    // } else {
    //     textElement.classList.add('text-bold');
    //     isBold = true;
    // }
    textElement.classList.toggle('text-bold');
    logAction("Text verändert", "Text in fett")

}

function changeTextColor() {
    const colors = ['#F8D210','#FA26A0','#000000','#2FF3E0','#59981A','#A49393'];
    const textElement = document.getElementById('demo-text');
    const colorPickerCheckBox = document.getElementById('color-picker-active').checked;
    if (colorPickerCheckBox === true) {
        const colorPickerColor = document.getElementById("color-picker").value;
        console.log(colorPickerColor);
        textElement.style.color = colorPickerColor;
    } else {
        const randomIndex = Math.floor(Math.random() * colors.length)
        console.log("Zufälliger Index", randomIndex)
        const randomColor = colors[randomIndex]
        textElement.style.color = randomColor
    }
    // Wähle zufällige Farbe aus dem colors-Array

    logAction("Text verändert", "Text in anderer Farbe")

}


function resetText() {
    const textElement = document.getElementById('demo-text');
    textElement.textContent = originalText;
    textElement.className = '';
    textElement.style.color = '';
    // textElement.style.fontWeight = '';
    logAction("Text verändert", "Text wieder zurückgesetzt")

}

//array um den theme-kürzel quasi theme-light oderso in einen "schönen" Namen zu übersetzen
const availableThemes = {
    'theme-light': 'Helles Theme',
    'theme-dark': 'Dunkles Theme',
    'theme-blue': 'Blaues Theme',
    'theme-default': 'Standard Theme'
}

let currentTheme = 'Standard Theme';

// function applyTheme(theme) {
//     if (theme in availableThemes) {  //verhindert funktionsaufruf via console mit einem nicht existenten theme, SINNVOLL???
//         if (theme === 'theme-default') { //prüft ob der funktion theme-default übergeben wurde zum resetten
//             document.body.className = '';
//         } else {
//             document.body.className = `${theme}`; // setzt das theme das via funktionsaufruf übergeben wurde
//         }
//     } else {
//         console.log("Ungültiges Theme wurde übergeben")  // zb wenn funktion via console aufgerufen wird mit applyTheme("asdf")
//         return;
//     }

//     currentTheme = availableThemes[theme]; //ausgeschriebener Name des Themes aus dem objekt availableThemes laden
//     document.getElementById('current-theme').textContent = currentTheme; //textfeld anpassen
//     logAction('Theme gewechselt', currentTheme); //loggen 
// }

function applyTheme() {
    let theme = document.getElementById("themeselect").value;
    if (theme === 'theme-default') { //prüft ob der funktion theme-default übergeben wurde zum resetten
        document.body.className = '';
    } else {
        document.body.className = `${theme}`; // setzt das theme das via funktionsaufruf übergeben wurde
    }
    let themeName = document.getElementById("themeselect").options;
    currentTheme = themeName[themeName.selectedIndex].text; //laden des texts aus dem dropdownmenü
    document.getElementById('current-theme').textContent = currentTheme; //textfeld anpassen
    logAction('Theme gewechselt', currentTheme);
}

let currentDisplay = '0';
const allowedOperators = ['+', "-", "*", "/",]
let currentResult = '';

function updateDisplay(value){
    if (currentDisplay === '0') {
        currentDisplay = value;
    } else if (allowedOperators.includes(value.toString()) && allowedOperators.some(c => currentDisplay.includes(c))) {
        getResult();
        currentDisplay = currentResult.toString() + value.toString();
    } else if (currentResult != '' && allowedOperators.includes(value.toString())) {
        currentDisplay = currentResult.toString() + value.toString();
        currentResult = ''
        console.log("success")
    } else {
        currentDisplay = currentDisplay.toString() + value.toString();
    }
    document.getElementById('calc-input').textContent = currentDisplay;
    console.log(currentDisplay);
}

function clearDisplay(){
    currentDisplay = '0';
    currentResult = '';
    document.getElementById('calc-input').textContent = currentDisplay;
    document.getElementById("calc-result-number").textContent = currentResult.toString();
}

function removeLastInput() {
    if (currentDisplay.length > 1) {
        currentDisplay = currentDisplay.slice(0, -1);
    } else {
        currentDisplay = '0';
    }
    document.getElementById('calc-input').textContent = currentDisplay;
}

function getResult() {
    const match = currentDisplay.match(/^(-?\d+)([\+\-\*\/])(-?\d+)$/);
    const numberOne = parseInt(match[1], 10);
    const operator = match[2];
    const numberTwo = parseInt(match[3], 10);
    console.log(numberOne, numberTwo, operator);
    console.log(typeof numberOne);
    console.log(typeof numberTwo);
    console.log(typeof operator);

    switch (operator) {
        case "+":
            currentResult = numberOne + numberTwo;
            showResult();
            break;
        case "-":
            currentResult = numberOne - numberTwo;
            showResult();
            break;
        case "*":
            currentResult = numberOne * numberTwo;
            showResult();
            break;
        case "/":
            if (numberTwo === 0) {
                currentResult = "Teilen durch 0 nicht möglich";
                alert("Teilen durch 0 nicht möglich")
                showResult("");
                break;
            }
            currentResult = numberOne / numberTwo;
            showResult();
            break;
    }
}

function showResult() {
    document.getElementById('calc-result-number').textContent = currentResult.toString();
    logAction("Ergebnis ausgeben", currentResult);
}
