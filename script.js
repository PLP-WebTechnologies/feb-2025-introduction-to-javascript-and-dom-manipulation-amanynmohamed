// Changing the text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('text-content').textContent = 'The text has been changed!';
});

// Modifying CSS styles dynamically
document.getElementById('change-style-btn').addEventListener('click', function() {
    document.getElementById('style-paragraph').style.color = 'red';
    document.getElementById('style-paragraph').style.fontSize = '20px';
});

// Adding a new element to the page
document.getElementById('add-element-btn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added dynamically!';
    document.getElementById('new-elements-container').appendChild(newElement);
});