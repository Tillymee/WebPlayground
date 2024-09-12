// Zugriff auf die HTML-Elemente
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.getElementById('messageContainer');
const submitButton = document.getElementById('submitButton');

// Funktion zum Hinzufügen der Nachricht
submitButton.addEventListener('click', function() {
    // Erstellen eines neuen Nachrichten-Elements
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        const newMessage = document.createElement('div');
        newMessage.innerHTML = `<strong>${name}</strong>: ${message}`;
        messageContainer.appendChild(newMessage);

        // Nach dem Absenden Eingabefelder leeren
        nameInput.value = '';
        messageInput.value = '';
    } else {
        alert('Bitte fülle alle Felder aus.');
    }
});
