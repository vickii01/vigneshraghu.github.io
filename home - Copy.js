document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.typed-text');
    const textToType = 'V I G N E S H  R A G H U';
    let currentText = '';
    let currentIndex = 0;

    function type() {
        currentText += textToType[currentIndex];
        textElement.textContent = currentText;
        currentIndex++;

        if (currentIndex < textToType.length) {
            setTimeout(type, 1); // Delay between typing each character
        }
    }

    type();
});