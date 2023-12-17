function showChoice(option) {
    var choices = document.querySelectorAll('.choice');
    console.log("hi")
    choices.forEach(function(choice) {
        choice.style.display = 'none';
    });

    var selectedChoice = document.querySelector('.' + option + ' .choice');
    if (selectedChoice) {
        selectedChoice.style.display = 'block';
    }
}

