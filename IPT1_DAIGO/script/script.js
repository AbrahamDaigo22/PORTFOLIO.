// script.js//
function printBiodata() {
    window.print();
}

function typeText(element, text, delay = 100, callback = null) {
    let index = 0;
    element.textContent = ""; 
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay);
        } else if (callback) {
            setTimeout(callback, 1000); 
        }
    }
    type();
}


function backspaceText(element, text, delay = 100, callback = null) {
    let index = text.length;
    function backspace() {
        if (index > 0) {
            element.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(backspace, delay);
        } else if (callback) {
            setTimeout(callback, 100);
        }
    }
    backspace();
}

function typeRotatingText(element, texts, typingSpeed = 550, backspacingSpeed = 150) {
    let currentIndex = 0;
    function rotate() {
        const text = texts[currentIndex];
        typeText(element, text, typingSpeed, () => {
            backspaceText(element, text, backspacingSpeed, () => {
                currentIndex = (currentIndex + 1) % texts.length; 
                rotate(); 
            });
        });
    }
    rotate();
}

const nameElement = document.getElementById("name-typing");
const highlightElement = document.getElementById("highlight-typing");

const highlightTexts = ["Web Development", "Configure Router", "Frontend Development", "Computer Network Architect"];

typeText(nameElement, "Abraham Daigo", 150);

typeRotatingText(highlightElement, highlightTexts, 150, 50);

