var _a, _b;
// Function to toggle the visibility of the skills section
var toggleSkills = function () {
    var skillsSection = document.getElementById('skills');
    var toggleButton = document.getElementById('toggleSkills');
    if (skillsSection && toggleButton) {
        var isVisible = skillsSection.style.display !== 'none';
        if (isVisible) {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
        else {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        }
    }
};
// Attach the event listener to the button
(_a = document.getElementById('toggleSkills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', toggleSkills);
// Initialize the skills section to be visible
(_b = document.getElementById('skills')) === null || _b === void 0 ? void 0 : _b.style.setProperty('display', 'block');
