// Initialize the chatbot
const sendBtn = document.getElementById('sendBtn');  // Get the Send button
const userInput = document.getElementById('userInput');  // Get the user input field
const messages = document.getElementById('messages');  // Get the messages container

// Event listener for the "Send" button click
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();  // Get the value from the input field
    console.log('Button clicked! User message:', userMessage);  // Log the message

    if (userMessage) {
        addMessage('User', userMessage);  // Display user message in the chat
        userInput.value = '';  // Clear the input field
        getBotResponse(userMessage);  // Get the bot's response
    } else {
        console.log('No message entered.');  // Log if the message is empty
    }
});

// Function to display messages (user or bot)
function addMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'User' ? 'user' : 'bot');
    messageDiv.innerText = `${sender}: ${message}`;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;  // Scroll to the latest message
}

// Function to get the bot's response
function getBotResponse(userMessage) {
    let botResponse = "I didn't understand that.";  // Default bot response

    // Simple keyword-based responses
    if (userMessage.toLowerCase().includes('hi')) {
        botResponse = "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes('name')) {
        botResponse = "I'm CareConnect, your smart assistant.";
    } else if (userMessage.toLowerCase().includes('how are you')) {
        botResponse = "I'm Happy, thanks for asking! How can I help you?";
    } else if (userMessage.toLowerCase().includes('help')) {
        botResponse = "Sure! I can assist you with various questions. Try asking me about our services or anything else!";
    }

    // Simulate a delay before showing the bot's response
    setTimeout(() => {
        addMessage('Bot', botResponse);
    }, 1000);  // Delay of 1 second before the bot responds
}

// Display an initial message from the bot when the page loads
window.onload = () => {
    addMessage('Bot', 'Hello! How can I assist you today?');
};
