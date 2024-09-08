// Function to toggle the visibility of the skills section
const toggleSkills = () => {
    const skillsSection = document.getElementById('skills');
    const toggleButton = document.getElementById('toggleSkills');

    if (skillsSection && toggleButton) {
        const isVisible = skillsSection.style.display !== 'none';
        
        if (isVisible) {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        } else {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        }
    }
};

// Attach the event listener to the button
document.getElementById('toggleSkills')?.addEventListener('click', toggleSkills);

// Initialize the skills section to be visible
document.getElementById('skills')?.style.setProperty('display', 'block');
