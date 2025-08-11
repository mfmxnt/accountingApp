document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const ctaButton = document.getElementById('cta-button');
    
    // Add click event listener
    ctaButton.addEventListener('click', function() {
        alert('Button clicked! You can add more functionality here.');
        
        // Example: Change button text
        this.textContent = 'Clicked!';
        
        // Example: Add a new element to the page
        const newElement = document.createElement('p');
        newElement.textContent = 'New content added with JavaScript!';
        document.querySelector('#hero').appendChild(newElement);
    });
    
    // You can add more JavaScript functionality here
});
