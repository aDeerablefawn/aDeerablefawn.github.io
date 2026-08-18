document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closePopupBtn');
    const popup = document.getElementById('contactPopup');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    }
});
const openBtn = document.getElementById('openPopupBtn');
const openBtn2 = document.getElementById('openPopupBtn2');
const popup = document.getElementById('contactPopup');
const closeBtn = document.getElementById('closePopupBtn');

openBtn.onclick = function() {
    popup.style.display = 'flex';
}
openBtn2.onclick = function() {
    popup.style.display = 'flex';
}

closeBtn.onclick = function() {
    popup.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}

// --- Formulier verzenden (popup sluiten na versturen) ---
document.getElementById('contactForm').onsubmit = function() {
    setTimeout(function() {
        popup.style.display = 'none';
    }, 500);
}
