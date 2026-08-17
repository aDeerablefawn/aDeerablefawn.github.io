const openBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('contactPopup');
const closeBtn = document.getElementById('closePopupBtn');

openBtn.onclick = function() {
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
