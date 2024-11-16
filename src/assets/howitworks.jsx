
// JavaScript to handle dynamic content updates and blinking animation
document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', () => {
        // Get data attributes from clicked step
        const title = step.getAttribute('data-title');
        const description = step.getAttribute('data-description');
        const stepId = step.getAttribute('data-step');

        // Update the content section
        const contentDiv = document.getElementById('stepContent');
        contentDiv.innerHTML = `<h2>${title}</h2><p>${description}</p>`;

        // Remove the 'blink' class from all steps
        document.querySelectorAll('.step img').forEach(img => {
            img.classList.remove('blink', 'move');
        });

        // Add 'blink' and 'move' animation to the clicked step
        const currentStepImage = document.getElementById(`step${stepId}`);
        currentStepImage.classList.add('blink', 'move');
    });
});
