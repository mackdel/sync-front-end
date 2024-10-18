// scripts.js

function nextStep(step) {
    let steps = document.getElementsByClassName('form-step');
    
    // Hide all steps
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none';
    }

    // Show the selected step
    document.getElementById('step-' + step).style.display = 'block';

    // Optional: Calculate age if moving to the birthday step
    if (step === 2) {
        calculateAge();
    }
}

function prevStep(step) {
    let steps = document.getElementsByClassName('form-step');

    // Hide all steps
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none';
    }

    // Show the selected step
    document.getElementById('step-' + step).style.display = 'block';
}
