document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    body.style.display = 'flex';
    body.style.flexDirection = 'column'; 
    body.style.height = '100vh';
    body.style.margin = '0';
    body.style.backgroundColor = 'lightgray';
    body.style.fontFamily = 'Arial, sans-serif';

    const textContainer = document.createElement('div');
    textContainer.id = 'text';
    textContainer.style.flex = '1'; 
    textContainer.style.display = 'flex';
    textContainer.style.justifyContent = 'center';
    textContainer.style.alignItems = 'center';
    textContainer.style.fontSize = '120px';
    textContainer.style.textAlign = 'center';

    const text = 'ARIANA SPRETZ\'S JAVASCRIPT PROJECTS: LIVE VIEW';
    const textElement = document.createElement('span');

    textContainer.appendChild(textElement);
    document.body.appendChild(textContainer);

    function getRandomColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    function animateBackground() {
        const backgroundColor = getRandomColor();
        textElement.style.transition = 'background-color 0.5s';
        textElement.style.backgroundColor = backgroundColor;
        setTimeout(() => {
            textElement.style.transition = 'none';
            animateText();
        }, 2000);
    }

    function animateText() {
        let coloredText = '';
        for (let i = 0; i < text.length; i++) {
            coloredText += `<span style="color: ${getRandomColor()}">${text[i]}</span>`;
        }
        textElement.innerHTML = coloredText;
        animateBackground();
    }

    animateText();

    const footer = document.createElement('p');
    footer.textContent = 'Created by Ariana Spretz';
    footer.style.color = 'magenta';
    footer.style.textAlign = 'center';
    footer.style.fontWeight = 'bold';
    footer.style.marginTop = '20px';
    footer.style.paddingBottom = '20px';
    document.body.appendChild(footer);
});
