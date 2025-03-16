function openWhatsapp(event) {
    event.preventDefault();
    const button = document.getElementById('form-button');
    button.textContent = 'Sending...';
    button.disabled = true;

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !message) {
        alert("Please, do not leave the fields blank.");
        button.textContent = 'Send message via whatsapp';    
        return;
    }

    const number = '5533991031898';
    
    const text = `Hi! My name is ${name.value}. ${message.value}`;
    const msgFormated = encodeURIComponent(text);
    
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${msgFormated}`;

    window.open(url, '_blank');

    button.textContent = 'Message sent';

    setTimeout(() => {
        button.textContent = 'Send message via whatsapp';
        button.disabled = false;
    }, 2000);    
    
}

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    function randomPosition() {
        const x = Math.random() * document.body.scrollWidth;
        const y = Math.random() * document.body.scrollHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
    }

    randomPosition();
    setInterval(randomPosition, 3000);
}

for (let i = 0; i < 100; i++) {
    createStar();
}